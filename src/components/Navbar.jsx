import { Phone, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md shadow-md z-10">
      <div className="text-2xl font-serif text-primary">Henchu Resort</div>
      <div className="flex space-x-4">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          <Phone size={20} />
          <span>Enquire on WhatsApp</span>
        </a>
        <button className="flex items-center space-x-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primaryDark transition">
          <ShoppingBag size={20} />
          <span>Book Now</span>
        </button>
      </div>
    </nav>
  );
}
