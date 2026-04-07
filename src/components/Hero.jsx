import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImage = 'https://images.unsplash.com/photo-1501117716987-c8e3f8a5d8a5?auto=format&fit=crop&q=80&w=1920';
  return (
    <section
      className="relative flex items-center justify-center h-[80vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative text-center text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight drop-shadow-lg">
          Henchu Resort
        </h1>
        <p className="text-base md:text-lg mb-8 opacity-90">
          A peaceful retreat on the outskirts of Bangalore — rooms, dining, and nature experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#rooms"
            className="inline-flex items-center px-5 py-3 rounded-md text-sm font-medium btn-primary"
          >
            Check Availability
            <ArrowRight className="ml-2" size={18} />
          </a>
          <a
            href="#location"
            className="inline-flex items-center px-5 py-3 rounded-md text-sm font-medium bg-white/20 hover:bg-white/30 transition"
          >
            View Location
          </a>
        </div>
      </div>
    </section>
  );
}
