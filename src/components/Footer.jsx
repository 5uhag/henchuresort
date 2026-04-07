export default function Footer() {
  const mapsUrl = 'https://www.google.com/maps/place/Henchu+Resort/@12.7585691,77.528824,987m';
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-serif text-lg mb-2">Henchu Resort</h3>
          <p className="text-sm text-gray-700">A calm retreat near Bangalore — rooms, dining and experiences among nature.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-sm">Phone: <a href="tel:+911234567890" className="text-primary">+91 12345 67890</a></p>
          <p className="text-sm">Email: <a href="mailto:hello@henchuresort.com" className="text-primary">hello@henchuresort.com</a></p>
        </div>
        <div id="location">
          <h4 className="font-medium mb-2">Location</h4>
          <p className="text-sm mb-2">Henchu Resort — coordinates: 12.7585691, 77.528824</p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Open in Google Maps</a>
        </div>
      </div>
      <div className="bg-gray-50 py-4 text-center text-xs text-gray-600">© {new Date().getFullYear()} Henchu Resort</div>
    </footer>
  );
}
