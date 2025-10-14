export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 rounded-lg border border-slate-700 p-4">
      <h3 className="text-xl font-bold text-white mb-2 capitalize">{name}</h3>
      <p className="text-slate-400">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}