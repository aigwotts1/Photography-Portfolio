import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images
import adcomLogo from "./assets/brands-logos/adcom.webp";
import izi from "./assets/brands-logos/izi.webp";
import portronics from "./assets/brands-logos/portronics.webp";
import redhorns from "./assets/brands-logos/redhorns.webp";
import sirphire from "./assets/brands-logos/sirphire.webp";
import heroDroneShot from "./assets/captures/heroDroneShot.mp4";
import portfolio1 from "./assets/captures/portfolio1.webp";
import barafhibaraf from "./assets/captures/barafhibaraf.webp";
import group from "./assets/captures/group.webp";
import portfolio from "./assets/captures/portfolio.webp";
import editor from "./assets/captures/editor.webp";
import abhiudaipur from './assets/captures/abhiudaipur.webp';
import sanjauli from "./assets/captures/sanjauli.webp";
import shimla from "./assets/captures/shimla.webp";
import stargazing from "./assets/captures/stargazing.webp";
import sunset from "./assets/captures/sunset.webp";
import himachalographer from "./assets/captures/himachalographer.JPG";import Hero from "./components/Hero";
// top of file (outside the component)
import redhornsShoot from "./assets/captures/redhorns.webm";
import sirphireShoot from "./assets/captures/sirphire.webm";
import starbucks from "./assets/captures/starbucks.webm";
import resort1 from "./assets/captures/resort1.webm";
import iziPro from "./assets/captures/iziPro.webm";
import oakwood from "./assets/captures/oakwood.webm";
import resort2 from "./assets/captures/resort2.webm";
import phoneCover from "./assets/captures/phoneCover.webm";

const WORKS = [
  { id: 1, video: redhornsShoot, category: "Commercial", title: " Product 📸" },
  { id: 2, video: resort1,     category: "Resorts",   title: "Property 🍃" },
  { id: 3, video: iziPro,     category: "Commercial",   title: "Product 🎥" },
  { id: 5, video: phoneCover, category: "Commercial",      title: "Brand 🔥" },
  { id: 4, video: oakwood,     category: "Resorts",   title: "Property ❤️" },
  { id: 6, video: resort2,     category: "Resorts",   title: "Property 🍂" }
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

  const categories = ["All", "Commercial","Resorts"];

  const filteredGallery = GALLERY.filter((g) => filter === "All" || g.category === filter);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((s) => ({ ...s, [name]: value }));
  }

 async function submitForm(e) {
  e.preventDefault();

  const fd = new FormData(e.target);
  // ensure form-name is present (Netlify uses this to route the submission)
  if (!fd.get("form-name")) fd.set("form-name", "contact");

  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(fd).toString(), // <-- URL-encoded, not multipart
    });

    if (res.ok) {
      setSent(true);
      setFormState({ name: "", email: "", type: "", message: "" });
      // optionally clear message after a few seconds
      setTimeout(() => setSent(false), 5000);
    } else {
      setSent(false);
      setFormState((p) => ({ ...p, error: "Something went wrong. Try again or whatsapp - 9459916939!" }));
    }
  } catch (err) {
    console.error(err);
    setSent(false);
    setFormState((p) => ({ ...p, error: "Network error. Please try later." }));
  }
}




  // --- VideoCard Component ---
  function VideoCard({ work }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);
    const videoRef = React.useRef(null);

    const togglePlay = () => {
      if (!videoRef.current) return;
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    const toggleMute = (e) => {
      e.stopPropagation();
      if (!videoRef.current) return;
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    };

    return (
      <div className="relative">
        {/* Video */}
        <video
          ref={videoRef}
          src={work.video}
          playsInline
          preload="auto"
          loop
          muted={isMuted}
          className="w-full aspect-[9/16] object-cover transition-all duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

        {/* Play / Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center text-white hover:scale-110 transition"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-14 h-14 bg-black/50 rounded-full p-3">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-14 h-14 bg-black/50 rounded-full p-3">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 rounded-full p-2 text-white transition"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 3v18l-6-6H3V9h3l6-6z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 3v18l-6-6H3V9h3l6-6zm6.5 9a4.5 4.5 0 0 0-4.5-4.5v9a4.5 4.5 0 0 0 4.5-4.5z" />
            </svg>
          )}
        </button>

        {/* Caption */}
        <figcaption className="absolute bottom-4 left-4 text-white text-sm">
          <div className="font-semibold">{work.title}</div>
          <div className="text-gray-300 text-xs">{work.category}</div>
        </figcaption>
      </div>
    );
  }

// utils for Netlify form body
function encode(data) {
  return new URLSearchParams(data).toString();
}


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
{/* Left Section (Responsive + Centered on Mobile) */}
<div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-4 w-full sm:w-auto text-center sm:text-left justify-center sm:justify-start">
  <div className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
    Abhinav Vashishth ~
  </div>
  <div className="text-sm sm:text-base md:text-lg text-gray-400">
    Cinematographer
  </div>
</div>



  {/* Desktop Navigation (Hidden on Mobile) */}
  <nav className="hidden md:flex gap-6 text-sm text-gray-300">
    <a href="#work">Work</a>
    <a href="#brands">Brands</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</header>


      {/* HERO section in component/hero.jsx */}
<Hero
  video={heroDroneShot}
  title="Want A Shoot 🎥 ?"
  subtitle="📸 Commercial & Personal ❤️"
  primary={{ href: "#contactus", label: "Book a shoot" }}
  secondary={{ href: "#work", label: "View portfolio" }}
  heightClass="h-[72vh]"
  overlayClass="bg-black/30"
/>


    {/* BRANDS */}
<section id="brands" className="py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-2xl font-medium mb-6">
      ✅ Cinematic Collaborations with Brands 🔥 -
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
          link: "https://www.instagram.com/reel/DOi_6vXk6L4",
          label: "View Reel Sample →",
        },
        {
          img: group,
          title: "Travel Shoot - Cinematic Vlog ❤️",
          desc: "Real Travel Detailed Experience - Covering each and every cost of a Tourist Destination.",
          link: "https://youtu.be/_Eu0cGUEZtE?si=mqriCmAMtUmu8aBx",
          label: "View Youtube Sample →",
        },
        {
          img: portfolio,
          title: "Personal & Property Shoot 🍃",
          desc: "Cinematic Shoots for Pre Wedding - Personal Portfolio - Resorts.",
          link: "https://www.instagram.com/reel/DALqW8aqI2m",
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
  {WORKS.filter((w) => filter === "All" || w.category === filter).slice(0,3).map((w) => (
    <motion.figure
      key={w.id}
      className="rounded-xl overflow-hidden bg-gray-800 flex flex-col transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)] relative"
      whileHover={{ scale: 1.02 }}
    >
      <VideoCard work={w} />
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
        <div id="contactus" className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-medium">Let’s create something special together📸</h2>
            <p className="mt-2 text-gray-400">Tell me about your project — commercial campaigns, editorial shoots, or a pre-wedding. I’ll respond within 48 hours.</p>

<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  onSubmit={submitForm}                 // <-- use handler, no action
  className="mt-6 space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />

  <input
    name="name"
    placeholder="Your name"
    value={formState.name}
    onChange={handleChange}
    required
    className="w-full bg-gray-800 rounded px-4 py-3 text-sm"
  />
  <input
    name="email"
    type="email"
    placeholder="Your email"
    value={formState.email}
    onChange={handleChange}
    required
    className="w-full bg-gray-800 rounded px-4 py-3 text-sm"
  />
  <select
    name="type"
    value={formState.type}
    onChange={handleChange}
    required
    className="w-full bg-gray-800 rounded px-4 py-3 text-sm"
  >
    <option value="">Select project type</option>
    <option>Commercial</option>
    <option>Editorial / Fashion</option>
    <option>Pre-Wedding</option>
    <option>Drone / Resort</option>
    <option>Personal</option>
  </select>
  <textarea
    name="message"
    placeholder="Tell me about your shoot"
    value={formState.message}
    onChange={handleChange}
    className="w-full bg-gray-800 rounded px-4 py-3 text-sm h-28"
  />

  <button type="submit" className="bg-amber-500 text-gray-900 px-5 py-3 rounded font-semibold">
    Send request
  </button>

  {sent === true && <p className="text-green-400 text-sm mt-2">✅ Message sent successfully!</p>}
  {sent === false && formState.error && <p className="text-red-400 text-sm mt-2">❌ {formState.error}</p>}
</form>



          </div>

          <div>
            <h3 className="text-lg font-semibold">Studio / Contact</h3>
            <div className="mt-3 text-sm text-gray-400">Based in Himachal — available for Cinematic Shoots.</div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a href="https://www.instagram.com/himachalographer" target="_blank" rel="noreferrer" className="bg-gray-800 p-4 rounded">Instagram</a>
              <a href="https://www.youtube.com/@Himachalographer" target="_blank" rel="noreferrer" className="bg-gray-800 p-4 rounded">YouTube</a>
              <a href="tel:+919459916939" className="bg-gray-800 p-4 rounded">Call</a>
              <a href="tel:+919459916939" className="bg-gray-800 p-4 rounded">WhatsApp</a>
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
