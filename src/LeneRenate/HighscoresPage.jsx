import styles from "./HighscorePage.module.css";

export default function HighscoresPage() {
  return (
    <>
      <header className={`w-full ${styles.highscoreHeader}`}>
        <h1>HIGHSCORES</h1>
      </header>
      <div className={`flex flex-row justify-evenly`}>
        <section
          className={`${styles.gameSection} ${styles.memoryGame}`}
        ></section>
        <section
          className={`${styles.gameSection} ${styles.reactionGame}`}
        ></section>
      </div>
    </>
  );
}
