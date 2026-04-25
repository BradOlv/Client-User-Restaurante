export const PrivacyPage = () => (
    <div className="bg-kfc-cream min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-kfc-red">Legal</span>
            <h1 className="font-display text-5xl md:text-6xl mt-2 leading-none">
                Política de <span className="text-kfc-orange">Privacidad</span>
            </h1>

            <div className="bg-white rounded-3xl border-2 border-kfc-charcoal/5 p-8 mt-8 space-y-6 text-kfc-charcoal/80 leading-relaxed">
                {[
                    { t: "1. Datos que recolectamos", p: "Recolectamos información personal como nombre, correo, teléfono y dirección de entrega para procesar tus pedidos." },
                    { t: "2. Uso de la información", p: "Usamos tus datos exclusivamente para procesar pedidos, mejorar nuestros servicios y enviarte ofertas relevantes (si aceptas)." },
                    { t: "3. Compartir datos", p: "No vendemos ni compartimos tu información con terceros, excepto con servicios estrictamente necesarios para la entrega (mensajería)." },
                    { t: "4. Cookies", p: "Usamos cookies para mejorar tu experiencia, recordar tu carrito y analizar el tráfico de manera anónima." },
                    { t: "5. Tus derechos", p: "Puedes solicitar acceso, rectificación o eliminación de tus datos en cualquier momento escribiendo a hola@kinalfc.gt." },
                    { t: "6. Seguridad", p: "Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado." },
                ].map((s, i) => (
                    <div key={i}>
                        <h3 className="font-heading text-lg uppercase text-kfc-charcoal mb-2">{s.t}</h3>
                        <p>{s.p}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
