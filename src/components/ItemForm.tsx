// src/components/ItemForm.tsx
import { useState } from 'react';

type ItemFormProps = {
  onAdd: (item: { name: string; quantity: number }) => void;
};

function ItemForm({ onAdd }: ItemFormProps) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name, quantity });
    setName('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full md:w-auto"
      />
      <input
        type="number"
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        className="border border-gray-300 rounded px-4 py-2 w-full md:w-32"
        min="1"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
}

export default ItemForm;
