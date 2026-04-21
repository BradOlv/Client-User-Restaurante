import { useState } from "react";
import POLLO_IMG from "../../../assets/img/pollo.jpg";
import ALITAS_IMG from "../../../assets/img/alitas.png";
import CAMARONES_IMG from "../../../assets/img/camarones.png";
import PIZZA_IMG from "../../../assets/img/pizza.jpg";

export const CouponView = () => {
    const [showModal, setShowModal] = useState(false);

    // Datos de ejemplo para llenar la vista
    const coupons = [
        { id: 1, title: "VERANO KINAL - Menú Alitas + Camarones", price: "Q95", img: CAMARONES_IMG },
        { id: 2, title: "Pizza Grande de Camarones + Bebida", price: "Q110", img: PIZZA_IMG },
        { id: 3, title: "Banquete de 24 Alitas", price: "Q155", img: ALITAS_IMG },
        { id: 4, title: "2 Piezas de Pollo + Ensalada", price: "Q25", img: POLLO_IMG },
        { id: 5, title: "Menú Súper Campero de Alitas", price: "Q65", img: ALITAS_IMG },
        { id: 6, title: "Papas y Flan por Q15", price: "Q15", img: POLLO_IMG }, // Usando pollo de ejemplo
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 relative">
            <h1 className="text-4xl font-black text-gray-800 mb-8 italic uppercase tracking-tighter text-center">
                Cupones Disponibles
            </h1>

            {/* Grid de Cupones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {coupons.map((coupon) => (
                    <div 
                        key={coupon.id}
                        onClick={() => setShowModal(true)}
                        className="bg-white rounded-3xl p-4 shadow-md border border-gray-100 flex items-center justify-between cursor-pointer hover:shadow-xl transition-all group"
                    >
                        <div className="flex-1">
                            <span className="bg-[#fb923c] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Nuevo</span>
                            <h3 className="text-lg font-bold text-gray-700 mt-2 leading-tight w-[80%]">{coupon.title}</h3>
                            <p className="text-[#e11d48] font-black text-xl mt-1">{coupon.price}</p>
                        </div>
                        <div className="w-28 h-28">
                            <img src={coupon.img} alt="coupon" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MODAL DE REGISTRO (Estilo el ejemplo que mandaste) --- */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
                    
                    {/* Contenido del Modal */}
                    <div className="relative bg-white rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl animate-fadeIn text-center border-t-8 border-[#ff6b0b]">
                        <button 
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-6 text-gray-400 text-2xl font-bold hover:text-gray-600"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-black text-gray-800 leading-tight mb-4 uppercase italic">
                            Regístrate para desbloquear <span className="text-[#ff6b0b]">cupones exclusivos</span>
                        </h2>
                        
                        <div className="h-1 w-20 bg-gray-100 mx-auto mb-6"></div>

                        <div className="flex flex-col gap-3">
                            <button className="w-full py-4 bg-[#ff6b0b] hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-sm">
                                Registrarme ahora
                            </button>
                            <button 
                                onClick={() => setShowModal(false)}
                                className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold rounded-2xl transition-all uppercase tracking-widest text-sm"
                            >
                                Tal vez luego
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};