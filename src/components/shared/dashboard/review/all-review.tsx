"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
 import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUser, getAllUsers } from "@/lib/Actions/customer.action";
import { Users2 } from "lucide-react";
import Image from "next/image";
import React, { useActionState, useEffect, useState } from "react";
import { getAllReviews } from "@/lib/Actions/review.action";

function AllReview() {
//   const [data, action] = useActionState(deleteUser, {
//     message: "",
//     state: false
//   });
  const [links, setLinks] = useState([]);
  const [users, setUsers] = useState<any>();
  const [url, setUrl] = useState(
    "http://localhost:8000/api/dashboard/all-review?page=1",
  );
  useEffect(() => {
    async function getUsers() {
      const data = await getAllReviews();
      setUsers(data);
      setLinks(data.meta.links);
    }
    getUsers();
  }, [url]);

  if (!users) {
    return (
      <div className="max-w-6xl w-full mx-auto flex border rounded-md flex-col">
        <div className="border-b w-full">
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <Users2 /> All Customers
          </span>
        </div>
      </div>
    );
  }

  {
    /* all customers */
  }
  return (
    <div className="w-full mx-auto flex border rounded-md flex-col">
      <div className="border-b w-full">
        <span className="text-sm text-muted-foreground flex items-center">
          <Users2 /> All Reviews
        </span>
      </div>
      <div >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">ID</TableHead>
              <TableHead className="font-bold">Product Name</TableHead>
              <TableHead className="font-bold">User Email</TableHead>
              <TableHead className="font-bold">User Name</TableHead>
              <TableHead className="font-bold">Comment</TableHead>
              <TableHead className="font-bold">Rating</TableHead>
              {/* <TableHead className="font-bold">Update</TableHead>
              <TableHead className="font-bold">Delete</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.data.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.product_name}</TableCell>
                <TableCell>{user.user_email}</TableCell>
                <TableCell>{user.user_name}</TableCell>
                <TableCell>{user.comment}</TableCell>
                <TableCell>{user.rating}</TableCell>
                {/* <TableCell className="-mt-32">
                    <Button variant="secondary">Update</Button> 
                   <Dialog>
      <form>
        <DialogTrigger asChild><Button variant="outline">Update</Button>
           </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit The User</DialogTitle>
            <DialogDescription>
              Make changes to your information here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
           <FieldGroup>
             <Field>
               <Label htmlFor="name">Name</Label>
               <Input id="name" name="name" defaultValue="Pedro Duarte" />
             </Field>
             <Field>
               <Label htmlFor="email">Email</Label>
               <Input id="email" name="email" defaultValue="@peduarte" />
             </Field>
                <Field>
               <Label htmlFor="phone_number">Phone</Label>
               <Input id="phone_number" name="phone_number" defaultValue="@peduarte" />
             </Field>
           </FieldGroup>
          <DialogFooter>
             <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
                </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
                </TableCell>
                <TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger>Delete</AlertDialogTrigger>
                    <AlertDialogContent>
                      <form action={action}>
                        <Input
                          type="number"
                          defaultValue={user.id}
                          name="id"
                          className="hidden"
                        />
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete user</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete {user.name}?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <Button type="submit" variant="destructive">
                            Delete
                          </Button>
                        </AlertDialogFooter>
                      </form>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell> */}
              </TableRow>
             ))}
          </TableBody>
        </Table>
      </div>
      {links && (
        <div className="w-full flex justify-center items-center gap-2 p-1">
          {links.map((link: any) => (
            <Button
              variant={link.active ? "default" : "outline"}
              onClick={() =>
                setUrl(
                  link.url
                    ? link.url
                    : `http://localhost:8000/api/dashboard/all-users?page=${users.current_page}`,
                )
              }
              key={link.label}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllReview;

