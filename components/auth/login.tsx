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

export default function Login() {
  return (
    <Card className="gap-6 py-2 border-border ">
      <CardHeader >
        <CardTitle>Login</CardTitle>
        <CardDescription>Use Credentials to login</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-2">
            <div className="grid ">
              <Label htmlFor="email-rtl">email</Label>
              <Input
                id="email-rtl"
                type="email"
                required
              />
            </div>

            <div className="grid gap-0">
              <Label htmlFor="password-rtl">password</Label>
              <Input id="password-rtl" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 border-border border-t bg-muted">
        <Button type="submit" className="w-full">
          login
        </Button>
        <Button variant="outline" className="w-full">
          login With Google
        </Button>
      </CardFooter>
    </Card>
  );
}
