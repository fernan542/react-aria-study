import { useRef, useState } from "react"
import { ModalForm } from "./components/modal_form"

export const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const buttonNode = useRef<HTMLButtonElement | null>(null)

    return (
        <>
            <button
                ref={buttonNode}
                type="button"
                className="bg-blue-400 rounded-md text-white p-2"
                onClick={() => setModalOpen(true)}
            >
                Add Delivery Address
            </button>

            <div id="dialog_layer" className="dialogs">
                {modalOpen && <ModalForm
                    focusAfterCloseNode={buttonNode.current}
                    onAddClick={() => { }}
                    onCancelClick={() => setModalOpen(false)}
                    onVerifyClick={() => { }}
                />}
            </div>
        </>
    )
}

