export interface Discount {
  activeDate: Date
  code: string
  description?: string
  type: 'percent' | 'amount'
  expiryDate: Date
  value: number
}