"use client";

import React from 'react';
import { TfiWallet } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { columns, rows } from '@/constants/data';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Pagination } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';

// Import ShadCN components
// import { Dialog, DialogOverlay, DialogContent, DialogTitle, DialogDescription } from '@components/ui/table';
// import { Button, Input, Table, TableHead, TableRow, TableCell, TableBody, Pagination, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@components/ui/dropdown-menu';

const WalletPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <>
      <div className="bg-white m-10 ">
        <div className="mb-5 ">
          <h1 className="font-bold md:text-2xl">Wallets</h1>
          <p className="text-gray-500 text-xs">Track, manage and forecast your customers and orders </p>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg p-4">
          <TfiWallet className="text-green-700 w-10 h-7 space-y-5" />
          <p className="text-gray-500 text-xs my-1"> Your E-Wallet Balance </p>
          <div className="flex flex-row justify-between my-1 ">
            <h1 className="font-bold text-2xl">0</h1>
            <button className="text-xs text-white px-3 rounded-md bg-blue-900">Withdraw</button>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row justify-between p-5 bg-slate-200 my-10 rounded-lg gap-3">
          <Input startIcon={<CiSearch />} type="search" placeholder="Search" className="max-w-xs" />
          <div className="">
            <DropdownMenu isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger>
                <Button className="flex justify-between bg-gray-100">
                  All <IoIosArrowDown />
                </Button>
              </DropdownMenuTrigger >
              <DropdownMenuContent>
                <DropdownMenuItem>Paid</DropdownMenuItem>
                <DropdownMenuItem>Successful</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.key}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
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
          <div className="flex justify-center">
            <Pagination count={10} page={1} onChange={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletPage;
