import { Phone, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-md shadow z-20">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-serif text-[#0f1724]">Henchu Resort</div>
        <ul className="hidden md:flex items-center space-x-4 text-sm">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#rooms" className="hover:underline">Rooms</a></li>
          <li><a href="#amenities" className="hover:underline">Amenities</a></li>
          <li><a href="#location" className="hover:underline">Location</a></li>
        </ul>
      </div>
      <div className="flex items-center space-x-3">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium bg-[#25D366] text-white hover:opacity-90 transition"
        >
          <Phone size={16} />
          <span>WhatsApp</span>
        </a>
        <a
          href="#rooms"
          className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium btn-primary"
        >
          <ShoppingBag size={16} />
          <span className="ml-2">Check Availability</span>
        </a>
      </div>
    </nav>
  );
}
