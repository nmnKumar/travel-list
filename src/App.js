import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Logo from "./Logo";
import Form from "./Form";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shoes", quantity: 13, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(removeItem) {
    setItems(items.filter((item) => item.id !== removeItem.id));
  }
  function HandleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={HandleToggleItem}
        onDeleteItems={handleDeleteItems}
      />
      <Stats items={items} />
    </div>
  );
}
