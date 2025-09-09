import { Link } from "react-router-dom";
import { COMPONENTS } from "../constants";
import { Cell } from "./components/cell";
import { BreadcrumbHandleData } from "../components/breadcrumbs/useBreadcrumbs";

const handle = {
  breadcrumb: {
    label: "Home",
    to: "/",
  },
} satisfies BreadcrumbHandleData;

export const HomePage = () => {
  return (
    <main aria-labelledby="page-title">
      <table className="text-left">
        <thead className="table-header-group align-middle border">
          <tr className="table-row">
            <th className="p-4 border">Components</th>
            <th className="p-4 border">Roles | Properties | States</th>
            <th className="p-4 border">Examples</th>
          </tr>
        </thead>
        <tbody>
          {COMPONENTS.map((e) => (
            <tr key={e.name} className="table-row border">
              <td className="table-cell p-8 border">
                <Link className="underline visited:text-purple-600" to={e.path}>
                  {e.name}
                </Link>
              </td>
              <td className="table-cell p-8 border">
                <Cell key={e.name + e.roles} items={e.roles} label="Roles" />
                <Cell
                  key={e.name + e.properties}
                  items={e.properties}
                  label="Properties"
                />
                <Cell key={e.name + e.states} items={e.states} label="States" />
              </td>
              <td className="table-cell p-8 border">
                {e.examples && (
                  <ul className="list-disc">
                    {Array.from(e.examples.entries()).map(([title, path]) => (
                      <li key={e.name + title}>
                        <Link
                          className="underline visited:text-purple-600"
                          to={path}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

HomePage.handle = handle;
