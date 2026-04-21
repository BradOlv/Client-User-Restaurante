import { useState } from 'react';
import { CalendarIcon, ClockIcon, UsersIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const ReservationPage = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 2,
        name: '',
        phone: '',
        email: '',
        specialRequests: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reserva enviada:', formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-[#fdfcf0] py-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-black text-[#7f1d1d] mb-2 tracking-tight">
                        Reserva tu Mesa
                    </h1>
                    <p className="text-gray-600 text-lg">Asegura tu lugar en Kinal Fried Chicken</p>
                </div>

                {isSubmitted && (
                    <div className="mb-8 p-6 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-lg">
                        <p className="font-bold text-lg">¡Reserva confirmada!</p>
                        <p>Te enviaremos un correo de confirmación en breve.</p>
                    </div>
                )}

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Formulario */}
                    <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Fecha */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2 flex items-center gap-2">
                                    <CalendarIcon className="w-5 h-5" />
                                    Fecha
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                />
                            </div>

                            {/* Hora */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2 flex items-center gap-2">
                                    <ClockIcon className="w-5 h-5" />
                                    Hora
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                />
                            </div>

                            {/* Número de Personas */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2 flex items-center gap-2">
                                    <UsersIcon className="w-5 h-5" />
                                    Número de Personas
                                </label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Nombre */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2">Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Tu nombre"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                />
                            </div>

                            {/* Teléfono */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2">Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+502 XXXX XXXX"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2">Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="tu@email.com"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                />
                            </div>

                            {/* Solicitudes Especiales */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2">Solicitudes Especiales</label>
                                <textarea
                                    name="specialRequests"
                                    value={formData.specialRequests}
                                    onChange={handleChange}
                                    placeholder="Alergias, ocasión especial, etc."
                                    rows="4"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-4 rounded-2xl text-lg uppercase tracking-widest transition-all shadow-lg active:scale-95"
                            >
                                Confirmar Reserva
                            </button>
                        </form>
                    </div>

                    {/* Info Lateral */}
                    <div className="space-y-6">
                        <div className="bg-[#fffaf2] rounded-3xl p-6 border-2 border-[#e11d48]">
                            <h3 className="font-black text-[#7f1d1d] text-lg mb-4">Horario de Atención</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p><strong>Lunes - Viernes:</strong> 11:00 AM - 11:00 PM</p>
                                <p><strong>Sábado:</strong> 10:00 AM - 12:00 AM</p>
                                <p><strong>Domingo:</strong> 10:00 AM - 11:00 PM</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#fb923c] to-[#e11d48] rounded-3xl p-6 text-white">
                            <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                                <MapPinIcon className="w-5 h-5" />
                                Ubicación
                            </h3>
                            <p className="text-sm mb-4">Centro Comercial Kinal</p>
                            <button className="w-full bg-white text-[#e11d48] font-bold py-2 rounded-xl hover:bg-gray-100 transition-all">
                                Ver en Mapa
                            </button>
                        </div>

                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md">
                            <h3 className="font-black text-[#7f1d1d] mb-4">Preguntas Frecuentes</h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="font-bold text-gray-800">¿Cuándo puedo cancelar?</p>
                                    <p className="text-gray-600">Hasta 24 horas antes</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">¿Hay costo por reserva?</p>
                                    <p className="text-gray-600">No, es completamente gratis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
