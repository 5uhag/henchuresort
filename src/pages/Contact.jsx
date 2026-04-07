import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import BookingForm from '../components/BookingForm.jsx';

export default function Contact() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="mb-10">
          <h1 className="font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Get in touch.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Questions about availability, room types, dietary needs, or group bookings? Weere here to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: 'our location',
              content: 'Henchu Resort, Bangalore outskirts',
              sub: '12.7585691, 77.528824',
            },
            {
              icon: Phone,
              title: 'Phone',
              content: '+91 12345 67890',
              sub: 'Call or WhatsApp',
            },
            {
              icon: Mail,
              title: 'Email',
              content: 'hello@henchuresort.com',
              sub: 'We reply within 2–4 hours',
            },
          ].map(({ icon: Icon, title, content, sub }) => (
            <div key={title} className="rounded-[2rem] border border-white/80 bg-white p-8 shadow-[0_22px_60px_-34px_rgba(15,23,42,0.35)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950 text-white shadow-lg shadow-emerald-950/20">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">{title}</h3>
              <div className="mt-3 text-2xl font-semibold text-slate-950">{content}</div>
              <p className="mt-2 text-xs text-slate-500">{sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2.25rem] bg-emerald-50 p-8 lg:p-12">
          <div className="flex items-start gap-3">
            <Clock size={20} className="mt-1 flex-shrink-0 text-emerald-900" />
            <div>
              <h3 className="font-semibold text-slate-950">Enquiry Response Times</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <strong>Weekdays 9am–6pm IST:</strong> Usually within 2 hours
                </li>
                <li>
                  <strong>Weekday evenings & weekends:</strong> Within 4–6 hours
                </li>
                <li>
                  <strong>During peak season:</strong> May take up to 24 hours
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-12 max-w-7xl px-6 lg:px-10">
        <div className="rounded-[2.25rem] border border-white/80 bg-white p-8 shadow-[0_22px_60px_-34px_rgba(15,23,42,0.35)] lg:p-12">
          <h2 className="font-serif text-3xl text-slate-950 sm:text-4xl">Or fill out the form below</h2>
          <p className="mt-2 text-sm text-slate-600">Include any special requests—dietary preferences, group bookings, or event enquiries.</p>
        </div>
      </section>

      <BookingForm />
    </>
  );
}
