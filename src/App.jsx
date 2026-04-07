import { ArrowRight, BedDouble, ChevronRight, Clock3, MapPin, PhoneCall, Sparkles, Star, Waves } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import BookingForm from './components/BookingForm.jsx';

const highlights = [
  {
    title: 'Quiet stays with character',
    text: 'Warm textures, soft lighting, and a layout that feels open without feeling empty.',
    icon: BedDouble,
  },
  {
    title: 'Food, pool, and slow evenings',
    text: 'Designed to make the property feel lived in, active, and worth scrolling for.',
    icon: Waves,
  },
  {
    title: 'Easy enquiry flow',
    text: 'A clean booking path that can connect to Stitch MCP or a serverless backend.',
    icon: Sparkles,
  },
];

const rooms = [
  {
    name: 'Signature Room',
    desc: 'Big window, warm woods, and a calm palette that works well on mobile.',
    meta: '2 guests · AC · Wi-Fi',
  },
  {
    name: 'Family Suite',
    desc: 'Roomier layout with a sofa zone and a more premium look in photos.',
    meta: '4 guests · Balcony · TV',
  },
  {
    name: 'Poolside Cottage',
    desc: 'A more relaxed option for guests who want the property to feel a little special.',
    meta: '2-3 guests · Patio · View',
  },
];

const experiences = [
  'Breakfast in the open air',
  'Evening pool lighting',
  'Nature-facing seating corners',
  'Private enquiry support',
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-slate-950">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(20,83,45,0.18),_transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-24">
            <div className="relative flex flex-col justify-center pt-6 lg:pt-14">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-900 shadow-sm backdrop-blur">
                Bangalore retreat
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Henchu Resort
              </div>

              <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                A resort page with more atmosphere and less generic filler.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                This layout leans into rich imagery, layered cards, and calmer pacing so the site feels like a real hospitality brand instead of a plain template.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-900">
                  Check availability
                  <ArrowRight size={18} />
                </a>
                <a href="#rooms" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50">
                  Explore rooms
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['24/7', 'Support'],
                  ['12.7585691', 'Latitude'],
                  ['77.528824', 'Longitude'],
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
                      'linear-gradient(180deg, rgba(3, 7, 18, 0.05), rgba(3, 7, 18, 0.65)), url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1600)',
                  }}
                >
                  <div className="flex h-full min-h-[540px] flex-col justify-between p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur">
                        Poolside cottage
                      </div>
                      <div className="rounded-full bg-amber-400/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-lg">
                        4.9 guest score
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                      <div className="max-w-lg rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/75">
                          <Star size={14} className="text-amber-300" />
                          Designed for strong first impressions
                        </div>
                        <p className="mt-3 text-sm leading-6 text-white/85">
                          The hero now feels layered and premium, with a dark image treatment that makes the brand typography and CTA stand out.
                        </p>
                      </div>

                      <div className="rounded-[1.5rem] bg-white p-4 text-slate-950 shadow-xl shadow-black/20">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                          <Clock3 size={14} />
                          Enquiry reply
                        </div>
                        <div className="mt-2 text-2xl font-semibold">Fast</div>
                        <div className="text-sm text-slate-500">When connected to Stitch</div>
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
                Bangalore outskirts
              </div>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">
                Clean structure, richer spacing, and a more premium visual rhythm.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                The page now uses layered backgrounds, stronger contrast, and more polished section spacing so it feels closer to a modern hospitality landing page.
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
              <h2 className="mt-2 font-serif text-3xl text-slate-950 sm:text-4xl">Cards with personality, not just boxes.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              Each block now has stronger hierarchy, a tighter brand palette, and enough visual weight to read like a real section.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <article key={room.name} className={`group overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_22px_60px_-34px_rgba(15,23,42,0.35)] ${index === 1 ? 'lg:-translate-y-4' : ''}`}>
                <div className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: index === 0
                  ? 'url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200)'
                  : index === 1
                    ? 'url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200)'
                    : 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200)' }} />
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
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">A section that actually feels alive.</h2>
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
                  Contact
                </div>
                <div className="mt-3 text-2xl font-semibold">Make the enquiry flow feel premium too.</div>
              </div>
              <a href="#booking" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900">
                Open booking form
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <BookingForm />
      </main>

      <Footer />
    </div>
  );
}