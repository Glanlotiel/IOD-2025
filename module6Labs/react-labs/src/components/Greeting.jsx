export default function Greeting({ name, children }) {
  return (
    <>
      <div className="componentBox">
        <p>Hello {name ? name : "World"}!</p>
        {children && <p>{children}</p>}
      </div>
    </>
  );
}
