import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Star, Flame } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../../../shared/data/mockData";
import { useCartStore } from "../../../store/cartStore";
import toast from "react-hot-toast";

export const CategoryView = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const addItem = useCartStore((s) => s.addItem);

    const cat = CATEGORIES.find((c) => c.id === categoryName);
    const products = PRODUCTS.filter((p) => p.category === categoryName);

    const handleAdd = (p) => {
        addItem(p);
        toast.success(`${p.name} añadido`);
    };

    if (!cat) {
        return (
            <div className="bg-kfc-cream min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="font-display text-4xl text-kfc-charcoal">Categoría no encontrada</h2>
                    <button
                        onClick={() => navigate("/portal/menu")}
                        className="mt-4 rounded-full bg-kfc-orange hover:bg-kfc-orange-dark text-white font-bold uppercase tracking-wider px-6 py-3"
                    >
                        Ver Menú
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-kfc-cream min-h-screen">
            <section className="relative py-16 bg-kfc-orange text-white grain-overlay overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => navigate("/portal/menu")}
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-bold uppercase tracking-wide mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" /> Volver al menú
                    </button>
                    <h1 className="font-display text-5xl md:text-7xl leading-none">
                        Categoría: <span className="text-kfc-yellow">{cat.name}</span>
                    </h1>
                    <p className="text-white/80 mt-4 max-w-xl">
                        {products.length} {products.length === 1 ? "producto" : "productos"} disponibles en esta categoría.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {products.length === 0 ? (
                    <p className="text-center text-kfc-charcoal/60 py-20">
                        No hay productos disponibles.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((p) => (
                            <div
                                key={p.id}
                                className="group bg-white rounded-3xl overflow-hidden border-2 border-kfc-charcoal/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative aspect-[5/4] overflow-hidden">
                                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    {p.spicy && (
                                        <span className="absolute top-3 left-3 bg-kfc-red text-white font-bold rounded-full px-3 py-1 text-xs flex items-center gap-1">
                                            <Flame className="w-3 h-3" /> Picante
                                        </span>
                                    )}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-1 text-kfc-yellow text-sm">
                                        <Star className="w-4 h-4 fill-kfc-yellow" /> <span className="font-bold text-kfc-charcoal">{p.rating}</span>
                                    </div>
                                    <h3 className="font-heading text-xl uppercase mt-2">{p.name}</h3>
                                    <p className="text-sm text-kfc-charcoal/60 mt-2 line-clamp-2">{p.description}</p>
                                    <div className="flex items-center justify-between mt-5">
                                        <span className="font-display text-3xl text-kfc-orange">Q{p.price.toFixed(2)}</span>
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
