import { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { InventoryItem } from './types'; // if external

function App() {
  const [items, setItems] = useState<InventoryItem[]>([
    { id: 1, name: 'Soap', quantity: 10 },
    { id: 2, name: 'Rice', quantity: 25 }
  ]);

  const addItem = (item: Omit<InventoryItem, 'id'>) => {
    setItems(prev => [...prev, { ...item, id: Date.now() }]);
  };

  const deleteItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Inventory Manager</h1>
      <ItemForm onAdd={addItem} />
      <ItemList items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
