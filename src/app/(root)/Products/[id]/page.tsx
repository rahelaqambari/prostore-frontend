import { GetProducts } from '@/lib/Actions/product.action';
import React from 'react'

async function DetailsPage({params}:{params: Promise<{id:string}>}) {
  const {id} = await params;
  const products =  await GetProducts();
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-5 gap-4'>
      <div>
        {/* image */}
      </div>
      <div>
        {/* details */}
      </div>
      <div>
        {/* cart */}
      </div>
    </div>
  )
}

export default DetailsPage
