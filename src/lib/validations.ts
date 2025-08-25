import { z } from "zod"

// Data validation schemas
export const csvDataSchema = z.array(z.record(z.string(), z.unknown()))

export const jsonDataSchema = z.union([
  z.array(z.record(z.string(), z.unknown())),
  z.record(z.string(), z.unknown()),
])

export const fileUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 10 * 1024 * 1024, "File size must be less than 10MB")
    .refine(
      (file) => ["text/csv", "application/json", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(file.type),
      "File must be CSV, JSON, or Excel format"
    ),
})

export const chartConfigSchema = z.object({
  type: z.enum(["bar", "line", "pie", "scatter", "area", "histogram"]),
  title: z.string().optional(),
  xAxis: z.string().optional(),
  yAxis: z.string().optional(),
  colors: z.array(z.string()).optional(),
})

export type CSVData = z.infer<typeof csvDataSchema>
export type JSONData = z.infer<typeof jsonDataSchema>
export type FileUpload = z.infer<typeof fileUploadSchema>
export type ChartConfig = z.infer<typeof chartConfigSchema>
