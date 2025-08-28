import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const menuItemsName = ["Sms", "Email", "In-App"];

export const MenuButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [action, setAction] = useState("");

  const domNode = useRef<HTMLDivElement | null>(null);
  const buttonNode = useRef<HTMLButtonElement | null>(null);
  const menuNode = useRef<HTMLUListElement | null>(null);
  const menuItemNodes = useRef<(HTMLLIElement | null)[]>([]);
  const menuFirstItemElement = useRef<HTMLLIElement | null>(null);
  const menuLastItemElement = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    // Accessing the refs after rendering
    menuItemNodes.current.forEach((li, index) => {
      if (li) {
        // Get the first element from the menu.
        if (index === 0) menuFirstItemElement.current = li;
        console.log("First item:", menuFirstItemElement.current);
        // Get the last element from the menu.
        menuLastItemElement.current = li;
        // Items should not be focus using tab, we'll use arrow keys instead. Except for the first item.
        li.tabIndex = -1;
      }
    });
  }, []);

  // Due to react's rendering lifecycle, we need to use useEffect
  // to properly move the focus to the first item after the button
  // was pressed. This makes sure that the menu was already rendered.
  useEffect(() => {
    if (isPopupOpen) {
      menuFirstItemElement.current?.focus();
    }
  }, [isPopupOpen]);

  function setFocusToMenuItem(menuItem: HTMLLIElement) {
    menuItemNodes.current.forEach((e) => {
      if (e) {
        if (e === menuItem) {
          e.tabIndex = 0;
          menuItem.focus();
        } else {
          e.tabIndex = -1;
        }
      }
    });
  }

  function setFocusToPreviousMenuItem(menuItem: HTMLLIElement) {
    let newMenuItem: HTMLLIElement;

    if (menuItem === menuFirstItemElement.current) {
      newMenuItem = menuLastItemElement.current!;
    } else {
      const index = menuItemNodes.current.indexOf(menuItem);
      newMenuItem = menuItemNodes.current[index - 1]!;
    }

    setFocusToMenuItem(newMenuItem);
    return newMenuItem;
  }

  function setFocusToNextMenuItem(menuItem: HTMLLIElement) {
    let newMenuItem: HTMLLIElement;

    if (menuItem === menuLastItemElement.current) {
      newMenuItem = menuFirstItemElement.current!;
    } else {
      const index = menuItemNodes.current.indexOf(menuItem);
      newMenuItem = menuItemNodes.current[index + 1]!;
    }

    setFocusToMenuItem(newMenuItem);
    return newMenuItem;
  }

  function setFocusToFirstItem() {
    if (menuFirstItemElement) {
      setFocusToMenuItem(menuFirstItemElement.current!);
    }
  }

  function setFocusToLastItem() {
    if (menuLastItemElement) {
      setFocusToMenuItem(menuLastItemElement.current!);
    }
  }

  function onButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (isPopupOpen) {
      setIsPopupOpen(false);
      buttonNode.current?.focus();
    } else {
      setIsPopupOpen(true);
    }

    event.stopPropagation();
    event.preventDefault();
  }

  function onButtonKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const key = event.key;
    let flag = false;

    switch (key) {
      case " ":
      case "Enter":
      case "ArrowDown":
      case "Down":
        if (isPopupOpen) {
          setIsPopupOpen(false);
          buttonNode.current?.focus();
        } else {
          setIsPopupOpen(true);
        }
        flag = true;
        break;

      case "Esc":
      case "Escape":
        setIsPopupOpen(false);
        flag = true;
        break;

      case "Up":
      case "ArrowUp":
        setIsPopupOpen(true);
        setFocusToLastItem();
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  function onMenuItemKeyDown(
    item: string,
    event: React.KeyboardEvent<HTMLLIElement>
  ) {
    const tgt = event.currentTarget;
    const key = event.key;
    let flag = false;

    if (event.shiftKey) {
      if (event.key === "Tab") {
        buttonNode.current?.focus();
        setIsPopupOpen(false);
        flag = true;
      }
    } else {
      switch (key) {
        case " ":
        case "Enter":
          setIsPopupOpen(false);
          setAction(item);
          buttonNode.current?.focus();
          flag = true;
          break;

        case "Esc":
        case "Escape":
          setIsPopupOpen(false);
          buttonNode.current?.focus();
          flag = true;
          break;

        case "Up":
        case "ArrowUp":
          setFocusToPreviousMenuItem(tgt);
          flag = true;
          break;

        case "Down":
        case "ArrowDown":
          setFocusToNextMenuItem(tgt);
          flag = true;
          break;

        case "Home":
        case "PageUp":
          setFocusToFirstItem();
          flag = true;
          break;

        case "End":
        case "PageDown":
          setFocusToLastItem();
          flag = true;
          break;

        case "Tab":
          setIsPopupOpen(false);
          break;

        default:
          break;
      }
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  function onMenuItemMouseOver(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    const tgt = event?.currentTarget;
    tgt.focus();
  }

  function onMenuItemClick(name: string) {
    setIsPopupOpen(false);
    buttonNode.current?.focus();
    setAction(name);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        if (isPopupOpen) {
          setIsPopupOpen(false);
          buttonNode.current?.focus();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen, domNode]);

  return (
    <>
      <h2 className="text-2xl">Example: Menu Button</h2>
      <div ref={domNode} className="my-5">
        <button
          id="menu-button"
          type="button"
          ref={buttonNode}
          aria-haspopup="true"
          aria-expanded={isPopupOpen}
          aria-controls="menu-list"
          className={clsx(
            "m-0 p-2 flex items-center gap-x-4 w-[100px]",
            "bg-slate-700 text-white border-[1px] rounded-md",
            "focus:border-[#034575] focus:border-[2px]"
          )}
          onClick={onButtonClick}
          onKeyDown={onButtonKeyDown}
        >
          Filters
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx({
              "rotate-180": isPopupOpen,
            })}
            width="12"
            height="9"
            viewBox="0 0 12 9"
          >
            <polygon points="1 0, 11 0, 6 8"></polygon>
          </svg>
        </button>
        <ul
          id="menu-list"
          role="menu"
          ref={menuNode}
          aria-labelledby="menu-button"
          className={clsx(
            "absolute w-[100px] z-20 hidden m-0 px-2 py-1 bg-gray-300",
            {
              "!inline-block": isPopupOpen,
            }
          )}
        >
          {menuItemsName.map((name, index) => (
            <li
              key={name}
              ref={(el) => (menuItemNodes.current[index] = el)}
              role="menuitem"
              className="focus:bg-slate-400 focus:text-white focus:outline-none"
              onClick={() => onMenuItemClick(name)}
              onKeyDown={(e) => onMenuItemKeyDown(name, e)}
              onMouseOver={onMenuItemMouseOver}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <p>
        <label>
          Last Filter Type:{" "}
          <input
            className="focus:outline-2 focus:outline-gray-500 bg-slate-100"
            id="action_output"
            type="text"
            readOnly
            value={action}
          />
        </label>
      </p>
    </>
  );
};
