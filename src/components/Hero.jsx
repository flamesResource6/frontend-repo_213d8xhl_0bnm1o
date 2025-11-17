import { Instagram, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-pink-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-pink-200 blur-3xl opacity-40" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-200 blur-3xl opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-pink-100 rounded-full px-3 py-1 mb-4 shadow-sm">
            <Sparkles className="h-4 w-4 text-pink-600" />
            <span className="text-sm text-gray-700">Specializing in custom nail art</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-gray-900 to-pink-700 bg-clip-text text-transparent">
            Nails by Nat Did That
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Modern designs, gel extensions, structured manicures, and hand-painted art. Clean, resilient, and made to turn heads.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white shadow transition">
              View Services
            </a>
            <a href="https://www.instagram.com/natdidthat__" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-pink-300 text-pink-700 bg-white hover:bg-pink-50 transition">
              <Instagram className="h-4 w-4" />
              Book on Instagram
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
            <li className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-500" /> Gel X / Extensions</li>
            <li className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-500" /> Structured Manicures</li>
            <li className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-500" /> Custom Nail Art</li>
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-pink-100 to-fuchsia-100 p-2 shadow-lg">
            <div className="h-full w-full rounded-2xl bg-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604654894613-6a1644fc514b?q=80&w=1600&auto=format&fit=crop"
                alt="Nail art closeup"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
