import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LOGO_KINAL from "../../../assets/img/logofriedchicken.png";

export const ClientNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        return `cursor-pointer font-black text-lg tracking-widest transition-all pb-2 border-b-4 ${
            isActive 
            ? 'text-[#ff6b0b] border-[#ff6b0b]' 
            : 'text-gray-500 border-transparent hover:text-[#ff6b0b]'
        }`;
    };

    const navLinks = [
        { label: 'INICIO', path: '/portal' },
        { label: 'MENÚ', path: '/portal/menu' },
        { label: 'RESERVAS', path: '/portal/reservas' },
        { label: 'EVENTOS', path: '/portal/eventos' },
        { label: 'CUPONES', path: '/portal/cupones' },
        { label: 'RESEÑAS', path: '/portal/resenas' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/portal/menu?search=${searchQuery}`);
            setSearchQuery("");
            setSearchOpen(false);
        }
    };

    return (
        <nav className="bg-[#fdfaf5] border-b-2 border-[#ff6b0b] sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-28">
                    
                    {/* Logo */}
                    <div 
                        className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105" 
                        onClick={() => navigate('/portal')}
                    >
                        <img src={LOGO_KINAL} alt="Logo" className="h-24 w-auto object-contain" />
                    </div>
                    
                    {/* Enlaces de Navegación - Desktop */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <span 
                                key={link.path}
                                onClick={() => navigate(link.path)} 
                                className={getLinkStyle(link.path)}
                            >
                                {link.label}
                            </span>
                        ))}
                    </div>

                    {/* Acciones de Usuario */}
                    <div className="flex items-center gap-4">
                        
                        {/* Buscador - Desktop */}
                        {!searchOpen && (
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="hidden sm:flex p-2 text-[#ff6b0b] hover:bg-orange-50 rounded-lg transition-colors"
                                title="Buscar productos"
                            >
                                <MagnifyingGlassIcon className="w-6 h-6" />
                            </button>
                        )}

                        {/* Buscador Abierto */}
                        {searchOpen && (
                            <form onSubmit={handleSearch} className="hidden sm:flex items-center gap-2 bg-white border-2 border-[#ff6b0b] rounded-xl px-3 py-1">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Buscar..."
                                    className="outline-none text-sm w-40 bg-transparent"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchOpen(false);
                                        setSearchQuery("");
                                    }}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <XMarkIcon className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                        
                        {/* Carrito */}
                        <div 
                            onClick={() => navigate('/portal/carrito')}
                            className="relative group cursor-pointer transition-transform hover:scale-110"
                        >
                            <div className="absolute -top-2 -right-2 bg-[#e11d48] text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm z-10">
                                1
                            </div>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-7 w-7 sm:h-9 sm:w-9 text-[#ff6b0b] transition-colors group-hover:text-orange-600" 
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
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#facc15] flex items-center justify-center text-red-900 font-black shadow-md border-2 border-white text-sm sm:text-xl cursor-pointer hover:scale-110 transition-transform"
                        >
                            BO
                        </div>

                        {/* Hamburger Menu - Mobile */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-[#ff6b0b] hover:bg-orange-50 rounded-lg transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t-2 border-[#ff6b0b] py-4 space-y-3 px-2">
                        {/* Buscador Mobile */}
                        <form onSubmit={handleSearch} className="flex items-center gap-2 bg-gray-50 border border-[#ff6b0b] rounded-xl px-3 py-2 mb-3">
                            <MagnifyingGlassIcon className="w-5 h-5 text-[#ff6b0b]" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Buscar productos..."
                                className="outline-none text-sm w-full bg-transparent"
                            />
                        </form>

                        {/* Links Mobile */}
                        {navLinks.map((link) => (
                            <button
                                key={link.path}
                                onClick={() => {
                                    navigate(link.path);
                                    setMobileMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2 rounded-lg font-bold transition-colors ${
                                    location.pathname === link.path
                                    ? 'bg-[#ffe6ed] text-[#e11d48]'
                                    : 'text-gray-600 hover:bg-orange-50'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};