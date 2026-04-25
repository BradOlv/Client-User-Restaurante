import { useState } from "react";
import { Star, Send } from "lucide-react";
import toast from "react-hot-toast";
import { REVIEWS } from "../../../shared/data/mockData";

export const ReviewPage = () => {
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!comment) {
            toast.error("Escribe tu reseña");
            return;
        }
        toast.success("¡Gracias por tu reseña!");
        setComment("");
    };

    return (
        <div className="bg-kfc-cream min-h-screen">
            <section className="relative py-16 bg-kfc-yellow text-kfc-charcoal grain-overlay overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="font-heading text-sm uppercase tracking-[0.3em] text-kfc-red">Tu opinión cuenta</span>
                    <h1 className="font-display text-5xl md:text-7xl mt-3 leading-none">
                        Reseñas <span className="text-kfc-red">crujientes</span>
                    </h1>
                    <p className="text-kfc-charcoal/80 mt-4 max-w-2xl mx-auto">
                        Cuéntanos qué te pareció tu última visita o pedido. Tu feedback nos hace mejores.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Form */}
                <div className="bg-white rounded-3xl border-2 border-kfc-charcoal/5 p-6 md:p-8 mb-10">
                    <h3 className="font-heading text-xl uppercase mb-4">Escribe tu reseña</h3>
                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Tu calificación</label>
                            <div className="flex gap-1 mt-2">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <button
                                        key={n}
                                        type="button"
                                        onMouseEnter={() => setHover(n)}
                                        onMouseLeave={() => setHover(0)}
                                        onClick={() => setRating(n)}
                                        className="transition-transform hover:scale-110"
                                    >
                                        <Star
                                            className={`w-9 h-9 ${
                                                (hover || rating) >= n
                                                    ? "text-kfc-yellow fill-kfc-yellow"
                                                    : "text-kfc-charcoal/20"
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Tu comentario</label>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={4}
                                placeholder="Cuéntanos cómo estuvo tu experiencia..."
                                className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-full bg-kfc-orange hover:bg-kfc-orange-dark text-white font-bold uppercase tracking-wider px-6 py-3 transition-colors inline-flex items-center gap-2"
                        >
                            <Send className="w-4 h-4" /> Publicar reseña
                        </button>
                    </form>
                </div>

                {/* Reviews list */}
                <h3 className="font-heading text-xl uppercase mb-5">Lo que dicen otros clientes</h3>
                <div className="space-y-4">
                    {REVIEWS.map((r) => (
                        <div key={r.id} className="bg-white rounded-3xl p-6 border-2 border-kfc-charcoal/5">
                            <div className="flex items-start gap-4">
                                <img src={r.avatar} alt={r.user} className="w-14 h-14 rounded-full" />
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <p className="font-bold">{r.user}</p>
                                        <div className="flex text-kfc-yellow">
                                            {[...Array(r.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-kfc-yellow" />
                                            ))}
                                        </div>
                                        <span className="text-xs text-kfc-charcoal/50 ml-auto">{r.date}</span>
                                    </div>
                                    <p className="text-xs text-kfc-orange font-bold uppercase tracking-wide mt-1">{r.product}</p>
                                    <p className="text-kfc-charcoal/80 mt-3">{r.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
