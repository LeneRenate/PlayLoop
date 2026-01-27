import { z } from "zod";

export const scoreSchema = z.object({
  game_id: z.enum(["memory", "reaction"]),
  nickname: z.string().min(3).max(10),
  score: z.number().int().positive().max(9999),
});
