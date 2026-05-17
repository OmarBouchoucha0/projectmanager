"use client"
import { useState } from "react"
import Login from "@/components/auth/login"
import Signup from "@/components/auth/signup"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return isLogin ? (
    <Login onSwitch={() => setIsLogin(false)} />
  ) : (
    <Signup onSwitch={() => setIsLogin(true)} />
  )
}
