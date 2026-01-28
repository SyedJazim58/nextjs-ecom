import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React from 'react'

interface SearchInputProps {
    disabled?: boolean;
}


// SearchInput component

export const SearchInput = ({ disabled }: SearchInputProps) => {
    return (
        <div className='flex items-center w-full gap-2'>
            <div className='relative w-full'>
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-neutral-500" />
                <Input className="pl-8" placeholder='search' />
            </div>
        </div>
    )
}
