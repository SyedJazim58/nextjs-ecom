import { Categories } from "@/payload-types";
import Link from "next/link";

interface SubcategoryMenuProps {
    category: Categories;
    isOpen: boolean;
    position: {
        left: number;
        top: number;
    };
}

export const SubcategoryMenu = ({ category, isOpen, position }: SubcategoryMenuProps) => {
    if (!isOpen || !category.subcategory || category.subcategory.length === 0) {
        return null;
    }

    const backgroundColor = category.color || "#F5F5F5";

    return (
        <div className="fixed z-100"
            style={{
                left: position.left,
                top: position.top
            }}>
            {/* Invisble Bride to maintain hover */}
            <div className="h-3 w-60" />
            <div
                style={{ backgroundColor }}
                className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-0.5 -translate-y-0.5">
                <div>
                    {category.subcategory?.map((subcategory: Categories) => (
                        <Link key={subcategory.slug} href={subcategory.id}>
                            <div className="w-full text-left p-4 flex justify-between items underline font-medium hover:bg-white cursor-pointer">
                                {subcategory.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )

}