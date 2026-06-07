
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'

import Home from './pages/Home'
import Collection from './pages/Collection'
import Categories from './pages/Categories'


import initialVehicles from './data/vehicles'

function App() {

  const [vehicles, setVehicles] = useState(initialVehicles)


  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)  
    }, 2500)


    return () => clearTimeout(timer)
  }, []) 


  const toggleOwned = (id) => {
    setVehicles(prevVehicles =>
      prevVehicles.map(vehicle =>
        vehicle.id === id
          ? { ...vehicle, owned: !vehicle.owned }  
          : vehicle  
      )
    )
  }


  const toggleFavorite = (id) => {
    setVehicles(prevVehicles =>
      prevVehicles.map(vehicle =>
        vehicle.id === id
          ? { ...vehicle, favorite: !vehicle.favorite }
          : vehicle
      )
    )
  }


  if (loading) {
    return <LoadingScreen />
  }


  return (
    <BrowserRouter>
      <Navbar vehicles={vehicles} />

      <Routes>

        <Route
          path="/"
          element={<Home vehicles={vehicles} />}
        />

    
        <Route
          path="/coleccion"
          element={
            <Collection
              vehicles={vehicles}
              toggleOwned={toggleOwned}
              toggleFavorite={toggleFavorite}
            />
          }
        />


        <Route
          path="/categorias"
          element={<Categories vehicles={vehicles} />}
        />
      </Routes>


      <footer className="hw-footer">
        <p>
          <i className="fas fa-car me-2" style={{color: 'var(--hw-red)'}}></i>
          HOT WHEELS COLLECTION © 2026 — Todos los derechos reservados
          <i className="fas fa-fire ms-2" style={{color: 'var(--hw-orange)'}}></i>
        </p>
      </footer>
    </BrowserRouter>
  )
}

export default App
