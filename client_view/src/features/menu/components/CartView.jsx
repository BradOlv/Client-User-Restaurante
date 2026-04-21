import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PIZZA_IMG from "../../../assets/img/pizza.jpg";

export const CartView = () => {
    const navigate = useNavigate();

    // COLOR CAFÉ CAMPERO
    const camperoDark = "#4a3728";
    
    // Estilo para títulos (Peso medio-alto, no exagerado)
    const titleStyle = {
        color: camperoDark,
        fontWeight: '700', 
        fontStyle: 'normal',
        textTransform: 'uppercase',
        letterSpacing: '-0.025em'
    };

    // Estilo para texto normal
    const bodyTextStyle = {
        color: camperoDark,
        fontWeight: '500', // Peso normal/medio
        fontStyle: 'normal'
    };

    const menuOptions = [
        { id: 'fav', label: "Mis Favoritos" },
        { id: 'nuevos', label: "Productos Nuevos" },
        { id: 'verano', label: "Verano Campero" },
        { id: 'wings', label: "Camperitos, Alitas y Medallones" },
        { id: 'pollo', label: "Pollo" },
        { id: 'pizza', label: "Pizza Campero" },
        { id: 'salads', label: "Ensaladas, Sándwiches, Desayunos y más" },
        { id: 'tienda', label: "La Tienda de Pollito" },
    ];

    return (
        <div className="bg-[#fdfaf5] min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
                
                {/* --- SIDEBAR IZQUIERDO --- */}
                <aside className="w-full md:w-[300px] bg-white rounded-3xl shadow-sm border border-gray-100 p-6 self-start">
                    <div className="space-y-1">
                        {menuOptions.map((option) => (
                            <button
                                key={option.id}
                                className="w-full flex items-center justify-between p-4 rounded-xl text-left transition-all hover:bg-orange-50"
                                style={bodyTextStyle}
                            >
                                <span className="text-base">{option.label}</span>
                                <span className="text-xl">›</span>
                            </button>
                        ))}
                    </div>
                </aside>

                {/* --- CONTENIDO PRINCIPAL --- */}
                <main className="flex-1 space-y-8">
                    
                    {/* Detalles de entrega */}
                    <section className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
                        <div className="flex items-center justify-center mb-6 pb-4 border-b border-gray-100">
                            <h2 style={titleStyle} className="text-2xl">
                                Detalles de tu entrega
                            </h2>
                        </div>
                        <div className="space-y-6 text-center">
                            <p style={bodyTextStyle} className="text-lg">
                                Entregando desde <span style={{ fontWeight: '700' }}>San Cristóbal, Mixco</span>
                            </p>
                            
                            <div className="grid grid-cols-1 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="Ingresa tu dirección completa (requerida)" 
                                    className="w-full p-5 rounded-xl bg-[#fdfaf5] border border-orange-100 outline-none placeholder:text-gray-400"
                                    style={bodyTextStyle}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Ingresa tus instrucciones de entrega (opcional)" 
                                    className="w-full p-5 rounded-xl bg-[#fdfaf5] border border-orange-100 outline-none placeholder:text-gray-400"
                                    style={bodyTextStyle}
                                />
                            </div>

                            <p style={bodyTextStyle} className="text-lg">
                                Tiempo de entrega estimado: <span className="text-[#e11d48] font-bold">30 - 45 minutos</span>
                            </p>
                        </div>
                    </section>

                    {/* Productos */}
                    <section className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
                        <div className="flex items-center justify-center mb-6 pb-4 border-b border-gray-100">
                            <h2 style={titleStyle} className="text-xl">
                                1 Producto
                            </h2>
                        </div>

                        <div className="p-6 bg-[#fdfaf5] rounded-3xl border border-orange-50 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <img src={PIZZA_IMG} alt="Pizza" className="w-24 h-24 object-contain" />
                                <div>
                                    <h4 style={{ ...bodyTextStyle, fontWeight: '700', fontSize: '1.25rem' }}>Pizza Grande de Queso</h4>
                                    <p className="text-gray-400" style={{ fontWeight: '400' }}>Sin Extras</p>
                                    <button className="mt-2 text-gray-400 hover:text-red-600 text-2xl">✕</button>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-3">
                                <p className="text-3xl font-bold text-[#e11d48]">Q70.00</p>
                                <div className="flex items-center gap-4 bg-white p-2 px-4 rounded-full border border-orange-100 shadow-sm">
                                    <button className="text-gray-300 text-2xl font-bold">-</button>
                                    <span style={{ ...bodyTextStyle, fontWeight: '700', fontSize: '1.25rem' }}>1</span>
                                    <button className="text-[#ff6b0b] text-2xl font-bold">+</button>
                                </div>
                            </div>
                        </div>

                        {/* Totales */}
                        <div className="mt-10 pt-6 border-t-2 border-gray-100 space-y-4 max-w-sm ml-auto">
                            <div className="flex justify-between" style={bodyTextStyle}>
                                <span>Subtotal</span>
                                <span className="font-bold">Q70.00</span>
                            </div>
                            <div className="flex justify-between text-3xl pt-4 border-t-4 border-[#ff6b0b]">
                                <span style={bodyTextStyle}>Total</span>
                                <span style={{ color: '#ff6b0b', fontWeight: '800' }}>Q70.00</span>
                            </div>
                        </div>
                    </section>

                    {/* Botones */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 pb-10">
                        <button 
                            onClick={() => navigate('/portal/menu')}
                            className="px-12 py-5 bg-[#ff6b0b] text-white font-bold rounded-2xl shadow-lg hover:brightness-110 uppercase tracking-wider"
                        >
                            Seguir ordenando
                        </button>
                        <button
                            onClick={() => navigate('/portal/checkout')}
                            className="px-12 py-5 bg-[#d4e157] font-bold rounded-2xl shadow-lg hover:brightness-110 uppercase tracking-wider"
                            style={{ color: camperoDark }}
                        >
                            Pagar
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};