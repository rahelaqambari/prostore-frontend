import { GetProducts } from '@/lib/Actions/product.action';
import React from 'react'

async function DetailsPage({params}:{params: Promise<{id:string}>}) {
  const {id} = await params;
  const products =  await GetProducts();
  const product = products.data.find((x: any) =>x.id == id);
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-5 gap-4'>
      <div className='col-span-2'>
        {/* image */}
      </div>
      <div className='col-span-2'>
        <h1>{product.name}</h1>
        <h1>{product.brand}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
      </div>
      <div>
        {/* cart */}
      </div>
    </div>
  )
}

export default DetailsPage
