import React from 'react'
import ProductCard from './product-card'
import { Button } from '../ui/button'

function ProductList({productlist, title}: {productlist: any, title: string}) {
  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>{ title? title: "New Products"}</h2>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 ma:grid-cols-3 lg:grid-cols-4 gap-4'>
      {productlist.lenght > 0 && productlist.map( (product :any)=>(
       <ProductCard key={product.id} product={product} />
      ))} 
      </div>
      <div className='w-full flex justify-center'>
        <Button variant={'outline'}>All Products</Button>
      </div>
    </div>
  )
}

export default ProductList
