"use client"

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import { NavbarSidebar } from './Navbar-sidebar';
import { MenuIcon } from 'lucide-react';

interface NavbarItemsProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItems = ({ href, children, isActive }: NavbarItemsProps) => {
    return (
        <Button
            asChild
            variant={'outline'}
            className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent",
                isActive && "bg-black text-white"
            )}>
            <Link href={href}>{children}</Link>
        </Button>
    )
}

const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/product", children: "Products" },
    { href: "/contact", children: "Contact" },
    { href: "/cart", children: "Cart" },
]
// Navbar component
function Navbar() {
    const pathname = usePathname();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <nav className="p-4 flex items-center justify-between h-20">
            <Link href="/" className="pl-6 items-center flex">
                <span className="text-5xl font-bold w-2xl">KUCH BHI</span>
            </Link>

            <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

            <div className="flex items-center gap-4">
                {navbarItems.map((items) => (
                    <NavbarItems
                        key={items.href}
                        href={items.href}
                        isActive={pathname === items.href}
                    >
                        {items.children}
                    </NavbarItems>
                ))}
            </div>

            <div className="hidden lg:flex">
                <Button
                    asChild
                    variant="secondary"
                    className="bg-black text-white hover:bg-blue-400 hover:text-black border-transparent text-lg transition-colors">
                    <Link href="/sign-up">Login</Link>
                </Button>
            </div>
            <div className="lg:hidden flex items-center justify-center  " >
                <Button
                    asChild
                    variant="ghost"
                    className="bg-white border-transparent size-12 "
                    onClick={() => setIsSidebarOpen(true)}>
                        <MenuIcon/>
                </Button>
            </div>

        </nav>
    )
}

export default Navbar