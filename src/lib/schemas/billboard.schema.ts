import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const billboardSchema = z.object({
  id: z.number(),
  billboard_title: z.string(),
  billboard_icon: z.string(),
  db_name: z.string(),
  table_name: z.string()
})

export type Billboard = z.infer<typeof billboardSchema>