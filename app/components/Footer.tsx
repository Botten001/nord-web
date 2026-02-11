import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Nord<span className="text-accent">Web</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Vi hjælper lokale virksomheder med at få en professionel
              tilstedeværelse online. Baseret i Fredericia, Danmark.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Sider
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Hjem" },
                { href: "/services", label: "Ydelser" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Kontakt" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>kontakt@nordweb.dk</p>
              <p>+45 XX XX XX XX</p>
              <p>Fredericia, Danmark</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nord Web. Alle rettigheder forbeholdes.
        </div>
      </div>
    </footer>
  );
}
