import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, MapPinIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline';

export const OrderDetailPage = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();

    const order = {
        id: orderId,
        date: '2026-04-20',
        time: '3:45 PM',
        status: 'Entregado',
        deliveryDate: '2026-04-20',
        deliveryTime: '4:15 PM',
        items: [
            { name: 'Mega Combo Kinal', quantity: 2, price: 199, total: 398 },
            { name: 'Ensalada de Temporada', quantity: 1, price: 45, total: 45 },
            { name: 'Bebidas Surtidas', quantity: 3, price: 15, total: 45 }
        ],
        subtotal: 488,
        tax: 58.56,
        deliveryFee: 0,
        total: 546.56,
        address: 'Calle Principal 123, Zona 10',
        phone: '+502 7890 1234',
        notes: 'Sin picante, por favor'
    };

    const timeline = [
        { step: 'Pedido confirmado', time: '3:45 PM', completed: true },
        { step: 'En preparación', time: '3:50 PM', completed: true },
        { step: 'En camino', time: '4:00 PM', completed: true },
        { step: 'Entregado', time: '4:15 PM', completed: true }
    ];

    return (
        <div className="min-h-screen bg-[#fdfcf0] py-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header con Botón Atrás */}
                <button
                    onClick={() => navigate('/portal/pedidos')}
                    className="flex items-center gap-2 text-[#e11d48] font-bold mb-8 hover:translate-x-[-4px] transition-all"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                    Volver a Pedidos
                </button>

                {/* ID y Estado */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Número de Pedido</p>
                            <h1 className="text-4xl font-black text-[#7f1d1d]">{order.id}</h1>
                        </div>
                        <div className="text-center">
                            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 border border-green-300 rounded-full text-sm font-bold">
                                ✓ {order.status}
                            </span>
                        </div>
                    </div>

                    {/* Datos Básicos */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Fecha</p>
                            <p className="text-lg font-bold text-gray-800">{order.date} - {order.time}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Entrega</p>
                            <p className="text-lg font-bold text-gray-800">{order.deliveryDate} - {order.deliveryTime}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Tipo</p>
                            <p className="text-lg font-bold text-gray-800">Entrega a Domicilio</p>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-6">
                    <h2 className="text-2xl font-black text-[#7f1d1d] mb-6">Estado del Pedido</h2>
                    <div className="space-y-4">
                        {timeline.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${item.completed ? 'bg-[#e11d48]' : 'bg-gray-300'}`}>
                                    {item.completed ? '✓' : idx + 1}
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-gray-800">{item.step}</p>
                                    <p className="text-sm text-gray-500">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Artículos */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-6">Artículos</h2>
                        <div className="space-y-4 mb-6">
                            {order.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-start pb-4 border-b border-gray-100">
                                    <div>
                                        <p className="font-bold text-gray-800">{item.name}</p>
                                        <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                                    </div>
                                    <p className="font-bold text-[#e11d48]">Q{item.total.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>

                        {/* Resumen */}
                        <div className="space-y-3 border-t-2 border-gray-200 pt-4">
                            <div className="flex justify-between text-gray-700">
                                <span>Subtotal:</span>
                                <span>Q{order.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Impuesto:</span>
                                <span>Q{order.tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Envío:</span>
                                <span>{order.deliveryFee === 0 ? 'Gratis' : 'Q' + order.deliveryFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-black text-lg text-[#e11d48] border-t border-gray-200 pt-3 mt-3">
                                <span>Total:</span>
                                <span>Q{order.total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Detalles de Entrega */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-black text-[#7f1d1d] mb-6 flex items-center gap-2">
                                <MapPinIcon className="w-6 h-6" />
                                Dirección de Entrega
                            </h2>
                            <p className="text-lg font-bold text-gray-800 mb-2">{order.address}</p>
                            <p className="text-gray-600 mb-4">Teléfono: {order.phone}</p>
                            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-all">
                                Ver en Mapa
                            </button>
                        </div>

                        {order.notes && (
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-2xl p-6">
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Notas Especiales</p>
                                <p className="text-gray-800 font-semibold">{order.notes}</p>
                            </div>
                        )}

                        {/* Acciones */}
                        <div className="space-y-3">
                            <button className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3 rounded-xl transition-all">
                                Repetir Pedido
                            </button>
                            <button className="w-full bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50 transition-all">
                                Descargar Recibo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
