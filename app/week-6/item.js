export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-3">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 capitalize">{name}</h3>
          <p className="text-gray-600 text-sm mt-1">
            Buy {quantity} in {category}
          </p>
        </div>
      </div>
    </li>
  );
}