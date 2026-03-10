function LastGamePanel({ lastGame }) {
  return (
    <aside className="bg-black text-white border-4 border-[#57C9D3] p-6 md:p-12 shadow-[0_0_30px_rgba(87,201,211,0.3)] arcade-screen-glow w-70">
      <h3 className="text-[#00ffff] text-2xl mb-4 text-center font-retro">
        LAST GAME
      </h3>

      <table className="w-full">
        <thead className="text-[#ff00ff] text-2xl font-retro border-b border-[#ff00ff]">
          <tr>
            <th className="text-left pb-2 font-normal">PLAYER</th>
            <th className="text-right pb-2 font-normal">SCORE</th>
            <th className="text-right pb-2 font-normal">MOVES</th>
          </tr>
        </thead>

        <tbody>
          {lastGame ? (
            <tr className="text-[#00ffff]">
              <td className="pt-2">{lastGame.nickname}</td>
              <td className="pt-2 text-right">{lastGame.score}</td>
              <td className="pt-2 text-right">{lastGame.moves}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="3" className="text-center pt-4 text-gray-400">
                No game yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </aside>
  );
}

export default LastGamePanel;
