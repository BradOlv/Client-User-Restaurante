export const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-[#fdfcf0] py-12">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-black text-[#7f1d1d] mb-8">Política de Privacidad</h1>

                <div className="bg-white rounded-2xl p-8 space-y-8 shadow-lg">
                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">1. Introducción</h2>
                        <p className="text-gray-700 leading-relaxed">
                            En Kinal Fried Chicken nos comprometemos a proteger tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">2. Información que Recopilamos</h2>
                        <div className="space-y-3">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Información de Registro:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Nombre completo</li>
                                    <li>Correo electrónico</li>
                                    <li>Número de teléfono</li>
                                    <li>Dirección</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Información de Transacciones:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Historial de pedidos</li>
                                    <li>Métodos de pago (sin detalles completos)</li>
                                    <li>Preferencias de entrega</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Datos Automáticos:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Dirección IP</li>
                                    <li>Tipo de dispositivo</li>
                                    <li>Cookies de navegación</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">3. Uso de la Información</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Utilizamos tu información para:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Procesar y entregar tus órdenes</li>
                            <li>Mejorar nuestro servicio</li>
                            <li>Enviar promociones (con tu consentimiento)</li>
                            <li>Prevenir fraude</li>
                            <li>Cumplir con obligaciones legales</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">4. Protección de Datos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Implementamos medidas de seguridad avanzadas incluyendo encriptación SSL, firewalls y controles de acceso para proteger tu información personal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">5. Compartir Información</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            No vendemos tu información. Solo la compartimos con:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Proveedores de entrega (solo lo necesario)</li>
                            <li>Procesadores de pago</li>
                            <li>Autoridades (si es requerido por ley)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">6. Cookies</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Utilizamos cookies para mejorar tu experiencia. Puedes controlar las cookies en tu navegador, aunque esto puede afectar la funcionalidad del sitio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">7. Tus Derechos</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Tienes derecho a:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Acceder a tu información personal</li>
                            <li>Solicitar correcciones</li>
                            <li>Solicitar eliminación (derecho al olvido)</li>
                            <li>Optar por no recibir marketing</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">8. Retención de Datos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Mantenemos tu información mientras tu cuenta esté activa. Después de la cancelación, los datos se eliminarán dentro de 30 días.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">9. Cambios en la Política</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nos reservamos el derecho de actualizar esta política. Te notificaremos de cambios significativos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">10. Contacto</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Para privacidad, contacta a: privacy@kinalfriedchicken.com
                        </p>
                    </section>

                    <div className="border-t-2 border-gray-200 pt-6 mt-8">
                        <p className="text-sm text-gray-500">Última actualización: Abril 2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
