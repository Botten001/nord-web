import Link from "next/link";
import AnimateIn from "./components/AnimateIn";

const services = [
  {
    title: "Landing Page",
    desc: "En skarp enkeltside der gør det let for kunder at kontakte dig.",
    icon: "🚀",
    price: "Fra 4.999 kr",
  },
  {
    title: "Virksomhedsside",
    desc: "Komplet hjemmeside med op til 5 sider og professionelt udtryk.",
    icon: "🏢",
    price: "Fra 9.999 kr",
  },
  {
    title: "Webshop",
    desc: "Sælg online med en hurtig, mobilvenlig og troværdig webshop.",
    icon: "🛒",
    price: "Fra 24.999 kr",
  },
];

const stats = [
  { value: "24t", label: "Svartid" },
  { value: "100%", label: "Mobilvenlig" },
  { value: "5★", label: "Klar til vækst" },
];

const trustPoints = [
  "Fast pris og klar proces",
  "Design der ser professionelt ud",
  "Bygget til lokale virksomheder",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-28 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-24 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[30rem] h-[30rem] bg-indigo-300/15 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateIn delay={0} direction="fade">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/20">
                  ✦ Webdesign fra Fredericia
                </div>
              </AnimateIn>

              <AnimateIn delay={100}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-navy leading-tight mb-6">
                  Professionelle hjemmesider til virksomheder der vil stå skarpt online
                </h1>
              </AnimateIn>

              <AnimateIn delay={200}>
                <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
                  Vi designer og udvikler hjemmesider, der ser stærke ud og skaber flere henvendelser.
                  Hurtigt, mobilvenligt og uden unødigt bøvl.
                </p>
              </AnimateIn>

              <AnimateIn delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all text-lg shadow-lg shadow-accent/25 text-center"
                  >
                    Få et gratis tilbud
                  </Link>
                  <Link
                    href="/portfolio"
                    className="border-2 border-gray-200 bg-white text-navy font-semibold px-8 py-4 rounded-xl hover:border-accent hover:text-accent hover:scale-105 active:scale-95 transition-all text-lg text-center"
                  >
                    Se cases
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={400}>
                <div className="grid sm:grid-cols-3 gap-3 max-w-2xl">
                  {trustPoints.map((point) => (
                    <div key={point} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700">
                      ✅ {point}
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={250} direction="right">
              <div className="bg-white border border-gray-200 rounded-3xl p-7 shadow-xl shadow-accent/10">
                <p className="text-sm font-semibold text-accent mb-3">Klar på få dage</p>
                <h3 className="text-2xl font-bold text-navy mb-4">Fra idé til professionel hjemmeside</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Du får et designudkast, tydelig proces og en side der fungerer på mobil fra dag ét.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-gray-50 border border-gray-200 p-4 text-center">
                      <div className="text-xl font-bold text-navy">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Vores ydelser</h2>
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="text-gray-500 text-lg">Fra enkel landing page til komplet virksomhedssite.</p>
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
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 text-center">Sådan arbejder vi</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Samtale", desc: "Vi afklarer mål, stil og hvad siden skal levere." },
              { step: "02", title: "Design", desc: "Du får et klart udkast, som vi justerer sammen." },
              { step: "03", title: "Lancering", desc: "Vi bygger, tester og gør siden klar til kunder." },
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

      <section className="py-24 px-6 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Klar til en stærkere online profil?</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Få et uforpligtende tilbud. Vi svarer indenfor 24 timer.
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
