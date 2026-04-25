import { useState, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Star, Flame, Plus, Search } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../../../shared/data/mockData";
import { useCartStore } from "../../../store/cartStore";
import toast from "react-hot-toast";

export const MenuView = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialSearch = searchParams.get("search") || "";
    const [search, setSearch] = useState(initialSearch);
    const [activeCat, setActiveCat] = useState("pollo");

    const addItem = useCartStore((s) => s.addItem);

    const filtered = useMemo(
        () =>
            PRODUCTS.filter(
                (p) =>
                    p.category === activeCat &&
                    p.name.toLowerCase().includes(search.toLowerCase())
            ),
        [activeCat, search]
    );

    const handleAdd = (p) => {
        addItem(p);
        toast.success(`${p.name} añadido al carrito`);
    };

    return (
        <div className="bg-kfc-cream min-h-screen">
            {/* Header */}
            <section className="relative py-16 bg-kfc-charcoal text-white grain-overlay overflow-hidden">
                <div className="absolute -top-24 right-10 w-72 h-72 bg-kfc-orange rounded-full blur-3xl opacity-40" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="font-heading text-sm uppercase tracking-[0.3em] text-kfc-yellow">
                        Sabor inigualable
                    </span>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-3 leading-none">
                        Nuestro <span className="text-kfc-orange">Menú</span>
                    </h1>
                    <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                        Pollo crujiente, combos perfectos y todo lo que necesitas para un festín memorable.
                    </p>

                    <div className="max-w-md mx-auto mt-8 relative">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-kfc-charcoal/40" />
                        <input
                            type="text"
                            placeholder="Buscar plato..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-14 pr-5 py-4 rounded-full bg-white text-kfc-charcoal placeholder-kfc-charcoal/40 focus:outline-none focus:ring-4 focus:ring-kfc-orange/50"
                        />
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {CATEGORIES.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setActiveCat(c.id)}
                            className={`rounded-full px-6 py-3 font-heading uppercase tracking-wider text-sm border-2 transition-all ${
                                activeCat === c.id
                                    ? "bg-kfc-orange text-white border-kfc-orange"
                                    : "bg-white border-kfc-charcoal/10 text-kfc-charcoal hover:border-kfc-orange/40"
                            }`}
                        >
                            {c.name}
                        </button>
                    ))}
                </div>

                {filtered.length === 0 ? (
                    <p className="text-center text-kfc-charcoal/60 py-20">
                        No hay productos en esta categoría.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((p) => (
                            <div
                                key={p.id}
                                className="group bg-white rounded-3xl overflow-hidden border-2 border-kfc-charcoal/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative aspect-[5/4] overflow-hidden">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                                        {p.bestseller && (
                                            <span className="bg-kfc-yellow text-kfc-charcoal font-bold rounded-full px-3 py-1 text-xs">
                                                ⭐ Bestseller
                                            </span>
                                        )}
                                        {p.spicy && (
                                            <span className="bg-kfc-red text-white font-bold rounded-full px-3 py-1 text-xs flex items-center gap-1">
                                                <Flame className="w-3 h-3" /> Picante
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-1 text-kfc-yellow text-sm">
                                        <Star className="w-4 h-4 fill-kfc-yellow" />{" "}
                                        <span className="font-bold text-kfc-charcoal">
                                            {p.rating}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-xl uppercase mt-2">
                                        {p.name}
                                    </h3>
                                    <p className="text-sm text-kfc-charcoal/60 mt-2 line-clamp-2">
                                        {p.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-5">
                                        <span className="font-display text-3xl text-kfc-orange">
                                            Q{p.price.toFixed(2)}
                                        </span>
                                        <button
                                            onClick={() => handleAdd(p)}
                                            className="rounded-full bg-kfc-charcoal hover:bg-kfc-orange text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 inline-flex items-center gap-1 transition-colors"
                                        >
                                            <Plus className="w-4 h-4" /> Añadir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};
