// Types
// export interface Product{
//     id: number,
//     name: string,
//     stock: number,
//     price: number,
// }
// export interface ProductInfo extends Images,Product,ProductDetails{}
// if use interface instated of type like blew example
type Product = {
    id: number;
    name: string;
    stock: number;
    price: number;
}
type ProductDetails = {
    id: number;
    description: string;
    brand: string;
    category: string;
    product_id: string;
}
type Images = {
    id: number;
    imageable_type: string;
    imageable_id: number;
    image_url: string;
}
export type ProductInfo =  Images[] & Product & ProductDetails;
