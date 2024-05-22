"use client"

import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from "@nextui-org/react";
import { columns, data } from '@/constants/resultData';
import { GrDownload } from 'react-icons/gr';

const Result = () => {
  return (
    <div className='m-3'>

        <div className='flex flex-row justify-between p-5'>
            <h1 className='font-bold text-xl'>Articulate structure of C++ and Java</h1>
            <button className='border-1 bg-blue-600 text-white p-2 rounded-md'>Publish Result</button>
        </div>

        <div className='flex flex-row max-w-fit m-5 rounded-md text-sm text-gray-400 bg-gray-200'>
            <button className='px-3 py-2 w-32 '>Details</button>
            <button className='rounded-md px-3 py-2 w-32 bg-blue-600'>Result</button>
        </div>

        <Table 
            aria-label="table with dynamic content" 
            bottomContent={<div className="flex justify-center" >
                <Pagination showControls color="default"/>
                </div>}>
            <TableHeader columns={columns}>
                {columns.map((column) => (
                    <TableColumn key={column.uid}>{column.name}</TableColumn>
                ))}
            </TableHeader>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={item.student_id}>
                       
                            <TableCell key={item.student_id}>{item.student_id}</TableCell>
                            <TableCell key={item.student_id}>{item.name}</TableCell>
                            <TableCell key={item.student_id}>
                            <div className="border-1 text-sm flex rounded-md p-1 max-w-fit cursor-pointer">
                                Download <GrDownload className='mx-3' />
                            </div>
                            </TableCell>
                            <TableCell key={item.student_id}>
                                <div className='flex flex-row'>
                                    <input type="text" className='border-1 w-12' />
                                    <p className=''>/50</p>
                                </div>
                            </TableCell>
                            <TableCell key={item.student_id}>
                                <div className='space-x-10 justify-center'>
                                    <button className='border-1 text-blue-800 bg-gray-300 rounded-md py-1 px-2'>View file</button>
                                    <button className='border-1 text-blue-400 bg-slate-200 rounded-md py-1 px-2'>Save</button>
                                </div>
                            </TableCell>
                       
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default Result