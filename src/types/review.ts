import type { Media } from './media'

export interface Review {
  providerName?: string
  providerOrg?: string
  image?: string | Media;
  rating?: number
  review:string
}