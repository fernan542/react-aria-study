import clsx from "clsx";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "./useBreadcrumbs";

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  const navRef = useRef<HTMLElement>(null);

  return (
    <nav
      ref={navRef}
      aria-label="Breadcrumb"
      className="flex justify-start items-center gap-2"
    >
      {breadcrumbs.map((i, index) => {
        const isCurrent = index === breadcrumbs.length - 1;

        return (
          <NavLink
            key={i.to}
            to={i.to}
            aria-current={isCurrent ? "page" : undefined}
            className="inline-flex justify-center items-center gap-2"
            onClick={(e) => {
              if (isCurrent) {
                e.preventDefault();
                return false;
              }
            }}
          >
            <span
              className={clsx(
                "capitalize text-sm bg-transparent text-shd-surface-on",
                {
                  "font-bold": isCurrent,
                }
              )}
            >
              {i.label}
            </span>
            {!isCurrent && <p>{">"}</p>}
          </NavLink>
        );
      })}
    </nav>
  );
};
