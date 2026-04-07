import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImage = 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=1920';
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-serif mb-4 drop-shadow-lg">
          24/7 Nature Retreat
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Escape to Henchu Resort – where the forest meets luxury.
        </p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primaryDark transition rounded-md text-base font-medium"
        >
          Enquire Now
          <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
}
