import styles from "../styles/GameBoard.module.css"
import Card from "./Card";

function GameBoard({
    cards,
    flippedIndices,
    matchedIndices,
    onCardClick,
    score,
    moves,
}) {
    return (
      <div
        className="border-4 border-[#57C9D3] 
p-6 md:p-10 
shadow-[0_0_30px_rgba(87,201,211,0.3)] 
arcade-screen-glow 
bg-[#140e0b] 
w-full max-w-250 mx-auto"
      >
        <p className={styles.p}>
          SCORE: {score} · MOVES: {moves}
        </p>
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              isFlipped={flippedIndices.includes(index)}
              isMatched={matchedIndices.includes(index)}
              onClick={() => onCardClick(index)}
            />
          ))}
        </div>
      </div>
    );
}

export default GameBoard;