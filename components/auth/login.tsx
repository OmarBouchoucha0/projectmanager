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
import { FcGoogle } from "react-icons/fc"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login({ onSwitch }: { onSwitch: () => void }) {
  const router = useRouter();
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
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      console.log("response:", response);
      const status = response.status;
      if (status == 200) {
        const user = await response.json();
        localStorage.setItem("user_profile", JSON.stringify(user));
        router.push("/");
        return;
      }
      if (status == 401) {
        setError("Wrong email or password");
        setLoading(false)
        return;
      }
      if (status == 500) {
        setError("Server Error pls try again!");
        setLoading(false)
        return;
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
      console.error(error);
    } finally {
      setLoading(false)
    }
  }
  return (
    <Card className="gap-8 pt-4 border-border border pb-0 min-w-84">
      <CardHeader >
        <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription className="text-sm">Use Credentials to login</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="grid gap-0">
              <Label htmlFor="email-rtl">email</Label>
              <Input
                id="email-rtl"
                type="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="py-0"
                required
              />
            </div>
            <div className="grid gap-0">
              <Label htmlFor="password-rtl">password</Label>
              <Input id="password-rtl"
                type="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                className="py-0"
                required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 border-border border-t bg-muted pb-5 mt-6">
          {error && <p className="text-bold text-red-500">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Login in up..." : "Login"}
          </Button>
          <Button variant="outline" className="w-full">
            <FcGoogle />
            login With Google
          </Button>
          <p className="text-sm">
            Does Not have an account?{" "}
            <button onClick={onSwitch} className="underline">Sign up</button>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
