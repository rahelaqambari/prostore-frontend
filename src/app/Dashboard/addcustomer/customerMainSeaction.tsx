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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
    // const [products, setProducts] = useState<
    //   | {
    //       id: number;
    //       name: string;
    //       email: string;
    //       role: string;
    //     }[]
    //   | null
    // >(null);
    const [products, setProducts] = useState([
  {
    id: 1,
    name: "Ali",
    email: "ali@example.com",
    role: "Client",
  },
]);
  return (
    <div className='w-full flex-col flex'>
      <DashboardHeader showText={showText} setShowText={setShowtext} />
      <div className='items-center justify-center h-full w-full flex'>
        <div className='bg-white shadow-2xl  shadow-gray-400 w-full m-8 max-w-7xl border mx-auto p-4 border-gray-300 rounded-md dark:border-gray-100'>
            <div className='flex justify-center w-full flex-col items-center'>
                <User size={32} />
                <h1 className='text-3xl my-4 font-semibold text-gray-800 dark:text-gray-300'>All User</h1>
            </div>
         <div className="w-7xl overflow-x-auto mx-auto">
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
                <TableCell>1</TableCell>
                <TableCell>Ali</TableCell>
                <TableCell>ali@example.com</TableCell>
                <TableCell>client</TableCell>
                <TableCell>
                  <Button variant="secondary">Update</Button>
                </TableCell>
                <TableCell>
                  <AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>
    Delete
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
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

