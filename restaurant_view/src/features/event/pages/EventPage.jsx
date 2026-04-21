import { useState } from 'react';
import { ClipboardDocumentListIcon, UserGroupIcon, CalendarIcon, MapPinIcon, CakeIcon, HeartIcon, BriefcaseIcon, AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline';

export const EventPage = () => {
    const [formData, setFormData] = useState({
        eventType: 'cumpleaños',
        date: '',
        guestCount: 20,
        name: '',
        phone: '',
        email: '',
        description: '',
        budget: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const eventTypes = [
        { id: 'cumpleaños', label: 'Cumpleaños', icon: CakeIcon },
        { id: 'boda', label: 'Boda', icon: HeartIcon },
        { id: 'corporativo', label: 'Evento Corporativo', icon: BriefcaseIcon },
        { id: 'graduacion', label: 'Graduación', icon: AcademicCapIcon },
        { id: 'otro', label: 'Otro Evento', icon: SparklesIcon }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Evento registrado:', formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-[#fdfcf0] py-12">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-black text-[#7f1d1d] mb-2 tracking-tight">
                        Eventos Privados
                    </h1>
                    <p className="text-gray-600 text-lg">Haz tu evento memorable con Kinal Fried Chicken</p>
                </div>

                {isSubmitted && (
                    <div className="mb-8 p-6 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-lg">
                        <p className="font-bold text-lg">¡Solicitud enviada!</p>
                        <p>Nuestro equipo se contactará contigo en breve.</p>
                    </div>
                )}

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Formulario */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Tipo de Evento */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-4">Tipo de Evento</label>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                    {eventTypes.map(type => {
                                        const IconComponent = type.icon;
                                        return (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, eventType: type.id }))}
                                            className={`p-4 rounded-xl text-center transition-all border-2 ${
                                                formData.eventType === type.id
                                                    ? 'border-[#e11d48] bg-[#ffe6ed]'
                                                    : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                                            }`}
                                        >
                                            <div className="mb-1 flex justify-center">
                                                <IconComponent className="w-6 h-6 text-gray-700" />
                                            </div>
                                            <p className="text-xs font-bold text-gray-700">{type.label}</p>
                                        </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fecha */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2 flex items-center gap-2">
                                    <CalendarIcon className="w-5 h-5" />
                                    Fecha del Evento
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

                            {/* Número de Invitados */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2 flex items-center gap-2">
                                    <UserGroupIcon className="w-5 h-5" />
                                    Número de Invitados
                                </label>
                                <input
                                    type="number"
                                    name="guestCount"
                                    value={formData.guestCount}
                                    onChange={handleChange}
                                    min="10"
                                    max="500"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                />
                            </div>

                            {/* Presupuesto */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2">Presupuesto Estimado</label>
                                <input
                                    type="number"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    placeholder="Q 0.00"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                />
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

                            {/* Descripción */}
                            <div>
                                <label className="block text-sm font-bold text-[#7f1d1d] mb-2">Descripción del Evento</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Cuéntanos sobre tu evento..."
                                    rows="5"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-4 rounded-2xl text-lg uppercase tracking-widest transition-all shadow-lg active:scale-95"
                            >
                                Solicitar Cotización
                            </button>
                        </form>
                    </div>

                    {/* Paquetes Destacados */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-[#7f1d1d] mb-4">Paquetes Disponibles</h3>

                        {[
                            {
                                name: 'Básico',
                                price: 'Q 800',
                                features: ['20-50 personas', 'Pollo frito', 'Bebidas', 'Decoración básica']
                            },
                            {
                                name: 'Estándar',
                                price: 'Q 1,500',
                                features: ['50-100 personas', 'Combo completo', 'Bebidas ilimitadas', 'DJ incluido']
                            },
                            {
                                name: 'Premium',
                                price: 'Q 2,500+',
                                features: ['100+ personas', 'Menú personalizado', 'Camarero', 'Decoración premium']
                            }
                        ].map((pkg, idx) => (
                            <div key={idx} className={`rounded-2xl p-6 border-2 ${idx === 1 ? 'bg-[#ffe6ed] border-[#e11d48]' : 'bg-white border-gray-200'}`}>
                                <h4 className="font-black text-[#7f1d1d] mb-2">{pkg.name}</h4>
                                <p className="text-2xl font-black text-[#e11d48] mb-4">{pkg.price}</p>
                                <ul className="space-y-2">
                                    {pkg.features.map((feature, fidx) => (
                                        <li key={fidx} className="text-sm text-gray-700 flex items-start gap-2">
                                            <span className="text-[#e11d48] font-bold">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
