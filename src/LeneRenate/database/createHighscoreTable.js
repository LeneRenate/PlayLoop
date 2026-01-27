import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

async function createHighscoreTable() {
  const db = await open({
    filename: path.join("database.db"),
    driver: sqlite3.Database,
  });
  await db.exec(`
    CREATE TABLE IF NOT EXISTS highscores(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game_id TEXT NOT NULL
    nickname TEXT NOT NULL,
    score INTEGER NOT NULL,
    timestamp INTEGER DEFAULT (strftime('%s', 'now'))
    )

    `);
  await db.close();
  console.log("score table created");
}

await createHighscoreTable();

/***
Alternative timestamp:
timestamp TEXT DEFAULT (datetime('now'))
***/
