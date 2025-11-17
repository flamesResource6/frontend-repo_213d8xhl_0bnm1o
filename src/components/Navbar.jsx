import { useState } from 'react'
import { Menu, X, Instagram } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 shadow ring-2 ring-pink-200" />
            <span className="font-extrabold tracking-tight text-xl bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent">NatDidThat</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-gray-700">
            <button onClick={() => scrollTo('services')} className="hover:text-pink-600 transition">Services</button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-pink-600 transition">Gallery</button>
            <button onClick={() => scrollTo('about')} className="hover:text-pink-600 transition">About</button>
            <a href="https://www.instagram.com/natdidthat__" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition shadow">
              <Instagram className="h-4 w-4" /> Book on Instagram
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-pink-50" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-pink-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <button onClick={() => scrollTo('services')} className="text-left py-2">Services</button>
            <button onClick={() => scrollTo('gallery')} className="text-left py-2">Gallery</button>
            <button onClick={() => scrollTo('about')} className="text-left py-2">About</button>
            <a href="https://www.instagram.com/natdidthat__" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition">
              <Instagram className="h-4 w-4" /> Book on Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
