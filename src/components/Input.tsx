import { Dispatch, SetStateAction } from "react";

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps<T> = {
  state: T;
  updater: Dispatch<SetStateAction<T>>;
  name: keyof T;
} & NativeInputProps;

export function Input<T extends Record<string, string>>({
  state,
  updater,
  name,
  type = "text",
  ...props
}: InputProps<T>) {
  return (
    <input
      type={type}
      value={state[name]}
      onChange={(event) =>
        updater((prev) => ({
          ...prev,
          [name]: event.target.value,
        }))
      }
      {...props}
    />
  );
}
