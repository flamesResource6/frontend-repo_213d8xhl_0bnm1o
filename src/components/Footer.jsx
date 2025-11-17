import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="pt-12 pb-16 bg-gradient-to-t from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-pink-100 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="text-xl font-semibold">Ready for your next set?</h3>
            <p className="text-gray-600">DM to book or ask questions.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/natdidthat__" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full transition shadow">
              <Instagram className="h-4 w-4" /> @natdidthat__
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-pink-300 text-pink-700 bg-white hover:bg-pink-50 transition">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Nat Did That. All rights reserved.</div>
      </div>
    </footer>
  )
}
