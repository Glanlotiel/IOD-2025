import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";
import "./BigCats.css";

const catImages = {
  Cheetah:
    "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=200&h=200&fit=crop",
  Cougar:
    "https://images.unsplash.com/photo-1661432693576-7a7cd4c69e38?w=200&h=200&fit=crop",
  Jaguar:
    "https://images.unsplash.com/photo-1727875119700-f26a48b24d4d?w=200&h=200&fit=crop",
  Leopard:
    "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=200&h=200&fit=crop",
  Lion: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=200&h=200&fit=crop",
  "Snow leopard":
    "https://images.unsplash.com/photo-1640094604830-68f3a5c4d03f?w=200&h=200&fit=crop",
  Tiger:
    "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=200&h=200&fit=crop",
};

const INITIAL_CATS = [
  {
    id: "cat-001",
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: catImages["Cheetah"],
  },
  {
    id: "cat-002",
    name: "Cougar",
    latinName: "Puma concolor",
    image: catImages["Cougar"],
  },
  {
    id: "cat-003",
    name: "Jaguar",
    latinName: "Panthera onca",
    image: catImages["Jaguar"],
  },
  {
    id: "cat-004",
    name: "Leopard",
    latinName: "Panthera pardus",
    image: catImages["Leopard"],
  },
  {
    id: "cat-005",
    name: "Lion",
    latinName: "Panthera leo",
    image: catImages["Lion"],
  },
  {
    id: "cat-006",
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: catImages["Snow leopard"],
  },
  {
    id: "cat-007",
    name: "Tiger",
    latinName: "Panthera tigris",
    image: catImages["Tiger"],
  },
];

const isPanthera = (cat) => cat.latinName.startsWith("Panthera");

export default function BigCats() {
  const [cats, setCats] = useState(INITIAL_CATS);
  const [sortAsc, setSortAsc] = useState(null);
  const [pantherOnly, setPantherOnly] = useState(false);

  const handleAdd = (newCat) => {
    setCats((prev) => [...prev, newCat]);
  };

  const handleDelete = (id) => {
    setCats((prev) => prev.filter((cat) => cat.id !== id));
  };

  const handleReset = () => {
    setSortAsc(null);
    setPantherOnly(false);
  };

  const getDisplayedCats = () => {
    let list = pantherOnly ? cats.filter(isPanthera) : [...cats];
    if (sortAsc === true)
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sortAsc === false)
      list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  };

  const displayed = getDisplayedCats();

  return (
    <section className="big-cats">
      <h1>Big Cats</h1>

      <AddCatForm onAdd={handleAdd} />

      <div className="big-cats__controls">
        <button
          onClick={() => setSortAsc(true)}
          className={sortAsc === true ? "active" : ""}
        >
          A → Z
        </button>
        <button
          onClick={() => setSortAsc(false)}
          className={sortAsc === false ? "active" : ""}
        >
          Z → A
        </button>
        <button
          onClick={() => setPantherOnly(true)}
          className={pantherOnly ? "active" : ""}
        >
          Panthera only
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <ul className="big-cats__list">
        {displayed.map((cat, index) => (
          <SingleCat
            key={cat.id}
            id={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
            index={index}
            onDelete={() => handleDelete(cat.id)}
          />
        ))}
      </ul>
    </section>
  );
}
