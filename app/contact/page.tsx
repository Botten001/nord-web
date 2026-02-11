import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Nord Web",
  description:
    "Kontakt Nord Web for et gratis tilbud på din nye hjemmeside.",
};

export default function Contact() {
  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="px-6 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Kontakt os
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Klar til at komme i gang? Send os en besked, så vender vi tilbage
            indenfor 24 timer med et gratis tilbud.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Dit fulde navn"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors bg-white"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="din@email.dk"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+45 XX XX XX XX"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors bg-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Besked
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Fortæl os om dit projekt — hvad har du brug for?"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors bg-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white font-semibold py-4 rounded-xl hover:bg-accent-dark transition-colors text-lg"
              >
                Send besked
              </button>
              <p className="text-sm text-gray-400 text-center">
                Vi svarer typisk indenfor 24 timer.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-navy mb-6">Kontaktoplysninger</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-navy">Email</p>
                    <p className="text-sm text-gray-500">kontakt@nordweb.dk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-navy">Telefon</p>
                    <p className="text-sm text-gray-500">+45 XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-navy">Lokation</p>
                    <p className="text-sm text-gray-500">
                      Fredericia, Danmark
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="font-bold mb-3">Hurtig respons</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Vi besvarer alle henvendelser indenfor 24 timer. For hastesager
                kan du ringe direkte til os i åbningstiden (man-fre, 9-17).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
