export default function App() {
  return (
    <div>
      <Header
        title="Page 1"
        navElements={["Home", "About", "Carrers", "Blog"]}
      />
      <h1>My Heading</h1>
      <div>
        <p>First paragraph</p>
        <p>Second paragraph</p>
      </div>
    </div>
  );
}

type HeaderProps = {
  title: string;
  navElements: string[];
};

function Header({ title, navElements }: HeaderProps) {
  return (
    <header className="bg-red-500 flex justify-between items-center p-2">
      <span>{title}</span>
      <nav className="flex">
        {navElements.map((el) => (
          <li className="text-white">{el}</li>
        ))}
      </nav>
    </header>
  );
}

// return React.createElement("div", {}, [
//   React.createElement("h1", {}, "My Heading"),
//   React.createElement("div", {}, [
//     React.createElement("p", {}, "First Paragraph"),
//     React.createElement("p", {}, "Second Paragraph"),
//   ]),
// ]);
