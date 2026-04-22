type Product = {
    id: number,
    name: string,
    stock: number,
    price: number,
    description: string,
    brand: string,
    category: string,
    images: string[],
}

import React from 'react'
import { GetProduct } from '../../../../Actions/product.action';


async function page() {
    const data = await GetProduct();
    console.log('data');
  return (
    <div>
      
    </div>
  )
}

export default page
