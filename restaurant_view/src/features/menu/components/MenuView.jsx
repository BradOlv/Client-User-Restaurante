import { useState } from "react";
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

    const menuItems = [
        { id: 1, name: "BANQUETE 24 PIEZAS", price: 155, categoryId: "pollo", img: BANQUETE_24_PIEZAS_PNG },
        { id: 2, name: "MEGA COMBO KINAL", price: 199, categoryId: "pollo", img: BANQUETE_24_PIEZAS_PNG },
        { id: 3, name: "MENÚ 2 PIEZAS", price: 55, categoryId: "pollo", img: BANQUETE_24_PIEZAS_PNG },
        { id: 4, name: "PIEZAS INDIVIDUALES", price: 18, categoryId: "pollo", img: BANQUETE_24_PIEZAS_PNG },
        { id: 5, name: "CAMARONES KINAL", price: 75, categoryId: "wings", img: BANQUETE_24_PIEZAS_PNG },
        { id: 6, name: "ENSALADA DE TEMPORADA", price: 45, categoryId: "salads", img: BANQUETE_24_PIEZAS_PNG },
    ];

    const activeCategoryName = categories.find(cat => cat.id === activeCategoryId)?.name;

    return (
        /* Cambiamos px-10 por pl-4 para pegar la barra a la izquierda y subimos el max-w */
        <div className="flex flex-col md:flex-row gap-8 animate-fadeIn max-w-[1600px] mx-auto pl-4 pr-10 py-6">
            
            {/* --- SIDEBAR: Ahora más pegada a la izquierda --- */}
            <aside className="w-full md:w-[310px] bg-white rounded-2xl shadow-lg shadow-gray-200/40 border border-gray-100 self-start p-5 sticky top-28">
                <div className="space-y-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategoryId(cat.id)}
                            className={`w-full flex items-center justify-between p-4 rounded-xl text-left text-[14px] transition-all duration-300 transform active:scale-95
                                ${activeCategoryId === cat.id 
                                ? "bg-[#fdfaf5] text-[#e11d48] shadow-sm border-l-[5px] border-[#e11d48] font-bold" 
                                : "bg-white text-gray-500 hover:bg-orange-50 hover:text-[#fb923c] font-semibold"
                            }`}
                        >
                            <span className="uppercase tracking-tight leading-tight">{cat.name}</span>
                            <span className={`text-xl ${activeCategoryId === cat.id ? 'opacity-100' : 'opacity-0'}`}>›</span>
                        </button>
                    ))}
                </div>
            </aside>

            {/* --- SECCIÓN PRINCIPAL: Grilla --- */}
            <section className="flex-1 space-y-8">
                
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 border border-orange-100/50 flex items-center gap-6 shadow-sm">
                    <button className="w-10 h-10 rounded-full border border-orange-100 text-[#fb923c] flex items-center justify-center font-bold text-xl hover:bg-[#fb923c] hover:text-white transition-all">‹</button>
                    <h2 className="text-xl font-black text-red-950 uppercase tracking-tighter">
                        {activeCategoryName}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-16">
                    {menuItems
                        .filter(item => item.categoryId === activeCategoryId)
                        .map((item) => (
                        <div 
                            key={item.id} 
                            className="bg-white rounded-[2rem] p-6 shadow-md shadow-gray-100 border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative flex flex-col h-full"
                        >
                            <button className="absolute top-6 right-6 text-gray-200 hover:text-[#e11d48] transition-colors text-2xl z-10">
                                ♡
                            </button>

                            <div className="h-44 mb-6 flex items-center justify-center relative">
                                <div className="absolute w-36 h-36 bg-[#fdfaf5] rounded-full scale-90 group-hover:scale-110 transition-transform duration-700 opacity-60"></div>
                                <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="z-10 w-40 h-40 object-contain group-hover:scale-105 transition-transform duration-500" 
                                />
                                <div className="absolute top-0 left-0 bg-white shadow-md px-4 py-1.5 rounded-xl border border-gray-50 z-20">
                                    <span className="text-[#e11d48] font-black text-base">Q{item.price}</span>
                                </div>
                            </div>
                            
                            <div className="text-center flex flex-col justify-between flex-grow">
                                <h3 className="font-bold text-gray-800 text-lg uppercase leading-tight mb-8 min-h-[50px] flex items-center justify-center tracking-tight">
                                    {item.name}
                                </h3>
                                <button className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-4 rounded-2xl text-[12px] uppercase tracking-[0.2em] transition-all shadow-md active:scale-95">
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};