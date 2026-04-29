import React from 'react'

function ProductList({productlist, title}: {productlist: any, title: string}) {
  return (
    <div className='my-10'>
      <h2 className='h2-bold'>{ title? title: "New Products"}</h2>
      {}
    </div>
  )
}

export default ProductList
