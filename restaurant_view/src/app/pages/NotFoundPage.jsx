import { useNavigate } from "react-router-dom";
import { Drumstick, Home } from "lucide-react";

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-kfc-cream flex items-center justify-center p-6 grain-overlay relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-kfc-orange rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-kfc-yellow rounded-full blur-3xl opacity-30" />

            <div className="relative text-center max-w-lg">
                <div className="w-28 h-28 mx-auto bg-kfc-red rounded-full flex items-center justify-center shadow-2xl rotate-12 animate-float">
                    <Drumstick className="w-14 h-14 text-white" strokeWidth={2.5} />
                </div>

                <h1 className="font-display text-7xl md:text-9xl mt-6 leading-none text-kfc-charcoal">
                    4<span className="text-kfc-orange">0</span>4
                </h1>
                <h2 className="font-heading text-xl md:text-2xl uppercase mt-2 text-kfc-charcoal">
                    Esta página voló como pollo
                </h2>
                <p className="text-kfc-charcoal/60 mt-4">
                    Parece que la página que buscas no existe. Pero no te preocupes, te llevamos de vuelta a un lugar lleno de sabor.
                </p>

                <button
                    onClick={() => navigate("/portal")}
                    className="mt-8 rounded-full bg-kfc-red hover:bg-kfc-red-dark text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors inline-flex items-center gap-2"
                >
                    <Home className="w-4 h-4" /> Volver al inicio
                </button>
            </div>
        </div>
    );
};
