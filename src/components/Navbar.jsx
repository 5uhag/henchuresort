import { Phone, Menu, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-30 w-full border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-950 text-white shadow-lg shadow-emerald-950/20">
            <Sparkles size={18} />
          </div>
          <div>
            <div className="font-serif text-xl text-slate-950">Henchu Resort</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Bangalore retreat</div>
          </div>
        </div>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <li><a href="#about" className="transition hover:text-emerald-900">About</a></li>
          <li><a href="#rooms" className="transition hover:text-emerald-900">Rooms</a></li>
          <li><a href="#amenities" className="transition hover:text-emerald-900">Experiences</a></li>
          <li><a href="#booking" className="transition hover:text-emerald-900">Booking</a></li>
        </ul>
      </div>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-emerald-950/10 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50 md:inline-flex"
          >
            <Phone size={16} className="text-emerald-900" />
            WhatsApp
          </a>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-900"
          >
            Reserve
          </a>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-950/10 bg-white text-slate-900 shadow-sm md:hidden">
            <Menu size={18} />
          </button>
        </div>
    </nav>
  );
}
