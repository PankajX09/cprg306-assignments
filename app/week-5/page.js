import NewItem from "./new-item";

export default function Week5Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Shopping List - Add New Item
        </h1>
        <NewItem />
      </div>
    </div>
  );
}