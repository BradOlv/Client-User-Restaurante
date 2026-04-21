import { useState } from "react";
import { ClientLoginForm } from "../components/ClientLoginForm";
import { ClientForgotForm } from "../components/ClientForgotForm";

export const ClientLoginPage = () => {
    // Estados para controlar qué formulario ver
    const [isLogin, setIsLogin] = useState(true);
    const [isForgot, setIsForgot] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#7f1d1d] p-4 transition-all duration-300">
            {/* Tarjeta Principal */}
            <div className="bg-[#fffaf2] w-full max-w-[400px] rounded-3xl shadow-2xl p-8 border border-orange-100">
                
                {/* Logo Circular */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#facc15] shadow-md overflow-hidden">
                        <img 
                            src="/src/assets/img/hero.png" 
                            alt="Logo KFC" 
                            className="w-14 h-14 object-contain" 
                        />
                    </div>
                </div>

                {/* Títulos Dinámicos */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">
                        {isForgot 
                            ? "Recuperar Acceso" 
                            : isLogin ? "¡Bienvenido de Nuevo!" : "Únete a la Familia"
                        }
                    </h1>
                    <p className="text-[10px] font-bold text-[#dc2626] uppercase tracking-[0.2em] mt-1">
                        {isForgot 
                            ? "Te enviaremos un correo rápido" 
                            : "El mejor sabor de Kinal"
                        }
                    </p>
                </div>

                {isForgot ? (
                    <ClientForgotForm 
                        onSwitch={() => setIsForgot(false)} 
                    />
                ) : (
                    <ClientLoginForm 
                        isLogin={isLogin} 
                        setIsLogin={setIsLogin} 
                        onForgot={() => setIsForgot(true)} 
                    />
                )}

                {/* Footer de la Tarjeta */}
                <p className="mt-8 text-center text-[11px] text-gray-400 font-medium">
                    Kinal Fried Chicken &copy; 2026
                </p>
            </div>
        </div>
    );
};