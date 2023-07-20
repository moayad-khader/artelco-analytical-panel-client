import { z } from "zod"


export const billboardSchema = z.object({
  id: z.number(),
  billboard_title: z.string(),
  billboard_icon: z.string(),
  db_name: z.string(),
  table_name: z.string()
})

export type Billboard = z.infer<typeof billboardSchema>