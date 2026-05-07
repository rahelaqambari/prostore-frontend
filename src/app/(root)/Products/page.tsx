import AllProductList from '@/components/shared/products/all-product-list';
import { GetProducts } from '@/lib/Actions/product.action'
import React from 'react'

async function  ProductPage() {
 
  return (
    <div>
      <AllProductList title='All Products' />
    </div>
  )
}

export default ProductPage
