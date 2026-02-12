import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] brick-pattern flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl bg-black/80 border-4 border-[#D83BD2] p-10 shadow-[0_0_20px_#D83BD2] relative"
      >
        {/* Retro "Loading" stripe i toppen */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#D83BD2] animate-pulse" />
        
        <h1 className="font-['VT323'] text-6xl md:text-8xl text-white text-center mb-8 tracking-tighter" style={{ textShadow: '0 0 10px #D83BD2' }}>
          ABOUT_SYSTEM
        </h1>

        <div className="font-['VT323'] text-2xl md:text-3xl text-[#57C9D3] space-y-6 leading-relaxed">
          <p>
            > PLAYLOOP IS A MULTI-GAME ARCADE PLATFORM BUILT FOR THE NEXT GENERATION OF RETRO GAMERS.
          </p>
          <p>
            > VERSION: 1.0.4<br />
            > STATUS: OPERATIONAL<br />
            > DEVELOPERS: ÅSHILD, LENE RENATE, MIA OG THERESE<br />
          </p>
          <p className="text-white/60 italic mt-10">
            More data records will be decrypted soon...
          </p>
        </div>

        {/* En liten "Back" knapp som tar deg hjem */}
        <div className="mt-12 text-center">
          <a href="/" className="inline-block px-8 py-3 border-2 border-[#57C9D3] text-[#57C9D3] hover:bg-[#57C9D3] hover:text-black transition-all font-bold uppercase tracking-widest">
            Return to Base
          </a>
        </div>
      </motion.div>
    </div>
  );
}