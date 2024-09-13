import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarComponents from './components/CarComponents'

function App() {
  
 const cars = [
  {id:1, brand:"BMW",model:"320i",color: "Azul", km:0},
  {id:2, brand:"Porsche",model:"Panamera",color: "Azul", km:0},
  {id:3, brand:"Audi",model:"A6",color: "Azul", km:0},
  {id:4, brand:"Jeep",model:"Compass",color: "Azul", km:2452},
 ];

  return (
    <>
    <div>
      <h1>Car Project!</h1>
      {cars.map((car)=> (
        <CarComponents
        key={car.id}
        brand={car.brand}
        model={car.model}
        color={car.color}
        km={car.km}
        />
      ))}
    </div>   
    </>
  )
}

export default App
