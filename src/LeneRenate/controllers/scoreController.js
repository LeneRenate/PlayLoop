import { getDb } from "../database/connection.js";

export async function saveScore(gameId, nickname, score) {
  const db = await getDb();
  const result = await db.run(
    `INSERT INTO scores (game_id, nickname, score) VALUES ?, ?, ?)`,
    [gameId, nickname, score],
  );
  return result.lastID;
}

export async function getTopScores(gameId, limit = 10) {
  const db = await getDb();
  const scores = await db.all(
    `SELECT nickname, score, timestamp
    FROM scores
    WHERE game_id = ?
    ORDER BY score DESC
    LIMIT ?`,
    [(gameId, limit)],
  );
  return scores;
}

export async function getAllHighscores() {
  const db = await getDb();
  const scores = await db.all(
    `SELECT game_id, nickname, score, timestamp
    FROM scores
    ORDER BY score DESC
    LIMIT 10`,
  );
  return scores;
}
