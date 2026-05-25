"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup({ onSwitch }: { onSwitch: () => void }) {
  const router = useRouter()
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            password,
          }),
        }
      );

      const message = await response.text();
      console.log(message);
      if (!response.ok) {
        setError(message || "Failed to create user");
      } else {
        router.push("/");
      }

    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="gap-8 pt-4 border-border border pb-0  min-w-84">
      <CardHeader >
        <CardTitle className="text-xl">Signup</CardTitle>
        <CardDescription className="text-sm">Create New Account</CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="grid gap-0">
              <Label htmlFor="fname">First Name</Label>
              <Input
                id="fname"
                type="text"
                value={firstname} onChange={(e) => setFname(e.target.value)}
                className="py-0"
                required
              />
            </div>

            <div className="grid gap-0">
              <Label htmlFor="lname">Last Name</Label>
              <Input
                id="lname"
                type="text"
                value={lastname} onChange={(e) => setLname(e.target.value)}
                className="py-0"
                required
              />
            </div>

            <div className="grid gap-0">
              <Label htmlFor="email">email</Label>
              <Input
                id="email"
                type="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="py-0"
                required
              />
            </div>

            <div className="grid gap-0">
              <Label htmlFor="password">password</Label>
              <Input id="password"
                type="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                className="py-0"
                required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 border-border border-t bg-muted pb-6 mt-6">
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Signing up..." : "Signup"}
          </Button>
          <p className="text-sm">
            Already have an account?{" "}
            <button onClick={onSwitch} className="underline">Login</button>
          </p>
        </CardFooter>
      </form>
    </Card >
  );
}

