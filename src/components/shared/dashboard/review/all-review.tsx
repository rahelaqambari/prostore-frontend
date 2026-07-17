import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

function AllReview() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>id</TableHead>
                    <TableHead>comment</TableHead>
                    <TableHead>user</TableHead>
                    <TableHead>email</TableHead>
                    <TableHead>rating</TableHead>
                    <TableHead>date</TableHead>
                </TableRow>
            </TableHeader>
        </Table>
      
    </div>
  )
}

export default AllReview
