import { Link } from "react-router-dom";

type Example = {
  name: string;
  path: string;
};

const examples: Example[] = [
  { name: "Menu Button", path: "examples/menu-button" },
  { name: "Radio Group", path: "examples/radio-group" },
];

export const HomePage = () => {
  return (
    <>
      <h2 className="text-2xl">Examples:</h2>
      <ul>
        {examples.map((e) => (
          <li key={e.name}>
            <Link className="underline" to={e.path}>
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
