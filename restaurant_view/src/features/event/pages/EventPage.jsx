import { useState } from "react";
import { Calendar, Users, Sparkles, PartyPopper, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

const EVENT_TYPES = [
    { id: "birthday", label: "Cumpleaños", icon: PartyPopper, color: "bg-kfc-red" },
    { id: "corporate", label: "Empresa", icon: Users, color: "bg-kfc-orange" },
    { id: "wedding", label: "Boda", icon: Sparkles, color: "bg-kfc-yellow text-kfc-charcoal" },
    { id: "other", label: "Otro", icon: Calendar, color: "bg-kfc-charcoal" },
];

export const EventPage = () => {
    const [type, setType] = useState("birthday");
    const [form, setForm] = useState({ name: "", phone: "", email: "", guests: "20", date: "", details: "" });
    const [submitted, setSubmitted] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (!form.name || !form.phone || !form.email || !form.date) {
            toast.error("Completa todos los campos");
            return;
        }
        setSubmitted(true);
        toast.success("¡Solicitud enviada! Te contactaremos pronto.");
    };

    if (submitted) {
        return (
            <div className="min-h-[80vh] bg-kfc-cream flex items-center justify-center px-4 py-16">
                <div className="bg-white rounded-3xl p-10 md:p-14 max-w-xl text-center border-2 border-kfc-orange/20">
                    <div className="w-20 h-20 bg-kfc-orange-light rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-10 h-10 text-kfc-orange" />
                    </div>
                    <h2 className="font-display text-4xl text-kfc-charcoal">¡Solicitud recibida!</h2>
                    <p className="text-kfc-charcoal/70 mt-3">
                        Hola <span className="font-bold">{form.name}</span>, te contactaremos al{" "}
                        <span className="font-bold">{form.phone}</span> en menos de 24 horas para coordinar tu evento.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 rounded-full bg-kfc-orange hover:bg-kfc-orange-dark text-white font-bold uppercase tracking-wider px-6 py-3 transition-colors"
                    >
                        Nueva solicitud
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-kfc-cream min-h-screen">
            <section className="relative py-16 bg-kfc-charcoal text-white grain-overlay overflow-hidden">
                <div className="absolute -top-20 right-10 w-72 h-72 bg-kfc-yellow rounded-full blur-3xl opacity-30" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="font-heading text-sm uppercase tracking-[0.3em] text-kfc-yellow">Eventos privados</span>
                    <h1 className="font-display text-5xl md:text-7xl mt-3 leading-none">
                        Tu <span className="text-kfc-orange">celebración</span>
                    </h1>
                    <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                        Cumpleaños, eventos empresariales, bodas... Hacemos de tu día algo crujiente y memorable.
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <form onSubmit={submit} className="bg-white rounded-3xl border-2 border-kfc-charcoal/5 p-6 md:p-10 space-y-6">
                    <div>
                        <h3 className="font-heading text-lg uppercase mb-4">Tipo de evento</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {EVENT_TYPES.map((t) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    onClick={() => setType(t.id)}
                                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                                        type === t.id
                                            ? "border-kfc-orange bg-kfc-orange-light"
                                            : "border-kfc-charcoal/10 hover:border-kfc-orange/40"
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl ${t.color} flex items-center justify-center text-white mb-2`}>
                                        <t.icon className="w-5 h-5" />
                                    </div>
                                    <p className="font-heading uppercase text-sm">{t.label}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Nombre</label>
                            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none" />
                        </div>
                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Teléfono</label>
                            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+502 0000-0000" className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none" />
                        </div>
                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Email</label>
                            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none" />
                        </div>
                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Número de invitados</label>
                            <input type="number" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Fecha del evento</label>
                            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Detalles adicionales</label>
                            <textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Cuéntanos más sobre tu evento..." className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none resize-none" />
                        </div>
                    </div>

                    <button type="submit" className="w-full rounded-full bg-kfc-red hover:bg-kfc-red-dark text-white font-bold uppercase tracking-wider py-4 text-base transition-colors">
                        Solicitar cotización
                    </button>
                </form>
            </section>
        </div>
    );
};
