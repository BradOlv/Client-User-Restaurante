import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import toast from "react-hot-toast";

export const ClientLoginForm = ({ isLogin, setIsLogin, onForgot }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(isLogin ? "¡Bienvenido de vuelta!" : "¡Cuenta creada con éxito!");
        setTimeout(() => navigate("/portal"), 600);
    };

    return (
        <div className="space-y-5 animate-fadeIn">
            <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                    <div>
                        <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60 block">
                            Nombre completo
                        </label>
                        <div className="relative mt-2">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-kfc-charcoal/40" />
                            <input
                                type="text"
                                required
                                placeholder="Tu nombre"
                                className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 bg-white outline-none focus:border-kfc-orange transition-colors"
                            />
                        </div>
                    </div>
                )}

                <div>
                    <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60 block">
                        Correo electrónico
                    </label>
                    <div className="relative mt-2">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-kfc-charcoal/40" />
                        <input
                            type="email"
                            required
                            placeholder="tu@email.com"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 bg-white outline-none focus:border-kfc-orange transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center">
                        <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">
                            Contraseña
                        </label>
                        {isLogin && (
                            <button
                                type="button"
                                onClick={onForgot}
                                className="text-xs font-bold text-kfc-orange hover:underline"
                            >
                                ¿Olvidaste?
                            </button>
                        )}
                    </div>
                    <div className="relative mt-2">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-kfc-charcoal/40" />
                        <input
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 bg-white outline-none focus:border-kfc-orange transition-colors"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className={`w-full rounded-full text-white font-bold uppercase tracking-wider py-4 text-base shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 ${
                        isLogin
                            ? "bg-kfc-red hover:bg-kfc-red-dark"
                            : "bg-kfc-orange hover:bg-kfc-orange-dark"
                    }`}
                >
                    {isLogin ? "Ingresar a comer" : "Crear mi cuenta"}
                </button>
            </form>

            <div className="text-center pt-2">
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm font-bold text-kfc-charcoal/60 hover:text-kfc-orange transition-colors"
                >
                    {isLogin
                        ? "¿No tienes cuenta? Regístrate aquí"
                        : "¿Ya tienes cuenta? Inicia sesión"}
                </button>
            </div>
        </div>
    );
};
