import { Input } from '@nextui-org/react';
import React from 'react'
import { TfiWallet } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { columns, tableData } from '@/constants/data';

const WalletPage = () => {
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
                <div className="flex flex-row justify-between my-1 " >
                    <h1 className="font-bold text-2xl">0</h1>
                    <button className="text-xs text-white px-3 rounded-md bg-blue-900" >Withdraw</button>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-row justify-between p-5 gap-5 bg-slate-200 my-10 rounded-lg">
                <Input startContent={<CiSearch />} type="search" placeholder="Search" className="max-w-xs" />
                <div className="">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button 
                                // variant="bordered"
                                className="flex  justify-between bg-gray-100"
                                endContent={<IoIosArrowDown />}
                            >
                                All
                            </Button>  
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Table Columns">
                            <DropdownItem key="paid"> Paid</DropdownItem>
                            <DropdownItem key="successful">Succesful</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                </div>
            </div>
       </div>
    </>
  )
}

export default WalletPage

