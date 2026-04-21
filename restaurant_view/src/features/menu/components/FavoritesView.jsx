import { useNavigate } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useFavorites } from '../../shared/hooks/useFavorites';

export const FavoritesView = () => {
    const navigate = useNavigate();
    const { favorites, removeFavorite, toggleFavorite } = useFavorites();

    if (favorites.length === 0) {
        return (
            <div className="min-h-screen bg-[#fdfcf0] flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="text-8xl mb-6">🖤</div>
                    <h2 className="text-3xl font-black text-[#7f1d1d] mb-4">Aún no tienes Favoritos</h2>
                    <p className="text-gray-600 mb-6">Marca tus productos favoritos para acceder rápidamente a ellos.</p>
                    <button
                        onClick={() => navigate('/portal/menu')}
                        className="bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3 px-8 rounded-xl transition-all"
                    >
                        Explorar Menú
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fdfcf0] py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-8">
                    <h1 className="text-4xl font-black text-[#7f1d1d] mb-2">Mis Favoritos</h1>
                    <p className="text-gray-600">{favorites.length} producto{favorites.length !== 1 ? 's' : ''} guardado{favorites.length !== 1 ? 's' : ''}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
                    {favorites.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
                        >
                            {/* Imagen */}
                            <div className="relative h-48 bg-[#fdfaf5] flex items-center justify-center overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <button
                                    onClick={() => removeFavorite(item.id)}
                                    className="absolute top-3 right-3 bg-white hover:bg-red-50 p-2 rounded-full shadow-md transition-colors"
                                >
                                    <HeartIcon className="w-5 h-5 text-[#e11d48]" />
                                </button>
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{item.name}</h3>
                                
                                <div className="flex items-end justify-between mb-4">
                                    <span className="text-2xl font-black text-[#e11d48]">Q{item.price}</span>
                                </div>

                                {/* Botones */}
                                <div className="space-y-2">
                                    <button className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-2 rounded-lg transition-all active:scale-95 text-sm">
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
