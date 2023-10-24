"use client"
import Link from "next/link"
import Cart from "./Cart"
export default function Navbar() {
  return (
    <nav className="flex flex-row items-center z-10 absolute justify-around w-full px-5 py-4 bg-slate-50 shadow-sm shadow-white">
        <h1 className="text-2xl font-bold">Tienda</h1>
        <div className="flex flex-row items-center gap-x-10">
            <Link href={"/admin"} className="p-2 bg-yellow-400 rounded-md relative">Admin</Link>
           <Cart/>
        </div>
    </nav>
  )
}
