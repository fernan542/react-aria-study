import { Link } from "react-router-dom";
import { EXAMPLES } from "../constants";

export const HomePage = () => {
  return (
    <section id="examples_by_role">
      <h2 id="examples_by_role_label">Examples by Role</h2>
      <div>
        <strong>NOTE:</strong> {' '}
        The HC abbreviation means example has High Contrast support.
      </div>
      <ul>
        {EXAMPLES.map((e) => (
          <li key={e.name}>
            <Link className="underline visited:text-purple-600" to={e.path}>
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
