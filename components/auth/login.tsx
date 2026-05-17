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

export default function Login({ onSwitch }: { onSwitch: () => void }) {
  return (
    <Card className="gap-8 pt-4 border-border border pb-0 w-1/4 min-w-64">
      <CardHeader >
        <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription className="text-sm">Use Credentials to login</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
            <div className="grid gap-0">
              <Label htmlFor="email-rtl">email</Label>
              <Input
                id="email-rtl"
                type="email"
                className="py-0"
                required
              />
            </div>

            <div className="grid gap-0">
              <Label htmlFor="password-rtl">password</Label>
              <Input id="password-rtl" type="password" className="py-0" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 border-border border-t bg-muted pb-8">
        <Button type="submit" className="w-full">
          login
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
    </Card>
  );
}
