import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', organization: '', message: '' });
  const [status, setStatus] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', organization: '', message: '' });
      } else {
        throw new Error(data.detail || 'Submission failed');
      }
    } catch (err) {
      setStatus(err.message || 'error');
    }
  };

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Start a Project</h2>
            <p className="mt-2 text-neutral-600">Tell us about your goals and we'll shape the story.</p>

            <div className="mt-6 space-y-3 text-neutral-700">
              <div className="flex items-center gap-3"><Mail size={18}/> hello@story-board.co.ke</div>
              <div className="flex items-center gap-3"><Phone size={18}/> +254XXXXXXXXX</div>
              <a href="https://wa.me/2547XXXXXXXX" target="_blank" className="inline-flex items-center gap-2 text-amber-600 hover:underline"><MessageCircle size={18}/> WhatsApp</a>
            </div>
          </div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
              <input type="email" className="w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
              <input className="w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Phone / WhatsApp" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
              <input className="w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Organization" value={form.organization} onChange={e=>setForm({...form,organization:e.target.value})} />
              <textarea rows="5" className="md:col-span-2 w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tell us about your project or initiative..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 font-medium text-white hover:bg-amber-600 transition-colors">
              <Send size={18}/> Send Inquiry
            </button>
            {status === 'loading' && <p className="mt-3 text-neutral-600">Sending...</p>}
            {status === 'success' && <p className="mt-3 text-green-600">Thanks! We'll be in touch shortly.</p>}
            {status && status !== 'loading' && status !== 'success' && <p className="mt-3 text-red-600">{String(status)}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
