import { useState } from "react";
import { ClientLoginForm } from "../components/ClientLoginForm";
import { ClientForgotForm } from "../components/ClientForgotForm";
import { Drumstick } from "lucide-react";

export const ClientLoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgot, setIsForgot] = useState(false);

    return (
        <div className="min-h-screen bg-kfc-cream grid lg:grid-cols-2 font-sans">
            {/* Left side - Brand panel */}
            <div className="relative hidden lg:flex items-center justify-center bg-kfc-red overflow-hidden grain-overlay p-10">
                <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-kfc-yellow/30 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-kfc-orange/40 blur-3xl" />
                <div className="relative text-white max-w-md">
                    <div className="flex items-center gap-2 mb-12">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <Drumstick className="w-6 h-6 text-kfc-red" strokeWidth={2.5} />
                        </div>
                        <div>
                            <div className="font-display text-3xl text-kfc-yellow leading-none">KINAL</div>
                            <div className="font-heading text-[10px] tracking-[0.3em] text-white/80">FRIED CHICKEN</div>
                        </div>
                    </div>
                    <h2 className="font-display text-5xl leading-none">
                        {isForgot
                            ? "Recupera tu acceso."
                            : isLogin
                            ? "Bienvenido de "
                            : "Únete al "}
                        {!isForgot && (
                            <span className="text-kfc-yellow">
                                {isLogin ? "vuelta." : "Crunch Club."}
                            </span>
                        )}
                    </h2>
                    <p className="mt-5 text-white/90 text-lg">
                        {isForgot
                            ? "Te enviaremos instrucciones para que vuelvas a comer pollo crujiente."
                            : isLogin
                            ? "Tu pollo crujiente favorito te está esperando. Inicia sesión y sigue acumulando puntos KinalCrunch."
                            : "Crea tu cuenta y recibe puntos en cada pedido. Ofertas exclusivas, reservaciones prioritarias y mucho más."}
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1579065497397-2824d41272ce?w=600&q=85"
                        alt="Pollo"
                        className="mt-10 rounded-3xl aspect-video object-cover"
                    />
                </div>
            </div>

            {/* Right side - Form */}
            <div className="flex items-center justify-center p-6 sm:p-10">
                <div className="w-full max-w-md">
                    <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
                        <div className="w-12 h-12 bg-kfc-red rounded-full flex items-center justify-center">
                            <Drumstick className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <div className="font-display text-3xl text-kfc-red leading-none">KINAL</div>
                            <div className="font-heading text-[10px] tracking-[0.3em] text-kfc-charcoal">FRIED CHICKEN</div>
                        </div>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl leading-none">
                        {isForgot
                            ? "¿Olvidaste tu clave?"
                            : isLogin
                            ? (
                                <>
                                    Inicia <span className="text-kfc-orange">sesión</span>
                                </>
                            )
                            : (
                                <>
                                    Crea tu <span className="text-kfc-orange">cuenta</span>
                                </>
                            )}
                    </h1>
                    <p className="text-kfc-charcoal/60 mt-3">
                        {isForgot
                            ? "No te preocupes, te ayudamos a recuperar tu acceso."
                            : isLogin
                            ? "Ingresa con tu cuenta para hacer pedidos más rápido."
                            : "Regístrate y obtén beneficios desde tu primer pedido."}
                    </p>

                    <div className="mt-8">
                        {isForgot ? (
                            <ClientForgotForm onSwitch={() => setIsForgot(false)} />
                        ) : (
                            <ClientLoginForm
                                isLogin={isLogin}
                                setIsLogin={setIsLogin}
                                onForgot={() => setIsForgot(true)}
                            />
                        )}
                    </div>

                    <p className="mt-10 text-center text-xs text-kfc-charcoal/40 font-medium">
                        Kinal Fried Chicken &copy; 2026
                    </p>
                </div>
            </div>
        </div>
    );
};
