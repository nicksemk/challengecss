import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarComponents from './components/CarComponents'

function App() {
  
 const cars = [
  {id:1, brand:"BMW",model:"320i",color: "Azul", km:0},
  {id:2, brand:"Porsche",model:"PANAMERA",color: "Vermelha", km:0},
  {id:3, brand:"Audi",model:"A6",color: "Branco", km:0},
  {id:5, brand:"Jeep",model:"COMPASS",color: "Vermelho", km:2342},
  {id:6, brand:"Honda",model:"CIVIC",color: "Preto", km:452},
  {id:7, brand:"Chevrolet",model:"S10 HIGH COUNTRY",color: "Azul", km:24342},
 ];

  return (
    <>
    <div>
      <h1>Car Project!</h1>
      <div className="car_conteiner">
      {cars.map((car)=> (
        <CarComponents
        //posso fazer assim (exemplo abaixo)
        key={car.id}
        brand={car.brand}
        model={car.model}
        color={car.color}
        km={car.km}
        
        //ou posso fazer assim (exemplo abaixo)

        //car={car}
        
        />
      ))}
    </div>  
    </div> 
    </>
  )
}

export default App
