import clsx from "clsx"
import React from "react";

interface Props {
    label: string
    onClick: () => void
}

export const ModalButton = React.forwardRef<HTMLButtonElement, Props>(({ label, onClick }, ref) => {
    return (
        <button
            ref={ref}
            type="button"
            onClick={onClick}
            className={
                clsx(
                    "mx-1 p-2",
                    "bg-slate-700 text-white border-[1px] rounded-md",
                    "focus:border-[#034575] focus:border-[2px]"
                )
            }>
            {label}
        </button>
    )
});