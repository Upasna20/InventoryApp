// src/components/ItemList.tsx
import { InventoryItem } from '../types';

type ItemListProps = {
  items: InventoryItem[];
  onDelete: (id: number) => void;
};

function ItemList({ items, onDelete }: ItemListProps) {
  if (items.length === 0) {
    return <p className="text-gray-600 text-center">No items in inventory.</p>;
  }

  return (
    <ul className="space-y-4">
      {items.map(item => (
        <li
          key={item.id}
          className="flex justify-between items-center bg-white shadow-md rounded px-4 py-3"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
          </div>
          <button
            onClick={() => onDelete(item.id)}
            className="text-red-500 hover:text-red-700 font-medium"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
