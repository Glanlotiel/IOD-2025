import { useState } from "react";
import "./AddCatForm.css";

const EMPTY_FORM = { name: "", latinName: "", image: "" };

export default function AddCatForm({ onAdd }) {
  const [fields, setFields] = useState(EMPTY_FORM);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fields.name.trim() || !fields.latinName.trim()) {
      setError("Name and Latin name are required.");
      return;
    }

    onAdd({
      id: `cat-${Date.now()}`,
      name: fields.name.trim(),
      latinName: fields.latinName.trim(),
      image: fields.image.trim() || null,
    });

    setFields(EMPTY_FORM);
  };

  return (
    <div className="add-cat-form">
      <h2>Add a Cat</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="add-cat-form__fields">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              placeholder="e.g. Bobcat"
            />
          </label>
          <label>
            Latin name
            <input
              type="text"
              name="latinName"
              value={fields.latinName}
              onChange={handleChange}
              placeholder="e.g. Lynx rufus"
            />
          </label>
          <label>
            Image URL <span className="add-cat-form__optional">(optional)</span>
            <input
              type="url"
              name="image"
              value={fields.image}
              onChange={handleChange}
              placeholder="https://..."
            />
          </label>
        </div>

        {error && <p className="add-cat-form__error">{error}</p>}

        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}
