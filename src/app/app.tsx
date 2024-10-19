import { Link, Outlet, useLocation } from "react-router-dom";
import { EXAMPLES } from "../constants";

export const App = () => {
  const location = useLocation();
  const isNotIndex = location.pathname !== "/";

  function getHeaderTitle(): string {
    for (const e of EXAMPLES) {
      if (location.pathname === e.path) return e.name;
    }

    return "Examples";
  }

  return (
    <div className="p-4">
      <a
        className="text-xl font-bold"
        href="https://github.com/fernan542/react-aria-study"
      >
        React ARIA Study
      </a>
      <p className="italic">
        How to build accessibility semantics into web patterns and widgets
      </p>
      <div className="h-4" />
      {isNotIndex && (
        <Link className="underline" to={"/"}>
          Go back to Home
        </Link>
      )}
      <div id="detail" className="w-full pt-5">
        <header>
          <h1 className="text-2xl">{getHeaderTitle()}</h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
};
