// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GameCard({ title, image, path }) {
  return (
    <motion.div
      // 3d hover-effekt
      whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="retro-card"
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Link to={path} className="play-button">
        PLAY
      </Link>
    </motion.div>
  );
}
