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

export default function Signup({ onSwitch }: { onSwitch: () => void }) {
  return (
    <Card className="gap-8 pt-4 border-border border pb-0 w-1/4 min-w-64">
      <CardHeader >
        <CardTitle className="text-xl">Signup</CardTitle>
        <CardDescription className="text-sm">Create New Account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
            <div className="grid gap-0">
              <Label htmlFor="fname">First Name</Label>
              <Input
                id="fname"
                type="text"
                className="py-0"
                required
              />
            </div>

            <div className="grid gap-0">
              <Label htmlFor="lname">Last Name</Label>
              <Input
                id="lname"
                type="text"
                className="py-0"
                required
              />
            </div>

            <div className="grid gap-0">
              <Label htmlFor="email">email</Label>
              <Input
                id="email"
                type="email"
                className="py-0"
                required
              />
            </div>

            <div className="grid gap-0">
              <Label htmlFor="password">password</Label>
              <Input id="password" type="password" className="py-0" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 border-border border-t bg-muted pb-8">
        <Button type="submit" className="w-full">
          Signup
        </Button>
        <p className="text-sm">
          Already have an account?{" "}
          <button onClick={onSwitch} className="underline">Login</button>
        </p>
      </CardFooter>
    </Card>
  );
}
