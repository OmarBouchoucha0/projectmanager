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
    <Card className="gap-8 pt-4 border-border pb-0 w-1/4 min-w-64">
      <CardHeader >
        <CardTitle>Login</CardTitle>
        <CardDescription>Use Credentials to login</CardDescription>
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
          login With Google
        </Button>
      </CardFooter>
    </Card>
  );
}
