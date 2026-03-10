import { useState } from "react";

function StartGame({ nickname, onNicknameChange, onStart }) {
  const [error, setError] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  if (!nickname.trim()) {
    setError("Nickname can't be empty");

    setTimeout(() => {
      setError("");
    }, 3000);

    return;
  }

  setError("");
  onStart();
};

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/80 font-retro text-[#00ffff] text-2xl">
      <form onSubmit={handleSubmit}>
        <h3>Enter your nickname</h3>

        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => {
            onNicknameChange(e.target.value);
            setError("");
          }}
          maxLength={12}
          className="mb-2"
        />

        {error && <p className="text-red-400 text-lg">{error}</p>}

        <button
          type="submit"
          className="group relative flex min-w-42.5 h-10 items-center justify-center rounded-xl overflow-hidden border-2 border-[#ff00ff]/50 
          transition-[transform] duration-50 ease-out hover:scale-105 active:scale-95 shadow-xl cursor-pointer mt-3"
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
            Start Game
          </span>

          <div className="absolute inset-0 bg-linear-to-b from-[#b532d1] via-[#6a007a] to-[#300038]" />
        </button>
      </form>
    </div>
  );
}

export default StartGame;
