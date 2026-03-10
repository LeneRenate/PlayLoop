import styles from "../styles/GameHeader.module.css"

function GameHeader() {
  return (
    <header>
      <h3 className={styles.gameHeader}>
        <span className="neon-text-pink">Memory</span>
        <span className="neon-text-cyan">game</span>
      </h3>
    </header>
  );
}
export default GameHeader