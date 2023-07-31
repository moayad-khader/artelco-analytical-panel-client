import { z } from "zod"


export const billboardSchema = z.object({
  id: z.number(),
  billboard_title_en: z.string(),
  billboard_title_ar: z.string(),
  billboard_icon: z.string(),
  db_id: z.number(),
  table_id: z.number(),
  db_name: z.string(),
  table_name: z.string(),
  metric_type: z.enum(['formula' , 'field']),
  metric_field: z.string().optional(),
  metric_formula: z.number().optional(),
  formula_id: z.number().optional(),
  billboard_type: z.enum(["standard", "gauge"]),
  billboard_threshold_warning: z.number().optional(),
  billboard_threshold_danger: z.number().optional()
});


export type BillboardFormValues = z.infer<typeof billboardSchema>