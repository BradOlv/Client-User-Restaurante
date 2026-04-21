import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon, CreditCardIcon, MapPinIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export const CheckoutView = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [deliveryType, setDeliveryType] = useState('delivery');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        addressDetails: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        terms: false
    });
    const [errors, setErrors] = useState({});

    // Datos de ejemplo
    const cartItems = [
        { name: 'MEGA COMBO KINAL', quantity: 2, price: 199, total: 398 },
        { name: 'Ensalada de Temporada', quantity: 1, price: 45, total: 45 }
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
    const tax = subtotal * 0.12;
    const deliveryFee = deliveryType === 'delivery' ? 0 : 0;
    const total = subtotal + tax + deliveryFee;

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateStep = (step) => {
        const newErrors = {};
        
        if (step === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = 'Nombre requerido';
            if (!formData.email.trim()) newErrors.email = 'Email requerido';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
            if (!formData.phone.trim()) newErrors.phone = 'Teléfono requerido';
        }
        
        if (step === 2) {
            if (deliveryType === 'delivery' && !formData.address.trim()) newErrors.address = 'Dirección requerida';
        }

        if (step === 3) {
            if (paymentMethod === 'card') {
                if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Número de tarjeta requerido';
                if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Fecha de vencimiento requerida';
                if (!formData.cvv.trim()) newErrors.cvv = 'CVV requerido';
            }
            if (!formData.terms) newErrors.terms = 'Debes aceptar los términos';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
            console.log('Pedido confirmado:', formData);
            navigate('/portal/confirmacion');
        }
    };

    const renderStep = () => {
        switch(currentStep) {
            case 1:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-6">Información de Contacto</h2>
                        
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo *</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                    errors.fullName ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-[#e11d48]'
                                }`}
                                placeholder="Tu nombre"
                            />
                            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                    errors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-[#e11d48]'
                                }`}
                                placeholder="tu@email.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                    errors.phone ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-[#e11d48]'
                                }`}
                                placeholder="+502 XXXX XXXX"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                    </div>
                );
            
            case 2:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-6">Tipo de Entrega</h2>
                        
                        <div className="space-y-3">
                            <label className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                deliveryType === 'delivery' ? 'border-[#e11d48] bg-[#ffe6ed]' : 'border-gray-200 hover:border-gray-300'
                            }`}>
                                <input
                                    type="radio"
                                    name="deliveryType"
                                    value="delivery"
                                    checked={deliveryType === 'delivery'}
                                    onChange={(e) => setDeliveryType(e.target.value)}
                                    className="w-5 h-5 accent-[#e11d48] mt-1"
                                />
                                <div className="ml-4">
                                    <p className="font-bold text-gray-800">Entrega a Domicilio</p>
                                    <p className="text-sm text-gray-600">Envío gratis para órdenes mayores a Q100</p>
                                </div>
                            </label>

                            <label className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                deliveryType === 'pickup' ? 'border-[#e11d48] bg-[#ffe6ed]' : 'border-gray-200 hover:border-gray-300'
                            }`}>
                                <input
                                    type="radio"
                                    name="deliveryType"
                                    value="pickup"
                                    checked={deliveryType === 'pickup'}
                                    onChange={(e) => setDeliveryType(e.target.value)}
                                    className="w-5 h-5 accent-[#e11d48] mt-1"
                                />
                                <div className="ml-4">
                                    <p className="font-bold text-gray-800">Retiro en Local</p>
                                    <p className="text-sm text-gray-600">Recoge tu pedido en 20-30 minutos</p>
                                </div>
                            </label>
                        </div>

                        {deliveryType === 'delivery' && (
                            <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Dirección *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                                            errors.address ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-[#e11d48]'
                                        }`}
                                        placeholder="Calle y número"
                                    />
                                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Detalles Adicionales</label>
                                    <textarea
                                        name="addressDetails"
                                        value={formData.addressDetails}
                                        onChange={handleInputChange}
                                        placeholder="Apartamento, edificio, referencias, etc."
                                        rows="3"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#e11d48]"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                );
            
            case 3:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black text-[#7f1d1d] mb-6">Método de Pago</h2>
                        
                        <div className="space-y-3 mb-6">
                            <label className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                paymentMethod === 'card' ? 'border-[#e11d48] bg-[#ffe6ed]' : 'border-gray-200 hover:border-gray-300'
                            }`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="card"
                                    checked={paymentMethod === 'card'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="w-5 h-5 accent-[#e11d48] mt-1"
                                />
                                <div className="ml-4 flex-1">
                                    <p className="font-bold text-gray-800">Tarjeta de Crédito/Débito</p>
                                    <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
                                </div>
                            </label>

                            <label className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                paymentMethod === 'cash' ? 'border-[#e11d48] bg-[#ffe6ed]' : 'border-gray-200 hover:border-gray-300'
                            }`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cash"
                                    checked={paymentMethod === 'cash'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="w-5 h-5 accent-[#e11d48] mt-1"
                                />
                                <div className="ml-4 flex-1">
                                    <p className="font-bold text-gray-800">Pago en Efectivo</p>
                                    <p className="text-sm text-gray-600">Paga cuando recibas tu pedido</p>
                                </div>
                            </label>
                        </div>

                        {paymentMethod === 'card' && (
                            <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Número de Tarjeta *</label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        maxLength="16"
                                        placeholder="1234 5678 9012 3456"
                                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors font-mono ${
                                            errors.cardNumber ? 'border-red-500' : 'border-gray-200 focus:border-[#e11d48]'
                                        }`}
                                    />
                                    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Vencimiento *</label>
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            value={formData.expiryDate}
                                            onChange={handleInputChange}
                                            placeholder="MM/YY"
                                            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors font-mono ${
                                                errors.expiryDate ? 'border-red-500' : 'border-gray-200 focus:border-[#e11d48]'
                                            }`}
                                        />
                                        {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">CVV *</label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleInputChange}
                                            maxLength="3"
                                            placeholder="123"
                                            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors font-mono ${
                                                errors.cvv ? 'border-red-500' : 'border-gray-200 focus:border-[#e11d48]'
                                            }`}
                                        />
                                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Términos */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 accent-[#e11d48] mt-1"
                                />
                                <div className="flex-1">
                                    <p className="text-sm text-blue-900">
                                        Acepto los <button className="font-bold hover:underline">términos y condiciones</button> y la <button className="font-bold hover:underline">política de privacidad</button>
                                    </p>
                                </div>
                            </label>
                            {errors.terms && <p className="text-red-500 text-sm mt-2">{errors.terms}</p>}
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#fdfcf0] py-12">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl font-black text-[#7f1d1d] mb-8 text-center">Finalizar Pedido</h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Formulario */}
                    <div className="lg:col-span-2">
                        {/* Progress Steps */}
                        <div className="flex items-center gap-4 mb-8">
                            {[1, 2, 3].map((step) => (
                                <div key={step} className="flex items-center flex-1">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all ${
                                        step < currentStep ? 'bg-green-500 text-white' :
                                        step === currentStep ? 'bg-[#e11d48] text-white' :
                                        'bg-gray-200 text-gray-600'
                                    }`}>
                                        {step < currentStep ? '✓' : step}
                                    </div>
                                    {step < 3 && (
                                        <div className={`flex-1 h-1 mx-2 transition-colors ${
                                            step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                                        }`} />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Paso Actual */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
                            {renderStep()}
                        </div>

                        {/* Botones de Navegación */}
                        <div className="flex gap-4">
                            {currentStep > 1 && (
                                <button
                                    onClick={handlePrev}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-all"
                                >
                                    Atrás
                                </button>
                            )}
                            {currentStep < 3 ? (
                                <button
                                    onClick={handleNext}
                                    className="flex-1 bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3 px-6 rounded-xl transition-all"
                                >
                                    Siguiente
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                                >
                                    <CheckCircleIcon className="w-5 h-5" />
                                    Confirmar Pedido
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Resumen Lateral */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 sticky top-32">
                            <h3 className="font-black text-[#7f1d1d] mb-4">Resumen del Pedido</h3>
                            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                                {cartItems.map((item, idx) => (
                                    <div key={idx} className="flex justify-between text-sm">
                                        <span className="text-gray-700">{item.name} x{item.quantity}</span>
                                        <span className="font-bold text-gray-800">Q{item.total.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2 border-t border-gray-200 pt-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-bold">Q{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Impuesto (12%)</span>
                                    <span className="font-bold">Q{tax.toFixed(2)}</span>
                                </div>
                                {deliveryFee > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Envío</span>
                                        <span className="font-bold">Q{deliveryFee.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="border-t border-gray-200 pt-2 flex justify-between text-lg">
                                    <span className="font-black text-[#7f1d1d]">Total</span>
                                    <span className="font-black text-[#e11d48]">Q{total.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="bg-green-50 rounded-lg p-3 mt-4 flex items-start gap-2 text-xs">
                                <LockClosedIcon className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <p className="text-green-800">Tu pago es seguro y encriptado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};