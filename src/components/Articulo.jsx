"use client";

import { contextGlobal } from "./contextoGlobal";

export default function Articulo({ producto }) {
  const { state, setState } = contextGlobal();



    const deleted = () => {
   
      const productoExistente = state.find((objeto) => objeto.nombre === producto.nombre);
    
      
      if (productoExistente) {
        productoExistente.cantidad--;
    
       
        if (productoExistente.cantidad === 0) {
          const newState = state.filter((objeto) => objeto.nombre !== producto.nombre);
          setState(newState);
        } else {
          setState([...state]);
        }
      }
    };
  

  return (
    <div className="flex items-center justify-between p-1 rounded-sm bg-slate-300">
      <div className="flex flex-row items-center gap-x-2">
        <img src={producto. rutaImg} alt="" className="w-10 h-10"/>
      <p>{producto.nombre + " " + producto.cantidad}</p>
      </div>
      
      <button className="items-center p-1 text-white bg-red-500" onClick={deleted}>
        Quitar
      </button>
    </div>
  );
}
