import { useNavigate } from "react-router-dom";
import { Package, ArrowRight, ShoppingBag } from "lucide-react";
import { RECENT_ORDERS } from "../../../shared/data/mockData";

export const OrderHistoryPage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-kfc-cream min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-kfc-red">Tu historial</span>
                    <h1 className="font-display text-4xl md:text-6xl mt-2 leading-none">
                        Mis <span className="text-kfc-orange">pedidos</span>
                    </h1>
                </div>

                {RECENT_ORDERS.length === 0 ? (
                    <div className="text-center bg-white rounded-3xl p-12 border-2 border-kfc-charcoal/5">
                        <ShoppingBag className="w-16 h-16 text-kfc-orange mx-auto mb-4" />
                        <h3 className="font-display text-3xl">Aún no tienes pedidos</h3>
                        <button
                            onClick={() => navigate("/portal/menu")}
                            className="mt-6 rounded-full bg-kfc-orange hover:bg-kfc-orange-dark text-white font-bold uppercase tracking-wider px-6 py-3 transition-colors"
                        >
                            Ordenar ahora
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {RECENT_ORDERS.map((o) => (
                            <button
                                key={o.id}
                                onClick={() => navigate(`/portal/pedido/${o.id}`)}
                                className="w-full bg-white rounded-3xl p-5 border-2 border-kfc-charcoal/5 hover:border-kfc-orange hover:-translate-y-1 transition-all text-left flex items-center gap-4"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-kfc-orange-light flex items-center justify-center shrink-0">
                                    <Package className="w-6 h-6 text-kfc-orange" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-heading text-sm uppercase tracking-wider">#{o.id}</p>
                                    <p className="text-xs text-kfc-charcoal/60 mt-0.5">{o.date} · {o.items} productos</p>
                                </div>
                                <div className="text-right shrink-0 flex items-center gap-3">
                                    <div>
                                        <p className="font-display text-2xl text-kfc-orange">Q{o.total.toFixed(2)}</p>
                                        <p className="text-[10px] uppercase font-bold text-green-700 bg-green-100 rounded-full px-2 py-0.5 mt-1 inline-block">{o.status}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-kfc-charcoal/40" />
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
