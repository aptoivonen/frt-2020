import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>jogn doe</h2>;
const Message = () => <p>this is message</p>;

ReactDOM.render(<Greeting />, document.getElementById("root"));
