import Link from "next/link";

const services = [
  {
    title: "Landing Page",
    desc: "En skarp og effektiv enkeltside, der konverterer besøgende til kunder.",
    icon: "🚀",
    price: "Fra 4.999 kr",
  },
  {
    title: "Virksomhedsside",
    desc: "En komplet hjemmeside med op til 5 sider — perfekt til de fleste virksomheder.",
    icon: "🏢",
    price: "Fra 9.999 kr",
  },
  {
    title: "Webshop",
    desc: "Sælg dine produkter online med en professionel og brugervenlig webshop.",
    icon: "🛒",
    price: "Fra 24.999 kr",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
            Webdesign fra Fredericia
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy leading-tight mb-6">
            Moderne hjemmesider til lokale{" "}
            <span className="text-accent">virksomheder</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Vi designer og udvikler hjemmesider, der ser professionelle ud og
            hjælper din virksomhed med at vokse. Hurtigt, smukt og til en fair
            pris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark transition-colors text-lg"
            >
              Få et gratis tilbud
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-gray-200 text-navy font-semibold px-8 py-4 rounded-xl hover:border-accent hover:text-accent transition-colors text-lg"
            >
              Se vores arbejde
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Hvem er Nord Web?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Nord Web er et webdesign-studio baseret i Fredericia. Vi brænder for
            at hjælpe lokale virksomheder med at få en stærk online
            tilstedeværelse — uden at det koster en formue. Vi leverer moderne,
            hurtige og mobilvenlige hjemmesider med skandinavisk design-sans.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Vores ydelser
            </h2>
            <p className="text-gray-500 text-lg">
              Vi tilbyder alt fra simple landing pages til komplette webshops.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-accent/30 transition-all group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-gray-500 mb-4 leading-relaxed">{s.desc}</p>
                <p className="text-accent font-bold text-lg">{s.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-accent font-semibold hover:underline"
            >
              Se alle priser og pakker →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klar til at komme online?
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Få et uforpligtende tilbud på din nye hjemmeside. Vi svarer
            indenfor 24 timer.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white font-semibold px-10 py-4 rounded-xl hover:bg-accent-dark transition-colors text-lg"
          >
            Kontakt os i dag
          </Link>
        </div>
      </section>
    </>
  );
}
