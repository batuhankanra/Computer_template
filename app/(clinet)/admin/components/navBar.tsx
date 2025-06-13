"use client"
import { useAppDispatch } from "@/lib/store/hook"
import UserMenu from "./auth"
import { useEffect } from "react"
import { getProduct } from "@/lib/store/features/product/getApiProduct"
import { getCategory } from "@/lib/store/features/categories/getApiCategories"
import { getUsers } from "@/lib/store/features/user/getUser"



const NavBar = () => {
  const dispatch=useAppDispatch()

  useEffect(()=>{
    dispatch(getProduct())
    dispatch(getCategory())
    dispatch(getUsers())

  },[])
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
      <div className="text-lg font-semibold">Admin</div>
      <UserMenu />
    </header>

  )
}

export default NavBar
