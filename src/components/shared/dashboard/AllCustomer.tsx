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
// import { FeatchAllCustomer } from "@/lib/Actions/auth.action";
import React, { useEffect, useState } from "react";

function AllCustomer() {
  const [products, setProducts] = useState<
    | {
        id: number;
        name: string;
        email: string;
        role: string;
      }[]
    | null
  >(null);
  // useEffect(() => {
  //   async function AllUser() {
  //     const data = await FeatchAllCustomer();

  //     setProducts(data.data);
  //   }
  //   AllUser();
  // }, []);
  if (!products) {
    return;
  }
  return (
    <div className="max-w-6xl overflow-x-auto mx-auto">
      <Table className="w-full">
        <TableCaption>All products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((x) => {
            return (
              <TableRow key={x.id}>
                <TableCell>{x.id}</TableCell>
                <TableCell>{x.name}</TableCell>
                <TableCell>{x.email}</TableCell>
                <TableCell>{x.role}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AllCustomer;
