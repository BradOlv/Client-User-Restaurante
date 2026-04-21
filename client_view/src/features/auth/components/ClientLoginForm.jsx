import { useNavigate } from 'react-router-dom';

export const ClientLoginForm = ({ isLogin, setIsLogin, onForgot }) => {
    const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Botón presionado, redirigiendo..."); 
    navigate('/portal'); 
};

    return (
        <div className="space-y-6 animate-fadeIn">
            <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                    <div>
                        <label className="block text-xs font-bold text-[#a16207] uppercase mb-1">Nombre Completo</label>
                        <input 
                            type="text" 
                            required
                            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all" 
                            placeholder="Tu nombre" 
                        />
                    </div>
                )}
                
                <div>
                    <label className="block text-xs font-bold text-[#a16207] uppercase mb-1">Correo Electrónico</label>
                    <input 
                        type="email" 
                        required
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all" 
                        placeholder="tu-correo@kinal.edu.gt" 
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-bold text-[#a16207] uppercase">Contraseña</label>
                        {isLogin && (
                            <button 
                                type="button"
                                onClick={onForgot}
                                className="text-[10px] font-bold text-orange-600 hover:text-red-600 transition-colors"
                            >
                                ¿OLVIDASTE TU CLAVE?
                            </button>
                        )}
                    </div>
                    <input 
                        type="password" 
                        required
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all" 
                        placeholder="********" 
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-[#e11d48] hover:bg-red-700 text-white font-black py-3 rounded-xl text-sm shadow-lg transition-all active:scale-95 mt-4"
                >
                    {isLogin ? 'INGRESAR A COMER' : 'CREAR MI CUENTA'}
                </button>
            </form>

            <div className="text-center pt-2">
                <button 
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-xs font-bold text-[#a16207] hover:text-red-600 transition-colors"
                >
                    {isLogin ? "¿No tienes cuenta? Regístrate aquí" : "¿Ya tienes cuenta? Inicia sesión"}
                </button>
            </div>
        </div>
    );
};