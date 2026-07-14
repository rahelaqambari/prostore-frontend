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
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect, useState } from "react";

function AllCustomers() {
  const [data, action] = useActionState(deleteUser, {
    message: "",
    state: false
  });
  const [links, setLinks] = useState([]);
  const [users, setUsers] = useState<any>();
  const [url, setUrl] = useState(
    "http://localhost:8000/api/dashboard/all-users?page=1",
  );
  useEffect(() => {
    async function getUsers() {
      const data = await getAllUsers();
      setUsers(data);
      setLinks(data.meta.links);
    }
    getUsers();
  }, [url]);

  if (!users) {
    return (
      <div className="max-w-6xl w-full mx-auto flex border rounded-md flex-col">
        <div className="border-b p-4 w-full">
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <Users2 /> All Customers
          </span>
        </div>
        <div className="p-5">
          <div className="w-full p-5 flex justify-center">
            <Image src="/loader.gif" alt="loading..." height={70} width={70} />
          </div>
        </div>
      </div>
    );
  }

  {
    /* all customers */
  }
  return (
    <div className="max-w-6xl w-full mx-auto flex border rounded-md flex-col">
      <div className="border-b p-4 w-full">
        <span className="text-sm text-muted-foreground flex items-center gap-2">
          <Users2 /> All Customers
        </span>
      </div>
      <div className="p-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">ID</TableHead>
              <TableHead className="font-bold">Name</TableHead>
              <TableHead className="font-bold">Email</TableHead>
              <TableHead className="font-bold">Role</TableHead>
              <TableHead className="font-bold">Phone Number</TableHead>
              <TableHead className="font-bold">Update</TableHead>
              <TableHead className="font-bold">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.data.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.phone_number}</TableCell>
                <TableCell>
                  <Button variant="secondary">Update</Button>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {links && (
        <div className="w-full flex justify-center items-center gap-2 p-4">
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

export default AllCustomers;






// "use client";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import { Button, Input } from '@base-ui/react';
// import React, { useActionState, useEffect, useState } from "react";
// import { deleteUser, getAllUsers } from "@/lib/Actions/customer.action";

// function AllCustomer() {
//   const [data, action] = useActionState(deleteUser,{
//     message: "",
//     state: false,
//   });
//   const [users, setuser] = useState<
//       | {
//           id: number;
//           name: string;
//           email: string;
//           role: string;
//         }[]
//       | null
//     >(null);
//      const [links, setLinks] = useState<|{
//       url: string,
//       label: 'string',
//       page: number,
//       active: boolean
//      }[]|null>(null);
//      const [href,sethref] = useState('http://localhost:8000/api/dashboard/all-user/page=1');
//   useEffect(() => {
//     async function AllUser() {
//       const data = await getAllUsers();
//       setuser(data.data);
//       setLinks(data.meta.links)
//     }
//     AllUser();
//   }, [href]);
//   if (!users) {
//     return;
//   }
//   return (
//      <div className="w-full overflow-x-auto mx-auto">
//       <Table className="w-full mx-auto  border ">
//         <TableCaption>List of All User</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Id</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Role</TableHead>
//             <TableHead>Update</TableHead>
//             <TableHead>Delete</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody >
//           {users?.map((x) => {
//             return (
//               <TableRow key={x.id}>
//                 <TableCell className="p-5">{x.id}</TableCell>
//                 <TableCell>{x.name}</TableCell>
//                 <TableCell>{x.email}</TableCell>
//                 <TableCell>{x.role}</TableCell>
//                 <TableCell>
//                   <Button variant="secondary">Update</Button>
//                 </TableCell>
//                 <TableCell>
//                   <AlertDialog>
//   <AlertDialogTrigger render={<Button variant="outline" />}>
//     Delete
//   </AlertDialogTrigger>
//   <AlertDialogContent>
//     <form action={action}>
//       <Input 
//       type="text"
//       name="id"
//       defaultValue={x.id}
//       className="hidden"
//        />
//     <AlertDialogHeader>
//       <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//       <AlertDialogDescription>
//         This action cannot be undone. This will permanently delete this user
//         from our servers.
//       </AlertDialogDescription>
//     </AlertDialogHeader>
//     <AlertDialogFooter>
//       <AlertDialogCancel>Cancel</AlertDialogCancel>
//       <AlertDialogAction>Continue</AlertDialogAction>
//     </AlertDialogFooter>
//     </form>
//   </AlertDialogContent>
// </AlertDialog>
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
    
//            {links && <div className="w-full pt-4 md:pt-6 max-w-md mx-auto flex justify-between items-center">
//         {links.map((link) => (
//           <Button
//           key={link.label}
//             onClick={() =>
//               sethref(
//                 link.url
//                   ? link.url
//                   : `http://localhost:8000/api/all-user?page=1`,
//               )
//             }
//             key={link.label}
//             variant={link.active ? "default" : "outline"}
//             dangerouslySetInnerHTML={{ __html: link.label }}
//           />
//         ))} 
//       </div> }
//     </div>
//   );
// }

// export default AllCustomer;
