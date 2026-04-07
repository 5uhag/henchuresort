import { ArrowRight, Clock, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm.jsx';

const diningOptions = [
  {
    title: 'Breakfast Buffet',
    description: 'Fresh, seasonal fare served on the verandah daily from 7am–11am. Fresh fruitstraw, local yogurts, hot dishes, and coffee.',
    time: '7:00 AM – 11:00 AM',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Lunch Service',
    description: 'Indian, Continental, and special dietary meals available. Served in the dining hall or as picnic packs for guests exploring nearby attractions.',
    time: '12:30 PM – 2:00 PM',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Evening Refreshments',
    description: 'Snacks, tea, coffee, and light bites available poolside. A perfect way to unwind after exploring the gardens or property grounds.',
    time: '3:30 PM – 5:00 PM',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Dinner Service',
    description: 'Multi-course dinners featuring Indian cuisine, tandoor specials, and seasonal vegetables. Inclusive or à la carte options available.',
    time: '7:30 PM – 10:00 PM',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200',
  },
];

const specialties = [
  'Fresh, local, seasonal ingredients',
  'Dietary accommodations (vegetarian, vegan, gluten-free)',
  'Tandoor-fired breads and meats',
  'Traditional South Indian curries',
  'Organic salads from local farms',
  'Curated wine & spirits selection',
];

export default function Dining() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="mb-10">
          <h1 className="font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Food that tastes like home.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Our kitchen celebrates local ingredients and traditional recipes, served in a relaxed, open-air setting overlooking the property.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {diningOptions.map((option) => (
            <article key={option.title} className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_22px_60px_-34px_rgba(15,23,42,0.35)]">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${option.image})` }} />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
                  <Clock size={14} />
                  {option.time}
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">{option.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{option.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="grid gap-8 rounded-[2.25rem] bg-slate-950 p-8 text-white lg:grid-cols-[1fr_auto] lg:p-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">What makes our kitchen special</div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Local sourcing, family recipes.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {specialties.map((spec) => (
                <div key={spec} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm backdrop-blur-sm">
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-300" />
                  {spec}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[1.75rem] bg-white p-6 text-slate-950 lg:max-w-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                <Users size={14} />
                Dietary needs?
              </div>
              <div className="mt-3 text-lg font-semibold">We accommodate all requests.</div>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
            >
              Let us know in advance
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
}
