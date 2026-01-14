import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import Link from "next/link";

interface NavbarItems {
    href: string;
    children: React.ReactNode;
}


interface Props {
    items: NavbarItems[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="right" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                    <div><SheetTitle className="flex items-center">Menu</SheetTitle></div>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {
                        items.map((items) => (
                            <Link
                                key={items.href}
                                href={items.href}
                                className="w-full text-left p-4 flex hover:bg-black hover:text-white transition-colors items-center text-base font-medium"
                                onClick={() => onOpenChange(false)}>
                                {items.children}
                            </Link>
                        ))
                    }
                    <div>
                        <Link href="/sign-up"
                            className="w-full text-left p-4 flex hover:bg-black hover:text-white transition-colors items-center text-base font-medium"
                            onClick={() => onOpenChange(false)}>
                            Login
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}