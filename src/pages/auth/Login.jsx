import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen px-2 dark:bg-gray-700 bg-white">
      <Card className="max-w-sm w-full">
        <form className="flex flex-col gap-4 p-6">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
            </div>
            <TextInput id="password1" type="password" required />
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
