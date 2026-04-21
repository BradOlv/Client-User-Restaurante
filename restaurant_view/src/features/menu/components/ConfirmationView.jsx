import { useNavigate } from "react-router-dom";

export const ConfirmationView = () => {
    const navigate = useNavigate();

    const camperoDark = "#4a3728";
    const titleStyle = { color: camperoDark, fontWeight: '700', textTransform: 'uppercase' };
    const bodyTextStyle = { color: camperoDark, fontWeight: '500' };

    return (
        <div className="bg-[#fdfaf5] min-h-screen flex items-center justify-center py-10 px-6">
            <div className="max-w-md w-full bg-white rounded-[40px] shadow-xl p-10 text-center border border-orange-50">
                
                {/* Icono de Éxito Animado (Simulado) */}
                <div className="w-24 h-24 bg-[#d4e157] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-lime-100">
                    <span className="text-5xl text-white">✓</span>
                </div>

                <h1 style={titleStyle} className="text-3xl mb-4 tracking-tighter">
                    ¡Pedido Recibido!
                </h1>
                
                <p style={bodyTextStyle} className="text-lg mb-8">
                    Tu orden <span className="font-bold">#1254</span> está siendo preparada con el sabor de Campero.
                </p>

                <div className="bg-[#fdfaf5] rounded-2xl p-6 mb-8 border border-orange-50">
                    <p style={{...bodyTextStyle, fontSize: '0.9rem'}} className="uppercase tracking-widest opacity-60 mb-1">
                        Tiempo estimado
                    </p>
                    <p className="text-2xl font-black text-[#ff6b0b]">
                        30 - 45 MIN
                    </p>
                </div>

                <div className="space-y-4">
                    <button 
                        onClick={() => navigate('/portal/menu')}
                        className="w-full py-4 bg-[#ff6b0b] text-white font-bold rounded-2xl shadow-lg uppercase tracking-widest hover:brightness-110 transition-all"
                    >
                        Volver al Menú
                    </button>
                    
                    <button 
                        onClick={() => navigate('/portal/perfil')}
                        className="w-full py-4 text-gray-400 font-bold uppercase tracking-widest text-sm hover:text-[#4a3728]"
                    >
                        Rastrear mi pedido
                    </button>
                </div>
            </div>
        </div>
    );
};