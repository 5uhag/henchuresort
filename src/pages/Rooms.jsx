import { Link } from 'react-router-dom';
import { Wifi, Tv, AirVent, Users, MapPin, ArrowRight } from 'lucide-react';
import BookingForm from '../components/BookingForm.jsx';

const roomDetails = [
  {
    id: 1,
    name: 'Signature Room',
    slugurl: 'signature-room',
    desc: 'Our most popular room, designed for couples and solo travelers. Features natural light, premium bedding, and a private sit-out with garden views.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561c1c?auto=format&fit=crop&q=80&w=1200',
    meta: '2 guests · AC · Wi-Fi · Balcony',
    amenities: ['Air conditioning', '42" LED TV', 'Free Wi-Fi (fiber)', 'Premium bedding', 'Attached bathroom', 'Garden-facing balcony'],
    price: '₹4,900 – ₹6,500/night',
  },
  {
    id: 2,
    name: 'Family Suite',
    slug: 'family-suite',
    desc: 'Perfect for families or small groups. Multi-room layout with a comfortable living area, kitchenette, and premium furnishings.',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=1200',
    meta: '4 guests · Kitchenette · TV · Patio',
    amenities: ['Air conditioning', 'Living area with sofa', 'Kitchenette', 'Dual TVs', 'Free Wi-Fi', 'Private patio', 'Work desk'],
    price: '₹7,500 – ₹10,000/night',
  },
  {
    id: 3,
    name: 'Poolside Cottage',
    slug: 'poolside-cottage',
    desc: 'Exclusive: Direct pool access, private entrance, outdoor shower, and premium amenities. The ultimate relaxation retreat.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
    meta: '2–3 guests · Private patio · Premium',
    amenities: ['Air conditioning', 'Premium bedding', 'Outdoor shower', 'Private pool access', 'Sitting area', 'Work desk', 'Mini bar'],
    price: '₹8,500 – ₹12,000/night',
  },
];

export default function Rooms() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="mb-10">
          <h1 className="font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Beautiful rooms, thoughtfully designed.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Each room at Henchu Resort combines comfort with aesthetic coherence. From natural light and premium materials to curated furniture, every detail matters.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {roomDetails.map((room, index) => (
            <article key={room.id} className={`group overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_22px_60px_-34px_rgba(15,23,42,0.35)] ${index === 1 ? 'lg:-translate-y-6' : ''}`}>
              <div className="relative h-64 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${room.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-serif text-slate-950">{room.name}</h2>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-amber-700">{room.meta}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{room.desc}</p>

                <div className="mt-5 space-y-2 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-900">{room.price}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
                >
                  Enquire about this room
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="rounded-[2.25rem] bg-emerald-50 p-8 lg:p-12">
          <h2 className="font-serif text-3xl text-slate-950 sm:text-4xl">Standard amenities across all rooms</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: AirVent, label: 'Air Conditioning' },
              { icon: Wifi, label: 'High-speed Wi-Fi' },
              { icon: Tv, label: 'Smart TV' },
              { icon: Users, label: '24/7 Support' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-white px-4 py-6">
                <Icon size={24} className="text-emerald-950" />
                <span className="text-center text-sm font-medium text-slate-900">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
}
