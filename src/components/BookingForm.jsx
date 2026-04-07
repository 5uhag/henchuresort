import { useState } from 'react';
import { ArrowRight, CircleAlert, LoaderCircle, Mail, Phone } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: 2,
  message: '',
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ loading: false, ok: null, error: '' });

  function update(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submit(e) {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_STITCH_ENDPOINT || '';

    if (!endpoint) {
      setStatus({ loading: false, ok: false, error: 'Set VITE_STITCH_ENDPOINT to your Stitch MCP function URL.' });
      return;
    }

    setStatus({ loading: true, ok: null, error: '' });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(import.meta.env.VITE_STITCH_API_KEY ? { 'x-api-key': import.meta.env.VITE_STITCH_API_KEY } : {}),
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || response.statusText);
      }

      setStatus({ loading: false, ok: true, error: '' });
      setForm(initialForm);
    } catch (error) {
      setStatus({ loading: false, ok: false, error: error.message || 'Request failed' });
    }
  }

  return (
    <section id="booking" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/25">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            Enquiry
          </div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl">Booking form that feels like part of the brand.</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            This form is ready for Stitch MCP. Once you paste the endpoint into `VITE_STITCH_ENDPOINT`, it will post the enquiry JSON directly.
          </p>

          <div className="mt-8 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Phone size={16} className="text-amber-300" />
              +91 12345 67890
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Mail size={16} className="text-amber-300" />
              hello@henchuresort.com
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-6 text-amber-50">
            <div className="flex items-center gap-2 font-semibold text-amber-200">
              <CircleAlert size={16} />
              Stitch MCP note
            </div>
            <p className="mt-2 text-white/80">
              If you want full backend booking storage, I can wire this form to a specific Stitch function, add validation, and add a secure proxy if you do not want credentials in the browser.
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_26px_70px_-36px_rgba(15,23,42,0.45)] sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" value={form.name} onChange={update} placeholder="Your name" />
            <Field label="Email address" name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" />
            <Field label="Phone" name="phone" value={form.phone} onChange={update} placeholder="Phone number" />
            <Field label="Guests" name="guests" type="number" min="1" value={form.guests} onChange={update} placeholder="2" />
            <Field label="Check-in" name="checkIn" type="date" value={form.checkIn} onChange={update} />
            <Field label="Check-out" name="checkOut" type="date" value={form.checkOut} onChange={update} />
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                placeholder="Tell us what kind of stay you're looking for"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.loading ? <LoaderCircle size={18} className="animate-spin" /> : <ArrowRight size={18} />}
              {status.loading ? 'Sending enquiry' : 'Send enquiry'}
            </button>

            {status.ok && <p className="text-sm text-emerald-700">Enquiry sent. This is now ready for Stitch MCP.</p>}
            {status.ok === false && <p className="text-sm text-rose-600">{status.error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white"
      />
    </label>
  );
}
