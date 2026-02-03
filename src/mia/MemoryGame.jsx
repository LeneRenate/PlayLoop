
import GameBoard from "../Mia/components/GameBoard.jsx"
import useMemoryGame from "../Mia/hooks/useMemoryGame.js"
import GameHeader from "../Mia/components/GameHeader.jsx";

function MemoryGame() {
  const {
    cards,
    flippedIndices,
    matchedIndices,
    score,
    moves,
    handleCardClick,
    resetGame,
  } = useMemoryGame();

  return (
    // Wrapper
    <div className="flex justify-center">
      {/* Container */}
      <article className="flex flex-col items-center">
        <GameHeader
        score={score}
        moves={moves}
        onReset={resetGame}
        />
        <GameBoard
        cards={cards}
        flippedIndices={flippedIndices}
        matchedIndices={matchedIndices}
        onCardClick={handleCardClick}
        />
      </article>
    </div>
  );
}

export default MemoryGame;
