export default function Footer() {
  const mapsUrl = 'https://www.google.com/maps/place/Henchu+Resort/@12.7585691,77.528824,987m';
  return (
    <footer className="mt-10 border-t border-white/70 bg-[#0f1724] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr_0.8fr] lg:px-10">
        <div>
          <div className="font-serif text-2xl">Henchu Resort</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            A more polished Bangalore resort landing page with better spacing, stronger sections, and a booking flow ready for Stitch MCP.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-white/75">
            <p><a href="tel:+911234567890" className="transition hover:text-white">+91 12345 67890</a></p>
            <p><a href="mailto:hello@henchuresort.com" className="transition hover:text-white">hello@henchuresort.com</a></p>
          </div>
        </div>

        <div id="location">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Location</h3>
          <p className="mt-4 text-sm leading-7 text-white/75">Henchu Resort, Bangalore outskirts</p>
          <p className="mt-2 text-sm text-white/60">12.7585691, 77.528824</p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-amber-200 transition hover:text-amber-100">
            Open in Google Maps
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs tracking-[0.2em] text-white/45 lg:px-10">
        © {new Date().getFullYear()} Henchu Resort
      </div>
    </footer>
  );
}
