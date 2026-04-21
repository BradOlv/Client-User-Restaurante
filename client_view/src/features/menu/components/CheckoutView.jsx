import { useNavigate } from "react-router-dom";

export const CheckoutView = () => {
    const navigate = useNavigate();

    // Estilos consistentes
    const camperoDark = "#4a3728";
    const titleStyle = { color: camperoDark, fontWeight: '700', textTransform: 'uppercase' };
    const bodyTextStyle = { color: camperoDark, fontWeight: '500' };

    return (
        <div className="bg-[#fdfaf5] min-h-screen py-10">
            <div className="max-w-3xl mx-auto px-6">
                
                {/* Título Principal */}
                <h1 style={titleStyle} className="text-3xl text-center mb-10 tracking-tighter">
                    Finalizar Pedido
                </h1>

                <div className="space-y-6">
                    {/* Tarjeta 1: Método de Pago */}
                    <section className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
                        <h2 style={titleStyle} className="text-xl mb-6 border-b border-gray-100 pb-4">
                            ¿Cómo deseas pagar?
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Opción Tarjeta */}
                            <label className="relative flex items-center p-5 rounded-2xl border-2 border-orange-100 bg-[#fdfaf5] cursor-pointer hover:border-[#ff6b0b] transition-all">
                                <input type="radio" name="payment" className="w-5 h-5 accent-[#ff6b0b]" defaultChecked />
                                <div className="ml-4 flex items-center gap-3">
                                    <span className="text-2xl">💳</span>
                                    <span style={{...bodyTextStyle, fontWeight: '700'}}>Tarjeta de Crédito/Débito</span>
                                </div>
                            </label>

                            {/* Opción Efectivo */}
                            <label className="relative flex items-center p-5 rounded-2xl border-2 border-transparent bg-gray-50 cursor-pointer hover:border-gray-200 transition-all">
                                <input type="radio" name="payment" className="w-5 h-5 accent-[#ff6b0b]" />
                                <div className="ml-4 flex items-center gap-3">
                                    <span className="text-2xl">💵</span>
                                    <span style={bodyTextStyle}>Efectivo</span>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Tarjeta 2: Resumen de Cobro */}
                    <section className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
                        <h2 style={titleStyle} className="text-xl mb-6 border-b border-gray-100 pb-4">
                            Resumen del pago
                        </h2>
                        
                        <div className="space-y-3">
                            <div className="flex justify-between" style={bodyTextStyle}>
                                <span>Productos</span>
                                <span className="font-bold">Q70.00</span>
                            </div>
                            <div className="flex justify-between" style={bodyTextStyle}>
                                <span>Costo de envío</span>
                                <span className="text-green-600 font-bold uppercase text-sm">Gratis</span>
                            </div>
                            
                            <div className="pt-4 mt-4 border-t-4 border-[#ff6b0b] flex justify-between items-center">
                                <span style={{...bodyTextStyle, fontSize: '1.25rem', fontWeight: '700'}}>Total a pagar</span>
                                <span style={{color: '#ff6b0b', fontWeight: '800', fontSize: '2rem'}}>Q70.00</span>
                            </div>
                        </div>
                    </section>

                    {/* Botones de Acción Final */}
                    <div className="flex flex-col gap-4 pt-6">
                        <button 
                            onClick={() => navigate('/portal/confirmacion')}
                            className="w-full py-5 bg-[#ff6b0b] text-white font-bold rounded-2xl shadow-xl uppercase tracking-widest text-lg hover:brightness-110 transition-all active:scale-95"
                        >
                            Confirmar Pedido
                        </button>
                        
                        <button 
                            onClick={() => navigate('/portal/carrito')}
                            className="w-full py-4 text-gray-400 font-bold uppercase tracking-widest text-sm hover:text-[#4a3728]"
                        >
                            Regresar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};