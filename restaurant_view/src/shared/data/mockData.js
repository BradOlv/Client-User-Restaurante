// Mock data for Kinal Fried Chicken (KFC) - Frontend only
// Las imágenes locales se importan directamente para que Vite las procese.

import POLLO_IMG from "../../assets/img/pollo.jpg";
import ALITAS_IMG from "../../assets/img/alitas.png";
import CAMARONES_IMG from "../../assets/img/camarones.png";
import PIZZA_IMG from "../../assets/img/pizza.jpg";
import ENSALADAS_IMG from "../../assets/img/ensaladas.png";

export const PRODUCTS = [
    {
        id: 1,
        name: "Pollo Crujiente Original",
        category: "pollo",
        price: 65.0,
        description:
            "Nuestra receta secreta con 11 hierbas y especias. Pollo dorado, jugoso por dentro y crujiente por fuera.",
        image: POLLO_IMG,
        spicy: false,
        bestseller: true,
        rating: 4.9,
    },
    {
        id: 2,
        name: "Pollo Picante Inferno",
        category: "pollo",
        price: 72.0,
        description:
            "Para los valientes. Marinado en chiles habaneros y empanizado con pimienta cayena.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
        spicy: true,
        bestseller: false,
        rating: 4.7,
    },
    {
        id: 3,
        name: "Alitas BBQ Glaseadas",
        category: "alitas",
        price: 58.0,
        description:
            "10 alitas bañadas en salsa BBQ casera ahumada con miel de caña.",
        image: ALITAS_IMG,
        spicy: false,
        bestseller: true,
        rating: 4.8,
    },
    {
        id: 4,
        name: "Tiras Crispy Tenders",
        category: "pollo",
        price: 52.0,
        description:
            "6 tiras de pechuga 100% pollo, doble empanizado extra crujiente.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
        spicy: false,
        bestseller: false,
        rating: 4.6,
    },
    {
        id: 5,
        name: "Camarones Kinal",
        category: "camarones",
        price: 95.0,
        description:
            "Camarones empanizados con coco rallado, servidos con salsa tártara especial.",
        image: CAMARONES_IMG,
        spicy: false,
        bestseller: true,
        rating: 4.9,
    },
    {
        id: 6,
        name: "Pizza Pepperoni Crispy",
        category: "pizzas",
        price: 78.0,
        description:
            "Masa artesanal con pepperoni, mozzarella y orégano fresco.",
        image: PIZZA_IMG,
        spicy: false,
        bestseller: true,
        rating: 4.7,
    },
    {
        id: 7,
        name: "Ensalada César Kinal",
        category: "ensaladas",
        price: 45.0,
        description:
            "Lechuga romana, crutones crujientes, parmesano y aderezo César de la casa.",
        image: ENSALADAS_IMG,
        spicy: false,
        bestseller: false,
        rating: 4.5,
    },
    {
        id: 8,
        name: "Papas Crispy Doradas",
        category: "acompanamientos",
        price: 22.0,
        description:
            "Papas francesas con corte grueso, sazón especial Kinal.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
        spicy: false,
        bestseller: false,
        rating: 4.7,
    },
    {
        id: 9,
        name: "Mazorca con Mantequilla",
        category: "acompanamientos",
        price: 20.0,
        description: "Elote tierno con mantequilla derretida y sal de mar.",
        image: "https://images.unsplash.com/photo-1601064950897-d77674e26c3a?w=800&q=80",
        spicy: false,
        bestseller: false,
        rating: 4.4,
    },
    {
        id: 10,
        name: "Pepsi Helada 600ml",
        category: "bebidas",
        price: 15.0,
        description: "Bebida gaseosa bien fría para acompañar tu festín.",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&q=80",
        spicy: false,
        bestseller: false,
        rating: 4.6,
    },
    {
        id: 11,
        name: "Limonada Chapina",
        category: "bebidas",
        price: 18.0,
        description: "Limonada natural con un toque de menta y miel de caña.",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&q=80",
        spicy: false,
        bestseller: false,
        rating: 4.8,
    },
    {
        id: 12,
        name: "Brownie Caliente",
        category: "postres",
        price: 28.0,
        description:
            "Brownie tibio de chocolate amargo con bola de helado de vainilla.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
        spicy: false,
        bestseller: true,
        rating: 4.9,
    },
];

export const CATEGORIES = [
    { id: "pollo", name: "Pollo", img: POLLO_IMG },
    { id: "alitas", name: "Alitas", img: ALITAS_IMG },
    { id: "camarones", name: "Camarones", img: CAMARONES_IMG },
    { id: "pizzas", name: "Pizzas", img: PIZZA_IMG },
    { id: "ensaladas", name: "Ensaladas", img: ENSALADAS_IMG },
    { id: "acompanamientos", name: "Acompañamientos" },
    { id: "bebidas", name: "Bebidas" },
    { id: "postres", name: "Postres" },
];

export const COMBOS = [
    {
        id: "c1",
        name: "Combo Familiar Crunch",
        tagline: "Para compartir en familia",
        price: 285.0,
        originalPrice: 360.0,
        discount: 21,
        serves: "4-5 personas",
        items: [
            "8 piezas de pollo crujiente",
            "Papas grandes",
            "4 mazorcas",
            "Coleslaw familiar",
            "2 Pepsi 1.5L",
        ],
        image: POLLO_IMG,
        badge: "MÁS VENDIDO",
        color: "orange",
    },
    {
        id: "c2",
        name: "Combo Pareja Picante",
        tagline: "Para los amantes del fuego",
        price: 145.0,
        originalPrice: 180.0,
        discount: 19,
        serves: "2 personas",
        items: [
            "4 piezas pollo picante",
            "2 papas medianas",
            "2 limonadas",
            "1 brownie compartido",
        ],
        image: ALITAS_IMG,
        badge: "PICANTE",
        color: "red",
    },
    {
        id: "c3",
        name: "Combo Mar Kinal",
        tagline: "Sabor del océano",
        price: 130.0,
        originalPrice: 165.0,
        discount: 21,
        serves: "1-2 personas",
        items: [
            "Camarones empanizados",
            "Papas grandes",
            "Ensalada mixta",
            "Limonada chapina",
        ],
        image: CAMARONES_IMG,
        badge: "NUEVO",
        color: "yellow",
    },
    {
        id: "c4",
        name: "Combo Pizza Lovers",
        tagline: "Estilo italiano",
        price: 110.0,
        originalPrice: 140.0,
        discount: 21,
        serves: "2 personas",
        items: [
            "1 pizza mediana",
            "Tiras de pollo",
            "2 bebidas",
            "1 brownie",
        ],
        image: PIZZA_IMG,
        badge: "OFERTA",
        color: "orange",
    },
];

export const BRANCHES = [
    {
        id: "b1",
        name: "Kinal Zona 10",
        address: "4ta Avenida 12-59, Zona 10, Ciudad de Guatemala",
        phone: "+502 2345-6700",
        hours: "Lun - Dom: 10:00 AM - 11:00 PM",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=940&q=80",
    },
    {
        id: "b2",
        name: "Kinal Zona 1 - Centro",
        address: "6ta Avenida 8-20, Zona 1, Ciudad de Guatemala",
        phone: "+502 2345-6701",
        hours: "Lun - Dom: 9:00 AM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=940&q=80",
    },
    {
        id: "b3",
        name: "Kinal Mixco - Miraflores",
        address: "Centro Comercial Miraflores Local 215",
        phone: "+502 2345-6702",
        hours: "Lun - Dom: 10:00 AM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=940&q=80",
    },
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Carlos Méndez",
        role: "Cliente Frecuente",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        quote:
            "El mejor pollo frito que he probado en Guate. Crujiente, jugoso y con ese sabor que te hace volver siempre.",
    },
    {
        id: 2,
        name: "María Fernanda López",
        role: "Foodie",
        avatar: "https://i.pravatar.cc/150?img=47",
        rating: 5,
        quote:
            "El combo familiar es mi favorito para los domingos. Las porciones son enormes y todo está fresquito.",
    },
    {
        id: 3,
        name: "Luis Pérez",
        role: "Empresario",
        avatar: "https://i.pravatar.cc/150?img=33",
        rating: 5,
        quote:
            "Hago mis reservaciones online y siempre tengo mesa lista. Servicio de primera y comida espectacular.",
    },
];

export const STATS = [
    { label: "Sucursales", value: "12+" },
    { label: "Clientes felices", value: "85K" },
    { label: "Pollos servidos / mes", value: "240K" },
    { label: "Años de tradición", value: "15" },
];

export const RECENT_ORDERS = [
    { id: "KFC-1042", date: "26 Abr 2026", items: 4, total: 145.0, status: "Entregado" },
    { id: "KFC-1041", date: "22 Abr 2026", items: 2, total: 78.0, status: "Entregado" },
    { id: "KFC-1040", date: "18 Abr 2026", items: 6, total: 285.0, status: "Entregado" },
    { id: "KFC-1039", date: "15 Abr 2026", items: 3, total: 95.0, status: "Entregado" },
];

export const REVIEWS = [
    { id: 1, user: "Ana G.", avatar: "https://i.pravatar.cc/80?img=20", rating: 5, date: "Hace 2 días", product: "Pollo Crujiente Original", comment: "¡Espectacular! El sabor es inigualable, super crujiente y jugoso." },
    { id: 2, user: "Pedro R.", avatar: "https://i.pravatar.cc/80?img=14", rating: 5, date: "Hace 5 días", product: "Combo Familiar", comment: "Excelente para compartir, las porciones generosas y todo bien caliente." },
    { id: 3, user: "Sofía M.", avatar: "https://i.pravatar.cc/80?img=44", rating: 4, date: "Hace 1 semana", product: "Camarones Kinal", comment: "Muy ricos, podrían venir con más salsa pero por lo demás increíbles." },
    { id: 4, user: "Roberto S.", avatar: "https://i.pravatar.cc/80?img=33", rating: 5, date: "Hace 1 semana", product: "Pizza Pepperoni", comment: "La pizza está deliciosa, masa perfecta y queso a tope." },
];
