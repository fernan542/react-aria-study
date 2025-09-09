import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "../components/breadcrumbs";

export const App = () => {
  return (
    <>
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
      <div className="p-4">
        <Breadcrumbs />
        <div id="detail" className="pt-5">
          <Outlet />
        </div>
      </div>

      <footer className="p-4">
        <a
          className="underline"
          href="https://github.com/fernan542/react-aria-study"
        >
          View in Github
        </a>
      </footer>
    </>
  );
};
