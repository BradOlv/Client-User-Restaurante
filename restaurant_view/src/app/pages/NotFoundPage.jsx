import { useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#fdfcf0] flex items-center justify-center px-4">
            <div className="text-center">
                {/* Número 404 Grande */}
                <div className="mb-8">
                    <div className="text-9xl font-black text-[#e11d48] mb-4">404</div>
                    <h1 className="text-5xl font-black text-[#7f1d1d] mb-4">¡Página no encontrada!</h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                        Parece que la página que buscas se fue a tomar un descanso. Déjanos ayudarte a volver al menú.
                    </p>
                </div>

                {/* Icono Decorativo */}
                <div className="mb-8 flex justify-center animate-bounce">
                    <ExclamationTriangleIcon className="w-24 h-24 text-gray-700" />
                </div>

                {/* Botones de Acción */}
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={() => navigate('/portal')}
                        className="bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-4 px-8 rounded-2xl text-lg uppercase tracking-widest transition-all shadow-lg active:scale-95"
                    >
                        Ir al Inicio
                    </button>
                    <button
                        onClick={() => navigate('/portal/menu')}
                        className="bg-white border-2 border-[#e11d48] text-[#e11d48] hover:bg-[#e11d48] hover:text-white font-bold py-4 px-8 rounded-2xl text-lg uppercase tracking-widest transition-all"
                    >
                        Ver Menú
                    </button>
                </div>

                {/* Links Útiles */}
                <div className="mt-12 space-y-2 text-gray-600">
                    <p className="text-sm">¿Necesitas ayuda?</p>
                    <div className="space-x-4">
                        <button className="text-[#e11d48] font-bold hover:underline">Contacto</button>
                        <span className="text-gray-400">•</span>
                        <button className="text-[#e11d48] font-bold hover:underline">Chat en vivo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
