import { useNavigate } from "react-router-dom";
import {
    Drumstick,
    Mail,
    Phone,
    MapPin,
    Clock,
} from "lucide-react";

// Inline SVG brand icons (lucide-react ya no los expone por temas de marca)
const FacebookIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
);

const InstagramIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const TwitterIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const ClientFooter = () => {
    const navigate = useNavigate();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-kfc-charcoal text-white relative overflow-hidden mt-20">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-kfc-orange/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-kfc-red/20 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-12 bg-kfc-red rounded-full flex items-center justify-center">
                                <Drumstick className="w-6 h-6 text-white" strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="font-display text-3xl text-kfc-yellow leading-none">
                                    KINAL
                                </div>
                                <div className="font-heading text-[10px] tracking-[0.3em] text-white/70">
                                    FRIED CHICKEN
                                </div>
                            </div>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                            El sabor crujiente que cambió Guatemala. 15 años friendo el mejor pollo de la región.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-kfc-orange transition-colors flex items-center justify-center"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-heading text-lg uppercase mb-5 text-kfc-yellow">
                            Explorar
                        </h4>
                        <ul className="space-y-3 text-white/80">
                            <li>
                                <button onClick={() => navigate("/portal/menu")} className="hover:text-kfc-orange transition-colors">
                                    Menú
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate("/portal/cupones")} className="hover:text-kfc-orange transition-colors">
                                    Cupones & Ofertas
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate("/portal/reservas")} className="hover:text-kfc-orange transition-colors">
                                    Reservar Mesa
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate("/portal/eventos")} className="hover:text-kfc-orange transition-colors">
                                    Eventos
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate("/portal/resenas")} className="hover:text-kfc-orange transition-colors">
                                    Reseñas
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-lg uppercase mb-5 text-kfc-yellow">
                            Contacto
                        </h4>
                        <ul className="space-y-3 text-white/80">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1 text-kfc-orange shrink-0" />
                                <span>Zona 10, Ciudad de Guatemala</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-kfc-orange" />
                                <span>+502 2345-6700</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-kfc-orange" />
                                <span>hola@kinalfc.gt</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-kfc-orange" />
                                <span>Lun - Dom: 10AM - 11PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-heading text-lg uppercase mb-5 text-kfc-yellow">
                            Newsletter
                        </h4>
                        <p className="text-white/70 mb-4 text-sm">
                            Suscríbete y recibe ofertas exclusivas cada semana.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="flex-1 px-4 py-3 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-kfc-orange"
                            />
                            <button
                                type="submit"
                                className="px-5 py-3 rounded-full bg-kfc-orange hover:bg-kfc-orange-dark font-bold text-sm uppercase transition-colors"
                            >
                                Ir
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/60 text-sm">
                        © {year} Kinal Fried Chicken. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-white/60">
                        <button onClick={() => navigate("/portal/terminos")} className="hover:text-kfc-orange">Términos</button>
                        <button onClick={() => navigate("/portal/privacidad")} className="hover:text-kfc-orange">Privacidad</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
