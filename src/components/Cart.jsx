"use client";
import { useEffect, useState } from "react";
import { contextGlobal } from "./contextoGlobal";
import ListProducts from "./ListProducts";
export default function Cart() {
    const[ver,setVer] = useState(false);
    const{state} = contextGlobal();
   
      useEffect(()=>{
          return () => {
          };
    
      },[state])

      const visualizar = ()=>{
          setVer(!ver);
      }
  return (
    <>
     <div className="relative">
      <button className="p-2 text-white rounded-md bg-sky-400 relative" onClick={visualizar}>Carrito <div className="absolute flex items-center justify-center p-1 bg-green-300 rounded-xl w-7 h-7 -right-5 -top-2">{state.length}</div></button>
       {(ver) && <ListProducts/>}
     </div>
    </>
  );
}
