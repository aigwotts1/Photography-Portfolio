export default function Hero({
  video,
  title,
  subtitle,
  primary,
  secondary,
  heightClass,
  overlayClass,
}) {
  return (
    <section className={`relative ${heightClass} overflow-hidden`}>
      {/* Background Video */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-95"
      />

      {/* Optional overlay */}
      <div className={`absolute inset-0 ${overlayClass || ""}`} />

      {/* TOP TITLE */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-serif leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
      </div>

      {/* BOTTOM SECTION */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center px-6">
        <p className="text-3xl text-white-200 max-w-2xl mx-auto drop-shadow-[0_6px_10px_rgba(0,0,0,1.9)]">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {/* Primary Button (Transparent with white border) */}
          <a
            href={secondary.href}
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white border border-gray-500 bg-transparent 
                       hover:bg-black/40 hover:border-gray-400 hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)] 
                       transition-all duration-300 cursor-pointer"
          >
            {primary.label}
          </a>

          {/* Secondary Button (Transparent dark tone) */}
          <a
            href={secondary.href}
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white border border-gray-500 bg-transparent 
                       hover:bg-black/40 hover:border-gray-400 hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)] 
                       transition-all duration-300 cursor-pointer"
          >
            {secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
