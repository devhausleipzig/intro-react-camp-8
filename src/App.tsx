import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="space-y-8">
      <Header
        title="Page 1"
        navElements={["Home", "About", "Carrers", "Blog"]}
      />
      <h1>My Heading</h1>
      <div>
        <p>First paragraph</p>
        <p>Second paragraph</p>
      </div>
      <Counter />
      <Form />
    </div>
  );
}

// return React.createElement("div", {}, [
//   React.createElement("h1", {}, "My Heading"),
//   React.createElement("div", {}, [
//     React.createElement("p", {}, "First Paragraph"),
//     React.createElement("p", {}, "Second Paragraph"),
//   ]),
// ]);
