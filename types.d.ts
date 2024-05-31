type Plan =
  | {
      name: string
      description: string
      price: null
      features: {
        thereIs: boolean
        feature: string
      }[]
    }
  | {
      name: string
      description: string
      price: number
      features: {
        thereIs: boolean
        feature: string
      }[]
    }
export type { Plan }
