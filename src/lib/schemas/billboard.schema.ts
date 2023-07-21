import { z } from "zod"


export const billboardSchema = z.object({
  id: z.number(),
  billboard_title: z.string(),
  billboard_icon: z.string(),
  db_id: z.number(),
  table_id: z.number(),
  db_name: z.string(),
  table_name: z.string(),
  metric_type: z.enum(['formula' , 'field']),
  metric_field: z.string().optional(),
  metric_formula: z.number().optional()
});


export type Billboard = z.infer<typeof billboardSchema>