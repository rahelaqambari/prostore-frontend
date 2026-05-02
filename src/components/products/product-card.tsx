import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'

function ProductCard({product}: {product: any}) {
  console.log(product.images[0].img_url);
  return (
  <Card>
    <CardHeader className='p-0'>
      <Link href={`product/${product.id}`}>
      <Image src={`/storage/${product.images[0].img_url}`} alt={product.name} height={300} width={300} />
      </Link>
      <h1>{product.name}</h1>
    </CardHeader>
    <CardContent>
        <h1>{product.id}</h1>
    </CardContent>
  </Card>
  )
}

export default ProductCard
