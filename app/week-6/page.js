import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}