type Props = {
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
};

export function Button({ onClick, label }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-600 text-white py-2 px-4 rounded-md"
    >
      {label}
    </button>
  );
}
