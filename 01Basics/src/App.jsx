import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-emerald-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* BACKGROUND DECOR: Large, faint circular logo as a watermark */}
      <img 
        src="/src/assets/ry-icon.png" 
        className="absolute w-125 opacity-5 -right-20 -bottom-20 rotate-12 pointer-events-none" 
        alt=""
      />

      {/* 1. THE SEAL (Circular Logo) */}
      <div className="relative mb-6">
        
      </div>

      {/* 2. THE BRAND NAME (Text Logo) */}
      <div className="animate-fade-in text-center px-4">
        {/* If you have the text as an image, use it here. 
            If not, use a Serif font with a gold gradient */}
        <img 
          src="/src/assets/ras-yatra-text.png" 
          alt="RY Seal" 
          className="align-center w-24 md:w-100 drop-shadow-[0_0_10px_rgba(243,239,179,0.2)]"
        />
        <p className= "mt-2 text-gold-light/60 tracking-[0.3em] uppercase text-sm md:text-base font-light">
          Fine Dining • Pocket Friendly
        </p>
      </div>

      {/* 3. COMING SOON SECTION */}
      <div className="mt-12 text-center animate-fade-in delay-500">
        <p className="text-[#FDF8EC] text-lg mb-8 italic">The journey of taste begins shortly...</p>
        
        <div className="flex flex-col gap-4 items-center">
            <a href="https://instagram.com/rasyatra" className="group flex items-center gap-2 text-gold-light border border-gold-light/30 px-6 py-2 rounded-full hover:bg-gold-light hover:text-emerald-950 transition-all duration-300">
                <span>Follow on Instagram</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <p className="text-gold-light/40 text-xs mt-4">📍 Location: [Physical Address Placeholder]</p>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;