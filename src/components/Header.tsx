type HeaderProps = {
  title: string;
  navElements: string[];
};

export function Header({ title, navElements }: HeaderProps) {
  return (
    <header className="bg-red-500 flex justify-between items-center p-2">
      <span>{title}</span>
      <nav className="flex">
        {navElements.map((el) => (
          <li key={el} className="text-white">
            {el}
          </li>
        ))}
      </nav>
    </header>
  );
}
