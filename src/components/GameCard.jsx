
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useState} from "react";



export default function GameCard({ title, image, path, lottieJson, isPrimary }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group p-4">
   
      <motion.div
        className="relative overflow-hidden cursor-pointer border-4 border-black rounded-sm flex flex-col items-center `min-h-150`"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Sjakkmønster på gamecard*/}
        <div className="absolute inset-0 z-0 opacity-100 checkerboard-pattern pointer-events-none"></div>

        {/* inner-ramme*/}
        <div className="relative z-10 m-14 grow w-full h-full flex flex-col items-center p-6 bg-white border-[6px] border-black shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">
          {/* Bilde/emoji-område*/}
          <div className="grow flex justify-center items-center relative w-full mt-4">
            {isHovered && lottieJson ? (
              <motion.div className="w-56 z-10">
                <Lottie animationData={lottieJson} loop={true} />
              </motion.div>
            ) : (
              <motion.img
                src={image}
                alt={title}
                className="w-48 drop-shadow-2xl z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>

          {/* Spilltittel */}
          <div className="relative z-30 -mb-12 mt-2">
            <h2
              className="font-neon leading-[0.8] text-center"
              style={{ color: "#E0748F" }}
            >
              <span className="block text-6xl drop-shadow-[4px_4px_0px_white] filter drop-shadow(4px 4px 0px black)">
                Memory
              </span>
              <span className="block text-5xl ml-10 drop-shadow-[4px_4px_0px_white] filter drop-shadow(4px 4px 0px black)">
                Game
              </span>
            </h2>
          </div>

          {/* Rosa skillelinje under tittelen */}
          <div className="h-1.5 w-1/2 bg-[#E0748F] mt-12 border-b-2 border-black"></div>


          {/* tekst nederst */}
          <div className="text-black font-retro text-sm mt-4 text-center leading-tight uppercase opacity-70">
            Limited Edition Arcade Series <br />© 1984 Playloop Computing
          </div>

          {/* Play-knapp */}
          <Link
            to={path}
            className="mt-6 font-retro text-2xl py-2 px-12 text-white bg-[#E0748F] border-2 border-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] `hover:translate-y-0.5` transition-all duration-200 active:translate-y-1"
          >
            PLAY NOW
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
