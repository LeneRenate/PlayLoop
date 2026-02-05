
import {Link} from "react-router-dom";

export default function Header() {
  const neonPink = "#D83BD2"; // PlayLoop Magenta


  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4 px-8 flex justify-between items-center">

      {/* VENSTRE SIDE: LOGO og LENKER */}
      <div className="flex items-center gap-16">
      {/* LOGO */}
      <Link to="/" className="no-underline">
        <h1 
        className="text-4xl tracking-tighter leading-none neon-text-pink"
            style={{ 
              fontFamily: "'VT323', monospace", 
              color: neonPink 
            }}>
            PlayLoop
        </h1>
      </Link>

      {/* NAV-LENKER */}
      <nav className="flex gap-12">
        {["Home", "Settings", "Games"].map((item) => (
          <Link
            key={item}
            to={`/${item.replace(" ", "")}`}
            className="transition-all duration-300 hover:text-white"
          style={{ 
                fontFamily: "'VT323', monospace",
                fontSize: "24px",
                color: neonPink,
                textDecoration: "none",
                letterSpacing: "1px"
              }}
              >
            {item}
          </Link>
        ))}
        </nav>
      </div>
    </nav>
  );
}
