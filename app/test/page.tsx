import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page() {
  return (<div className="flex items-center justify-center min-h-screen relative">
    <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:96px_96px]" />
    <Card className="gap-8 pt-4 border-border border pb-0 w-1/4 min-w-64">
      <CardHeader >
        <CardTitle className="text-xl">TEST</CardTitle>
        <CardDescription className="text-sm">this is a testing page</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center py-5">
        <Button>TEST</Button>
      </CardContent>
    </Card>

  </div>
  )
}
