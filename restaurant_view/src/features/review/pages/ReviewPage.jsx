import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

export const ReviewPage = () => {
    const [reviews] = useState([
        {
            id: 1,
            author: 'María González',
            rating: 5,
            date: '2026-04-20',
            title: '¡Excelente servicio y comida deliciosa!',
            text: 'La comida llegó en perfecto estado y muy caliente. El pollo estaba crujiente y jugoso. Definitivamente volveré a pedir.',
            verified: true,
            helpful: 24
        },
        {
            id: 2,
            author: 'Juan López',
            rating: 4,
            date: '2026-04-18',
            title: 'Muy buen sabor, entrega rápida',
            text: 'El pedido llegó más rápido de lo esperado. La pizza estaba muy buena aunque la bebida llegó un poco tibia.',
            verified: true,
            helpful: 15
        },
        {
            id: 3,
            author: 'Sofia Rodríguez',
            rating: 5,
            date: '2026-04-15',
            title: 'Mejor comida rápida de la ciudad',
            text: 'Siempre pido aquí. La calidad es consistente, el equipo es amable y los precios son justos. 100% recomendado.',
            verified: true,
            helpful: 32
        }
    ]);

    const [newReview, setNewReview] = useState({
        rating: 0,
        title: '',
        text: '',
        orderId: ''
    });

    const [showForm, setShowForm] = useState(false);

    const handleRatingClick = (rating) => {
        setNewReview(prev => ({ ...prev, rating }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reseña enviada:', newReview);
        setNewReview({ rating: 0, title: '', text: '', orderId: '' });
        setShowForm(false);
    };

    const renderStars = (rating, interactive = false) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={() => interactive && handleRatingClick(star)}
                        className={interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}
                        type={interactive ? 'button' : 'button'}
                    >
                        {star <= rating ? (
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                        ) : (
                            <StarOutlineIcon className="w-6 h-6 text-gray-300" />
                        )}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#fdfcf0] py-12">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-5xl font-black text-[#7f1d1d] mb-2 tracking-tight">Reseñas de Clientes</h1>
                    <p className="text-gray-600 text-lg">Lee experiencias reales de otros clientes</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Reseñas */}
                    <div className="lg:col-span-2 space-y-4">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-bold text-gray-800">{review.author}</h3>
                                            {review.verified && (
                                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-bold">✓ Verificado</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {renderStars(review.rating)}
                                            <p className="text-xs text-gray-500">{review.date}</p>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-800 mb-2">{review.title}</h4>
                                <p className="text-gray-600 mb-4 leading-relaxed">{review.text}</p>

                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <button className="hover:text-[#e11d48] transition-colors font-semibold">
                                        👍 Útil ({review.helpful})
                                    </button>
                                    <button className="hover:text-[#e11d48] transition-colors font-semibold">
                                        👎 No útil
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Calificación General */}
                        <div className="bg-gradient-to-br from-[#e11d48] to-[#be123c] text-white rounded-3xl p-8 shadow-lg">
                            <p className="text-sm opacity-90 mb-2">Calificación General</p>
                            <div className="text-5xl font-black mb-2">4.8</div>
                            <div className="flex gap-1 mb-4">
                                {renderStars(5)}
                            </div>
                            <p className="text-sm opacity-90">{reviews.length} reseñas verificadas</p>
                        </div>

                        {/* Botón Escribir Reseña */}
                        {!showForm && (
                            <button
                                onClick={() => setShowForm(true)}
                                className="w-full bg-white hover:bg-gray-50 text-[#e11d48] font-black py-4 rounded-2xl border-2 border-[#e11d48] transition-all text-lg"
                            >
                                Escribir Reseña
                            </button>
                        )}

                        {/* Formulario */}
                        {showForm && (
                            <div className="bg-white rounded-3xl p-6 border-2 border-[#e11d48] shadow-lg">
                                <h3 className="font-black text-[#7f1d1d] mb-4">Tu Reseña</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Seleccionar Pedido */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Pedido</label>
                                        <select
                                            value={newReview.orderId}
                                            onChange={(e) => setNewReview(prev => ({ ...prev, orderId: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                            required
                                        >
                                            <option value="">Selecciona un pedido...</option>
                                            <option value="001">Pedido #KFC-2026-001</option>
                                            <option value="002">Pedido #KFC-2026-002</option>
                                        </select>
                                    </div>

                                    {/* Calificación */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Calificación</label>
                                        {renderStars(newReview.rating, true)}
                                    </div>

                                    {/* Título */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Título</label>
                                        <input
                                            type="text"
                                            value={newReview.title}
                                            onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                                            placeholder="Resumen de tu experiencia"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                            required
                                        />
                                    </div>

                                    {/* Texto */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Tu Opinión</label>
                                        <textarea
                                            value={newReview.text}
                                            onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                                            placeholder="Cuéntanos tu experiencia..."
                                            rows="4"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                            required
                                        />
                                    </div>

                                    {/* Botones */}
                                    <div className="flex gap-2">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-2 rounded-xl transition-all"
                                        >
                                            Publicar
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded-xl transition-all"
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Info Adicional */}
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                            <p className="text-sm text-blue-900">
                                <span className="font-bold">💡 Tip:</span> Las reseñas ayudan a otros clientes a tomar mejores decisiones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
