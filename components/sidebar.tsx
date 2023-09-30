"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { CalendarDays, Code, Gauge, GraduationCap, GripVertical, ImageIcon, LayoutDashboard, Mail, MessageCircle, MessageSquare, MoveRight, Music, Receipt, Settings, ShoppingCart, UserSquare, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const poppins = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
    {
        label: 'Dashboard',
        icon: Gauge,
        href: '/dashboard',
    },
    {
        label: 'Email',
        icon: Mail,
        href: '/conversation',
    },
    {
        label: 'Chat',
        icon: MessageCircle,
        href: '/image',
    },
    {
        label: 'Kanban',
        icon: LayoutDashboard,
        href: '/video',
    },
    {
        label: 'Contact',
        icon: UserSquare,
        href: '/music',
    },
    {
        label: 'Calender',
        icon: CalendarDays,
        href: '/code',
    },
    {
        label: 'Courses',
        icon: GraduationCap,
        href: '/settings',
    }, {
        label: 'Shop',
        icon: ShoppingCart,
        href: '/settings',
    },
    {
        label: 'Invoice',
        icon: Receipt,
        href: '/settings',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },

];

export const Sidebar = ({
}: {
    }) => {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/kanban" className="flex items-center pl-3 mb-14">
                    <h1 className={cn("text-2xl font-bold", poppins.className)}>
                        Weframetech
                    </h1>
                </Link>

                <h3 className="text-white text-sm ml-3 font-semibold text-gray-400">MAIN MENU</h3>
                <div className="">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-violet-500  rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3")} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>

                    <div className="cursor-pointer relative overflow-hidden bg-gradient-to-r z-10 rounded-lg ml-[20px] mt-[5px] from-blue-700 via-blue-800 to-blue-900 w-[180px] h-[150px]">
                    <div className="absolute w-[100px] top-[60px] left-[100px] rounded-full h-[100px] bg-gradient-to-b from-opacity-30 via-opacity-30 to-opacity-12 "></div>
                        <div className="flex flex-col justify-center ml-[10px] mt-[20px]">
                        <GripVertical />
                        <h1 className="text-1xl font-bold">Increase your work with kanban</h1>
                        <MoveRight />
                        </div>
                    </div>
  
            </div>
        </div>
    );
};