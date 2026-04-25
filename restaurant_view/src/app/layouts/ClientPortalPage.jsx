import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    Star,
    Flame,
    Award,
    Clock,
    Truck,
    Drumstick,
    Users,
} from "lucide-react";
import {
    PRODUCTS,
    COMBOS,
    TESTIMONIALS,
    STATS,
    BRANCHES,
} from "../../shared/data/mockData";

export const ClientPortalPage = () => {
    const navigate = useNavigate();
    const featured = PRODUCTS.filter((p) => p.bestseller).slice(0, 4);

    return (
        <div className="overflow-hidden">
            {/* HERO */}
            <section className="relative min-h-[90vh] grain-overlay bg-kfc-cream">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-kfc-yellow rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-kfc-orange rounded-full blur-3xl opacity-30" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-kfc-red text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
                                <Flame className="w-4 h-4" /> #1 Pollo Frito en Guatemala
                            </div>
                            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-kfc-charcoal">
                                Pollo
                                <span className="text-kfc-orange"> Crujiente.</span>
                                <br />
                                Sabor que
                                <span className="text-kfc-red"> Adicta.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-kfc-charcoal/70 max-w-xl leading-relaxed">
                                15 años marinando con 11 hierbas y especias. Empanizado a mano. Frito al momento. Servido con orgullo chapín.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => navigate("/portal/menu")}
                                    className="rounded-full bg-kfc-red hover:bg-kfc-red-dark text-white font-bold uppercase tracking-wider px-8 py-4 text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 inline-flex items-center gap-2"
                                >
                                    Ordenar Ahora <ArrowRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => navigate("/portal/menu")}
                                    className="rounded-full border-2 border-kfc-charcoal text-kfc-charcoal hover:bg-kfc-charcoal hover:text-white font-bold uppercase tracking-wider px-8 py-4 text-base transition-colors"
                                >
                                    Ver Menú
                                </button>
                            </div>
                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex -space-x-3">
                                    {[12, 47, 33, 65].map((i) => (
                                        <img
                                            key={i}
                                            src={`https://i.pravatar.cc/80?img=${i}`}
                                            alt=""
                                            className="w-11 h-11 rounded-full border-3 border-kfc-cream"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex text-kfc-yellow">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-kfc-yellow" />
                                        ))}
                                    </div>
                                    <p className="text-sm font-bold text-kfc-charcoal">+85K clientes felices</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-square">
                                <div className="absolute inset-0 bg-kfc-orange rounded-full animate-spin-slow opacity-90" />
                                <img
                                    src="https://images.unsplash.com/photo-1579065497397-2824d41272ce?crop=entropy&cs=srgb&fm=jpg&w=900&q=85"
                                    alt="Pollo crujiente"
                                    className="absolute inset-0 w-full h-full object-cover rounded-full p-4 animate-float"
                                />
                                <div className="absolute -top-4 -right-4 bg-kfc-yellow text-kfc-charcoal font-display text-2xl rounded-full w-28 h-28 flex flex-col items-center justify-center rotate-12 shadow-2xl border-4 border-white">
                                    <span className="text-3xl leading-none">-25%</span>
                                    <span className="text-[10px] font-heading uppercase tracking-wider">Hoy</span>
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border-2 border-kfc-charcoal/10 max-w-[200px]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-kfc-red flex items-center justify-center">
                                            <Truck className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Delivery</p>
                                            <p className="text-xs text-kfc-charcoal/60">En 30 min o gratis</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marquee */}
                <div className="border-y-4 border-kfc-charcoal bg-kfc-yellow py-4 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...Array(2)].map((_, idx) => (
                            <div key={idx} className="flex items-center gap-12 pr-12">
                                {["CRUJIENTE", "JUGOSO", "HECHO CON AMOR", "RECETA SECRETA", "100% CALIDAD", "DELIVERY GRATIS"].map((w, i) => (
                                    <span key={i} className="font-display text-3xl text-kfc-charcoal flex items-center gap-12">
                                        {w} <Drumstick className="w-6 h-6" />
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-20 bg-kfc-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {STATS.map((s, i) => (
                            <div key={i} className="bg-white rounded-3xl p-6 border-2 border-kfc-charcoal/5 hover:-translate-y-1 transition-transform duration-300">
                                <Award className="w-8 h-8 text-kfc-orange mb-3" />
                                <div className="font-display text-5xl text-kfc-charcoal">{s.value}</div>
                                <div className="font-heading text-sm uppercase tracking-wider text-kfc-charcoal/60 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED MENU */}
            <section className="py-20 bg-kfc-cream-dark grain-overlay">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="font-heading text-sm uppercase tracking-[0.3em] text-kfc-red">Lo más pedido</span>
                            <h2 className="font-display text-5xl md:text-6xl mt-2 text-kfc-charcoal leading-none">
                                Sabores que <span className="text-kfc-orange">enloquecen</span>
                            </h2>
                        </div>
                        <button onClick={() => navigate("/portal/menu")} className="font-heading text-sm uppercase tracking-widest hover:text-kfc-orange flex items-center gap-2 self-start">
                            Ver todo el menú <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {featured.map((p, i) => (
                            <button
                                key={p.id}
                                onClick={() => navigate("/portal/menu")}
                                className={`group relative rounded-3xl overflow-hidden bg-white border-2 border-kfc-charcoal/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-left ${i === 0 ? "md:row-span-2 md:col-span-1" : ""}`}
                            >
                                <div className={`relative overflow-hidden ${i === 0 ? "aspect-square lg:aspect-[4/5]" : "aspect-square"}`}>
                                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    {p.spicy && (
                                        <span className="absolute top-3 left-3 bg-kfc-red text-white font-bold rounded-full px-3 py-1 text-xs flex items-center gap-1">
                                            <Flame className="w-3 h-3" /> Picante
                                        </span>
                                    )}
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-1 text-kfc-yellow text-sm">
                                        <Star className="w-4 h-4 fill-kfc-yellow" /> {p.rating}
                                    </div>
                                    <h3 className="font-heading text-lg uppercase mt-1">{p.name}</h3>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="font-display text-2xl text-kfc-orange">Q{p.price.toFixed(2)}</span>
                                        <span className="w-9 h-9 rounded-full bg-kfc-charcoal text-white flex items-center justify-center group-hover:bg-kfc-orange transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMBOS */}
            <section className="py-20 bg-kfc-charcoal text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-kfc-red rounded-full blur-3xl opacity-20" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="font-heading text-sm uppercase tracking-[0.3em] text-kfc-yellow">Ofertas Crispy</span>
                        <h2 className="font-display text-5xl md:text-7xl mt-2 leading-none">
                            Combos para <span className="text-kfc-yellow">compartir</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {COMBOS.slice(0, 3).map((c) => (
                            <div key={c.id} className="bg-white text-kfc-charcoal rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 group">
                                <div className="relative aspect-[5/3] overflow-hidden">
                                    <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-4 left-4 bg-kfc-red text-white font-bold rounded-full px-3 py-1.5 text-xs">{c.badge}</span>
                                    <div className="absolute top-4 right-4 bg-kfc-yellow text-kfc-charcoal font-display text-xl rounded-full w-16 h-16 flex items-center justify-center rotate-12">
                                        -{c.discount}%
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="font-heading text-xs uppercase tracking-widest text-kfc-orange">{c.tagline}</p>
                                    <h3 className="font-heading text-2xl uppercase mt-1">{c.name}</h3>
                                    <p className="text-sm text-kfc-charcoal/60 mt-1">{c.serves}</p>
                                    <div className="flex items-end gap-2 mt-4">
                                        <span className="font-display text-4xl text-kfc-red">Q{c.price.toFixed(0)}</span>
                                        <span className="text-kfc-charcoal/40 line-through mb-1">Q{c.originalPrice.toFixed(0)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button
                            onClick={() => navigate("/portal/cupones")}
                            className="rounded-full bg-kfc-yellow hover:bg-kfc-yellow-dark text-kfc-charcoal font-bold uppercase tracking-wider px-8 py-4 transition-colors"
                        >
                            Ver todos los combos
                        </button>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-kfc-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="font-heading text-sm uppercase tracking-[0.3em] text-kfc-red">Voces crujientes</span>
                        <h2 className="font-display text-5xl md:text-6xl mt-2 text-kfc-charcoal leading-none">
                            Lo que dicen <span className="text-kfc-orange">de nosotros</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.id} className="bg-white rounded-3xl p-7 border-2 border-kfc-charcoal/5 hover:-translate-y-1 transition-transform">
                                <div className="flex text-kfc-yellow mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-kfc-yellow" />
                                    ))}
                                </div>
                                <p className="text-kfc-charcoal/80 leading-relaxed text-lg">"{t.quote}"</p>
                                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-kfc-charcoal/10">
                                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-bold">{t.name}</p>
                                        <p className="text-sm text-kfc-charcoal/60">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BRANCHES */}
            <section className="py-20 bg-kfc-cream-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="font-heading text-sm uppercase tracking-[0.3em] text-kfc-orange">Visítanos</span>
                        <h2 className="font-display text-5xl md:text-6xl mt-2 text-kfc-charcoal leading-none">
                            Nuestras <span className="text-kfc-red">sucursales</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {BRANCHES.map((b) => (
                            <div key={b.id} className="bg-white rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform">
                                <img src={b.image} alt={b.name} className="aspect-video w-full object-cover" />
                                <div className="p-5">
                                    <h3 className="font-heading text-lg uppercase">{b.name}</h3>
                                    <p className="text-sm text-kfc-charcoal/60 mt-2">{b.address}</p>
                                    <div className="flex items-center gap-2 mt-3 text-sm">
                                        <Clock className="w-4 h-4 text-kfc-orange" /> {b.hours}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 bg-kfc-orange text-white relative overflow-hidden">
                <div className="absolute inset-0 grain-overlay opacity-50" />
                <div className="relative max-w-5xl mx-auto px-4 text-center">
                    <h2 className="font-display text-5xl md:text-7xl leading-none">
                        ¿Tienes hambre de algo <span className="text-kfc-yellow">crujiente</span>?
                    </h2>
                    <p className="text-xl mt-6 text-white/90 max-w-2xl mx-auto">
                        Reserva una mesa, ordena online o ven a probar el sabor que tiene a Guatemala enamorada.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <button
                            onClick={() => navigate("/portal/reservas")}
                            className="rounded-full bg-kfc-charcoal hover:bg-black text-white font-bold uppercase tracking-wider px-8 py-4 inline-flex items-center gap-2 transition-colors"
                        >
                            <Users className="w-4 h-4" /> Reservar Mesa
                        </button>
                        <button
                            onClick={() => navigate("/portal/menu")}
                            className="rounded-full bg-kfc-yellow hover:bg-kfc-yellow-dark text-kfc-charcoal font-bold uppercase tracking-wider px-8 py-4 transition-colors"
                        >
                            Ordenar Ahora
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
