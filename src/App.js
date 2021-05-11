import React from "react";
import Parrafo from "./components/Parrafo.jsx"
import Variables from "./components/Variables.jsx";
import Eventos from "./components/Eventos.jsx"
import Contador from "./components/Contador.jsx";
import Listas from "./components/Listas.jsx";
function App() 
{
  return (
    <div>
      <h1>hola mundo React</h1>
      <Parrafo/>
      <Variables/>
      <Eventos/>
      <Contador/>
      <Listas/>
    </div>
  );
}

export default App;
