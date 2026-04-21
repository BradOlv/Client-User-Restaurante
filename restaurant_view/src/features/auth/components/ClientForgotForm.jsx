import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const ClientForgotForm = ({ onSwitch }) => {
    
    const handleForgotSubmit = (e) => {
        e.preventDefault();
        
        toast.success("Instrucciones enviadas a tu correo", {
            icon: <CheckCircleIcon className="w-5 h-5" />,
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });

        onSwitch(); 
    };

    return (
        <form onSubmit={handleForgotSubmit} className="space-y-5 animate-fadeIn">
            <div>
                <label className="block text-xs font-bold text-[#a16207] uppercase mb-1.5 tracking-wide">
                    Correo Electrónico
                </label>
                <input 
                    type="email" 
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all shadow-sm"
                    placeholder="tu-correo@kinal.edu.gt"
                />
            </div>

            <button 
                type="submit"
                className="w-full bg-[#e11d48] hover:bg-red-700 text-white font-black py-3 rounded-xl text-sm shadow-md transition-all active:scale-95"
            >
                ENVIAR INSTRUCCIONES
            </button>

            <div className="text-center pt-2">
                <button 
                    type="button"
                    onClick={onSwitch}
                    className="text-xs font-bold text-[#a16207] hover:text-red-600 transition-colors"
                >
                    ¿Recordaste tu clave? Volver
                </button>
            </div>
        </form>
    );
};