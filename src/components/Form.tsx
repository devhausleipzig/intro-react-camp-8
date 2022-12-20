import React, { useState } from "react";
import { Button } from "./Button";

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
        <input
          type="text"
          placeholder="E-Mail Address"
          value={formState.email}
          onChange={(event) =>
            setFormState((previousState) => ({
              ...previousState,
              email: event.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={(event) =>
            setFormState((previousState) => ({
              ...previousState,
              name: event.target.value,
            }))
          }
        />
        <input
          type="password"
          placeholder="************"
          value={formState.password}
          onChange={(event) =>
            setFormState((previousState) => ({
              ...previousState,
              password: event.target.value,
            }))
          }
        />
        <input
          type="password"
          placeholder="************"
          value={formState.confirmPassword}
          onChange={(event) =>
            setFormState((previousState) => ({
              ...previousState,
              confirmPassword: event.target.value,
            }))
          }
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
