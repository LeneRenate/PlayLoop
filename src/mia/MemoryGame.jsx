import "./styles/flip.css";
import { useState, useEffect } from "react";
import cardData from "./data/cardData.js";
import { shuffle } from "./utils/shuffle.js";
import GameBoard from "../Mia/components/GameBoard.jsx"

function MemoryGame() {
  // doubled and shuffled cards
  const [cards] = useState(() => {
    const doubledCards = [...cardData, ...cardData];
    return shuffle(doubledCards);
  });

  // game state
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  // score 
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  // card clicks
  function handleCardClick(index) {
    if (isLocked) return;
    if (flippedIndices.includes(index)) return;
    if (matchedIndices.includes(index)) return;

    if (flippedIndices.length === 0) {
      setFlippedIndices([index]);
    } else if (flippedIndices.length === 1) {
      setIsLocked(true);
      setMoves((prev) => prev + 1);
      setFlippedIndices([...flippedIndices, index]);
    }
  }
//  Checking match
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (flippedIndices.length !== 2) return;

    const [firstIndex, secondIndex] = flippedIndices;
    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];

    if (firstCard.id === secondCard.id) {
      // Match
      setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      setScore((prev)=> prev + 10);
      setFlippedIndices([]);
      setIsLocked(false);
    } else {
      // No match
      setTimeout(() => {
        setScore((prev)=> Math.max(prev -2, 0));
        setFlippedIndices([]);
        setIsLocked(false);
      }, 800);
    }
  }, [flippedIndices, cards]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    // wrapper to center the content
    <div className="flex justify-center">
      {/* memory container */}
      <article className="flex flex-col items-center">
        <header className="mb-6 text-center">
          <h3 className="text-xl font-semibold">
            Memory game under produksjon
          </h3>
          <p>
            <p>
              Score: {score} · Moves: {moves}
            </p>
          </p>
        </header>
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
