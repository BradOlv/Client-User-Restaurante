export const TermsPage = () => {
    return (
        <div className="min-h-screen bg-[#fdfcf0] py-12">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-black text-[#7f1d1d] mb-8">Términos y Condiciones</h1>

                <div className="bg-white rounded-2xl p-8 space-y-8 shadow-lg">
                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">1. Aceptación de Términos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Al acceder y utilizar la plataforma de Kinal Fried Chicken, aceptas estos términos y condiciones. Si no estás de acuerdo con alguna parte, no podrás utilizar nuestro servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">2. Cuentas de Usuario</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Eres responsable de mantener la confidencialidad de tu contraseña. Todas las actividades realizadas bajo tu cuenta son tu responsabilidad.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Debes proporcionar información precisa y actualizada</li>
                            <li>No compartir credenciales de acceso</li>
                            <li>Notificar inmediatamente cualquier acceso no autorizado</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">3. Órdenes y Pagos</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Al realizar un pedido, confirmas que:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Tienes la edad legal para realizar compras</li>
                            <li>Autorizas los cargos a tu método de pago</li>
                            <li>Aceptas nuestras políticas de entrega</li>
                            <li>Las órdenes no pueden ser modificadas después de confirmadas (excepto por nuestro equipo)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">4. Cancelaciones y Reembolsos</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Las cancelaciones deben realizarse antes de que el pedido sea preparado. Los reembolsos serán procesados en un plazo de 5-7 días hábiles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">5. Propiedad Intelectual</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Todo el contenido en nuestro sitio (logos, imágenes, textos) es propiedad de Kinal Fried Chicken. No puedes reproducir, distribuir o modificar sin autorización.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">6. Limitación de Responsabilidad</h2>
                        <p className="text-gray-700 leading-relaxed">
                            No somos responsables por daños indirectos, pérdidas de datos o interrupciones del servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">7. Cambios en los Términos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigencia inmediatamente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-4">8. Contacto</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Para consultas sobre estos términos, contacta a: legal@kinalfriedchicken.com
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
