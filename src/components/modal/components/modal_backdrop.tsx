import clsx from "clsx"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const ModalBackdrop = ({ children }: Props) => {
    return (
        <div
            className={
                clsx(
                    'block',
                    'fixed overflow-auto bg-black/30',
                    'top-0 right-0 left-0 bottom-0 z-10',
                )
            }>
            {children}
        </div>
    )
}