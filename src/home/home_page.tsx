import { Link } from "react-router-dom";
import { EXAMPLES } from "../constants";

export const HomePage = () => {
  return (
    <ul>
      {EXAMPLES.map((e) => (
        <li key={e.name}>
          <Link className="underline visited:text-purple-600" to={e.path}>
            {e.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
