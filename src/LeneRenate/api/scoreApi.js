// Frontend API client for scores
const API_URL = "http://localhost:3000/api";

export async function saveScore(gameId, nickname, score) {
  const response = await fetch(`${API_URL}/scores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameId, nickname, score }),
  });

  if (!response.ok) {
    throw new Error("Failed to save score");
  }

  return response.json();
}

export async function getTopScores(gameId, limit = 10) {
  const response = await fetch(`${API_URL}/scores/${gameId}?limit=${limit}`);

  if (!response.ok) {
    throw new Error("Failed to fetch scores");
  }

  return response.json();
}

export async function getAllHighscores() {
  const response = await fetch(`${API_URL}/scores`);

  if (!response.ok) {
    throw new Error("Failed to fetch highscores");
  }

  return response.json();
}
