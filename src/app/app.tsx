import { Link, Outlet, useLocation } from "react-router-dom";
import { COMPONENTS } from "../constants";

export const App = () => {
  const location = useLocation();
  const isNotIndex = location.pathname !== "/";

  function getHeaderTitle(): string {
    for (const e of COMPONENTS) {
      if (location.pathname === e.path) return e.name;
    }

    return "Home";
  }

  return (
    <div className="">
      <header className="bg-green-900 p-4 text-white">
        <a
          className="text-xl font-bold"
          href="https://www.w3.org/WAI/ARIA/apg/"
        >
          React ARIA Study
        </a>
        <p className="italic">
          How to build accessibility semantics into web patterns and widgets
        </p>
      </header>
      <div className="h-4" />
      {isNotIndex && (
        <Link className="underline" to={"/"}>
          Go back to Home
        </Link>
      )}
      <div id="detail" className="p-4 w-full pt-5">
        <h1 className="text-2xl my-2">{getHeaderTitle()}</h1>
        <Outlet />
      </div>
      {/* <footer className="p-4 bottom-0">
        <a
          className="underline"
          href="https://github.com/fernan542/react-aria-study"
        >
          View in Github
        </a>
      </footer> */}
    </div>
  );
};
