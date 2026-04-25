import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import "react-day-picker/style.css";
import { CheckCircle2, Users, MapPin, Clock } from "lucide-react";
import toast from "react-hot-toast";
import { BRANCHES } from "../../../shared/data/mockData";

const TIME_SLOTS = ["12:00", "12:30", "13:00", "13:30", "14:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export const ReservationPage = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("");
    const [size, setSize] = useState("2");
    const [branch, setBranch] = useState(BRANCHES[0].id);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (!name || !phone || !time) {
            toast.error("Por favor completa todos los campos");
            return;
        }
        setSubmitted(true);
        toast.success("¡Reservación confirmada!");
    };

    if (submitted) {
        return (
            <div className="min-h-[80vh] bg-kfc-cream flex items-center justify-center px-4 py-16">
                <div className="bg-white rounded-3xl p-10 md:p-14 max-w-xl text-center border-2 border-kfc-orange/20">
                    <div className="w-20 h-20 bg-kfc-orange-light rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-10 h-10 text-kfc-orange" />
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-kfc-charcoal">¡Confirmada!</h2>
                    <p className="text-kfc-charcoal/70 mt-3 leading-relaxed">
                        Hola <span className="font-bold">{name}</span>, tu mesa para <span className="font-bold">{size} personas</span> está reservada el{" "}
                        <span className="font-bold">{date.toLocaleDateString("es-GT")}</span> a las <span className="font-bold">{time}</span>.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 rounded-full bg-kfc-orange hover:bg-kfc-orange-dark text-white font-bold uppercase tracking-wider px-6 py-3 transition-colors"
                    >
                        Nueva reservación
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-kfc-cream min-h-screen">
            <section className="relative py-16 bg-gradient-to-br from-kfc-orange to-kfc-red text-white grain-overlay overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="font-heading text-sm uppercase tracking-[0.3em] text-kfc-yellow">
                        Tu mesa te espera
                    </span>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-3 leading-none">
                        Reserva tu <span className="text-kfc-yellow">lugar</span>
                    </h1>
                    <p className="text-white/90 mt-4 max-w-2xl mx-auto">
                        Asegura tu mesa en segundos. Sin filas, sin estrés, solo sabor.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <form
                    onSubmit={submit}
                    className="bg-white rounded-3xl border-2 border-kfc-charcoal/5 p-6 md:p-10 grid lg:grid-cols-2 gap-10"
                >
                    <div>
                        <h3 className="font-heading text-xl uppercase mb-4 flex items-center gap-2">
                            <Clock className="text-kfc-orange w-5 h-5" /> Selecciona fecha
                        </h3>
                        <div className="bg-kfc-cream rounded-2xl p-3">
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={(d) => d && setDate(d)}
                                locale={es}
                                disabled={{ before: new Date() }}
                            />
                        </div>
                        <div className="mt-6">
                            <h3 className="font-heading text-xs uppercase tracking-widest mb-3 text-kfc-charcoal/60">
                                Hora disponible
                            </h3>
                            <div className="grid grid-cols-4 gap-2">
                                {TIME_SLOTS.map((t) => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setTime(t)}
                                        className={`py-2.5 rounded-xl font-bold text-sm border-2 transition-all ${
                                            time === t
                                                ? "bg-kfc-orange text-white border-kfc-orange"
                                                : "bg-kfc-cream border-transparent hover:border-kfc-orange/30"
                                        }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h3 className="font-heading text-xl uppercase flex items-center gap-2">
                            <Users className="text-kfc-orange w-5 h-5" /> Tus datos
                        </h3>

                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Sucursal</label>
                            <select
                                value={branch}
                                onChange={(e) => setBranch(e.target.value)}
                                className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 bg-white focus:border-kfc-orange outline-none"
                            >
                                {BRANCHES.map((b) => (
                                    <option key={b.id} value={b.id}>{b.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Personas</label>
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 bg-white focus:border-kfc-orange outline-none"
                            >
                                {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
                                    <option key={n} value={String(n)}>{n} {n === 1 ? "persona" : "personas"}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Nombre completo</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Tu nombre"
                                className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none"
                            />
                        </div>

                        <div>
                            <label className="font-heading text-xs uppercase tracking-widest text-kfc-charcoal/60">Teléfono</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+502 0000-0000"
                                className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-kfc-charcoal/10 focus:border-kfc-orange outline-none"
                            />
                        </div>

                        <div className="bg-kfc-yellow-light rounded-2xl p-4 border-2 border-kfc-yellow/40">
                            <p className="text-xs font-heading uppercase tracking-widest text-kfc-charcoal/70">Resumen</p>
                            <p className="font-bold mt-2 text-sm">
                                {date.toLocaleDateString("es-GT", { weekday: "long", day: "numeric", month: "long" })}
                                {time && ` · ${time}`}
                                {` · ${size} personas`}
                            </p>
                            <p className="text-xs text-kfc-charcoal/60 mt-1 flex items-start gap-1">
                                <MapPin className="w-3 h-3 mt-0.5" />
                                {BRANCHES.find((b) => b.id === branch)?.name}
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-kfc-red hover:bg-kfc-red-dark text-white font-bold uppercase tracking-wider py-4 text-base transition-colors"
                        >
                            Confirmar Reservación
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};
