import { useNavigate } from "react-router-dom";
import { Check, Flame, Clock, Users, ArrowRight } from "lucide-react";
import { COMBOS } from "../../../shared/data/mockData";
import { useCartStore } from "../../../store/cartStore";
import toast from "react-hot-toast";

export const CouponView = () => {
    const navigate = useNavigate();
    const addItem = useCartStore((s) => s.addItem);

    const handleAdd = (c) => {
        addItem({ id: c.id, name: c.name, price: c.price, image: c.image });
        toast.success(`${c.name} añadido al carrito`);
    };

    return (
        <div className="bg-kfc-cream min-h-screen">
            {/* Hero */}
            <section className="relative py-16 bg-kfc-red text-white grain-overlay overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-kfc-yellow rounded-full blur-3xl opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 bg-kfc-yellow text-kfc-charcoal font-bold rounded-full px-4 py-1.5 mb-3 text-xs uppercase tracking-wide">
                        <Flame className="w-3 h-3" /> Ofertas limitadas
                    </span>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
                        Combos & <span className="text-kfc-yellow">Cupones</span>
                    </h1>
                    <p className="text-white/90 mt-4 max-w-2xl mx-auto text-lg">
                        Más sabor, mejor precio. Ofertas diseñadas para todos los antojos.
                    </p>
                </div>
            </section>

            {/* Countdown banner */}
            <section className="bg-kfc-yellow border-y-4 border-kfc-charcoal py-4">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 flex-wrap">
                    <Clock className="w-5 h-5 text-kfc-charcoal" />
                    <p className="font-heading text-sm uppercase tracking-widest">
                        Promo termina en:
                    </p>
                    <div className="flex gap-2">
                        {[
                            { v: "12", l: "hrs" },
                            { v: "47", l: "min" },
                            { v: "23", l: "seg" },
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="bg-kfc-charcoal text-kfc-yellow rounded-xl px-3 py-1 font-display text-xl flex flex-col items-center min-w-[60px]"
                            >
                                {t.v}
                                <span className="text-[10px] font-heading">{t.l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Combos Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {COMBOS.map((c, idx) => (
                        <div
                            key={c.id}
                            className={`group relative rounded-3xl overflow-hidden border-2 ${
                                idx % 2 === 0
                                    ? "border-kfc-orange"
                                    : "border-kfc-red"
                            } hover:-translate-y-2 transition-all duration-300 bg-white`}
                        >
                            <div className="grid md:grid-cols-2">
                                <div className="relative aspect-square md:aspect-auto overflow-hidden">
                                    <img
                                        src={c.image}
                                        alt={c.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span
                                        className={`absolute top-4 left-4 ${
                                            c.color === "red"
                                                ? "bg-kfc-red"
                                                : c.color === "yellow"
                                                ? "bg-kfc-yellow text-kfc-charcoal"
                                                : "bg-kfc-orange"
                                        } text-white font-bold rounded-full px-3 py-1.5 text-xs`}
                                    >
                                        {c.badge}
                                    </span>
                                    <div className="absolute bottom-4 right-4 bg-kfc-charcoal text-kfc-yellow font-display text-2xl rounded-full w-20 h-20 flex flex-col items-center justify-center rotate-12 shadow-2xl">
                                        -{c.discount}%
                                    </div>
                                </div>

                                <div className="p-7 flex flex-col">
                                    <p className="font-heading text-xs uppercase tracking-widest text-kfc-orange">
                                        {c.tagline}
                                    </p>
                                    <h3 className="font-heading text-2xl md:text-3xl uppercase mt-1">
                                        {c.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-2 text-sm text-kfc-charcoal/60">
                                        <Users className="w-4 h-4" /> {c.serves}
                                    </div>

                                    <ul className="mt-5 space-y-2 flex-1">
                                        {c.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-sm"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-kfc-orange-light flex items-center justify-center mt-0.5 shrink-0">
                                                    <Check className="w-3 h-3 text-kfc-orange" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-end gap-3 mt-6">
                                        <span className="font-display text-5xl text-kfc-red">
                                            Q{c.price.toFixed(0)}
                                        </span>
                                        <span className="text-kfc-charcoal/40 line-through pb-2">
                                            Q{c.originalPrice.toFixed(0)}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => handleAdd(c)}
                                        className="mt-5 w-full rounded-full bg-kfc-charcoal hover:bg-kfc-orange text-white font-bold uppercase tracking-wider py-4 transition-colors inline-flex items-center justify-center gap-2"
                                    >
                                        Pedir Combo <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
