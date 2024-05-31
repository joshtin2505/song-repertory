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
interface Testimonial {
  name: string
  position: string
  comment: string
  img: string
}
export type { Plan, Testimonial }
