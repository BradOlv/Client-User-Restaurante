import toast from "react-hot-toast";
import { Mail, ArrowLeft } from "lucide-react";

export const ClientForgotForm = ({ onSwitch }) => {
    const handleForgotSubmit = (e) => {
        e.preventDefault();
        toast.success("Instrucciones enviadas a tu correo");
        onSwitch();
    };

    return (
        <form onSubmit={handleForgotSubmit} className="space-y-5 animate-fadeIn">
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

            <button
                type="submit"
                className="w-full rounded-full bg-kfc-red hover:bg-kfc-red-dark text-white font-bold uppercase tracking-wider py-4 text-base shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
            >
                Enviar instrucciones
            </button>

            <button
                type="button"
                onClick={onSwitch}
                className="w-full text-sm font-bold text-kfc-charcoal/60 hover:text-kfc-orange transition-colors flex items-center justify-center gap-1"
            >
                <ArrowLeft className="w-4 h-4" /> Volver al login
            </button>
        </form>
    );
};
