import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const schema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters"),
  password: z.string().min(8, "password must be 8 characters"),
  // .regex(
  //   regex,
  //   "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
  // ),
});

export default function ReactLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            password: data.password,
          }),
        }
      );

      const result = await response.json();
      console.log("Login result:", result);

      // Optional: handle login result (e.g., redirect or show error)
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md w-full flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
      >
        {/* Username Field */}
        <div>
          <Label htmlFor="username" className="mb-2 block">
            Your username
          </Label>
          <TextInput
            {...register("username")}
            id="username"
            type="text"
            placeholder="username"
          />
          {errors.username && (
            <p className="text-red-600 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <Label htmlFor="password1" className="mb-2 block">
            Your password
          </Label>
          <TextInput
            {...register("password")}
            id="password1"
            type="password"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
