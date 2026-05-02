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
      <Image src={`http://localhost:8000/storage/${product.images[0].img_url}`} alt={product.name} height={300} width={300} />
      </Link>
      <h1>{product.name}</h1>
    </CardHeader>
    <CardContent className='px-4 py-2 grid gap-2'>
      <span className='text-xs font-normal'>{product.brand}</span>
      <span className='text-xs font-medium'>{product.name}</span>
    </CardContent>
  </Card>
  )
}

export default ProductCard
