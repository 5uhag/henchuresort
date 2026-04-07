import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    id: 1,
    title: 'Resort ov overview',
    caption: 'The main property overlooking gardens and pool.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    category: 'Resort',
  },
  {
    id: 2,
    title: 'Pool & Lounge',
    caption: 'Olympic-sized pool with ambient evening lighting.',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f77ea?auto=format&fit=crop&q=80&w=1200',
    category: 'Amenities',
  },
  {
    id: 3,
    title: 'Signature Room',
    caption: 'Natural light and premium furnishings.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561c1c?auto=format&fit=crop&q=80&w=1200',
    category: 'Rooms',
  },
  {
    id: 4,
    title: 'Dining Hall',
    caption: 'Open-air breakfast area with mountain views.',
    image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?auto=format&fit=crop&q=80&w=1200',
    category: 'Dining',
  },
  {
    id: 5,
    title: 'Garden Path',
    caption: 'Curated landscaping and walking trails.',
    image: 'https://images.unsplash.com/photo-1511215591394-fbfa74e5ea6e?auto=format&fit=crop&q=80&w=1200',
    category: 'Grounds',
  },
  {
    id: 6,
    title: 'Evening Ambiance',
    caption: 'Sunset over the resort grounds.',
    image: 'https://images.unsplash.com/photo-1495707902905-78189c392d7d?auto=format&fit=crop&q=80&w=1200',
    category: 'Ambiance',
  },
];

export default function Gallery() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="mb-10">
          <h1 className="font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            See Henchu Resort.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A visual journey through our rooms, dining spaces, shared areas, and the natural beauty that surrounds us.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/80 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.35)] ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : index === 5 ? 'lg:col-span-2' : ''
              }`}
            >
              <div
                className={`bg-cover bg-center transition duration-500 group-hover:scale-105 ${
                  index === 0 ? 'h-96' : index === 5 ? 'h-64' : 'h-80'
                }`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 translate-y-full border-t border-white/50 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent p-6 transition group-hover:translate-y-0">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">{item.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/75">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="rounded-[2.25rem] border border-white/80 bg-white p-8 text-center shadow-[0_22px_60px_-34px_rgba(15,23,42,0.35)] lg:p-12">
          <h2 className="font-serif text-3xl text-slate-950 sm:text-4xl">
            Ready to experience Henchu Resort in person?
          </h2>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-900"
          >
            Check availability
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
