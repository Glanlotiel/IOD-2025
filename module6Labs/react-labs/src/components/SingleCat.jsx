import "./SingleCat.css";

const FALLBACK_IMAGE = "https://placehold.co/200x200?text=?";

export default function SingleCat({ name, latinName, image, index, onDelete }) {
  return (
    <li className="single-cat">
      <div className="single-cat__image-wrap">
        <img
          className="single-cat__image"
          src={image || FALLBACK_IMAGE}
          alt={name}
        />
      </div>
      <div className="single-cat__body">
        <span className="single-cat__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2>{name}</h2>
        <p className="single-cat__latin">{latinName}</p>
      </div>
      <button
        className="single-cat__delete"
        onClick={() => onDelete()}
        aria-label={`Delete ${name}`}
      >
        Delete
      </button>
    </li>
  );
}
