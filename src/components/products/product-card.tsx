import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'

function ProductCard({product}: {product: any}) {
  return (
  <Card>
    <CardHeader></CardHeader>
    <CardContent>
        <h1>{product.name}</h1>
    </CardContent>
  </Card>
  )
}

export default ProductCard
