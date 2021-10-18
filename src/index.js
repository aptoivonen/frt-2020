import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "Little Blue Truck's Halloween";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_SX184_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>Alice Schertle, Jill McElmurry </h4>
      <p>{}</p>
    </article>
  );
};
ReactDOM.render(<BookList />, document.getElementById("root"));
