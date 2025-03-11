
export interface productType {
    id: string
    product_id: string
    product_name: string
    stock_Status: number
    rating: number
    price: string | number
    discount: string | number
    brand_name: string
    short_Description: string
    category: string
    image: string[]
    description: string
    qty: string | number
    scale: string
    type?: string | undefined | null
    tag: string
}