"use client";
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
import { Button } from '@base-ui/react';

// import { FeatchAllCustomer } from "@/lib/Actions/auth.action";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "@/lib/Actions/customer.action";

function AllCustomer() {
  const [users, setuser] = useState<
      | {
          id: number;
          name: string;
          email: string;
          role: string;
        }[]
      | null
    >(null);
  useEffect(() => {
    async function AllUser() {
      const data = await getAllUsers();
      setuser(data.data);
    }
    AllUser();
  }, []);
  if (!users) {
    return;
  }
  return (
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
          {users?.map((x) => {
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
                  <AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>
    Delete
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete this user
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
  );
}

export default AllCustomer;
