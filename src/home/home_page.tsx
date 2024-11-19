import { Link } from "react-router-dom";
import { COMPONENTS } from "../constants";

export const HomePage = () => {
  return (
    <section
      id="examples_by_components"
      className="w-[50%]">
      <table className="text-left m-4 w-full">
        <thead className="table-header-group align-middle border">
          <tr className="table-row">
            <th className="p-4 border">Components</th>
            <th className="p-4 border">Roles | Properties | States</th>
          </tr>
        </thead>
        <tbody>
          {COMPONENTS.map((e) => (
            <tr className="table-row border">
              <td className="table-cell p-8 border">
                <Link className="underline visited:text-purple-600" to={e.path}>
                  {e.name}
                </Link>
              </td>
              <td className="table-cell p-8 border">
                <ComponentAttributesCell items={e.roles} label="Roles" />
                <ComponentAttributesCell items={e.properties} label="Properties" />
                <ComponentAttributesCell items={e.states} label="States" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

interface ComponentAttributesCellProps {
  items: string[]
  label: string
}

function ComponentAttributesCell({ label, items }: ComponentAttributesCellProps) {
  if (items.length === 0) return

  return (
    <>
      <label
        htmlFor="attributes-list"
        className="font-bold">
        {label}
      </label>
      <ul
        id="attributes-list"
        className="list-disc">
        {items.map((e) => (
          <li>
            <code>{e}</code>
          </li>
        ))}
      </ul>
    </>
  )
}