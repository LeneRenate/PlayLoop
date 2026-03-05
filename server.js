import express from "express";
import cors from "cors";
import {
  saveScore,
  getTopScores,
  getAllHighscores,
} from "./src/LeneRenate/controllers/scoreController.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Save a score
app.post("/api/scores", async (req, res) => {
  try {
    const { gameId, nickname, score } = req.body;
    const id = await saveScore(gameId, nickname, score);
    res.json({ success: true, id });
  } catch (error) {
    console.error("Error saving score:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get top scores for a specific game
app.get("/api/scores/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const limit = parseInt(req.query.limit) || 10;
    const scores = await getTopScores(gameId, limit);
    res.json(scores);
  } catch (error) {
    console.error("Error fetching scores:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get all high scores
app.get("/api/scores", async (req, res) => {
  try {
    const scores = await getAllHighscores();
    res.json(scores);
  } catch (error) {
    console.error("Error fetching all scores:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
