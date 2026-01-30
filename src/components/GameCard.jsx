// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useState} from "react";



export default function GameCard({ title, image, path, lottieJson }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
    className="retro-card"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    // 3d hover-effekt
    whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.4)"
  }}
    transition={{ type: "spring", stiffness: 300 }}
    style={{
      backgroundImage: "url('/gamecard-bg.svg')",
      backgroundSize: "cover",
      position: "relative",
      overflow: "hidden"
    }}
    >
  
  <div style={{height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    {isHovered && lottieJson ? (
      // Lottie animasjon - 3d
      <Lottie
      animationData={lottieJson}
      loop={true}
      style={{ width: "150px"}}
      />
    ) : (
      // 2d bildet
      <motion.img
      src={image}
      alt={title}
      style={{width: "120px"}}
      />
    )}
      </div>

      <h3>{title}</h3>

      <Link to={path} className="play-button">
        PLAY
      </Link>
    </motion.div>
  );
}
