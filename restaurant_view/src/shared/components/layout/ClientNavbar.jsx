import { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { useCartStore } from "../../../store/cartStore";
import LOGO_KINAL from "../../../assets/img/logofriedchicken.png";

const navLinks = [
    { label: "Inicio", path: "/portal" },
    { label: "Menú", path: "/portal/menu" },
    { label: "Cupones", path: "/portal/cupones" },
    { label: "Reservas", path: "/portal/reservas" },
    { label: "Eventos", path: "/portal/eventos" },
    { label: "Reseñas", path: "/portal/resenas" },
];

export const ClientNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const count = useCartStore((s) => s.getCount());

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/portal/menu?search=${searchQuery}`);
            setSearchQuery("");
            setSearchOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-kfc-cream/90 backdrop-blur-md border-b-2 border-kfc-charcoal/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo real KFC */}
                    <button
                        onClick={() => navigate("/portal")}
                        className="flex-shrink-0 transition-transform hover:scale-105"
                        data-testid="navbar-logo"
                    >
                        <img
                            src={LOGO_KINAL}
                            alt="Kinal Fried Chicken"
                            className="h-16 md:h-20 w-auto object-contain"
                        />
                    </button>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    end={link.path === "/portal"}
                                    className={`px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-200 ${
                                        isActive
                                            ? "bg-kfc-charcoal text-white"
                                            : "text-kfc-charcoal hover:bg-kfc-orange-light hover:text-kfc-orange-dark"
                                    }`}
                                >
                                    {link.label}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        {!searchOpen ? (
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="hidden sm:flex w-10 h-10 rounded-full hover:bg-kfc-orange-light items-center justify-center transition-colors"
                                title="Buscar"
                            >
                                <Search className="w-5 h-5 text-kfc-charcoal" />
                            </button>
                        ) : (
                            <form
                                onSubmit={handleSearch}
                                className="hidden sm:flex items-center gap-2 bg-white border-2 border-kfc-orange rounded-full px-3 py-1.5"
                            >
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Buscar..."
                                    className="outline-none text-sm w-36 bg-transparent"
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchOpen(false);
                                        setSearchQuery("");
                                    }}
                                    className="text-kfc-charcoal/40 hover:text-kfc-charcoal"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </form>
                        )}

                        {/* Cart */}
                        <button
                            onClick={() => navigate("/portal/carrito")}
                            data-testid="navbar-cart-button"
                            className="relative w-11 h-11 rounded-full bg-kfc-yellow hover:bg-kfc-yellow-dark transition-colors flex items-center justify-center"
                        >
                            <ShoppingBag className="w-5 h-5 text-kfc-charcoal" strokeWidth={2.5} />
                            {count > 0 && (
                                <span className="absolute -top-1 -right-1 min-w-6 h-6 px-1 rounded-full bg-kfc-red text-white text-xs font-bold flex items-center justify-center border-2 border-kfc-cream">
                                    {count}
                                </span>
                            )}
                        </button>

                        {/* Profile */}
                        <button
                            onClick={() => navigate("/portal/perfil")}
                            className="hidden sm:flex w-11 h-11 rounded-full bg-kfc-orange hover:bg-kfc-orange-dark transition-colors items-center justify-center"
                        >
                            <User className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </button>

                        {/* Mobile menu */}
                        <button
                            className="lg:hidden w-11 h-11 rounded-full bg-kfc-charcoal text-white flex items-center justify-center"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {open && (
                    <div className="lg:hidden pb-4 space-y-1 animate-fadeIn">
                        <form
                            onSubmit={handleSearch}
                            className="flex items-center gap-2 bg-white border-2 border-kfc-orange rounded-full px-4 py-2.5 mb-3"
                        >
                            <Search className="w-4 h-4 text-kfc-orange" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Buscar productos..."
                                className="outline-none text-sm w-full bg-transparent"
                            />
                        </form>
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <button
                                    key={link.path}
                                    onClick={() => {
                                        navigate(link.path);
                                        setOpen(false);
                                    }}
                                    className={`block w-full text-left px-4 py-3 rounded-2xl font-bold uppercase tracking-wide ${
                                        isActive
                                            ? "bg-kfc-charcoal text-white"
                                            : "text-kfc-charcoal hover:bg-kfc-orange-light"
                                    }`}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                        <button
                            onClick={() => {
                                navigate("/portal/perfil");
                                setOpen(false);
                            }}
                            className="block w-full text-left px-4 py-3 rounded-2xl bg-kfc-orange text-white font-bold uppercase tracking-wide mt-2"
                        >
                            Mi perfil
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};