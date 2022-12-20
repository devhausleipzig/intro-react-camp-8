import { Button } from "./Button";

export function Form() {
  return (
    <form className="flex flex-col items-center">
      <input type="text" />
      <Button type="submit" color="indigo">
        Submit
      </Button>
    </form>
  );
}
