import AuthPage from "@/components/auth/authPage"

export default function Page() {
  return (<div className="flex items-center justify-center min-h-screen relative">
    <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:96px_96px]" />
    <AuthPage />
  </div>
  )
}



