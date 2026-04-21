import { useState } from 'react';
import { XMarkIcon, MinusIcon, PlusIcon, HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';

export const ProductDetailModal = ({ product, isOpen, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedExtras, setSelectedExtras] = useState([]);

    if (!isOpen || !product) return null;

    const extras = [
        { id: 'extra-papas', label: 'Papas Extra', price: 15 },
        { id: 'extra-salsa', label: 'Salsas Extra', price: 0 },
        { id: 'extra-gaseosa', label: 'Gaseosa Extra', price: 12 }
    ];

    const handleQuantityChange = (change) => {
        setQuantity(Math.max(1, quantity + change));
    };

    const handleExtraToggle = (extra) => {
        setSelectedExtras(prev => 
            prev.find(e => e.id === extra.id) 
                ? prev.filter(e => e.id !== extra.id)
                : [...prev, extra]
        );
    };

    const handleAddToCart = () => {
        const cartItem = {
            ...product,
            quantity,
            extras: selectedExtras,
            totalPrice: (product.price + selectedExtras.reduce((sum, e) => sum + e.price, 0)) * quantity
        };
        onAddToCart(cartItem);
        onClose();
    };

    const totalPrice = (product.price + selectedExtras.reduce((sum, e) => sum + e.price, 0)) * quantity;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl">
                    <h2 className="text-2xl font-black text-[#7f1d1d]">Detalles del Producto</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Imagen */}
                    <div className="bg-[#fdfaf5] rounded-2xl p-8 h-64 flex items-center justify-center">
                        <img
                            src={product.img}
                            alt={product.name}
                            className="h-full w-auto object-contain"
                        />
                    </div>

                    {/* Nombre y Precio */}
                    <div>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="text-3xl font-black text-[#7f1d1d] mb-2">{product.name}</h3>
                                <p className="text-gray-600">SKU: #KFC-{product.id}</p>
                            </div>
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className="transition-transform hover:scale-110"
                            >
                                {isFavorite ? (
                                    <HeartIcon className="w-8 h-8 text-[#e11d48]" />
                                ) : (
                                    <HeartOutlineIcon className="w-8 h-8 text-gray-300 hover:text-[#e11d48]" />
                                )}
                            </button>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-[#e11d48]">Q{product.price.toFixed(2)}</span>
                            <span className="text-sm text-gray-500">por unidad</span>
                        </div>
                    </div>

                    {/* Descripción */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-2">Descripción</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Disfruta de nuestro delicioso {product.name}, preparado con ingredientes frescos de la más alta calidad. Perfecto para satisfacer tu antojo de pollo frito crujiente.
                        </p>
                    </div>

                    {/* Información Nutricional */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-3">Información Nutricional (por porción)</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-500 mb-1">Calorías</p>
                                <p className="text-xl font-bold text-[#7f1d1d]">450 kcal</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-500 mb-1">Proteína</p>
                                <p className="text-xl font-bold text-[#7f1d1d]">35g</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-500 mb-1">Grasas</p>
                                <p className="text-xl font-bold text-[#7f1d1d]">18g</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-xs text-gray-500 mb-1">Carbohidratos</p>
                                <p className="text-xl font-bold text-[#7f1d1d]">25g</p>
                            </div>
                        </div>
                    </div>

                    {/* Ingredientes */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-3">Ingredientes Principales</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Pollo Premium', 'Especias', 'Panko', 'Aceite Vegetal'].map((ing) => (
                                <span key={ing} className="px-3 py-1 bg-[#ffe6ed] text-[#e11d48] rounded-full text-sm font-semibold">
                                    {ing}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Alergenos */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                        <p className="text-sm text-yellow-900">
                            <span className="font-bold">⚠️ Alergenos:</span> Contiene gluten y puede contener trazas de frutos secos.
                        </p>
                    </div>

                    {/* Extras */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-3">Agregar Extras</h4>
                        <div className="space-y-2">
                            {extras.map((extra) => (
                                <label key={extra.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={selectedExtras.some(e => e.id === extra.id)}
                                        onChange={() => handleExtraToggle(extra)}
                                        className="w-5 h-5 accent-[#e11d48]"
                                    />
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800">{extra.label}</p>
                                    </div>
                                    {extra.price > 0 && (
                                        <span className="font-bold text-[#e11d48]">+Q{extra.price.toFixed(2)}</span>
                                    )}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Cantidad */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-3">Cantidad</h4>
                        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-2 w-fit">
                            <button
                                onClick={() => handleQuantityChange(-1)}
                                className="p-2 hover:bg-white rounded-lg transition-colors"
                            >
                                <MinusIcon className="w-5 h-5 text-gray-600" />
                            </button>
                            <span className="font-black text-lg w-8 text-center">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(1)}
                                className="p-2 hover:bg-white rounded-lg transition-colors"
                            >
                                <PlusIcon className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Resumen */}
                    <div className="bg-[#fdfaf5] rounded-2xl p-4 space-y-2 border border-gray-200">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Subtotal ({quantity} × Q{product.price.toFixed(2)})</span>
                            <span className="font-bold">Q{(product.price * quantity).toFixed(2)}</span>
                        </div>
                        {selectedExtras.length > 0 && (
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Extras</span>
                                <span className="font-bold">Q{selectedExtras.reduce((sum, e) => sum + e.price, 0).toFixed(2)}</span>
                            </div>
                        )}
                        <div className="border-t border-gray-300 pt-2 flex justify-between">
                            <span className="font-bold text-gray-800">Total</span>
                            <span className="text-2xl font-black text-[#e11d48]">Q{totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-3 rounded-b-3xl">
                    <button
                        onClick={onClose}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-xl transition-all"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg active:scale-95"
                    >
                        Añadir al Carrito - Q{totalPrice.toFixed(2)}
                    </button>
                </div>
            </div>
        </div>
    );
};
