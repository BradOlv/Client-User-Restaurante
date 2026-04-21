import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Importaciones de imágenes corregidas
import POLLO_IMG from "../../assets/img/pollo.jpg";
import ALITAS_IMG from "../../assets/img/alitas.png";
import CAMARONES_IMG from "../../assets/img/camarones.png";
import PIZZA_IMG from "../../assets/img/pizza.jpg";
import ENSALADAS_IMG from "../../assets/img/ensaladas.png";
import LOGO_KINAL from "../../assets/img/logofriedchicken.png"; 

export const ClientPortalPage = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "ENSALADA DE CAMARONES",
            subtitle: "¡NUEVO TAZÓN DE TEMPORADA!",
            bgColor: "bg-[#e11d48]", 
            textColor: "text-white",
            img: CAMARONES_IMG
        },
        {
            id: 2,
            title: "MEGA COMBO KINAL",
            subtitle: "12 PIEZAS + PAPAS + GASEOSA",
            bgColor: "bg-[#fb923c]", 
            textColor: "text-white",
            img: POLLO_IMG
        },
        {
            id: 3,
            title: "PIZZAS ARTESANALES",
            subtitle: "EL MEJOR SABOR ITALIANO",
            bgColor: "bg-[#facc15]", 
            textColor: "text-red-900",
            img: PIZZA_IMG
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const menuCategories = [
        { id: 1, title: "CAMARONES KINAL", span: "md:col-span-2", bg: "bg-[#facc15]", text: "text-red-900", img: CAMARONES_IMG },
        { id: 2, title: "KINALITOS Y ALITAS", span: "md:col-span-1", bg: "bg-[#fb923c]", text: "text-white", img: ALITAS_IMG },
        { id: 3, title: "POLLO TRADICIONAL", span: "md:col-span-1", bg: "bg-[#e11d48]", text: "text-white", img: POLLO_IMG },
        { id: 4, title: "PIZZAS", span: "md:col-span-1", bg: "bg-[#fb923c]", text: "text-white", img: PIZZA_IMG },
        { id: 5, title: "ENSALADAS Y DESAYUNOS", span: "md:col-span-1", bg: "bg-[#facc15]", text: "text-red-900", img: ENSALADAS_IMG },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="space-y-16 pb-12">
                
                {/* --- SECCIÓN 1: HERO CARRUSEL --- */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl group">
                    {slides.map((slide, index) => (
                        <div 
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row justify-between items-center p-12 md:px-24
                                ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
                                ${slide.bgColor}
                                bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]
                            `}
                        >
                            <div className="text-center md:text-left z-10 max-w-xl">
                                <h2 className={`text-5xl md:text-7xl font-black italic tracking-tighter drop-shadow-xl ${slide.textColor} leading-none`}>
                                    {slide.title}
                                </h2>
                                <p className={`mt-6 text-xl md:text-3xl font-bold tracking-widest ${slide.textColor} opacity-90`}>
                                    {slide.subtitle}
                                </p>
                            </div>
                            
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-white/20 rounded-full blur-3xl"></div>
                                <img 
                                    src={slide.img} 
                                    alt={slide.title} 
                                    className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] animate-float"
                                />
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
                        {slides.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125 w-12" : "bg-white/40"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* --- SECCIÓN 2: BARRA BIENVENIDA --- */}
                <div className="max-w-5xl mx-auto -mt-24 relative z-30 px-4">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-gray-100 gap-6">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-[#fef2f2] rounded-full flex items-center justify-center border border-red-50 text-3xl shadow-inner">🍗</div>
                            <div>
                                <h3 className="font-black text-2xl text-gray-800 tracking-tight leading-none">¡Bienvenido, Bradley!</h3>
                                <p className="mt-1 text-sm text-gray-400 font-bold uppercase tracking-widest">Puntos Kinal: <span className="text-[#e11d48]">150</span></p>
                            </div>
                        </div>
                      <div className="flex w-full md:w-auto gap-4">
                            <button
                                onClick={() => navigate('/portal/perfil')} // <-- AGREGAR ESTO
                                className="flex-1 md:flex-none px-10 py-4 bg-[#facc15] hover:bg-yellow-500 text-red-900 font-black rounded-2xl text-xs uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95"
                            >
                                Mi Cuenta
                            </button>
                            <button
                                onClick={() => navigate('/portal/menu')}
                                className="flex-1 md:flex-none px-10 py-4 bg-[#e11d48] hover:bg-red-700 text-white font-black rounded-2xl text-xs uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95"
                            >
                                Ver Menú
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- SECCIÓN 3: GRID DE CATEGORÍAS --- */}
                <div className="px-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {menuCategories.map((cat) => (
                            <div 
                                key={cat.id} 
                                onClick={() => navigate(`/portal/menu/${cat.title}`)}
                                className={`${cat.span} ${cat.bg} rounded-[3rem] h-64 md:h-80 p-10 relative overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500`}
                            >
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10 mix-blend-overlay"></div>
                                
                                <div className="relative z-10 h-full flex flex-col justify-between items-start">
                                    {/* Ajuste de ancho del título para que no choque con la imagen */}
                                    <h3 className={`text-4xl md:text-5xl font-black w-[60%] leading-[0.85] tracking-tighter ${cat.text} group-hover:scale-105 transition-transform origin-top-left`}>
                                        {cat.title}
                                    </h3>
                                    
                                    <button className={`px-8 py-3 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] shadow-md transition-all hover:translate-y-[-4px]
                                        ${cat.bg === 'bg-[#facc15]' ? 'bg-white text-red-700' : 'bg-[#facc15] text-red-900'}
                                    `}>
                                        Seleccionar
                                    </button>
                                </div>

                                <div className="absolute -bottom-8 -right-10 w-56 h-56 md:w-72 md:h-72 group-hover:scale-110 transition-transform duration-700 rotate-12 group-hover:rotate-0 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
                                    <img 
                                        src={cat.img} 
                                        alt={cat.title} 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};