import React from 'react'

function ProductList({productlist, title}: {productlist: any, title: string}) {
  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-8'>{ title? title: "New Products"}</h2>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 ma:grid-cols-3 lg:grid-cols-4'>
      {productlist.map( (R :any)=>(
        <div key={R.id}>
            <h1>{R.name}</h1>
        </div>
      ))} 
      </div>
    </div>
  )
}

export default ProductList
