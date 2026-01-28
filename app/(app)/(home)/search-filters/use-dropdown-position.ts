import { RefObject } from 'react';

export const useDropdownPosition = (ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>) => {

    // Add any logic needed for dropdown positioning here

    const getDropdownPosition = () => {
        // Logic to calculate and return dropdown position
        if (!ref.current) return { top: 0, left: 0 }

        const rect = ref.current.getBoundingClientRect();
        const dropdownWidth = 240; // width of dropdown (w-60 = 240px)

        // Calculate the initial left position
        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        // check if dropdown overflows the viewport on the right
        if (left + dropdownWidth > window.innerWidth) {
            // align to the right edge of the button instead
            left = rect.right - window.scrollX + dropdownWidth;

            // if still overflows, adjust to fit within viewport
            if (left < 0) {
                left = window.innerWidth - dropdownWidth - 16;
            }
        }

        // Ensure dropdown doesn't overflow on the left
        if (left < 0) {
            left = 16; // add some padding from the left edge
        }
        return { top, left };
    }

    return { getDropdownPosition }
}