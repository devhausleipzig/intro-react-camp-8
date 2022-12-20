import clsx from "clsx";

type Props = {
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  color?: "default" | "indigo";
};

export function Button({
  onClick,
  children,
  type = "button",
  color = "default",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "text-white py-2 px-4 rounded-md",
        color === "default" ? "bg-slate-600" : "bg-indigo-600"
      )}
    >
      {children}
    </button>
  );
}
