import clsx from "clsx";
import { useState } from "react";

export const Alert = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAriaLivePoliteVisible, setIsAriaLivePoliteVisible] = useState(false);

  return (
    <>
      <article className="mt-4">
        <button
          type="button"
          className="p-3 border-2 rounded-sm"
          onClick={() => setIsAlertVisible(true)}
        >
          Trigger Alert by Role
        </button>
        <div
          role="alert"
          // no need to define aria-live for role="alert"
          className={clsx(
            "flex flex-row justify-between items-center",
            "p-3 border-2 rounded-sm bg-blue-200",
            "empty:hidden"
          )}
        >
          {isAlertVisible && (
            <>
              <p>Hello</p>
              <button
                type="button"
                className="p-3 border-2 rounded-sm"
                onClick={() => setIsAlertVisible(false)}
              >
                X
              </button>
            </>
          )}
        </div>
      </article>
      <article className="mt-4">
        <button
          type="button"
          className="p-3 border-2 rounded-sm"
          onClick={() => setIsAriaLivePoliteVisible(true)}
        >
          Trigger Alert by ARIA-Live (Polite)
        </button>
        <div
          //   role="alert"
          aria-live="polite"
          className={clsx(
            "flex flex-row justify-between items-center",
            "p-3 border-2 rounded-sm bg-blue-200",
            "empty:hidden"
          )}
        >
          {isAriaLivePoliteVisible && (
            <>
              <p>Hello, polite.</p>
              <button
                type="button"
                className="p-3 border-2 rounded-sm"
                aria-label="Close"
                onClick={() => setIsAriaLivePoliteVisible(false)}
              >
                X
              </button>
            </>
          )}
        </div>
      </article>
    </>
  );
};
