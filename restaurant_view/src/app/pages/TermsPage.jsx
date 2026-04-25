export const TermsPage = () => (
    <div className="bg-kfc-cream min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-kfc-red">Legal</span>
            <h1 className="font-display text-5xl md:text-6xl mt-2 leading-none">
                Términos & <span className="text-kfc-orange">Condiciones</span>
            </h1>

            <div className="bg-white rounded-3xl border-2 border-kfc-charcoal/5 p-8 mt-8 space-y-6 text-kfc-charcoal/80 leading-relaxed">
                {[
                    { t: "1. Aceptación de los términos", p: "Al usar Kinal Fried Chicken aceptas los presentes términos y condiciones. Si no estás de acuerdo, te pedimos no utilizar nuestros servicios." },
                    { t: "2. Uso del servicio", p: "Nuestra plataforma es para uso personal. No está permitido el uso comercial sin autorización por escrito de Kinal Fried Chicken." },
                    { t: "3. Pedidos y pagos", p: "Los pedidos quedan confirmados al recibir el comprobante de pago. Los precios incluyen IVA y están sujetos a cambios sin previo aviso." },
                    { t: "4. Entregas", p: "Los tiempos estimados de entrega son aproximados. No nos responsabilizamos por demoras causadas por factores externos (clima, tráfico, etc.)." },
                    { t: "5. Cancelaciones", p: "Puedes cancelar tu pedido sin costo dentro de los primeros 5 minutos. Después de ese tiempo, se cobrará el monto completo." },
                    { t: "6. Programa de puntos", p: "Los puntos KinalCrunch no son canjeables por efectivo y pueden expirar después de 12 meses sin uso." },
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
