export default function Item({ name, quantity, category }) {
  return (
    <li className="max-w-sm p-2 mb-4 bg-green-500">
      <p className="font-semibold text-2xl text-white">{name}</p>
      <p className="text-white">Buy {quantity} in {category}</p>
    </li>
  );
}