import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, Star, ShoppingBag, Heart, LogOut, Edit3 } from "lucide-react";
import toast from "react-hot-toast";

export const ProfileView = () => {
    const navigate = useNavigate();

    const stats = [
        { label: "Pedidos", value: "23", icon: ShoppingBag, color: "bg-kfc-orange" },
        { label: "Puntos KinalCrunch", value: "1,250", icon: Star, color: "bg-kfc-yellow text-kfc-charcoal" },
        { label: "Favoritos", value: "8", icon: Heart, color: "bg-kfc-red" },
    ];

    return (
        <div className="bg-kfc-cream min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-kfc-red">Mi cuenta</span>
                    <h1 className="font-display text-4xl md:text-6xl mt-2 leading-none">
                        Hola, <span className="text-kfc-orange">Bradley</span>
                    </h1>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-white rounded-3xl p-5 border-2 border-kfc-charcoal/5">
                            <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center text-white mb-3`}>
                                <s.icon className="w-5 h-5" />
                            </div>
                            <p className="font-display text-3xl text-kfc-charcoal">{s.value}</p>
                            <p className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60 mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Profile card */}
                <div className="bg-white rounded-3xl border-2 border-kfc-charcoal/5 overflow-hidden">
                    <div className="bg-kfc-orange text-white p-6 grain-overlay relative">
                        <div className="relative flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-kfc-yellow flex items-center justify-center text-kfc-charcoal font-display text-3xl border-4 border-white shadow-lg">
                                BO
                            </div>
                            <div>
                                <h2 className="font-display text-3xl">Bradley Oliva</h2>
                                <p className="text-white/90 text-sm mt-1">Miembro desde Enero 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 space-y-5">
                        <h3 className="font-heading text-lg uppercase">Información personal</h3>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {[
                                { icon: User, label: "Nombre", value: "Bradley Oliva" },
                                { icon: Mail, label: "Email", value: "bradley@kinalfc.gt" },
                                { icon: Phone, label: "Teléfono", value: "+502 5555-1234" },
                                { icon: MapPin, label: "Dirección", value: "Zona 10, Guatemala" },
                            ].map((f) => (
                                <div key={f.label} className="flex items-start gap-3 p-4 bg-kfc-cream-dark rounded-2xl">
                                    <f.icon className="w-5 h-5 text-kfc-orange shrink-0 mt-0.5" />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">{f.label}</p>
                                        <p className="font-bold mt-1 truncate">{f.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <button
                                onClick={() => toast.success("Función próximamente")}
                                className="rounded-full bg-kfc-orange hover:bg-kfc-orange-dark text-white font-bold uppercase tracking-wider px-6 py-3 transition-colors inline-flex items-center gap-2"
                            >
                                <Edit3 className="w-4 h-4" /> Editar perfil
                            </button>
                            <button
                                onClick={() => navigate("/portal/pedidos")}
                                className="rounded-full border-2 border-kfc-charcoal text-kfc-charcoal hover:bg-kfc-charcoal hover:text-white font-bold uppercase tracking-wider px-6 py-3 transition-colors"
                            >
                                Mis pedidos
                            </button>
                            <button
                                onClick={() => navigate("/login")}
                                className="rounded-full text-kfc-red hover:bg-kfc-red-light font-bold uppercase tracking-wider px-6 py-3 transition-colors inline-flex items-center gap-2 ml-auto"
                            >
                                <LogOut className="w-4 h-4" /> Salir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
