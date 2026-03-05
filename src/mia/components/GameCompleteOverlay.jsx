function GameCompleteOverlay ({onNewGame}) {

    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80">
        <section>
          <h3 className="font-retro text-[#00ffff] text-2xl mb-2 ml-9">Good job!</h3>
          <button onClick={onNewGame} className="group relative flex min-w-42.5 h-10 items-center justify-center rounded-xl pointer-events-auto overflow-hidden border-2 border-[#ff00ff]/50 
  transition-[transform] duration-50 ease-out hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          style={{
            fontFamily: "'VT323', monospace",
            backgroundColor: "#6a007a",
          }}
        >
          <span
            className="relative z-20 text-2xl tracking-widest uppercase italic"
            style={{
              color: "#ffffff",
              textShadow: "0 0 5px #fff, 0 0 15px #ff00ff",
            }}
          >
            New game
          </span>

          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-0">
            <div className="absolute top-0 left-0 w-24 h-full bg-white/50 transform -skew-x-12 translate-x-[-300%] group-hover:translate-x-[800%] transition-transform duration-300 ease-linear" />
          </div>

          <div className="absolute inset-0 bg-linear-to-b from-[#b532d1] via-[#6a007a] to-[#300038] group-hover:from-[#d63ef2] group-hover:via-[#9d00b5]" />

          <div className="absolute top-0 left-0 w-full h-0.5 bg-white/40 z-30 opacity-70" />

          <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(255,0,255,0.6)] pointer-events-none" />
        </button>
        </section>
      </div>
    );
}


export default GameCompleteOverlay;