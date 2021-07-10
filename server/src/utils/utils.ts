export const PORT: string = '8000'
export const URL: any = 'mongodb+srv://aman:12345@flipkart-clone.u4j2x.mongodb.net/FLIPKART-CLONE?retryWrites=true&w=majority'

export type TitleType = {
    shortTitle: string
    longTitle: string
}

export type PriceType = {
    mrp: number
    cost: number
    discount: string
}

export type ProductType = {
    id: string
    url: string
    detailUrl: string
    title: TitleType
    price: PriceType
    description: string
    discount: string
    tagline: string
}
