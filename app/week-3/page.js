import ItemList from './ItemList';

export default function Page() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-4xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}