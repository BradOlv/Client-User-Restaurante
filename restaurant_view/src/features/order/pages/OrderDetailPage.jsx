import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Package, MapPin, Clock, CreditCard, CheckCircle2 } from "lucide-react";
import { RECENT_ORDERS, PRODUCTS } from "../../../shared/data/mockData";

export const OrderDetailPage = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const order = RECENT_ORDERS.find((o) => o.id === orderId) || RECENT_ORDERS[0];
    const sampleItems = PRODUCTS.slice(0, 3).map((p, i) => ({ ...p, qty: i + 1 }));

    return (
        <div className="bg-kfc-cream min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate("/portal/pedidos")}
                    className="inline-flex items-center gap-2 text-kfc-charcoal/60 hover:text-kfc-orange text-sm font-bold uppercase tracking-wide mb-6"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver a mis pedidos
                </button>

                <div className="mb-8">
                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-kfc-red">Detalle</span>
                    <h1 className="font-display text-4xl md:text-5xl mt-2 leading-none">
                        Pedido <span className="text-kfc-orange">#{order.id}</span>
                    </h1>
                </div>

                {/* Status timeline */}
                <div className="bg-white rounded-3xl p-6 border-2 border-kfc-charcoal/5 mb-6">
                    <h3 className="font-heading text-lg uppercase mb-4">Estado del pedido</h3>
                    <div className="flex items-center gap-2">
                        {["Recibido", "En cocina", "En camino", "Entregado"].map((step, i) => (
                            <div key={step} className="flex-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-kfc-orange flex items-center justify-center text-white shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    {i < 3 && <div className="flex-1 h-1 bg-kfc-orange rounded-full" />}
                                </div>
                                <p className="text-xs font-bold mt-2 uppercase tracking-wide">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Items */}
                <div className="bg-white rounded-3xl p-6 border-2 border-kfc-charcoal/5 mb-6">
                    <h3 className="font-heading text-lg uppercase mb-4">Productos</h3>
                    <div className="space-y-3">
                        {sampleItems.map((it) => (
                            <div key={it.id} className="flex items-center gap-3 p-3 bg-kfc-cream-dark rounded-2xl">
                                <img src={it.image} alt={it.name} className="w-16 h-16 rounded-xl object-cover" />
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold truncate">{it.name}</p>
                                    <p className="text-sm text-kfc-charcoal/60">x{it.qty}</p>
                                </div>
                                <p className="font-heading text-kfc-orange">Q{(it.price * it.qty).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {[
                        { icon: MapPin, label: "Entrega", value: "Zona 10, Guatemala" },
                        { icon: Clock, label: "Tiempo", value: "30 min" },
                        { icon: CreditCard, label: "Pago", value: "Tarjeta" },
                    ].map((f) => (
                        <div key={f.label} className="bg-white rounded-2xl p-4 border-2 border-kfc-charcoal/5">
                            <f.icon className="w-5 h-5 text-kfc-orange mb-2" />
                            <p className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">{f.label}</p>
                            <p className="font-bold text-sm mt-1">{f.value}</p>
                        </div>
                    ))}
                </div>

                {/* Total */}
                <div className="bg-kfc-charcoal text-white rounded-3xl p-6 grain-overlay relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-kfc-orange/30 blur-3xl" />
                    <div className="relative flex justify-between items-end">
                        <span className="font-heading uppercase">Total pagado</span>
                        <span className="font-display text-4xl text-kfc-yellow">Q{order.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
