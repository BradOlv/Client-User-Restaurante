import { useNavigate } from 'react-router-dom';
import { 
    EnvelopeIcon, 
    PhoneIcon, 
    MapPinIcon, 
    ClockIcon,
    LinkIcon
} from '@heroicons/react/24/outline';

export const ClientFooter = () => {
    const navigate = useNavigate();

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Inicio', path: '/portal' },
        { label: 'Menú', path: '/portal/menu' },
        { label: 'Reservas', path: '/portal/reservas' },
        { label: 'Eventos', path: '/portal/eventos' }
    ];

    const legalLinks = [
        { label: 'Términos y Condiciones', path: '/portal/terminos' },
        { label: 'Política de Privacidad', path: '/portal/privacidad' }
    ];

    const supportLinks = [
        { label: 'Mis Pedidos', path: '/portal/pedidos' },
        { label: 'Reseñas', path: '/portal/resenas' },
        { label: 'Cupones', path: '/portal/cupones' },
        { label: 'Perfil', path: '/portal/perfil' }
    ];

    return (
        <footer className="bg-[#2d1810] text-white">
            {/* Sección Principal */}
            <div className="border-t border-[#4a3728]">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        
                        {/* Columna 1: Logo y Info */}
                        <div>
                            <h3 className="text-2xl font-black mb-4 text-[#fb923c]">Kinal</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                El mejor sabor de pollo frito con la mejor experiencia de servicio.
                            </p>
                            {/* Redes Sociales */}
                            <div className="flex gap-3">
                                <a href="#" className="bg-[#e11d48] hover:bg-[#be123c] p-2 rounded-lg transition-colors">
                                    <span className="w-5 h-5 flex items-center justify-center font-bold">f</span>
                                </a>
                                <a href="#" className="bg-[#e11d48] hover:bg-[#be123c] p-2 rounded-lg transition-colors">
                                    <span className="w-5 h-5 flex items-center justify-center">📷</span>
                                </a>
                                <a href="#" className="bg-[#e11d48] hover:bg-[#be123c] p-2 rounded-lg transition-colors">
                                    <span className="w-5 h-5 flex items-center justify-center font-bold">𝕏</span>
                                </a>
                            </div>
                        </div>

                        {/* Columna 2: Enlaces Rápidos */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-[#fb923c] uppercase tracking-widest">Menú Rápido</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <button
                                            onClick={() => navigate(link.path)}
                                            className="text-gray-300 hover:text-[#fb923c] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Columna 3: Soporte */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-[#fb923c] uppercase tracking-widest">Mi Cuenta</h4>
                            <ul className="space-y-2">
                                {supportLinks.map((link) => (
                                    <li key={link.path}>
                                        <button
                                            onClick={() => navigate(link.path)}
                                            className="text-gray-300 hover:text-[#fb923c] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Columna 4: Contacto */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-[#fb923c] uppercase tracking-widest">Contacto</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <PhoneIcon className="w-5 h-5 text-[#e11d48] flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-gray-300 text-sm">+502 7890 1234</p>
                                        <p className="text-gray-300 text-sm">+502 5555 6789</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <EnvelopeIcon className="w-5 h-5 text-[#e11d48] flex-shrink-0 mt-1" />
                                    <a href="mailto:info@kinal.com" className="text-gray-300 text-sm hover:text-[#fb923c] transition-colors">
                                        info@kinal.com
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <ClockIcon className="w-5 h-5 text-[#e11d48] flex-shrink-0 mt-1" />
                                    <div className="text-gray-300 text-sm">
                                        <p>Lun-Vie: 11am - 11pm</p>
                                        <p>Sáb-Dom: 10am - 12am</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#4a3728] my-8"></div>

                    {/* Segunda Fila */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Ubicaciones */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-[#fb923c] uppercase tracking-widest">Ubicaciones</h4>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <MapPinIcon className="w-5 h-5 text-[#e11d48] flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-sm">Kinal - Zona 10</p>
                                        <p className="text-gray-400 text-xs">Centro Comercial Kinal, Zona 10</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <MapPinIcon className="w-5 h-5 text-[#e11d48] flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-sm">Kinal - Zona 1</p>
                                        <p className="text-gray-400 text-xs">Centro Histórico, Zona 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Métodos de Pago */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-[#fb923c] uppercase tracking-widest">Métodos de Pago</h4>
                            <div className="flex gap-3 flex-wrap">
                                <div className="bg-white px-3 py-1 rounded text-[#2d1810] text-xs font-bold">Visa</div>
                                <div className="bg-white px-3 py-1 rounded text-[#2d1810] text-xs font-bold">Mastercard</div>
                                <div className="bg-white px-3 py-1 rounded text-[#2d1810] text-xs font-bold">Efectivo</div>
                                <div className="bg-white px-3 py-1 rounded text-[#2d1810] text-xs font-bold">Transferencia</div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-[#4a3728] rounded-2xl p-6 mb-8">
                        <h4 className="font-bold text-lg mb-2 text-[#fb923c]">Suscríbete a Nuestras Ofertas</h4>
                        <p className="text-gray-300 text-sm mb-4">Recibe promociones exclusivas directamente en tu correo</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Tu correo"
                                className="flex-1 px-4 py-2 rounded-lg bg-[#2d1810] border border-[#6a5238] text-white placeholder-gray-500 focus:outline-none focus:border-[#e11d48]"
                            />
                            <button className="bg-[#e11d48] hover:bg-[#be123c] text-white font-bold px-6 py-2 rounded-lg transition-colors">
                                Suscribir
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pie de Página */}
            <div className="bg-[#1a0f08] border-t border-[#4a3728] py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
                        <div>
                            <p>&copy; {currentYear} Kinal Fried Chicken. Todos los derechos reservados.</p>
                        </div>
                        <div className="flex justify-end gap-6">
                            {legalLinks.map((link) => (
                                <button
                                    key={link.path}
                                    onClick={() => navigate(link.path)}
                                    className="hover:text-[#fb923c] transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};