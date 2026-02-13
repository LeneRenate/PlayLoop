import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function viewScores() {
  const db = await open({
    filename: "database.db",
    driver: sqlite3.Database,
  });

  const scores = await db.all("SELECT * FROM scores ORDER BY score DESC");

  console.log("\n=== ALL SCORES ===");
  if (scores.length === 0) {
    console.log("No scores yet!");
  } else {
    console.table(scores);
  }

  await db.close();
}

viewScores().catch(console.error);
