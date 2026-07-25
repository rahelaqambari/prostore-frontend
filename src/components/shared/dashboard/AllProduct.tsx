"use client";
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
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAllProducts } from "@/lib/Actions/product.action";
import React, { useEffect, useState } from "react";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function AllProduct() {
  const [products, setProducts] = useState<
    | {
        id: number;
        man_date: Date;
        expire_date: Date;
        name: string;
        price: number;
        productDetails: {};
      }[]
    | null
  >(null);
  useEffect(() => {
    async function getProducts() {
      const data = await fetchAllProducts();

      setProducts(data);
    }
    getProducts();
  }, []);
  if (!products) {
    return;
  }
  return (
    <div className="max-w-6xl overflow-x-auto mx-auto">
      <Table className="w-full">
        <TableCaption>All products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Manafacturer Date</TableHead>
            <TableHead>Expire Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((x) => {
            return (
              <TableRow key={x.id}>
                <TableCell>{x.name}</TableCell>
                <TableCell>{x.category}</TableCell>
                <TableCell>{x.stock}</TableCell>
                <TableCell>{x.brand}</TableCell>
                <TableCell>{x.price}</TableCell>
                <TableCell>{x.man_date.toString()}</TableCell>
                <TableCell>{x.expire_date.toString()}</TableCell>
                <TableCell className="-mt-32">
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AllProduct;
