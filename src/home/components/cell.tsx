interface Props {
  items: string[];
  label: string;
}

export const Cell = ({ label, items }: Props) => {
  if (items.length === 0) return;

  return (
    <>
      <label htmlFor="attributes-list" className="font-bold">
        {label}
      </label>
      <ul id="attributes-list" className="list-disc">
        {items.map((e) => (
          <li key={e}>
            <code>{e}</code>
          </li>
        ))}
      </ul>
      <br />
    </>
  );
};
