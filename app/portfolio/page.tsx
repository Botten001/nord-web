import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Nord Web",
  description: "Se eksempler på hjemmesider vi har designet og udviklet.",
};

const projects = [
  {
    name: "Café Stranden",
    type: "Virksomhedsside",
    desc: "En hyggelig café ved havnen i Fredericia havde brug for en hjemmeside, der afspejlede deres varme atmosfære. Vi byggede en 5-siders hjemmeside med online menukort, galleri, og en integreret bordbestillings-funktion. Sitet er optimeret til mobil, så gæster nemt kan finde åbningstider og menu på farten.",
    tags: ["Next.js", "Responsivt design", "Online menu", "SEO"],
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-700",
    emoji: "☕",
  },
  {
    name: "Fredericia Frisør",
    type: "Premium Side + Booking",
    desc: "Fredericia Frisør ville gøre det nemmere for kunder at booke tider online. Vi leverede en elegant hjemmeside med integreret bookingsystem, prisliste, galleri med frisurer, og et team-afsnit. Den mørke, stilrene æstetik afspejler salonens eksklusive brand.",
    tags: ["Booking-system", "Galleri", "Prisliste", "Mobilvenlig"],
    color: "bg-purple-50 border-purple-200",
    accent: "text-purple-700",
    emoji: "✂️",
  },
  {
    name: "Hansen VVS",
    type: "Virksomhedsside",
    desc: "Hansen VVS er en familieejet VVS-virksomhed i Fredericia, der havde brug for en troværdig og professionel online tilstedeværelse. Vi skabte en ren hjemmeside med tydelig service-oversigt, kontaktformular, kundeudtalelser og Google Maps-integration, så nye kunder nemt kan finde dem.",
    tags: ["Kontaktformular", "Google Maps", "Kundeudtalelser", "SEO"],
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-700",
    emoji: "🔧",
  },
];

export default function Portfolio() {
  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="px-6 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Vores arbejde
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Her er et udvalg af projekter vi har arbejdet på. Hvert projekt er
            skræddersyet til kundens behov og brand.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-2xl border-2 overflow-hidden ${p.color}`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Screenshot placeholder */}
                <div
                  className={`flex items-center justify-center p-12 md:p-16 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="bg-white/70 rounded-xl w-full aspect-video flex items-center justify-center border border-white/50">
                    <div className="text-center">
                      <div className="text-5xl mb-3">{p.emoji}</div>
                      <p className="text-sm text-gray-400 font-medium">
                        Screenshot kommer snart
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`p-8 md:p-12 flex flex-col justify-center ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <span
                    className={`text-sm font-semibold uppercase tracking-wider mb-2 ${p.accent}`}
                  >
                    {p.type}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {p.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/80 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full border border-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Vil du være den næste?
          </h2>
          <p className="text-gray-500 mb-8">
            Lad os snakke om, hvordan vi kan hjælpe din virksomhed online.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark transition-colors"
          >
            Start dit projekt
          </a>
        </div>
      </section>
    </div>
  );
}
