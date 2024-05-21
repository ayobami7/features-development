import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const Result = () => {
  return (
    <div>
        <h1>Articulate struxture of C++ and Java</h1>
        <p>toggle</p>

        <Table 
            aria-label="table with dynamic content" 
            selectionMode="multiple" 
            bottomContent={<div className="flex justify-center" >
                <Pagination showControls color="default"/>
                </div>}>
            <TableHeader columns={columns}>
                {columns.map((column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                ))}
            </TableHeader>
            <TableBody>
                {rows.map((item) => (
                    <TableRow key={item.invoice}>
                        {columns.map((column) => (
                            <TableCell key={column.key}>{item[column.key]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default Result