import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

const initialState = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

export function Form() {
  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState<string | null>(null);

  function reset() {
    setFormState(initialState);
    setError(null);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState((prev) => ({
      ...prev,
      name: prev.name[0].toUpperCase() + prev.name.slice(1).toLowerCase(),
    }));
    if (formState.password.length < 8) {
      setError("Password is too short");
      return;
    }
    if (formState.password !== formState.confirmPassword) {
      setError("Passwords dont match");
      return;
    }
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-center">Form</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center">
        <Input
          state={formState}
          updater={setFormState}
          name="email"
          placeholder="E-Mail Address"
        />
        <Input
          state={formState}
          updater={setFormState}
          name="name"
          placeholder="Name"
        />
        <Input
          state={formState}
          updater={setFormState}
          name="password"
          placeholder="************"
        />
        <Input
          state={formState}
          updater={setFormState}
          name="confirmPassword"
          placeholder="************"
        />
        {error && <span className="text-red-600">{error}</span>}
        {error ? <span className="text-red-600">{error}</span> : null}
        <Button onClick={reset}>Reset</Button>
        <Button type="submit" color="indigo">
          Submit
        </Button>
      </form>
      <pre className="bg-gray-200">{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
}
