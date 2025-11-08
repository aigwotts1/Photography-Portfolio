import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images
import adcomLogo from "./assets/brands-logos/adcom.jpeg";
import izi from "./assets/brands-logos/izi.png";
import portronics from "./assets/brands-logos/portronics.png";
import redhorns from "./assets/brands-logos/redhorns.png";
import sirphire from "./assets/brands-logos/sirphire.png";
import heroDroneShot from "./assets/captures/heroDroneShot.mp4";
import portfolio1 from "./assets/captures/portfolio1.JPG";
import barafhibaraf from "./assets/captures/barafhibaraf.jpg"
import group from "./assets/captures/group.JPG"
import portfolio from "./assets/captures/portfolio.JPG"
import editor from "./assets/captures/editor.jpg"
import abhiudaipur from './assets/captures/abhiudaipur.jpg'
import sanjauli from "./assets/captures/sanjauli.JPG"
import shimla from "./assets/captures/shimla.JPG";
import stargazing from "./assets/captures/stargazing.jpg";
import sunset from "./assets/captures/sunset.jpg";
import himachalographer from "./assets/captures/himachalographer.JPG";import Hero from "./components/Hero";
// top of file (outside the component)
import redhornsShoot from "./assets/captures/redhorns.mp4";
import sirphireShoot from "./assets/captures/sirphire.mp4";
import starbucks from "./assets/captures/starbucks.mp4";

const WORKS = [
  { id: 1, video: redhornsShoot, category: "Commercial", title: " Product 📸" },
  { id: 2, video: sirphireShoot, category: "Product",      title: "Brand 🔥" },
  { id: 3, video: starbucks,     category: "Resorts",   title: "Property 🍃" },
];



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

  const categories = ["All", "Personal", "Commercial", "Product","Resorts"];

  const filteredGallery = GALLERY.filter((g) => filter === "All" || g.category === filter);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((s) => ({ ...s, [name]: value }));
  }

 async function submitForm(e) {
  e.preventDefault();

  if (!formState.name || !formState.email || !formState.type) {
    alert("Please fill name, email and project type.");
    return;
  }

  setSent(false);

  try {
    const body = encode({
      "form-name": "contact",
      name: formState.name,
      email: formState.email,
      type: formState.type,
      message: formState.message || "",
    });

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (res.ok) {
      setSent(true);
      setFormState({ name: "", email: "", type: "", message: "" });
    } else {
      alert("Something went wrong. Please try again later.");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to send. Check your connection or try again later.");
  }
}
// utils for Netlify form body
function encode(data) {
  return new URLSearchParams(data).toString();
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

      {/* HERO section in component/hero.jsx */}
<Hero
  video={heroDroneShot}
  title="Want A Shoot 🎥 ?"
  subtitle="📸 Commercial & Personal ❤️"
  primary={{ href: "#contact", label: "Book a shoot" }}
  secondary={{ href: "#work", label: "View portfolio" }}
  heightClass="h-[72vh]"
  overlayClass="bg-black/30"
/>


    {/* BRANDS */}
<section id="brands" className="py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-2xl font-medium mb-6">
      Selected brand collaborations
    </h2>

    {/* Brand logos marquee */}
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

    {/* Case Studies */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          img: portfolio1,
          title: "Product Shoot 📸",
          desc: "Full campaign shoot: concept, art direction, and final retouching for engaging social media video.",
          link: "https://www.instagram.com/reel/DOi_6vXk6L4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          label: "View Reel Sample →",
        },
        {
          img: group,
          title: "Travel Shoot - Cinematic Vlog ❤️",
          desc: "Real Travel Detailed Experience - Covering each and every cost of a Tourist Destination.",
          link: "https://youtu.be/_Eu0cGUEZtE?si=9M6lZHUofsg6nx16",
          label: "View Youtube Sample →",
        },
        {
          img: portfolio,
          title: "Personal & Property Shoot 🍃",
          desc: "Cinematic Shoots for Pre Wedding - Personal Portfolio - Resorts.",
          link: "https://www.instagram.com/reel/DALqW8aqI2m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          label: "View Reel Sample →",
        },
      ].map((card, index) => (
        <a
          key={index}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)] cursor-pointer"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-45 object-cover group-hover:opacity-90 transition-opacity duration-300"
          />
          <div className="p-4">
            <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-gray-400">{card.desc}</p>
            <span className="mt-3 inline-block text-amber-400 text-sm">
              {card.label}
            </span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

{/* GALLERY */}
<section id="work" className="py-12">
  <div className="max-w-6xl mx-auto px-6">
    {/* Header */}
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

    {/* Video Grid */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {WORKS.filter(w => filter === "All" || w.category === filter).map((w) => (
        <motion.figure
          key={w.id}
          className="rounded-xl overflow-hidden bg-gray-800 flex flex-col transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)] cursor-pointer relative"
          whileHover={{ scale: 1.02 }}
        >
          <video
            src={w.video}
            muted
            playsInline
            preload="metadata"
            className="w-full aspect-[9/16] object-cover transition-all duration-300 hover:opacity-90"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => e.target.pause()}
            onClick={(e) =>
              e.target.paused ? e.target.play() : e.target.pause()
            }
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
          {/* Caption */}
          <figcaption className="absolute bottom-4 left-4 text-white text-sm">
            <div className="font-semibold">{w.title}</div>
            <div className="text-gray-300 text-xs">{w.category}</div>
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

            <form
  onSubmit={submitForm}
  name="contact"
  data-netlify="true"
  netlify-honeypot="bot-field"
  className="mt-6 space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />
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
              </div>

              {sent && <div className="text-sm text-emerald-400">
  Thanks! I got your message — I’ll reply within 48 hours.
</div>}

            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Studio / Contact</h3>
            <div className="mt-3 text-sm text-gray-400">Based in Himachal — available for Cinematic Shoots.</div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a href="https://www.instagram.com/himachalographer" target="_blank" rel="noreferrer" className="bg-gray-800 p-4 rounded">Instagram</a>
              <a href="https://www.youtube.com/@Himachalographer" target="_blank" rel="noreferrer" className="bg-gray-800 p-4 rounded">YouTube</a>
              <a href="#" className="bg-gray-800 p-4 rounded">Email</a>
              <a href="tel:+919459916939" className="bg-gray-800 p-4 rounded">Call / WhatsApp</a>
            </div>


          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Abhinav Vashishth — All rights reserved</div>
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
