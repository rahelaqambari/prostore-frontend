"use client";
import React, { useEffect, useState } from 'react'
import ProductCard from './product-card'
import { Button } from '../../ui/button'
import Link from 'next/link'
import { GetProducts } from '@/lib/Actions/product.action';

function AllProductList({limit, productlist, title}:
     {limit: number; productlist: any; title?: string}) {
        useEffect(()=>{
            async function getData(){
                const Products = await GetProducts;
            }
        }
        )
    const totalPage = productlist.meta.last_page;
    const [link, setlink] = useState("http://localhost:8000/api/products?page=1");
  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>{ title? title: "New Products"}</h2>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 ma:grid-cols-3 lg:grid-cols-4 gap-4'>
      {productlist.data.lenght > 0 && productlist.data.slice(0,limit ? limit: productlist.data.length).map( (product :any)=>(
       <ProductCard key={product.id} product={product} />
      ))} 
      </div>
      <div className='w-full mx-auto max-w-sm overflow-auto flex justify-between items-center'>
      {productlist.meta.links.map((link:any) => (
        
            <Button
            onClick={()=> setlink(link.url)}
            key={link.href}
            variant={link.active ? "default" : "outline"}
            dangerouslySetInnerHTML={{__html: link.lable}}
             />
      ))}
      </div>
      <div className='w-full flex justify-center'>
        {/* <Button variant={'outline'}>All Products</Button> */}
      </div>
    </div>
  )
}

export default AllProductList
