import { Brush, Sparkles, Scissors } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Structured Gel Manicure',
    desc: 'Builder gel overlay for long-lasting strength and a flawless, natural look.',
    price: '$65+',
  },
  {
    icon: Scissors,
    title: 'Gel X / Extensions',
    desc: 'Soft gel extensions shaped to perfection with a lightweight feel.',
    price: '$95+',
  },
  {
    icon: Brush,
    title: 'Custom Nail Art',
    desc: 'Hand-painted designs. Abstract, chrome, 3D accents, and seasonal sets.',
    price: '+$10-$40',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Services</h2>
          <p className="mt-3 text-gray-600">Quality, cleanliness, and designs that last</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="rounded-2xl border border-pink-100 bg-gradient-to-b from-white to-pink-50/30 p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <p className="mt-4 font-medium text-pink-700">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
