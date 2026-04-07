import { ArrowRight, BedDouble, ChevronRight, Clock3, MapPin, PhoneCall, Sparkles, Star, Waves } from 'lucide-react';
import BookingForm from '../components/BookingForm.jsx';

const highlights = [
  {
    title: 'Thoughtfully designed rooms',
    text: 'Warm materials, natural light, and layouts that prioritize comfort and calm.',
    icon: BedDouble,
  },
  {
    title: 'All-day dining & relaxation',
    text: 'Open-air breakfast, evening poolside ambiance, and quiet reading corners.',
    icon: Waves,
  },
  {
    title: 'Effortless booking',
    text: 'Simple enquiry form connected to Stitch MCP for real-time confirmations.',
    icon: Sparkles,
  },
];

const rooms = [
  {
    name: 'Signature Room',
    desc: 'Spacious with garden views, natural materials, and a private sit-out.',
    meta: '2 guests · AC · Wi-Fi · Balcony',
  },
  {
    name: 'Family Suite',
    desc: 'Multi-room layout with a living area, perfect for small groups or families.',
    meta: '4 guests · Kitchette · TV · Patio',
  },
  {
    name: 'Poolside Cottage',
    desc: 'Direct pool access with a private entrance and outdoor shower.',
    meta: '2-3 guests · Private patio · Premium amenities',
  },
];

const experiences = [
  'Fresh buffet breakfast on the verandah',
  'Evening pool with ambient lighting',
  'Curated indoor-outdoor lounge spaces',
  '24/7 property support and guest services',
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(20,83,45,0.18),_transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-24">
          <div className="relative flex flex-col justify-center pt-6 lg:pt-14">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-900 shadow-sm backdrop-blur">
              Bangalore outskirts
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Henchu Resort
            </div>

            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              A resort that prioritizes calm, community, and connection.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Thoughtfully designed rooms, open-air dining, and shared spaces perfect for a weekend escape from Bangalore.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="/booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-900">
                Check availability
                <ArrowRight size={18} />
              </a>
              <a href="/rooms" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50">
                Explore rooms
                <ChevronRight size={18} />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['12.7585691', 'Latitude'],
                ['77.528824', 'Longitude'],
                ['6 acres', 'property size'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/80 bg-white/75 p-4 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.4)] backdrop-blur">
                  <div className="text-2xl font-semibold text-slate-950">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-900/10 via-amber-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-slate-950 shadow-2xl shadow-slate-950/20">
              <div
                className="min-h-[540px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(3, 7, 18, 0.05), rgba(3, 7, 18, 0.65)), url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600)',
                }}
              >
                <div className="flex h-full min-h-[540px] flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur">
                      Premium experience
                    </div>
                    <div className="rounded-full bg-amber-400/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-lg">
                      4.9 / 5.0
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="max-w-lg rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/75">
                        <Star size={14} className="text-amber-300" />
                        Consistently praised by guests
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/85">
                        Henchu Resort offers authentic hospitality, immaculate rooms, and a team that genuinely cares about your stay.
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] bg-white p-4 text-slate-950 shadow-xl shadow-black/20">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                        <Clock3 size={14} />
                        Reply time
                      </div>
                      <div className="mt-2 text-2xl font-semibold">2-4 hrs</div>
                      <div className="text-sm text-slate-500">Via Stitch MCP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12">
        <div className="grid gap-6 md:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-white/80 bg-white p-8 shadow-[0_22px_60px_-34px_rgba(15,23,42,0.35)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900">
              <MapPin size={14} />
              Karnataka, India
            </div>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">
              A quiet place to unwind, just 45 minutes from Bangalore.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Henchu Resort provides a seamless escape from city life: thoughtful accommodationss, fresh food, and a team dedicated to your comfort.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.45)] backdrop-blur-sm transition hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-950 text-white shadow-lg shadow-emerald-950/20">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rooms" className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-900">Rooms</div>
            <h2 className="mt-2 font-serif text-3xl text-slate-950 sm:text-4xl">Comfort with attention to detail.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Each room combines functionality with aesthetic coherence, from furniture selection to natural light.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <article key={room.name} className={`group overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_22px_60px_-34px_rgba(15,23,42,0.35)] ${index === 1 ? 'lg:-translate-y-4' : ''}`}>
              <div className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: index === 0
                ? 'url(https://images.unsplash.com/photo-1555939594-58d7cb561c1c?auto=format&fit=crop&q=80&w=1200)'
                : index === 1
                  ? 'url(https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=1200)'
                  : 'url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200)' }} />
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">{room.meta}</div>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">{room.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{room.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="amenities" className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="grid gap-6 rounded-[2.25rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/30 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Experiences</div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">What makes a stay memorable.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {experiences.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85 backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-[1.75rem] bg-white p-6 text-slate-950 lg:max-w-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                <PhoneCall size={14} />
                Ready to book?
              </div>
              <div className="mt-3 text-2xl font-semibold">Enquire today.</div>
            </div>
            <a href="#booking" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900">
              Open booking form
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
}
