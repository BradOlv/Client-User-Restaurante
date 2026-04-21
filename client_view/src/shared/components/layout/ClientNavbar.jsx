import { useNavigate, useLocation } from "react-router-dom";
import LOGO_KINAL from "../../../assets/img/logofriedchicken.png";

export const ClientNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Función para no repetir código de estilos
    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        return `cursor-pointer font-black text-lg tracking-widest transition-all pb-2 border-b-4 ${
            isActive 
            ? 'text-[#ff6b0b] border-[#ff6b0b]' 
            : 'text-gray-500 border-transparent hover:text-[#ff6b0b]'
        }`;
    };

    return (
        <nav className="bg-[#fdfaf5] border-b-2 border-[#ff6b0b] sticky top-0 z-50 h-[120px] flex items-center shadow-sm">
            <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
                
                {/* Logo */}
                <div className="flex items-center cursor-pointer transition-transform hover:scale-105" onClick={() => navigate('/portal')}>
                    <img src={LOGO_KINAL} alt="Logo" className="h-28 w-auto object-contain" />
                </div>
                
                {/* Enlaces de Navegación Unificados */}
                <div className="hidden md:flex items-center gap-12">
                    <span 
                        onClick={() => navigate('/portal')} 
                        className={getLinkStyle('/portal')}
                    >
                        INICIO
                    </span>

                    <span 
                        onClick={() => navigate('/portal/menu')} 
                        className={getLinkStyle('/portal/menu')}
                    >
                        MENÚ
                    </span>

                    <span 
                        onClick={() => navigate('/portal/cupones')} 
                        className={getLinkStyle('/portal/cupones')}
                    >
                        CUPONES
                    </span>
                </div>

                {/* Acciones de Usuario (Carrito + Avatar) */}
                <div className="flex items-center gap-6">
                    
                    {/* Icono de Carrito - Estilo Campero */}
                    <div 
                        onClick={() => navigate('/portal/carrito')}
                        className="relative group cursor-pointer transition-transform hover:scale-110"
                    >
                        {/* Círculo de notificación con el número de productos */}
                        <div className="absolute -top-2 -right-2 bg-[#e11d48] text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm z-10">
                            1
                        </div>
                        
                        {/* Icono de Carrito (SVG para que no necesites importar imagen extra) */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-9 w-9 text-[#ff6b0b] transition-colors group-hover:text-orange-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>

                    {/* Avatar de Usuario */}
                    <div
                        onClick={() => navigate('/portal/perfil')}
                        className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center text-red-900 font-black shadow-md border-2 border-white text-xl cursor-pointer hover:scale-110 transition-transform"
                    >
                        BO
                    </div>
                </div>
            </div>
        </nav>
    );
};