// Data types
export interface DataRow {
  [key: string]: string | number | boolean | null
}

export interface DataSet {
  data: DataRow[]
  columns: string[]
  types: ColumnType[]
  summary: DataSummary
}

export interface ColumnType {
  name: string
  type: "string" | "number" | "boolean" | "date"
  isNumeric: boolean
  isCategorical: boolean
}

export interface DataSummary {
  totalRows: number
  totalColumns: number
  missingValues: number
  quality: "excellent" | "good" | "fair" | "poor"
}

// Chart types
export interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

export interface ChartDataset {
  label: string
  data: number[]
  backgroundColor?: string | string[]
  borderColor?: string | string[]
  borderWidth?: number
}

export interface ChartOptions {
  responsive: boolean
  maintainAspectRatio: boolean
  plugins: {
    title: {
      display: boolean
      text: string
    }
    legend: {
      display: boolean
      position: "top" | "bottom" | "left" | "right"
    }
  }
  scales?: {
    x?: {
      display: boolean
      title: {
        display: boolean
        text: string
      }
    }
    y?: {
      display: boolean
      title: {
        display: boolean
        text: string
      }
    }
  }
}

// Voice integration types
export interface VoiceCommand {
  action: "create_chart" | "upload_data" | "export_chart"
  data?: string
  chartType?: string
  parameters?: Record<string, unknown>
}

export interface VoiceResponse {
  success: boolean
  message: string
  data?: unknown
  error?: string
}
