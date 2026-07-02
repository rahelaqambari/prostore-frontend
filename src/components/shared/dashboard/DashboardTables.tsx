import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,  } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MarketOrderIcon } from '@hugeicons/core-free-icons'
import { CalendarDays, ListOrdered } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function DashboardTables() {
   const [link, setLink] = useState("http://localhost:8000/api/products?page=1");
    const [list, setList] = useState<any>([]);
  
    useEffect(() => {
      async function getData() {
        const products = await getAllProducts(link);
        setList(products);
      }
      getData();
    }, [link]);
  
    console.log(link);
    if (list.length == 0) {
      return null;
    }
  return (
    <div className=' w-full mx-auto p-5'>
        <div className=' p-3 rounded-lg border-gray-300 bg-white'>
               <div className=' flex justify-between items-center w-full p-4'>
                <div className=' flex items-center space-x-2'>
                <Button variant="outline" className='rounded-md bg-white p-2'><CalendarDays /></Button>
                <span>Recent Orders</span>
                <span  className='rounded-md py-1 px-1   bg-gray-200/50 border text-xs border-gray-300'>3</span>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <Input placeholder='Search Order... ' className=' rounded-md bg-white'/>
                    </div>
                </div>
       
        <Table className=' p-4'>
           <TableHeader className='p-4 bg-gray-50'>
    <TableRow>
      <TableHead className="w-8">#</TableHead>
      <TableHead>Order</TableHead>
      <TableHead>Customer</TableHead>
      <TableHead className=" text-center">Status</TableHead>
      <TableHead className="text-right">Total</TableHead>
      <TableHead className="text-right">Date</TableHead>
    </TableRow>
  </TableHeader>
   <TableBody>
    <TableRow>
      <TableCell className="font-medium">1.</TableCell>
      <TableCell className=' flex flex-col'>ORD-2024-001 <span className='text-xs text-gray-300'>2 items</span></TableCell>
      <TableCell>Sarah Johnson </TableCell>
      <TableCell className="text-center"><Button type='submit' variant="secondary">Delivered</Button></TableCell>
      <TableCell className="text-right">$2,499.00</TableCell>
      <TableCell className="text-right">Jan 28, 2026</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2.</TableCell>
      <TableCell className=' flex flex-col'>OTD-2026-003 <span className='text-xs text-gray-300'>2 items</span></TableCell>
      <TableCell>Scott Barowz </TableCell>
      <TableCell className="text-center"><Button type='submit' variant="secondary">Delivered</Button></TableCell>
      <TableCell className="text-right">$9,439.00</TableCell>
      <TableCell className="text-right">Jan 25, 2026</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3.</TableCell>
      <TableCell className=' flex flex-col'>OTW-2025-003 <span className='text-xs text-gray-300'>2 items</span></TableCell>
      <TableCell>John Smith </TableCell>
      <TableCell className="text-center text-xs "><Button type='submit' variant="destructive"> Not Delivere</Button></TableCell>
      <TableCell className="text-right">$2,435.00</TableCell>
      <TableCell className="text-right">June 30, 2026</TableCell>
    </TableRow>
  </TableBody>
        </Table>
         <div className="w-full pt-4 md:pt-6 max-w-md mx-auto flex justify-between items-center">
                {list.meta.links.map((link: any) => (
                  <Button
                    onClick={() =>
                      setLink(
                        link.url
                          ? link.url
                          : `http://localhost:8000/api/dashboard/products?page=${list.meta.current_page}`,
                      )
                    }
                    key={link.label}
                    variant={link.active ? "default" : "outline"}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                ))}
              </div>
         </div>
    </div>
  )
}

export default DashboardTables