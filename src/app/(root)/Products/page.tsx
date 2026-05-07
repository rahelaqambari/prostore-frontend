import AllProductList from '@/components/shared/products/all-product-list';
import { GetProducts } from '@/lib/Actions/product.action'
import React from 'react'

async function  ProductPage() {
  const products = await GetProducts();
  return (
    <div>
      <AllProductList productlist={products} title='All Products' />
    </div>
  )
}

export default ProductPage
