// Types
export interface Product{
    id: number,
    name: string,
    stock: number,
    price: number,
}
export interface ProductDetails{
    id: number,
    description: string,
    brand: string,
    category: string,
    product_id: string,
}
export interface Images{
    id: number,
    imageable_type: string,
    imageable_id: number,
    image_url: string,
}
export interface ProductInfo extends Images,Product,ProductDetails{}
