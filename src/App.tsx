import { useState } from "react";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="space-y-4">
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
