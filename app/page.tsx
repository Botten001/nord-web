import Link from "next/link";
import AnimateIn from "./components/AnimateIn";

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

const stats = [
  { value: "24t", label: "Svartid" },
  { value: "100%", label: "Mobilvenlig" },
  { value: "⭐", label: "Kundetilfredshed" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-3xl text-center relative z-10">
          <AnimateIn delay={0} direction="fade">
            <div className="inline-block mb-6 px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
              ✦ Webdesign fra Fredericia
            </div>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy leading-tight mb-6">
              Moderne hjemmesider til lokale{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">virksomheder</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Vi designer og udvikler hjemmesider, der ser professionelle ud og
              hjælper din virksomhed med at vokse. Hurtigt, smukt og til en fair
              pris.
            </p>
          </AnimateIn>
          <AnimateIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all text-lg shadow-lg shadow-accent/25"
              >
                Få et gratis tilbud
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-gray-200 text-navy font-semibold px-8 py-4 rounded-xl hover:border-accent hover:text-accent hover:scale-105 active:scale-95 transition-all text-lg"
              >
                Se vores arbejde
              </Link>
            </div>
          </AnimateIn>
          
          {/* Stats */}
          <AnimateIn delay={500}>
            <div className="flex justify-center gap-12 mt-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-navy">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Hvem er Nord Web?
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Nord Web er et webdesign-studio baseret i Fredericia. Vi brænder for
              at hjælpe lokale virksomheder med at få en stærk online
              tilstedeværelse — uden at det koster en formue. Vi leverer moderne,
              hurtige og mobilvenlige hjemmesider med skandinavisk design-sans.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Vores ydelser
              </h2>
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="text-gray-500 text-lg">
                Vi tilbyder alt fra simple landing pages til komplette webshops.
              </p>
            </AnimateIn>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 150} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 group h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-gray-500 mb-4 leading-relaxed">{s.desc}</p>
                  <p className="text-accent font-bold text-lg">{s.price}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={300}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="text-accent font-semibold hover:underline inline-flex items-center gap-2 group"
              >
                Se alle priser og pakker 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 text-center">
              Sådan arbejder vi
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Samtale", desc: "Vi taler om dine ønsker og behov. Helt uforpligtende." },
              { step: "02", title: "Design", desc: "Vi designer din hjemmeside og sender et udkast til godkendelse." },
              { step: "03", title: "Lancering", desc: "Vi bygger, tester og lancerer din nye hjemmeside." },
            ].map((item, i) => (
              <AnimateIn key={item.step} delay={i * 200}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klar til at komme online?
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Få et uforpligtende tilbud på din nye hjemmeside. Vi svarer
              indenfor 24 timer.
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-semibold px-10 py-4 rounded-xl hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all text-lg shadow-lg shadow-accent/25"
            >
              Kontakt os i dag
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
