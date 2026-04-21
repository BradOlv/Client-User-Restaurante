import { useParams, useNavigate } from "react-router-dom";
import POLLO_IMG from "../../../assets/img/pollo.jpg";
import ALITAS_IMG from "../../../assets/img/alitas.png";
import CAMARONES_IMG from "../../../assets/img/camarones.png";

// Mockup de datos para probar
const PRODUCTS_DATA = {
    "CAMARONES KINAL": [
        { id: 101, name: "Camarones al Ajillo", price: 85, img: CAMARONES_IMG, desc: "Bañados en salsa de ajo y perejil." },
        { id: 102, name: "Camarones Empanizados", price: 90, img: CAMARONES_IMG, desc: "Crujientes con salsa tártara." },
    ],
    "KINALITOS Y ALITAS": [
        { id: 201, name: "Alitas BBQ (12 pcs)", price: 75, img: ALITAS_IMG, desc: "Bañadas en nuestra salsa secreta." },
        { id: 202, name: "Kinalitos Picantes", price: 60, img: ALITAS_IMG, desc: "Para los que aguantan el calor." },
    ],
    "POLLO TRADICIONAL": [
        { id: 301, name: "Súper Combo 3 Piezas", price: 45, img: POLLO_IMG, desc: "3 piezas de pollo + papas + bebida." },
        { id: 302, name: "Cubeta Kinal (10 pcs)", price: 125, img: POLLO_IMG, desc: "Para compartir con toda la mara." },
    ]
};

export const CategoryView = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const products = PRODUCTS_DATA[categoryName] || [];

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Encabezado de Categoría */}
            <div className="flex items-center gap-4 mb-10">
                <button 
                    onClick={() => navigate('/portal')}
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all"
                >
                    ⬅️
                </button>
                <h1 className="text-4xl font-black text-gray-800 tracking-tighter italic uppercase">
                    {categoryName}
                </h1>
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center group hover:scale-[1.02] transition-all">
                        <div className="w-48 h-48 mb-4">
                            <img src={product.img} alt={product.name} className="w-full h-full object-contain drop-shadow-lg" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-800 mb-2 leading-none">{product.name}</h3>
                        <p className="text-gray-400 text-sm font-bold mb-4">{product.desc}</p>
                        <div className="w-full flex items-center justify-between mt-auto bg-[#fdfaf5] p-4 rounded-3xl">
                            <span className="text-2xl font-black text-[#e11d48]">Q{product.price}.00</span>
                            <button className="bg-[#ff6b0b] hover:bg-orange-700 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg transition-colors">
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {products.length === 0 && (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-gray-400 italic">Próximamente más productos...</h2>
                </div>
            )}
        </div>
    );
};