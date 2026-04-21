import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import { TruckIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";

// Importaciones de imágenes
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

    const menuCategories = [
        { id: 1, title: "CAMARONES KINAL", span: "md:col-span-2", bg: "bg-[#facc15]", text: "text-red-900", img: CAMARONES_IMG },
        { id: 2, title: "KINALITOS Y ALITAS", span: "md:col-span-1", bg: "bg-[#fb923c]", text: "text-white", img: ALITAS_IMG },
        { id: 3, title: "POLLO TRADICIONAL", span: "md:col-span-1", bg: "bg-[#e11d48]", text: "text-white", img: POLLO_IMG },
        { id: 4, title: "PIZZAS", span: "md:col-span-1", bg: "bg-[#fb923c]", text: "text-white", img: PIZZA_IMG },
        { id: 5, title: "ENSALADAS Y DESAYUNOS", span: "md:col-span-1", bg: "bg-[#facc15]", text: "text-red-900", img: ENSALADAS_IMG },
    ];

    const testimonials = [
        { name: 'María García', text: 'Excelente servicio y la comida es deliciosa. Pedimos regularmente.', rating: 5, avatar: '👩' },
        { name: 'Juan López', text: 'El mejor pollo frito de la ciudad. ¡100% recomendado!', rating: 5, avatar: '👨' },
        { name: 'Sofia Martínez', text: 'Rápidos, amables y sabroso. Mi familia ama Kinal.', rating: 5, avatar: '👱‍♀️' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-16 pb-12">
            
            {/* SECCIÓN 1: HERO CARRUSEL */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl group">
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row justify-between items-center p-12 md:px-24
                            ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
                            ${slide.bgColor}
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
                                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
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

            {/* SECCIÓN 2: BARRA BIENVENIDA */}
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
                            onClick={() => navigate('/portal/perfil')}
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

            {/* SECCIÓN 3: CARACTERÍSTICAS */}
            <div className="grid md:grid-cols-3 gap-6 px-2">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center">
                    <TruckIcon className="w-12 h-12 text-[#e11d48] mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Envío Rápido</h4>
                    <p className="text-sm text-gray-600">Entrega en 20-30 minutos sin costo adicional</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center">
                    <ClockIcon className="w-12 h-12 text-[#fb923c] mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Siempre Fresco</h4>
                    <p className="text-sm text-gray-600">Preparado al momento con ingredientes de calidad</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center">
                    <SparklesIcon className="w-12 h-12 text-[#facc15] mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Ofertas Especiales</h4>
                    <p className="text-sm text-gray-600">Descuentos exclusivos cada semana</p>
                </div>
            </div>

            {/* SECCIÓN 4: GRID DE CATEGORÍAS */}
            <div className="px-2">
                <h2 className="text-3xl font-black text-[#7f1d1d] mb-8">Nuestras Especialidades</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {menuCategories.map((cat) => (
                        <div 
                            key={cat.id} 
                            onClick={() => navigate('/portal/menu')}
                            className={`${cat.span} ${cat.bg} rounded-[3rem] h-64 md:h-80 p-10 relative overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between items-start">
                                <h3 className={`text-4xl md:text-5xl font-black w-[60%] leading-[0.85] tracking-tighter ${cat.text} group-hover:scale-105 transition-transform origin-top-left`}>
                                    {cat.title}
                                </h3>
                                
                                <button className={`px-8 py-3 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] shadow-md transition-all hover:translate-y-[-4px]
                                    ${cat.bg === 'bg-[#facc15]' ? 'bg-white text-red-700' : 'bg-[#facc15] text-red-900'}
                                `}>
                                    Seleccionar
                                </button>
                            </div>

                            <div className="absolute -bottom-8 -right-10 w-56 h-56 md:w-72 md:h-72 group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
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

            {/* SECCIÓN 5: TESTIMONIOS */}
            <div className="px-2 bg-gradient-to-br from-[#ffe6ed] to-[#fff5cc] rounded-3xl p-12">
                <h2 className="text-3xl font-black text-[#7f1d1d] mb-8 text-center">Lo que Dicen Nuestros Clientes</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((test, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-4xl">{test.avatar}</span>
                                <div>
                                    <h4 className="font-bold text-gray-800">{test.name}</h4>
                                    <div className="flex gap-1">
                                        {[...Array(test.rating)].map((_, i) => (
                                            <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm italic">"{test.text}"</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SECCIÓN 6: CTA FINAL */}
            <div className="px-2 text-center">
                <h2 className="text-3xl font-black text-[#7f1d1d] mb-4">¿Qué Esperas?</h2>
                <p className="text-gray-600 mb-8 text-lg">Haz tu pedido ahora y disfruta del mejor pollo frito de Kinal</p>
                <button
                    onClick={() => navigate('/portal/menu')}
                    className="bg-[#e11d48] hover:bg-[#be123c] text-white font-black py-5 px-12 rounded-2xl text-lg uppercase tracking-widest transition-all shadow-lg active:scale-95 inline-block"
                >
                    Ordenar Ahora
                </button>
            </div>
        </div>
    );
};