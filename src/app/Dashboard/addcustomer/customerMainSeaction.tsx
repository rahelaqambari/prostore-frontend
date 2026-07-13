import AllCustomer from '@/components/shared/dashboard/AllCustomer';
import DashboardHeader from '@/components/shared/dashboard/DashboardHeader'
import ProductForm from '@/components/shared/dashboard/ProductForm';
import { PackagePlus, User } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from 'react'
import { Button } from '@base-ui/react';

function CustomerMainSection
({
    showText,
    setShowtext,
}:{
    showText:boolean ;
    setShowtext:any;
}) {
    const [products, setProducts] = useState<
      | {
          id: number;
          name: string;
          email: string;
          role: string;
        }[]
      | null
    >(null);
  return (
    <div className='w-full flex-col flex'>
      <DashboardHeader showText={showText} setShowText={setShowtext} />
      <div className='items-center justify-center h-full w-full flex'>
        <div className='bg-white shadow-2xl  shadow-gray-400 w-full m-8 max-w-7xl border mx-auto p-4 border-gray-300 rounded-md dark:border-gray-100'>
            <div className='flex justify-center w-full flex-col items-center'>
                <User size={32} />
                <h1 className='text-3xl my-4 font-semibold text-gray-800 dark:text-gray-300'>All User</h1>
            </div>
         <div className="max-w-6xl overflow-x-auto mx-auto">
      <Table className="w-full">
        <TableCaption>List of All User</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((x) => {
            return (
              <TableRow key={x.id}>
                <TableCell>{x.id}</TableCell>
                <TableCell>{x.name}</TableCell>
                <TableCell>{x.email}</TableCell>
                <TableCell>{x.role}</TableCell>
                <TableCell>
                  <Button variant="secondary">Update</Button>
                </TableCell>
                <TableCell>
                  <Button variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
    </div>
      </div>
    </div>
  )
}

export default CustomerMainSection

