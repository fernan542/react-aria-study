import { Link, Outlet, useLocation } from "react-router-dom";

export const App = () => {
  const location = useLocation();
  const isNotIndex = location.pathname !== "/";

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">React ARIA Study</h1>
      <p>by Fernan Buan</p>
      <div className="h-4" />
      {isNotIndex && (
        <Link className="underline" to={"/"}>
          Go back to Home
        </Link>
      )}
      <div id="detail" className="w-full pt-5">
        <Outlet />
      </div>
    </div>
  );
};
