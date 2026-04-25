import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../../store/cartStore";
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export const CartView = () => {
    const navigate = useNavigate();
    const items = useCartStore((s) => s.items);
    const updateQty = useCartStore((s) => s.updateQty);
    const removeItem = useCartStore((s) => s.removeItem);
    const clear = useCartStore((s) => s.clear);
    const total = useCartStore((s) => s.getTotal());

    if (items.length === 0) {
        return (
            <div className="bg-kfc-cream min-h-screen flex items-center justify-center px-4 py-20">
                <div className="text-center max-w-md">
                    <div className="w-32 h-32 rounded-full bg-kfc-orange-light flex items-center justify-center mx-auto mb-6">
                        <ShoppingBag className="w-16 h-16 text-kfc-orange" />
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-kfc-charcoal">
                        Tu carrito está <span className="text-kfc-orange">vacío</span>
                    </h2>
                    <p className="text-kfc-charcoal/60 mt-3">
                        Añade productos crujientes a tu pedido y los verás aquí.
                    </p>
                    <button
                        onClick={() => navigate("/portal/menu")}
                        className="mt-8 rounded-full bg-kfc-red hover:bg-kfc-red-dark text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors inline-flex items-center gap-2"
                    >
                        Ver Menú <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-kfc-cream min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-kfc-red">
                        Tu pedido
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl mt-2 leading-none">
                        Carrito <span className="text-kfc-orange">de compras</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Items */}
                    <div className="lg:col-span-2 space-y-3">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 bg-white rounded-3xl p-4 border-2 border-kfc-charcoal/5"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 rounded-2xl object-cover shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-heading text-lg uppercase">{item.name}</h3>
                                    <p className="font-display text-2xl text-kfc-orange mt-1">
                                        Q{item.price.toFixed(2)}
                                    </p>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-2 bg-kfc-cream-dark rounded-full px-1">
                                            <button
                                                onClick={() => updateQty(item.id, item.qty - 1)}
                                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="font-bold text-sm w-6 text-center">
                                                {item.qty}
                                            </span>
                                            <button
                                                onClick={() => updateQty(item.id, item.qty + 1)}
                                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => {
                                                removeItem(item.id);
                                                toast.success("Producto eliminado");
                                            }}
                                            className="text-kfc-red hover:text-kfc-red-dark"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-xs uppercase font-heading tracking-widest text-kfc-charcoal/50">
                                        Subtotal
                                    </p>
                                    <p className="font-heading text-xl text-kfc-charcoal">
                                        Q{(item.price * item.qty).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={() => {
                                clear();
                                toast.success("Carrito vaciado");
                            }}
                            className="text-sm text-kfc-charcoal/60 hover:text-kfc-red font-bold mt-4"
                        >
                            Vaciar carrito
                        </button>
                    </div>

                    {/* Summary */}
                    <div className="lg:sticky lg:top-24 self-start">
                        <div className="bg-kfc-charcoal text-white rounded-3xl p-7 grain-overlay relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-kfc-orange/30 blur-3xl" />
                            <div className="relative">
                                <h3 className="font-heading text-xl uppercase">Resumen</h3>
                                <div className="mt-5 space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Subtotal</span>
                                        <span className="font-bold">Q{total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Delivery</span>
                                        <span className="font-bold text-kfc-yellow">GRATIS</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">IVA (12%)</span>
                                        <span className="font-bold">Q{(total * 0.12).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="border-t border-white/10 mt-5 pt-5 flex justify-between items-end">
                                    <span className="font-heading text-lg uppercase">Total</span>
                                    <span className="font-display text-4xl text-kfc-yellow">
                                        Q{(total * 1.12).toFixed(2)}
                                    </span>
                                </div>
                                <button
                                    onClick={() => navigate("/portal/checkout")}
                                    className="w-full mt-6 rounded-full bg-kfc-orange hover:bg-kfc-orange-dark text-white font-bold uppercase tracking-wider py-4 transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    Continuar al checkout <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => navigate("/portal/menu")}
                                    className="w-full mt-2 text-sm text-white/60 hover:text-white font-bold"
                                >
                                    Seguir comprando
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
