import { useNavigate } from "react-router-dom";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";

export const ConfirmationView = () => {
    const navigate = useNavigate();
    const orderId = "KFC-" + Math.floor(1000 + Math.random() * 9000);

    return (
        <div className="bg-kfc-cream min-h-screen flex items-center justify-center p-6 py-16">
            <div className="bg-white rounded-3xl border-2 border-kfc-orange/20 p-8 md:p-12 max-w-2xl w-full text-center grain-overlay relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-kfc-yellow/30 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-kfc-orange/20 blur-3xl" />

                <div className="relative">
                    <div className="w-24 h-24 bg-kfc-orange-light rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-14 h-14 text-kfc-orange" />
                    </div>

                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-kfc-red">
                        Pedido confirmado
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl mt-2 leading-none text-kfc-charcoal">
                        ¡Listo, a <span className="text-kfc-orange">comer</span>!
                    </h1>
                    <p className="text-kfc-charcoal/70 mt-4 text-lg">
                        Tu pedido <span className="font-bold text-kfc-charcoal">#{orderId}</span> está siendo preparado con todo el sabor Kinal.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-3 mt-8 text-left">
                        <div className="bg-kfc-cream-dark rounded-2xl p-4">
                            <Clock className="w-5 h-5 text-kfc-orange mb-2" />
                            <p className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Tiempo estimado</p>
                            <p className="font-bold text-sm mt-1">25 - 35 minutos</p>
                        </div>
                        <div className="bg-kfc-cream-dark rounded-2xl p-4">
                            <MapPin className="w-5 h-5 text-kfc-orange mb-2" />
                            <p className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Estado</p>
                            <p className="font-bold text-sm mt-1">En cocina</p>
                        </div>
                        <div className="bg-kfc-cream-dark rounded-2xl p-4">
                            <Phone className="w-5 h-5 text-kfc-orange mb-2" />
                            <p className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Contacto</p>
                            <p className="font-bold text-sm mt-1">+502 2345-6700</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-10 justify-center">
                        <button
                            onClick={() => navigate("/portal/pedidos")}
                            className="rounded-full bg-kfc-orange hover:bg-kfc-orange-dark text-white font-bold uppercase tracking-wider px-6 py-4 transition-colors"
                        >
                            Ver mis pedidos
                        </button>
                        <button
                            onClick={() => navigate("/portal")}
                            className="rounded-full border-2 border-kfc-charcoal text-kfc-charcoal hover:bg-kfc-charcoal hover:text-white font-bold uppercase tracking-wider px-6 py-4 transition-colors"
                        >
                            Volver al inicio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
