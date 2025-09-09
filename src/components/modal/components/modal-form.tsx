import clsx from "clsx";
import { ModalButton } from "./modal-button";
import { ModalBackdrop } from "./modal-backdrop";
import { useCallback, useEffect, useRef } from "react";
import { AttemptFocus } from "../utils";

interface ModalFormProps {
  focusAfterCloseNode: HTMLButtonElement | null;
  onAddClick: () => void;
  onCancelClick: () => void;
  onVerifyClick: () => void;
}

export const ModalForm = ({
  focusAfterCloseNode,
  onAddClick,
  onCancelClick,
  onVerifyClick,
}: ModalFormProps) => {
  const modalNode = useRef<HTMLDivElement | null>(null);
  const lastFocusNode = useRef<HTMLButtonElement | null>(null);

  // Even we can create a ref for the first element to make things
  // easier, this example wants to show how to retrieve the
  // first element to set the focus.
  const focusFirstDescendant = useCallback((element: HTMLElement): boolean => {
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i] as HTMLElement;
      if (AttemptFocus(child) || focusFirstDescendant(child)) {
        return true;
      }
    }

    return false;
  }, []);

  const focusLastDescendant = useCallback((element: HTMLElement): boolean => {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      const child = element.childNodes[i] as HTMLElement;
      if (AttemptFocus(child) || focusLastDescendant(child)) {
        return true;
      }
    }

    return false;
  }, []);

  useEffect(() => {
    if (modalNode.current) {
      focusFirstDescendant(modalNode.current);
    }
  }, [focusFirstDescendant]);

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Esc" || key === "Escape") {
        focusAfterCloseNode?.focus();
        onCancelClick();
      }
    },
    [focusAfterCloseNode, onCancelClick]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleEscape);
    return () => {
      document.removeEventListener("keyup", handleEscape);
    };
  }, [handleEscape]);

  const trapFocus = useCallback(
    (event: FocusEvent) => {
      if (!modalNode.current) return;

      const t = event.target;
      if (!(t instanceof HTMLElement)) {
        return;
      }
      if (!(t instanceof Node)) {
        return;
      }

      if (modalNode.current.contains(t as Node)) {
        // lastFocusNode.current = t as HTMLElement
      } else {
        focusFirstDescendant(modalNode.current);
        if (lastFocusNode.current == (document.activeElement as HTMLElement)) {
          focusLastDescendant(modalNode.current);
        }
      }
    },
    [focusFirstDescendant, focusLastDescendant]
  );

  useEffect(() => {
    document.addEventListener("focus", trapFocus, true);
    return () => {
      document.removeEventListener("focus", trapFocus, true);
    };
  }, [trapFocus]);

  return (
    <ModalBackdrop>
      <div
        role="dialog"
        id="dialog1"
        aria-labelledby="dialog1_label"
        aria-modal="true"
        ref={modalNode}
        className={clsx(
          "min-h-40 overflow-hidden",
          "box-border p-4",
          "border-[1px] border-black bg-white"
        )}
      >
        <h2 id="dialog1_label" className="text-center">
          Add Delivery Address
        </h2>
        <div className="m-4">
          <FormItem label="Street" width="w-[27em]" />
          <FormItem label="City" width="w-[17em]" />
          <FormItem label="State" width="w-[15em]" />
          <FormItem label="Zip" width="w-[9em]" />
        </div>
        <div className={clsx("text-right p-5")}>
          <ModalButton label="Verify Address" onClick={onVerifyClick} />
          <ModalButton label="Add" onClick={onAddClick} />
          <ModalButton
            ref={lastFocusNode}
            label="Cancel"
            onClick={() => {
              focusAfterCloseNode?.focus();
              onCancelClick();
            }}
          />
        </div>
      </div>
    </ModalBackdrop>
  );
};

interface FormItemProps {
  label: string;
  width: string;
}

const FormItem = ({ width, label }: FormItemProps) => {
  return (
    <div className="m-3">
      <label>
        <span
          className={clsx(
            "w-[30%]",
            "box-border pr-2 inline-block",
            "text-sm font-bold text-right"
          )}
        >
          {label}:
        </span>
        <input
          id={label}
          type="text"
          className={clsx(
            width,
            "max-w-[70%] box-border",
            "border border-black outline-1"
          )}
        />
      </label>
    </div>
  );
};
