import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images
import adcomLogo from "./assets/brands-logos/adcom.jpeg";
import izi from "./assets/brands-logos/izi.png";
import portronics from "./assets/brands-logos/portronics.png";
import redhorns from "./assets/brands-logos/redhorns.png";
import sirphire from "./assets/brands-logos/sirphire.png";

import barafhibaraf from "./assets/captures/barafhibaraf.jpg"
import dogs from "./assets/captures/dogs.jpg"
import editor from "./assets/captures/editor.jpg"
import abhiudaipur from './assets/captures/abhiudaipur.jpg'
import naturalpahadbaraf from './assets/captures/naturalbarafpahad.jpg'
import sanjauli from "./assets/captures/sanjauli.JPG"
import shimla from "./assets/captures/shimla.JPG";
import stargazing from "./assets/captures/stargazing.jpg";
import sunset from "./assets/captures/sunset.jpg";
import barafstudbois from "./assets/captures/barafstudbois.jpg";
import alto from "./assets/captures/alto.jpg";
import himachalographer from "./assets/captures/himachalographer.JPG";

// PhotographerPortfolio.jsx
// Single-file React + Tailwind component. Replace placeholder images, logos,
// and copy with your real content. Drop into a Create React App / Vite + Tailwind
// project and deploy to Vercel/Netlify.

export default function PhotographerPortfolio() {
  const [filter, setFilter] = useState("All");
  const [formState, setFormState] = useState({ name: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  const GALLERY = [
    { id: 1, src: barafhibaraf, category: "Commercial", title: "Urban Campaign" },
    { id: 2, src: abhiudaipur, category: "Fashion", title: "Studio Fashion" },
    { id: 3, src: sanjauli, category: "Weddings", title: "Himalayan Vows" },
    { id: 4, src: stargazing, category: "Drone", title: "Cliffside Drone" },
    { id: 5, src: sunset, category: "Commercial", title: "Product & Lifestyle" },
    { id: 6, src: shimla, category: "Fashion", title: "Editorial" },
  ];

  const BRANDS = [
    { id: 1, name: "Brand A", logo: adcomLogo },
    { id: 2, name: "Brand B", logo: izi },
    { id: 3, name: "Brand C", logo: portronics },
    { id: 4, name: "Brand D", logo: redhorns },
    { id: 5, name: "Brand E", logo: sirphire },
  ];

  const TESTIMONIALS = [
    { id: 1, name: "Ravisha - ADCOM", quote: "Thank you for collaborating ❤️. Shots Brilliantly Taken" },
    { id: 2, name: "Jyotsna - IZI", quote: "Your Cinematography is really good. Great Job Done👍" },
    { id: 3, name: "Akshay — SIRPHIRE", quote: "Wonderful Edits and Shoot. Great Work 🔥" },
  ];

  const categories = ["All", "Weddings", "Fashion", "Commercial", "Drone"];

  const filteredGallery = GALLERY.filter((g) => filter === "All" || g.category === filter);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((s) => ({ ...s, [name]: value }));
  }

  function submitForm(e) {
    e.preventDefault();
    // Simple client-side validation
    if (!formState.name || !formState.email || !formState.type) {
      alert("Please fill name, email and project type.");
      return;
    }

    // For demo: open mail client. Replace with API call (SendGrid / Netlify forms / custom backend)
    const mailto = `mailto:you@yoursite.com?subject=${encodeURIComponent(
      "New shoot request: " + formState.type
    )}&body=${encodeURIComponent("Name: " + formState.name + "\nEmail: " + formState.email + "\nMessage: " + formState.message)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="font-serif text-2xl tracking-tight">Abhinav Vashishth ~</div>
          <div className="text-sm text-gray-400">Cinematographer</div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#work">Work</a>
          <a href="#brands">Brands</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="open menu" className="p-2 bg-gray-800 rounded">Menu</button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[72vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=2000&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 max-w-6xl mx-auto px-6 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight">Capturing stories beyond the lens</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">Commercial, editorial and cinematic drone work — visual stories that move audiences and drive results.</p>
            <div className="mt-6 flex gap-4">
              <a href="#contact" className="inline-block bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow">Book a shoot</a>
              <a href="#work" className="inline-block border border-gray-600 px-5 py-3 rounded-lg text-gray-200">View portfolio</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium mb-6">Selected brand collaborations</h2>

         <div className="overflow-hidden">
  <div className="animate-marquee gap-8">
    {[...BRANDS, ...BRANDS].map((b, i) => (
      <div
        key={b.id + i}
        className="flex items-center justify-center w-40 h-20 bg-gray-800 rounded-lg shadow-sm flex-shrink-0"
      >
        <img
          src={b.logo}
          alt={b.name}
          className="max-h-12 object-contain"
        />
      </div>
    ))}
  </div>
</div>




          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Case Studies */}
            <article className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={barafstudbois} alt="Case" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Streetwear Campaign — Brand B</h3>
                <p className="mt-2 text-sm text-gray-400">Full campaign shoot: concept, art direction, and final retouching for social and OOH.</p>
                <a href="#" className="mt-3 inline-block text-amber-400 text-sm">View full story →</a>
              </div>
            </article>

            <article className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={himachalographer} alt="Case" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Hotel Launch — Brand A</h3>
                <p className="mt-2 text-sm text-gray-400">Lifestyle & architecture photography used in launch materials and web hero.</p>
                <a href="#" className="mt-3 inline-block text-amber-400 text-sm">View full story →</a>
              </div>
            </article>

            <article className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={alto} alt="Case" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Product Launch — Brand C</h3>
                <p className="mt-2 text-sm text-gray-400">Clean product & lifestyle photography for ecommerce and ads.</p>
                <a href="#" className="mt-3 inline-block text-amber-400 text-sm">View full story →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* GALLERY */}
<section id="work" className="py-12">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h2 className="text-2xl font-medium">Recent work</h2>
      <div className="flex flex-wrap gap-3 items-center">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-sm px-3 py-1 rounded ${
              filter === c
                ? "bg-amber-500 text-gray-900"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredGallery.map((g) => (
        <motion.figure
          key={g.id}
          className="rounded overflow-hidden bg-gray-800 flex flex-col"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={g.src}
            alt={g.title}
            className="w-full h-64 object-cover"
          />
          <figcaption className="p-3 text-sm text-gray-300 flex-1">
            {g.title} —{" "}
            <span className="text-gray-400">{g.category}</span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  </div>
</section>


      {/* ABOUT & STATS */}
      <section id="about" className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <img src={editor} alt="About" className="rounded-lg object-cover w-full h-60 md:h-96" />
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">About — Abhinav Vashishth</h3>
            <p className="mt-4 text-gray-300">I craft visual narratives for brands and resorts. Based in Himachal, available for domestic and personal shoots. My focus is on storytelling, color, and cinematic composition.</p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-amber-400 text-xl font-semibold">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-amber-400 text-xl font-semibold">2 yrs</div>
                <div className="text-sm text-gray-400">Experience</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium mb-6">What clients say</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="min-w-[320px] bg-gray-800 rounded-lg p-6">
                <div className="text-gray-300 italic">"{t.quote}"</div>
                <div className="mt-4 text-sm font-semibold">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-medium">Let’s create something special together📸</h2>
            <p className="mt-2 text-gray-400">Tell me about your project — commercial campaigns, editorial shoots, or a pre-wedding. I’ll respond within 48 hours.</p>

            <form onSubmit={submitForm} className="mt-6 space-y-4">
              <input name="name" value={formState.name} onChange={handleChange} placeholder="Your name" className="w-full bg-gray-800 rounded px-4 py-3 text-sm" />
              <input name="email" value={formState.email} onChange={handleChange} placeholder="Your email" className="w-full bg-gray-800 rounded px-4 py-3 text-sm" />
              <select name="type" value={formState.type} onChange={handleChange} className="w-full bg-gray-800 rounded px-4 py-3 text-sm">
                <option value="">Select project type</option>
                <option>Commercial</option>
                <option>Editorial / Fashion</option>
                <option>Wedding</option>
                <option>Drone / Aerial</option>
                <option>Other</option>
              </select>
              <textarea name="message" value={formState.message} onChange={handleChange} placeholder="Tell me the brief (optional)" className="w-full bg-gray-800 rounded px-4 py-3 text-sm h-28" />

              <div className="flex gap-3">
                <button type="submit" className="bg-amber-500 text-gray-900 px-5 py-3 rounded font-semibold">Send request</button>
                <a href="https://calendly.com/your-calendly" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-3 border border-gray-700 rounded">Book call</a>
              </div>

              {sent && <div className="text-sm text-emerald-400">Mail client opened — follow the prompt to send your message.</div>}
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Studio / Contact</h3>
            <div className="mt-3 text-sm text-gray-400">Based in Himachal — available for travel shoots.</div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="bg-gray-800 p-4 rounded">Instagram</a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="bg-gray-800 p-4 rounded">YouTube</a>
              <a href="mailto:you@yoursite.com" className="bg-gray-800 p-4 rounded">Email</a>
              <a href="tel:+911234567890" className="bg-gray-800 p-4 rounded">Call / WhatsApp</a>
            </div>


          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Abhinav Vashishth — All rights reserved</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">T&Cs</a>
          </div>
        </div>
      </footer>

      {/* Small utilities: marquee animation */}
      <style jsx>{`
        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
        .animate-marquee { display: flex; gap: 2rem; animation: marquee 18s linear infinite; }
      `}</style>
    </div>
  );
}
