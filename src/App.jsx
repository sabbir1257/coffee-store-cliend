import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCart from "./components/CoffeeCart";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className="m-20">
      <h1 className="text-center my-8 text-[#331A15] text-bold text-6xl">
        Hot Hot Cold Coffee: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4 "> 
      {coffees.map((coffee) => (
        <CoffeeCart key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCart>
      ))}
      </div>
    </div>
  );
}

export default App;
