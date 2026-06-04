import ProductPrice from '@/components/shared/products/product-price';
import ProductImages from '@/components/shared/products/products-images';
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
        <ProductImages images={product.images} />
      </div>
      <div className='col-span-2 space-y-4'>
        <p>{product.description}</p>
      
      <div className='px-4 py-1.5 bg-green-300 rounded-full w-fit'>
        <ProductPrice price={product.price.toString()} />
      </div>
      </div>
      <div className='p-4 space-y-2 border rounded-md h-fit'>
      <div className='flex-between'>
        <h1 className='text-medium font-serif'>{product.brand}</h1>
        <h1 className='text-medium font-serif'>{product.category}</h1>
      </div>
      <div className='w-full items-start'>
      </div>
      </div>
      <div>
        {/* cart */}
      </div>
    </div>
  )
}

export default DetailsPage
