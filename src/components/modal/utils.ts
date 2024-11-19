/**
  * @description Set Attempt to set focus on the current node.
  * @param element
  *          The node to attempt to focus on.
  * @returns {boolean}
  *  true if element is focused.
  */
export function AttemptFocus(element: HTMLElement): boolean {
    if (!IsFocusable(element)) {
        return false;
    }

    try {
        element.focus();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
        // continue regardless of error
    }

    return document.activeElement === element;
}

export function IsFocusable(element: HTMLElement): boolean {
    if (element.tabIndex < 0) {
        return false;
    }

    if (element instanceof HTMLInputElement &&
        (element as HTMLInputElement).disabled) {
        return false;
    }

    switch (element.nodeName) {
        case 'A':
            return !!(element as HTMLAnchorElement).href
                && (element as HTMLAnchorElement).rel !== 'ignore';
        case 'INPUT':
            return (element as HTMLInputElement).type !== 'hidden';
        case 'BUTTON':
        case 'SELECT':
        case 'TEXTAREA':
            return true;
        default:
            return false;
    }
}