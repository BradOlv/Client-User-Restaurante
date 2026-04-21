import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClockIcon, MapPinIcon, PrinterIcon } from '@heroicons/react/24/outline';

export const OrderHistoryPage = () => {
    const navigate = useNavigate();
    const [orders] = useState([
        {
            id: '#KFC-2026-001',
            date: '2026-04-20',
            time: '3:45 PM',
            total: 285.50,
            status: 'Entregado',
            items: ['Mega Combo (2)', 'Ensalada', 'Gaseosas'],
            location: 'Entrega a domicilio'
        },
        {
            id: '#KFC-2026-002',
            date: '2026-04-18',
            time: '12:30 PM',
            total: 125.00,
            status: 'Entregado',
            items: ['Menú 2 piezas', 'Papas'],
            location: 'Retiro en local'
        },
        {
            id: '#KFC-2026-003',
            date: '2026-04-15',
            time: '6:00 PM',
            total: 450.75,
            status: 'Entregado',
            items: ['Banquete 24 piezas', 'Salsas variadas', 'Refrescos'],
            location: 'Entrega a domicilio'
        }
    ]);

    const getStatusColor = (status) => {
        switch(status) {
            case 'Entregado': return 'bg-green-100 text-green-800 border-green-300';
            case 'En camino': return 'bg-blue-100 text-blue-800 border-blue-300';
            case 'Preparando': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            default: return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    return (
        <div className="min-h-screen bg-[#fdfcf0] py-12">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-black text-[#7f1d1d] mb-2">Mis Pedidos</h1>
                    <p className="text-gray-600">Historial completo de tus compras</p>
                </div>

                {orders.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-md">
                        <p className="text-gray-500 text-lg mb-4">Aún no tienes pedidos</p>
                        <button
                            onClick={() => navigate('/portal/menu')}
                            className="bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3 px-8 rounded-xl transition-all"
                        >
                            Ir al Menú
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all"
                            >
                                <div className="grid md:grid-cols-5 gap-6">
                                    {/* Info Básica */}
                                    <div className="md:col-span-2">
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Número de Pedido</p>
                                        <p className="text-2xl font-black text-[#7f1d1d] mb-4">{order.id}</p>
                                        <div className="space-y-2 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <ClockIcon className="w-4 h-4" />
                                                <span>{order.date} a las {order.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPinIcon className="w-4 h-4" />
                                                <span>{order.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Items */}
                                    <div className="md:col-span-1">
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Artículos</p>
                                        <ul className="text-sm space-y-1">
                                            {order.items.slice(0, 2).map((item, idx) => (
                                                <li key={idx} className="text-gray-700">• {item}</li>
                                            ))}
                                            {order.items.length > 2 && (
                                                <li className="text-gray-500 italic">+{order.items.length - 2} más</li>
                                            )}
                                        </ul>
                                    </div>

                                    {/* Total y Estado */}
                                    <div className="md:col-span-1">
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Total</p>
                                        <p className="text-2xl font-black text-[#e11d48] mb-4">Q{order.total.toFixed(2)}</p>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </div>

                                    {/* Acciones */}
                                    <div className="md:col-span-1 flex items-end gap-2">
                                        <button
                                            onClick={() => navigate(`/portal/pedido/${order.id}`)}
                                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-xl text-sm transition-all"
                                        >
                                            Ver Detalles
                                        </button>
                                        <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 p-2 rounded-xl transition-all">
                                            <PrinterIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
