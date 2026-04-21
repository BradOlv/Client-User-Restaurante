import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProfileView = () => {
    const navigate = useNavigate();
    // Estado para controlar qué sección del menú está activa
    const [activeSection, setActiveSection] = useState('perfil');

    const menuOptions = [
        { id: 'perfil', label: "Perfil" },
        { id: 'pedidos', label: "Pedidos" },
        { id: 'historial', label: "Historial de Compras" },
        { id: 'rastrear', label: "Rastrear Pedido" },
        { id: 'pendiente', label: "Pedido Pendiente" },
    ];

    return (
        // Fondo crema muy suave (#fdfaf5) para todo el layout
        <div className="bg-[#fdfaf5] min-h-screen py-10 font-sans">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
                
                {/* --- SIDEBAR IZQUIERDO (Estilo Campero) --- */}
                <aside className="w-full md:w-[300px] bg-white rounded-3xl shadow-sm border border-gray-100 p-6 self-start">
                    <div className="space-y-1">
                        {menuOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setActiveSection(option.id)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 transform active:scale-95
                                    ${activeSection === option.id 
                                    // Activo: Naranja (#ff6b0b) con fondo crema suave (#fdfaf5)
                                    ? "bg-[#fdfaf5] text-[#ff6b0b] font-bold" 
                                    // Inactivo: Gris suave
                                    : "bg-white text-gray-600 hover:bg-orange-50 hover:text-[#fb923c] font-medium"
                                }`}
                            >
                                <span className="text-base tracking-tight">{option.label}</span>
                                <span className={`text-xl transition-opacity ${activeSection === option.id ? 'opacity-100' : 'opacity-0'}`}>›</span>
                            </button>
                        ))}
                    </div>
                    {/* Línea divisoria */}
                    <div className="h-px bg-gray-100 my-6"></div>
                    {/* Botón Cerrar Sesión con efecto rojo al hover */}
                    <button 
                        onClick={() => navigate('/login')}
                        className="w-full flex items-center justify-between p-4 rounded-xl text-left bg-white text-gray-600 hover:bg-red-50 hover:text-[#e11d48] font-medium transition-all transform active:scale-95"
                    >
                        <span className="text-base tracking-tight">Cerrar Sesión</span>
                    </button>
                </aside>

                {/* --- CONTENIDO PRINCIPAL DERECHO --- */}
                <main className="flex-1 bg-white rounded-3xl shadow-lg shadow-gray-200/40 p-10 border border-gray-100">
                    
                    {/* Renderizado condicional según la sección activa */}
                    {activeSection === 'perfil' && (
                        <div className="space-y-10 animate-fadeIn">
                            {/* Título */}
                            <h2 className="text-3xl font-extrabold text-[#e11d48] text-center tracking-tighter uppercase mb-12">
                                Tu información
                            </h2>

                            {/* Inputs (Estilo Campero: Grandes, borde sutil y fondo crema #fdfaf5) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                                {/* Nombre */}
                                <input type="text" defaultValue="Bradley" className="w-full p-5 rounded-xl bg-[#fdfaf5] border border-orange-100 focus:ring-2 focus:ring-[#ff6b0b] outline-none text-gray-800 text-lg font-semibold" />
                                {/* Apellido */}
                                <input type="text" defaultValue="Oliva" className="w-full p-5 rounded-xl bg-[#fdfaf5] border border-orange-100 focus:ring-2 focus:ring-[#ff6b0b] outline-none text-gray-800 text-lg font-semibold" />
                                {/* Teléfono (Placeholder de Campero) */}
                                <input type="text" defaultValue="41635899" className="md:col-span-2 w-full p-5 rounded-xl bg-[#fdfaf5] border border-orange-100 focus:ring-2 focus:ring-[#ff6b0b] outline-none text-gray-800 text-lg font-semibold" />
                                {/* Correo */}
                                <input type="email" defaultValue="bradley.oliva@kinal.edu.gt" className="md:col-span-2 w-full p-5 rounded-xl bg-[#fdfaf5] border border-orange-100 focus:ring-2 focus:ring-[#ff6b0b] outline-none text-gray-800 text-lg font-semibold" />
                            </div>

                            {/* Checkbox (Copiado de Campero) */}
                            <div className="flex items-start gap-3 pt-4">
                                <input type="checkbox" id="offers" className="w-5 h-5 mt-1 accent-[#ff6b0b] cursor-pointer" />
                                <label htmlFor="offers" className="text-sm text-gray-500 font-medium leading-snug cursor-pointer">
                                    ¡Sí! quiero recibir correos sobre ofertas especiales y otra información relacionada a Pollo Kinal.
                                </label>
                            </div>

                            {/* Botón Guardar (Naranja #ff6b0b como Campero, pero con nuestro color) */}
                            <div className="text-center pt-8">
                                <button className="px-16 py-4 bg-[#ff6b0b] hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-sm">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Espacio para otras secciones si decides implementarlas en la demo */}
                    {activeSection !== 'perfil' && (
                        <div className="text-center py-20 animate-fadeIn space-y-4">
                            <span className="text-6xl">⏳</span>
                            <h3 className="text-xl font-bold text-gray-400">Próximamente...</h3>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};