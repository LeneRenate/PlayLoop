import styles from "../styles/GameHeader.module.css"

function GameHeader({ score, moves }) {
  return (
    <header>
      <h3 className={styles.gameHeader}>
        <span className="neon-text-pink">Memory</span>
        <span className="neon-text-cyan">game</span>
      </h3>
      <p className={styles.p}>
        SCORE: {score} · MOVES: {moves}
      </p>
    </header>
  );
}
export default GameHeader