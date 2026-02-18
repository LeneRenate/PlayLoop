function GameHeader({ score, moves }) {
  return (
    <header className="mb-6 text-center">
      <h3 className="text-xl font-semibold">Memory game</h3>
      <p>
        Score: {score} · Moves: {moves}
      </p>
    </header>
  );
}
export default GameHeader