"use client"
import { FC } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,

} from "components/ui/dropdownMenu";
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react";


interface Props {
    isExpanded: boolean
}
const Header: FC<Props> = ({
    isExpanded
}) => {


    return (
        <div className="fixed w-full z-30 flex bg-white dark:bg-black border-b-2 border-gray-700 p-2 items-center justify-center h-16 px-10">
            {
                isExpanded ? null :
                    <div className=" ml-12 text-black dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
                        ARTELCO
                    </div>

            }

            <div className="grow h-full flex items-center justify-center"></div>
            <div className="flex-none h-full text-center flex items-center justify-center">

                <div className="flex space-x-3 items-center px-3">
                    <div className="flex-none flex justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="w-8 h-8 flex cursor-pointer">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShta_GXR2xdnsxSzj_GTcJHcNykjVKrCBrZ9qouUl0usuJWG2Rpr_PbTDu3sA9auNUH64&usqp=CAU" alt="profile" className="shadow rounded-full object-cover" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 dark:bg-black bg-white border dark:border-gray-700 rounded-md">
                                <DropdownMenuLabel>
                                    <div className='grid grid-rows-1'>
                                        <div className='w-full flex items-center justify-center'>
                                            <div className="w-10 h-10 flex cursor-pointer">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShta_GXR2xdnsxSzj_GTcJHcNykjVKrCBrZ9qouUl0usuJWG2Rpr_PbTDu3sA9auNUH64&usqp=CAU" alt="profile" className="shadow rounded-full object-cover" />
                                            </div>
                                        </div>
                                        <div className='w-full flex items-center justify-center mt-4 text-md'>
                                            moayad_khader
                                        </div>
                                        <div className='w-full flex items-center justify-center  text-md'>
                                            moayad.co
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className='dark:bg-gray-700' />
                                <DropdownMenuItem className='hover:dark:bg-gray-900 cursor-pointer'>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className='hover:dark:bg-gray-900 cursor-pointer'>
                                    <Users className="mr-2 h-4 w-4" />
                                    <span>Team</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className='dark:bg-gray-700' />
                                <DropdownMenuItem className='hover:dark:bg-gray-900 cursor-pointer'>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;