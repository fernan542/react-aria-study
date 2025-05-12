import clsx from "clsx";
import { useState } from "react";

export const Alert = () => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isAriaLivePoliteVisible, setIsAriaLivePoliteVisible] = useState(false);
    const [isAriaLiveAssertiveVisible, setIsAriaLiveAssertiveVisible] = useState(false);

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
                    Trigger Alert by ARIA-Live (polite)
                </button>
                <div
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
            <article className="mt-4">
                <button
                    type="button"
                    className="p-3 border-2 rounded-sm"
                    onClick={() => setIsAriaLiveAssertiveVisible(true)}
                >
                    Trigger Alert by ARIA-Live (assertive)
                </button>
                <div
                    aria-live="assertive"
                    className={clsx(
                        "flex flex-row justify-between items-center",
                        "p-3 border-2 rounded-sm bg-blue-200",
                        "empty:hidden"
                    )}
                >
                    {isAriaLiveAssertiveVisible && (
                        <>
                            <p>Hello, assertive.</p>
                            <button
                                type="button"
                                className="p-3 border-2 rounded-sm"
                                aria-label="Close"
                                onClick={() => setIsAriaLiveAssertiveVisible(false)}
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
