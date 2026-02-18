"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  contactPreference: string;
  tripType: string;
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  passengers: string;
  cabin: string;
  budget: string;
  notes: string;
};

type Field = {
  name: keyof FormData;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  helper?: string;
  section: string;
};

const services = [
  {
    title: "Voyages sur mesure",
    description:
      "Itinéraires adaptés à vos envies: culture, aventure, détente ou luxe.",
  },
  {
    title: "Billetterie & réservations",
    description:
      "Vols internationaux et régionaux, hôtels de charme et transferts.",
  },
  {
    title: "Tours organisés",
    description:
      "Circuits thématiques pour explorer les merveilles africaines.",
  },
  {
    title: "Visa & assistance",
    description:
      "Accompagnement complet pour les visas et documents de voyage.",
  },
];

const experiences = [
  {
    title: "Merveilles africaines",
    detail:
      "Des itinéraires inspirés par l'authenticité et la richesse locale.",
  },
  {
    title: "Evasions balnéaires",
    detail: "Séjours apaisants, escapades citadines et service premium.",
  },
  {
    title: "Safaris & randonnées",
    detail: "Expériences immersives, culturelles et responsables.",
  },
];

const reasons = [
  "Un accompagnement personnalisé de A à Z",
  "Des offres compétitives et transparentes",
  "Une équipe professionnelle, réactive et bienveillante",
  "Des voyages sûrs, confortables et adaptés",
];

const questions: Field[] = [
  {
    name: "fullName",
    label: "Votre nom complet",
    type: "text",
    placeholder: "Nom et prénom",
    required: true,
    section: "Coordonnées",
  },
  {
    name: "email",
    label: "Votre email",
    type: "email",
    placeholder: "vous@email.com",
    required: true,
    section: "Coordonnées",
  },
  {
    name: "phone",
    label: "Téléphone",
    type: "tel",
    placeholder: "+235 ...",
    required: true,
    section: "Coordonnées",
  },
  {
    name: "contactPreference",
    label: "Canal préféré",
    type: "select",
    required: true,
    options: ["Téléphone", "WhatsApp", "Email"],
    section: "Coordonnées",
  },
  {
    name: "tripType",
    label: "Type de vol",
    type: "select",
    required: true,
    options: ["Aller-retour", "Aller simple", "Multi-destinations"],
    section: "Vol",
  },
  {
    name: "from",
    label: "Ville de départ",
    type: "text",
    placeholder: "Ex: N'Djaména",
    required: true,
    section: "Vol",
  },
  {
    name: "to",
    label: "Destination",
    type: "text",
    placeholder: "Ex: Paris",
    required: true,
    section: "Vol",
  },
  {
    name: "departDate",
    label: "Date prévisionnelle de départ",
    type: "date",
    required: true,
    section: "Vol",
  },
  {
    name: "returnDate",
    label: "Date prévisionnelle de retour (optionnel)",
    type: "date",
    section: "Vol",
  },
  {
    name: "passengers",
    label: "Nombre de passagers",
    type: "select",
    required: true,
    options: ["1", "2", "3", "4", "5+"],
    section: "Préférences",
  },
  {
    name: "cabin",
    label: "Classe de voyage",
    type: "select",
    required: true,
    options: ["Economique", "Premium", "Business", "First"],
    section: "Préférences",
  },
  {
    name: "budget",
    label: "Budget estimé",
    type: "text",
    placeholder: "Indiquez une fourchette",
    required: true,
    section: "Préférences",
  },
  {
    name: "notes",
    label: "Notes importantes",
    type: "textarea",
    placeholder: "Dates flexibles, préférences, services...",
    section: "Préférences",
  },
];

const initialData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  contactPreference: "Téléphone",
  tripType: "Aller-retour",
  from: "",
  to: "",
  departDate: "",
  returnDate: "",
  passengers: "1",
  cabin: "Economique",
  budget: "",
  notes: "",
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fff8f1] text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Background Elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-horizon opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(14,116,144,0.15),transparent_70%)] blur-3xl animate-enter"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.15),transparent_70%)] blur-3xl animate-enter animate-enter-delay-1"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-20"
      />

      {/* Header */}
      <header className="relative z-10 px-6 pt-6 animate-enter">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/40 bg-white/60 px-6 py-4 shadow-sm backdrop-blur-md transition-all hover:bg-white/80 hover:shadow-md">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-sm">
              <Image
                src="/logo.jpg"
                alt="Kouba Travel"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-slate-800">
                Kouba Travel
              </p>
              <p className="text-xs font-medium text-amber-600/80">
                Agence de voyage premium
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="transition hover:text-amber-600" href="#services">
              Services
            </a>
            <a className="transition hover:text-amber-600" href="#experiences">
              Expériences
            </a>
            <a className="transition hover:text-amber-600" href="#philosophie">
              Philosophie
            </a>
            <a className="transition hover:text-amber-600" href="#reservation">
              Réservation
            </a>
          </nav>
          <button type="button" onClick={openForm} className="btn-primary shadow-slate-900/10">
            Réserver un vol
          </button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:pt-32">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-10 animate-enter animate-enter-delay-1">
              <div className="inline-flex items-center gap-3 rounded-full border border-amber-200/60 bg-white/50 px-4 py-2 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                  Explorez le monde avec élégance
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.1] text-slate-900 md:text-7xl lg:tracking-tight">
                Des voyages{" "}
                <span className="text-gradient-gold">vibrants</span>, <br />
                conçus autour de votre histoire.
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Kouba Travel réinvente l'expérience du voyage. Nous imaginons
                des itinéraires lumineux, entre découverte, confort et
                authenticité, pour transformer chaque trajet en souvenir inoubliable.
              </p>

              <div className="flex flex-wrap gap-5">
                <button type="button" onClick={openForm} className="btn-accent">
                  Planifier mon voyage
                </button>
                <a href="#services" className="btn-ghost">
                  Voir nos services
                </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 pt-4">
                <div className="glass-premium rounded-2xl p-6 text-center hover:-translate-y-1">
                  <p className="text-3xl font-bold text-slate-900">24/7</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Assistance</p>
                </div>
                <div className="glass-premium rounded-2xl p-6 text-center hover:-translate-y-1">
                  <p className="text-3xl font-bold text-slate-900">100%</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Sur mesure</p>
                </div>
                <div className="glass-premium rounded-2xl p-6 text-center hover:-translate-y-1">
                  <p className="text-3xl font-bold text-slate-900">VIP</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Service</p>
                </div>
              </div>
            </div>

            <div className="flex-1 relative animate-enter animate-enter-delay-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] shadow-2xl shadow-amber-900/10">
                <Image
                  src="/newYork.avif"
                  alt="Vols et voyages Kouba Travel"
                  fill
                  className="object-cover transition duration-1000 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
                    Dimension Aérienne
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    Vols internationaux & régionaux
                  </p>
                </div>
              </div>

              {/* Floating Card */}
              <div className="glass-strong absolute -bottom-10 -left-10 hidden max-w-xs rounded-3xl p-6 shadow-xl lg:block animate-enter animate-enter-delay-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">✨</div>
                  <div>
                    <p className="font-bold text-slate-900">Expérience Premium</p>
                    <p className="text-xs text-slate-500">Chaque détail compte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mx-auto max-w-7xl space-y-16 px-6 py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <span className="pill">Ce que nous proposons</span>
              <h2 className="text-4xl font-bold text-slate-900">
                Une expertise complète, <br /> de l'idée au retour.
              </h2>
            </div>
            <p className="max-w-xl text-lg text-slate-600">
              Notre équipe conçoit chaque voyage comme une expérience immersive,
              alignée à vos aspirations, votre budget et votre style de vie.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group glass-premium rounded-3xl p-8 hover:bg-white transition-all duration-300"
              >
                <span className="text-4xl font-light text-amber-300 transition-colors group-hover:text-amber-500">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experiences Section */}
        <section id="experiences" className="mx-auto max-w-7xl px-6 py-24">
          <div className="overflow-hidden rounded-[48px] bg-slate-900 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-auto">
                <Image
                  src="/istanbul.jpg"
                  alt="Expérience urbaine"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent lg:bg-gradient-to-l" />
              </div>

              <div className="p-10 lg:p-20 space-y-10">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                    Tours & Circuits
                  </span>
                  <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                    Des itinéraires pensés pour <span className="text-amber-400">inspirer</span>.
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    Safaris, escapades citadines, séjours balnéaires: chaque expérience
                    est équilibrée entre découverte et confort pour des souvenirs impérissables.
                  </p>
                </div>

                <div className="space-y-6">
                  {experiences.map((experience) => (
                    <div key={experience.title} className="flex gap-4">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                      <div>
                        <h3 className="font-bold text-white">{experience.title}</h3>
                        <p className="text-sm text-slate-400 mt-1">{experience.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophie Section */}
        <section id="philosophie" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-premium rounded-[40px] p-10 lg:p-14">
              <span className="pill">Notre philosophie</span>
              <h2 className="mt-8 text-3xl font-bold text-slate-900 md:text-5xl">
                Ecoute, créativité et excellence.
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Nous croyons que chaque voyage est une histoire unique. Nous
                travaillons avec des partenaires locaux de confiance et un
                engagement fort envers un tourisme responsable et durable.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold">1</div>
                  <p className="font-bold text-slate-900">Conseils experts</p>
                </div>
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold">2</div>
                  <p className="font-bold text-slate-900">Tourisme responsable</p>
                </div>
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold">3</div>
                  <p className="font-bold text-slate-900">Partenaires sélectifs</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div className="bg-white rounded-[40px] p-10 shadow-soft-xl border border-stone-100 h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Pourquoi nous choisir ?</h3>
                <ul className="space-y-4">
                  {reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3 text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900 rounded-[40px] p-10 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  Basée au Tchad
                </p>
                <p className="mt-4 text-xl font-medium leading-relaxed">
                  Une agence moderne, dynamique et à l'écoute des voyageurs exigeants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservation" className="mx-auto max-w-7xl px-6 pt-24 pb-40">
          <div className="relative overflow-hidden rounded-[48px] bg-white shadow-2xl border border-amber-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-20 flex flex-col justify-center">
                <span className="pill self-start">Réservation de vol</span>
                <h2 className="mt-6 text-4xl font-bold text-slate-900">
                  Prêt à décoller ?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Un formulaire fluide, conçu comme une conversation pour mieux vous servir.
                  Renseignez vos informations et nous vous recontactons très vite.
                </p>

                <div className="mt-10">
                  <button
                    type="button"
                    onClick={openForm}
                    className="btn-sky w-full sm:w-auto text-center"
                  >
                    Commencer ma réservation
                  </button>
                  <p className="mt-4 text-xs text-slate-400 text-center sm:text-left">
                    Cela ne prend que 2 minutes.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[400px] lg:min-h-full">
                <Image
                  src="/paris.jpg"
                  alt="Destination de rêve"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="glass-premium rounded-2xl p-6 bg-white/10 border-white/20 backdrop-blur-md">
                    <p className="font-bold text-lg mb-2">Ce que vous obtenez</p>
                    <ul className="grid gap-2 text-sm text-slate-100">
                      <li>✓ Proposition sur mesure soignée</li>
                      <li>✓ Assistance 24/7 dédiée</li>
                      <li>✓ Les meilleurs tarifs négociés</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200 bg-white/50 px-6 py-12 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-900">
              Kouba Travel
            </p>
            <p className="mt-2 text-slate-500">
              Agence de voyage premium, N'Djaména, Tchad.
            </p>
          </div>
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Kouba Travel. Tous droits réservés.
          </div>
        </div>
      </footer>

      <ReservationModal isOpen={isOpen} onClose={closeForm} />
    </div>
  );
}

function ReservationModal({
  isOpen,
  onClose,
}: Readonly<{
  isOpen: boolean;
  onClose: () => void;
}>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const progress = useMemo(
    () => Math.round(((currentIndex + 1) / questions.length) * 100),
    [currentIndex]
  );

  const current = questions[currentIndex];
  // Ensure we fallback to empty string if undefined
  const currentValue = String(formData[current.name] || "");
  const isValid = current.required ? currentValue.trim().length > 0 : true;
  const actionLabel =
    currentIndex === questions.length - 1
      ? "Envoyer la demande"
      : "Continuer";

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = async () => {
    if (!isValid) {
      return;
    }
    if (currentIndex === questions.length - 1) {
      setIsSubmitting(true);
      setSubmitError("");
      try {
        const response = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Request failed");
        }
        setSubmitted(true);
      } catch (error) {
        console.error("Lead submission failed", error);
        setSubmitError("Une erreur est survenue. Réessayez dans un instant.");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }
    setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setFormData(initialData);
    setCurrentIndex(0);
    setSubmitted(false);
    setSubmitError("");
  };

  const renderInput = () => {
    if (current.type === "select") {
      return (
        <div className="grid gap-3 animate-enter">
          {current.options?.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleChange(current.name, option)}
              className={`flex items-center justify-between rounded-2xl border px-6 py-4 text-left text-sm font-medium transition-all ${currentValue === option
                ? "border-amber-500 bg-amber-50 shadow-md shadow-amber-500/10 text-amber-900"
                : "border-slate-200 bg-white text-slate-600 hover:border-amber-300 hover:bg-slate-50"
                }`}
            >
              <span>{option}</span>
              {currentValue === option ? (
                <span className="flex h-2 w-2 rounded-full bg-amber-500" />
              ) : null}
            </button>
          ))}
        </div>
      );
    }

    if (current.type === "textarea") {
      return (
        <textarea
          rows={5}
          value={currentValue}
          onChange={(event) =>
            handleChange(current.name, event.target.value)
          }
          placeholder={current.placeholder}
          className="w-full animate-enter rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
        />
      );
    }

    return (
      <input
        type={current.type}
        value={currentValue}
        onChange={(event) => handleChange(current.name, event.target.value)}
        placeholder={current.placeholder}
        className="w-full animate-enter rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
      />
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md transition-all duration-500">
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[40px] bg-[#fffcf8] shadow-2xl transition-all duration-500 animate-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-stone-100 px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Demande de voyage
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 transition hover:bg-slate-200"
          >
            Fermer
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_0.8fr] min-h-[500px]">
          <div className="flex flex-col justify-center p-8 lg:p-12">
            {submitted ? (
              <div className="space-y-8 animate-enter">
                <div className="rounded-3xl border border-green-100 bg-green-50/50 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                    👋
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    Merci, {formData.fullName.split(" ")[0]} !
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Votre demande de vol vers <span className="font-semibold text-slate-900">{formData.to}</span> a bien été reçue.
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Notre équipe vous contactera sous 24h.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mx-auto block btn-ghost"
                >
                  Effectuer une autre réservation
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    <span>{current.section}</span>
                    <span>{currentIndex + 1} / {questions.length}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-500 transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      {current.label}
                    </h3>
                    {current.helper && (
                      <p className="mt-2 text-slate-500">{current.helper}</p>
                    )}
                  </div>

                  {renderInput()}
                </div>

                {submitError && (
                  <p className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
                    {submitError}
                  </p>
                )}

                <div className="flex items-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className={`rounded-full px-6 py-4 text-sm font-bold text-slate-500 transition hover:bg-slate-100 ${currentIndex === 0 ? "opacity-0 cursor-default" : "opacity-100"
                      }`}
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isValid || isSubmitting}
                    className="ml-auto btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : actionLabel}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="hidden bg-slate-50 p-12 lg:flex flex-col justify-center border-l border-stone-100 relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative z-10 glass-premium rounded-3xl p-8 space-y-6">
              <h4 className="text-xl font-bold text-slate-900">Pourquoi réserver avec Kouba ?</h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm text-lg">💎</span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Service VIP</p>
                    <p className="text-xs text-slate-500 mt-0.5">Accès aux salons et Fast Track quand c'est possible.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm text-lg">🛡️</span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Flexibilité Totale</p>
                    <p className="text-xs text-slate-500 mt-0.5">Modifiez vos dates sans stress.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm text-lg">🌍</span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Expertise Locale</p>
                    <p className="text-xs text-slate-500 mt-0.5">Basé à N'Djaména, ouvert sur le monde.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-amber-50 p-4 border border-amber-100">
                <p className="text-xs text-amber-800 font-medium italic">
                  "Un service impeccable. J'ai pu obtenir mon visa et mon billet en un temps record."
                </p>
                <p className="text-xs font-bold text-amber-900 mt-2">— Client Fidèle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
