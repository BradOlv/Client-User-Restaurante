import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../store/cartStore";
import { CreditCard, Banknote, Smartphone, MapPin, Clock, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export const CheckoutView = () => {
    const navigate = useNavigate();
    const items = useCartStore((s) => s.items);
    const total = useCartStore((s) => s.getTotal());
    const clear = useCartStore((s) => s.clear);

    const [method, setMethod] = useState("delivery");
    const [payment, setPayment] = useState("card");
    const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });

    if (items.length === 0) {
        return (
            <div className="bg-kfc-cream min-h-screen flex items-center justify-center p-8">
                <div className="text-center">
                    <h2 className="font-display text-3xl">No hay productos en el carrito</h2>
                    <button
                        onClick={() => navigate("/portal/menu")}
                        className="mt-4 rounded-full bg-kfc-orange text-white font-bold uppercase tracking-wider px-6 py-3"
                    >
                        Ir al Menú
                    </button>
                </div>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.phone || (method === "delivery" && !form.address)) {
            toast.error("Completa todos los campos requeridos");
            return;
        }
        toast.success("¡Pedido realizado!");
        clear();
        navigate("/portal/confirmacion");
    };

    return (
        <div className="bg-kfc-cream min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-kfc-red">Casi listo</span>
                    <h1 className="font-display text-4xl md:text-6xl mt-2 leading-none">
                        Finalizar <span className="text-kfc-orange">pedido</span>
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Método */}
                        <div className="bg-white rounded-3xl p-6 border-2 border-kfc-charcoal/5">
                            <h3 className="font-heading text-lg uppercase mb-4">Método de entrega</h3>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    { id: "delivery", label: "Delivery", icon: MapPin, desc: "30 min" },
                                    { id: "pickup", label: "Recoger en sucursal", icon: Clock, desc: "15 min" },
                                ].map((m) => (
                                    <button
                                        key={m.id}
                                        type="button"
                                        onClick={() => setMethod(m.id)}
                                        className={`p-4 rounded-2xl border-2 text-left transition-all ${
                                            method === m.id
                                                ? "border-kfc-orange bg-kfc-orange-light"
                                                : "border-kfc-charcoal/10 hover:border-kfc-orange/40"
                                        }`}
                                    >
                                        <m.icon className="w-5 h-5 text-kfc-orange mb-2" />
                                        <p className="font-heading uppercase">{m.label}</p>
                                        <p className="text-xs text-kfc-charcoal/60">{m.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-3xl p-6 border-2 border-kfc-charcoal/5 space-y-4">
                            <h3 className="font-heading text-lg uppercase mb-2">Tus datos</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Nombre</label>
                                    <input
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="Tu nombre"
                                        className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Teléfono</label>
                                    <input
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        placeholder="+502 0000-0000"
                                        className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none"
                                    />
                                </div>
                            </div>
                            {method === "delivery" && (
                                <div>
                                    <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Dirección</label>
                                    <input
                                        value={form.address}
                                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                                        placeholder="Tu dirección completa"
                                        className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none"
                                    />
                                </div>
                            )}
                            <div>
                                <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Notas (opcional)</label>
                                <textarea
                                    value={form.notes}
                                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                                    placeholder="Sin cebolla, extra salsa, etc."
                                    rows={3}
                                    className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none resize-none"
                                />
                            </div>
                        </div>

                        {/* Pago */}
                        <div className="bg-white rounded-3xl p-6 border-2 border-kfc-charcoal/5">
                            <h3 className="font-heading text-lg uppercase mb-4">Método de pago</h3>
                            <div className="grid sm:grid-cols-3 gap-3">
                                {[
                                    { id: "card", label: "Tarjeta", icon: CreditCard },
                                    { id: "cash", label: "Efectivo", icon: Banknote },
                                    { id: "transfer", label: "Transferencia", icon: Smartphone },
                                ].map((p) => (
                                    <button
                                        key={p.id}
                                        type="button"
                                        onClick={() => setPayment(p.id)}
                                        className={`p-4 rounded-2xl border-2 text-center transition-all ${
                                            payment === p.id
                                                ? "border-kfc-orange bg-kfc-orange-light"
                                                : "border-kfc-charcoal/10 hover:border-kfc-orange/40"
                                        }`}
                                    >
                                        <p.icon className="w-5 h-5 text-kfc-orange mx-auto mb-2" />
                                        <p className="font-heading uppercase text-sm">{p.label}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="lg:sticky lg:top-24 self-start">
                        <div className="bg-kfc-charcoal text-white rounded-3xl p-7 grain-overlay relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-kfc-orange/30 blur-3xl" />
                            <div className="relative">
                                <h3 className="font-heading text-xl uppercase">Tu pedido</h3>
                                <div className="mt-4 space-y-2 text-sm max-h-60 overflow-y-auto scrollbar-hide">
                                    {items.map((i) => (
                                        <div key={i.id} className="flex justify-between text-white/80">
                                            <span className="truncate pr-2">{i.qty}x {i.name}</span>
                                            <span className="shrink-0">Q{(i.price * i.qty).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-white/10 mt-5 pt-5 space-y-2 text-sm">
                                    <div className="flex justify-between"><span className="text-white/60">Subtotal</span><span>Q{total.toFixed(2)}</span></div>
                                    <div className="flex justify-between"><span className="text-white/60">Delivery</span><span className="text-kfc-yellow">GRATIS</span></div>
                                    <div className="flex justify-between"><span className="text-white/60">IVA</span><span>Q{(total * 0.12).toFixed(2)}</span></div>
                                </div>
                                <div className="flex justify-between items-end mt-4 pt-4 border-t border-white/10">
                                    <span className="font-heading uppercase">Total</span>
                                    <span className="font-display text-3xl text-kfc-yellow">Q{(total * 1.12).toFixed(2)}</span>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full mt-6 rounded-full bg-kfc-red hover:bg-kfc-red-dark text-white font-bold uppercase tracking-wider py-4 transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    Confirmar pedido <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
