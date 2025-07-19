import React, { useState } from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let loginResult = await fetch(
      `${import.meta.env.VITE_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    ).then((res) => res.json());

    console.log(loginResult);
  };

  console.log(username);

  return (
    <section className="flex items-center justify-center min-h-screen px-2 dark:bg-gray-700 bg-white">
      <Card className="max-w-sm w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault(), handleSubmit();
          }}
          className="flex flex-col gap-4 p-6"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username">Your Username</Label>
            </div>
            <TextInput
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              placeholder="username"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
            </div>
            <TextInput
              onChange={(e) => setPassword(e.target.value)}
              id="password1"
              type="password"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </section>
  );
}
