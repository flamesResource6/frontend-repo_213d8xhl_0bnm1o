const images = [
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607779097040-26b8c66b6ab7?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616394584731-7d68ee69d4cf?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604908176997-4316c288032e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596461404969-9ae70d7f2c65?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616394585049-bb1d2e2eb06d?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Recent Work</h2>
            <p className="mt-2 text-gray-600">A peek at sets clients love</p>
          </div>
          <a href="https://www.instagram.com/natdidthat__" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-300 text-pink-700 bg-white hover:bg-pink-50 transition">See more on Instagram →</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm group">
              <img src={src} alt={`Nail art ${i+1}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading={i < 3 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <a href="https://www.instagram.com/natdidthat__" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-300 text-pink-700 bg-white hover:bg-pink-50 transition">See more on Instagram →</a>
        </div>
      </div>
    </section>
  )
}
