const faqs = [
  {
    q: 'Where are you located?',
    a: 'Private studio in [Your City]. Exact address provided after booking.',
  },
  {
    q: 'How do I book?',
    a: 'Booking is handled through Instagram. Send a DM with your preferred date and a photo of your inspo.',
  },
  {
    q: 'What is your policy?',
    a: '48-hour reschedule policy. Deposits are non-refundable but transferable once with notice.',
  },
]

export default function FAQ() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">Good to know</h2>
        <div className="mt-10 divide-y divide-pink-100 rounded-2xl border border-pink-100 overflow-hidden">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-pink-50/50">
              <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between">
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="text-pink-600 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
