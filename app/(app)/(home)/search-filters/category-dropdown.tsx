"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Categories } from "@/payload-types";
import { useRef, useState } from "react";
import { useDropdownPosition } from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategory-menu";

interface CategoryDropdownProps {
    category: Categories;
    isActive?: boolean;
    isNavigationHover?: boolean;
}

export const CategoryDropdown = ({
    category,
    isActive,
    isNavigationHover }: CategoryDropdownProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownref = useRef<HTMLDivElement>(null);
    const { getDropdownPosition } = useDropdownPosition(dropdownref);

    const onMouseEnter = () => {
        if (category.subcategory) {
            console.log("hello")
            setIsOpen(true);
        }
    }

    const onMouseLeave = () => setIsOpen(false)
    const dropdownposition = getDropdownPosition();

    return (
        <div
            className="relative"
            ref={dropdownref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}

        >
            <div
                className="relative">
                <Button
                    variant="outline"
                    className={cn("h-11 px-4 bg-transparent border-transparent shadow-md rounded-full hover:bg-white hover:border-black hover:border-b-6 hover:border-r-4 transition-transform text-black", isActive && !isNavigationHover && "bg-white border-primary")}
                >{category.name}</Button>
                {category.subcategory && category.subcategory.length > 0 && (
                    <div className={cn(
                        "opacity-0 absolute -bottom-3 w-0 h-0 border-l-10 border-r-10 border-b-10 border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2", isOpen && "opacity-100"
                    )} />
                )}
            </div>
            <SubcategoryMenu
                category={category}
                isOpen={isOpen}
                position={dropdownposition}
            />

        </div>
    );
};