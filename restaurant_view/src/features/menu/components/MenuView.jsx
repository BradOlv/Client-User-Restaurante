import { useState, useMemo } from "react";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { ProductDetailModal } from "./ProductDetailModal";
import BANQUETE_24_PIEZAS_PNG from "../../../assets/img/pollo.jpg";

export const MenuView = () => {
    const categories = [
        { id: 'fav', name: "Mis Favoritos" },
        { id: 'promo', name: "Verano Kinal" },
        { id: 'wings', name: "Camperitos, Alitas y Medallones" },
        { id: 'pollo', name: "Pollo Tradicional Kinal" },
        { id: 'pizza', name: "Pizza Kinal" },
        { id: 'salads', name: "Ensaladas, Sándwiches y más" },
        { id: 'tienda', name: "La Tienda de Pollito" }
    ];

    const [activeCategoryId, setActiveCategoryId] = useState('pollo');
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 300]);
    const [sortBy, setSortBy] = useState('relevancia');

    const menuItems = [
        { id: 1, name: "BANQUETE 24 PIEZAS", price: 155, categoryId: "pollo", img: BANQUETE_24_PIEZAS_PNG, rating: 4.8, reviews: 245 },
        { id: 2, name: "MEGA COMBO KINAL", price: 199, categoryId: "pollo", img: BANQUETE_24_PIEZAS_PNG, rating: 4.9, reviews: 312 },
        { id: 3, name: "MENÚ 2 PIEZAS", price: 55, categoryId: "pollo", img: BANQUETE_24_PIEZAS_PNG, rating: 4.7, reviews: 189 },
        { id: 4, name: "PIEZAS INDIVIDUALES", price: 18, categoryId: "pollo", img: BANQUETE_24_PIEZAS_PNG, rating: 4.6, reviews: 412 },
        { id: 5, name: "CAMARONES KINAL", price: 75, categoryId: "wings", img: BANQUETE_24_PIEZAS_PNG, rating: 4.8, reviews: 156 },
        { id: 6, name: "ENSALADA DE TEMPORADA", price: 45, categoryId: "salads", img: BANQUETE_24_PIEZAS_PNG, rating: 4.5, reviews: 98 },
        { id: 7, name: "PIZZA CLÁSICA", price: 85, categoryId: "pizza", img: BANQUETE_24_PIEZAS_PNG, rating: 4.7, reviews: 234 },
        { id: 8, name: "COMBO FAMILIAR", price: 280, categoryId: "pollo", img: BANQUETE_24_PIEZAS_PNG, rating: 4.9, reviews: 567 },
    ];

    // Filtrar y buscar
    const filteredItems = useMemo(() => {
        let filtered = menuItems
            .filter(item => item.categoryId === activeCategoryId)
            .filter(item => {
                const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
                return matchesSearch && matchesPrice;
            });

        // Ordenar
        if (sortBy === 'precio-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'precio-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'populares') {
            filtered.sort((a, b) => b.reviews - a.reviews);
        }

        return filtered;
    }, [activeCategoryId, searchQuery, priceRange, sortBy]);

    const activeCategoryName = categories.find(cat => cat.id === activeCategoryId)?.name;

    const handleAddToCart = (item) => {
        console.log('Añadido al carrito:', item);
        // Aquí irá la lógica de agregar al carrito
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-6 animate-fadeIn max-w-[1800px] mx-auto px-4 py-6">
                
                {/* SIDEBAR */}
                <aside className="lg:w-72 space-y-6">
                    {/* Buscador */}
                    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                        <div className="relative">
                            <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar en menú..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                            />
                        </div>
                    </div>

                    {/* Filtros */}
                    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="w-full flex items-center justify-between font-bold text-gray-800 mb-4"
                        >
                            <div className="flex items-center gap-2">
                                <FunnelIcon className="w-5 h-5" />
                                Filtros
                            </div>
                            <span className={`transition-transform ${showFilters ? 'rotate-180' : ''}`}>▼</span>
                        </button>

                        {showFilters && (
                            <div className="space-y-4 border-t pt-4">
                                {/* Rango de Precio */}
                                <div>
                                    <label className="text-sm font-bold text-gray-700 mb-2 block">
                                        Precio: Q{priceRange[0]} - Q{priceRange[1]}
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="300"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                        className="w-full accent-[#e11d48]"
                                    />
                                </div>

                                {/* Ordenar */}
                                <div>
                                    <label className="text-sm font-bold text-gray-700 mb-2 block">Ordenar por</label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#e11d48] text-sm"
                                    >
                                        <option value="relevancia">Relevancia</option>
                                        <option value="precio-asc">Precio: Menor a Mayor</option>
                                        <option value="precio-desc">Precio: Mayor a Menor</option>
                                        <option value="rating">Mejor Calificados</option>
                                        <option value="populares">Más Populares</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Categorías */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 space-y-2">
                        <h3 className="font-bold text-gray-800 mb-3">Categorías</h3>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategoryId(cat.id)}
                                className={`w-full flex items-center justify-between p-3 rounded-lg text-left text-sm transition-all ${
                                    activeCategoryId === cat.id 
                                    ? "bg-[#e11d48] text-white shadow-md" 
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                            >
                                <span className="font-semibold">{cat.name}</span>
                                {activeCategoryId === cat.id && <span>✓</span>}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* CONTENIDO PRINCIPAL */}
                <section className="flex-1">
                    {/* Encabezado */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-black text-[#7f1d1d] mb-2">{activeCategoryName}</h2>
                        <p className="text-gray-600">
                            {filteredItems.length} producto{filteredItems.length !== 1 ? 's' : ''} encontrado{filteredItems.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    {filteredItems.length === 0 ? (
                        <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                            <p className="text-gray-500 text-lg mb-4">No se encontraron productos</p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setPriceRange([0, 300]);
                                }}
                                className="bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-2 px-6 rounded-lg transition-all"
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-16">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer border border-gray-100"
                                >
                                    {/* Imagen */}
                                    <div className="relative h-48 bg-[#fdfaf5] flex items-center justify-center overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <button className="absolute top-3 right-3 bg-white hover:bg-red-50 p-2 rounded-full shadow-md transition-colors">
                                            <span className="text-xl">♡</span>
                                        </button>
                                        <div className="absolute top-3 left-3 bg-[#e11d48] text-white px-3 py-1 rounded-full text-xs font-bold">
                                            Oferta
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{item.name}</h3>
                                        
                                        {/* Rating */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className={`text-xs ${i < Math.floor(item.rating) ? '⭐' : '☆'}`}
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-500">({item.reviews})</span>
                                        </div>

                                        {/* Precio */}
                                        <div className="flex items-end justify-between mb-4">
                                            <div>
                                                <span className="text-2xl font-black text-[#e11d48]">Q{item.price}</span>
                                                <span className="text-xs text-gray-500 ml-2 line-through">Q{(item.price * 1.2).toFixed(0)}</span>
                                            </div>
                                        </div>

                                        {/* Botones */}
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => setSelectedProduct(item)}
                                                className="w-full bg-white hover:bg-gray-50 border-2 border-[#e11d48] text-[#e11d48] font-bold py-2 rounded-lg transition-all text-sm"
                                            >
                                                Ver Detalles
                                            </button>
                                            <button
                                                onClick={() => handleAddToCart(item)}
                                                className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-2 rounded-lg transition-all active:scale-95 text-sm"
                                            >
                                                Añadir
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            {/* Modal de Detalles */}
            <ProductDetailModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onAddToCart={handleAddToCart}
            />
        </>
    );
};