export default function Item({ name, quantity, category }) {
  return (
    <li className="max-w-sm p-2 mb-4 bg-blue-950">
      <p className="font-semibold text-2xl">{name}</p>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}