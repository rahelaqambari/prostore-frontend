"use client";
import React, { useEffect, useState } from 'react'
import ProductCard from './product-card'
import { Button } from '../../ui/button'
import Link from 'next/link'
import { getAllProducts, GetProducts } from '@/lib/Actions/product.action';
import { ProductInfo } from '@/app/(root)/Types/Index';

function AllProductList({limit, title}:
     {limit: number; title?: string}) {

         const [link, setlink] = useState("http://localhost:8000/api/products?page=1");
         const [list, setlist] = useState<any>([]);

        useEffect(()=>{
            async function getData(){
                const Products = await getAllProducts(link);
                setlist(Products);
            }
            getData();
        },[link]);
        console.log(link);
        if(list.length==0){
            return null;
        }
  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>{ title? title: "New Products"}</h2>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 ma:grid-cols-3 lg:grid-cols-4 gap-4'>
      {list.data.length > 0 && list.data.map( (product :any)=>(
       <ProductCard key={product.id} product={product} />
      ))} 
      </div>
      <div className='w-full mx-auto lg:pt-4 pt-6 max-w-md flex justify-between items-center'>
      {list.meta.links.map((link:any) => (
            <Button
            onClick={()=> setlink(link.url?link.url:"http://localhost:8000/api/products?page=${list.meta.current_page}",
            )}
            key={link.label}
            variant={link.active ? "default" : "outline"}
            dangerouslySetInnerHTML={{__html: link.label}}
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
