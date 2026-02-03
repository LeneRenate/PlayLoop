function StartGame({ nickname, onNicknameChange, onStart }) {
  return (
    <section>
      <h3>Enter your nickname</h3>

      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => onNicknameChange(e.target.value)}
        maxLength={12}
      />
      <button onClick={onStart} disabled={!nickname}>
        Start game
      </button>
    </section>
  );
}
export default StartGame;
