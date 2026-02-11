import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ydelser & Priser — Nord Web",
  description: "Se vores priser på hjemmesider, webshops og vedligeholdelse.",
};

const tiers = [
  {
    name: "Landing Page",
    price: "4.999 kr",
    desc: "Perfekt til iværksættere og nye projekter",
    features: [
      "1 side (one-page design)",
      "Mobilvenligt & responsivt",
      "Kontaktformular",
      "SEO-grundopsætning",
      "Hurtig levering (5-7 dage)",
      "1 revisionsrunde",
    ],
  },
  {
    name: "Virksomhedsside",
    price: "9.999 kr",
    desc: "Den mest populære løsning til lokale virksomheder",
    features: [
      "Op til 5 sider",
      "Mobilvenligt & responsivt",
      "Kontaktformular",
      "Google Maps integration",
      "SEO-optimering",
      "Social media links",
      "2 revisionsrunder",
      "Levering inden 14 dage",
    ],
    popular: true,
  },
  {
    name: "Premium Side",
    price: "17.999 kr",
    desc: "Til virksomheder med større behov",
    features: [
      "Op til 10 sider",
      "Alt fra Virksomhedsside",
      "Online booking-system",
      "Blog / nyhedssektion",
      "Avanceret SEO",
      "Analytics-opsætning",
      "3 revisionsrunder",
      "Prioriteret support",
    ],
  },
  {
    name: "Webshop",
    price: "24.999 kr+",
    desc: "Sælg produkter online med din egen butik",
    features: [
      "Komplet e-commerce løsning",
      "Produktkatalog & kategorier",
      "Sikker betaling (MobilePay, kort)",
      "Ordrehåndtering",
      "Lagerstyring",
      "Mobilvenligt design",
      "SEO-optimering",
      "Løbende support",
    ],
  },
];

const maintenance = [
  {
    name: "Basis",
    price: "499 kr/md",
    features: [
      "Sikkerhedsopdateringer",
      "Daglig backup",
      "Oppetidsovervågning",
      "Email support",
    ],
  },
  {
    name: "Standard",
    price: "999 kr/md",
    features: [
      "Alt fra Basis",
      "Indholdsændringer (2/md)",
      "Månedlig SEO-rapport",
      "Prioriteret support",
      "Hastighed-optimering",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "1.999 kr/md",
    features: [
      "Alt fra Standard",
      "Ubegrænsede ændringer",
      "A/B testing",
      "Konverteringsoptimering",
      "Dedikeret kontaktperson",
      "Telefon support",
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="px-6 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Ydelser & Priser
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Gennemsigtige priser uden skjulte gebyrer. Vælg den løsning, der
            passer til din virksomhed.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 border-2 flex flex-col ${
                t.popular
                  ? "border-accent bg-accent/5 shadow-lg relative"
                  : "border-gray-200 bg-white"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  Mest populær
                </div>
              )}
              <h3 className="text-lg font-bold text-navy mb-1">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.desc}</p>
              <p className="text-3xl font-bold text-navy mb-6">{t.price}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-accent mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`text-center font-semibold py-3 rounded-xl transition-colors ${
                  t.popular
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-gray-100 text-navy hover:bg-gray-200"
                }`}
              >
                Kom i gang
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance */}
      <section className="px-6 pb-24 bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Vedligeholdelse & Support
            </h2>
            <p className="text-gray-500 text-lg">
              Hold din hjemmeside opdateret, sikker og hurtig.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {maintenance.map((m) => (
              <div
                key={m.name}
                className={`rounded-2xl p-8 border-2 ${
                  m.popular
                    ? "border-accent bg-white shadow-lg"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h3 className="text-lg font-bold text-navy mb-1">{m.name}</h3>
                <p className="text-2xl font-bold text-navy mb-6">{m.price}</p>
                <ul className="space-y-3">
                  {m.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-accent mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ikke sikker på hvad du har brug for?
          </h2>
          <p className="text-gray-500 mb-8">
            Kontakt os for en gratis og uforpligtende snak om dine behov.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark transition-colors"
          >
            Få et gratis tilbud
          </Link>
        </div>
      </section>
    </div>
  );
}
