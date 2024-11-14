import { useRef, useState } from "react"
import { FormModal } from "./components/form_modal"

export const ModalDialogExView = () => {
    const [formDialogOpen, setFormDialogOpen] = useState(false)

    const buttonNode = useRef<HTMLButtonElement | null>(null)

    return (
        <>
            <button
                ref={buttonNode}
                type="button"
                className="bg-blue-400 rounded-md text-white p-2"
                onClick={() => setFormDialogOpen(true)}
            >
                Add Delivery Address
            </button>

            <div id="dialog_layer" className="dialogs">
                {formDialogOpen && <FormModal
                    focusAfterCloseNode={buttonNode.current}
                    onAddClick={() => { }}
                    onCancelClick={() => setFormDialogOpen(false)}
                    onVerifyClick={() => { }}
                />}
            </div>
        </>
    )
}

