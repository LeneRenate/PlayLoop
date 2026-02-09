import { useState } from "react";
import Lottie from "lottie-react";
import coinData from "../assets/coin.json";

export default function Hero() {
  const [isFlashing, setIsFlashing ] = useState(false);
  const [isPoweringOff, setIsPoweringOff] = useState(false);


  const handleStart = () => {
    // 1. MYNTEN GÅR INN (Ingenting annet skjer enn lyd og logo-blink)
    const coinAudio = new Audio("/coin_drop.mp3");
    coinAudio.play().catch((e) => console.log("Lyd-feil:", e));
    setIsFlashing(true);

    setTimeout(() => {
      // START KOLLAPS
      const buzzAudio = new Audio("/screen_buzz2.mp3");
      buzzAudio.volume = 0.3; // Juster volumet hvis den er for skarp
      buzzAudio.play().catch((e) => console.log(e));

      setIsPoweringOff(true); // Nå blir section bakgrunnen svart og forsvinner!

      // 3.THE SWITCH (Skjer mens alt er helt svart og section er usynlig)
      setTimeout(() => {
        const element = document.getElementById("mission-select-full");
        element?.scrollIntoView({ behavior: "instant" });

        const tadaAudio = new Audio("/arcade_tada.mp3");
        tadaAudio.play().catch((e) => console.log(e));

        // 4. MYK LANDING: Vent 600ms i mørket så scrollingen er helt ferdig
        setTimeout(() => {
          setIsPoweringOff(false);
          setIsFlashing(false);
        }, 500);
      }, 1000); // Litt pause i mørket før spillene dukker opp
    }, 800); // Matcher kollaps-tiden
  };

     

  return (
    <>
      <div
        className={`fixed inset-0 z-[999] pointer-events-none transition-all flex items-center justify-center bg-black
    ${
      isPoweringOff
        ? "opacity-100 scale-y-[0.005] duration-[1000ms]"
        : "opacity-0 scale-y-100 duration-[800ms]"
    }`}
      >
        <div
          className={`w-full h-[3px] bg-cyan-400 shadow-[0_0_20px_#00ffff] transition-opacity duration-700 
    ${isPoweringOff ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <section
        className={`relative flex flex-col items-center pt-32 transition-all duration-[1000ms]
        ${isPoweringOff ? "opacity-0 scale-95 brightness-0 blur-lg" : "opacity-100 scale-100 brightness-100 blur-0"}`}
      >
        {/* --HEADER-- */}
        <header className="text-center lg:text-right mb-6 flex flex-col items-center lg:items-end space-y-2">
          {/* Logoen bruker isFlashing til sin animasjon */}
          <h1
            className={`font-neon tracking-tighter leading-[0.8] ${isFlashing ? "animate-ping" : "animate-flicker"}`}
          >
            <span className="text-magenta-500 neon-text-pink block text-[15vw] lg:text-[8.5vw]">
              PLAY
            </span>
            <span className="text-cyan-400 neon-text-cyan block text-[15vw] lg:text-[8.5vw] mt-2">
              LOOP
            </span>
          </h1>

          {/* INTERAKTIV LOTTIE-MYNT */}
          <button
            onClick={handleStart}
            className="mt-6 group cursor-pointer flex flex-col items-center justify-center bg-transparent border-none"
          >
            {/* Lottie Container */}
            <div className="w-24 h-24 md:w-32 md:h-32 mb-2 group-hover:scale-110 transition-transform duration-300">
              <Lottie animationData={coinData} loop={true} autoplay={true} />
            </div>

            <p className="font-retro text-xl md:text-2xl text-yellow-400 tracking-[0.3em] animate-pulse group-hover:text-white transition-colors duration-300 text-center w-full">
              [ INSERT COIN TO START ]
            </p>
          </button>
        </header>
      </section>
    </>
  );
}
