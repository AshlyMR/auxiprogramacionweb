import { useState } from 'react'
import VehicleCard from '../components/VehicleCard'
import ProgressBar from '../components/ProgressBar'

const categoryConfig = {
  'Deportivos': {
    icon: 'fa-rocket',
    color: '#00cfff',
    image: '/src/assets/images/categorias/car-solid.png'
  },
  'Muscle Cars': {
    icon: 'fa-fire',
    color: '#ff6a00',
    image: '/src/assets/images/categorias/bolt-lightning-solid.png'
  },
  'Clásicos': {
    icon: 'fa-clock',
    color: '#ffd700',
    image: '/src/assets/images/categorias/building-columns-solid.png'
  },
  'Todoterreno': {
    icon: 'fa-mountain',
    color: '#00e676',
    image: '/src/assets/images/categorias/bridge-solid.png'
  },
  'Competición': {
    icon: 'fa-flag-checkered',
    color: '#9b59b6',
    image: '/src/assets/images/categorias/chess-board-solid.png'
  },
}


function Categories({ vehicles }) {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const categories = [...new Set(vehicles.map(v => v.category))]

  const categoryVehicles = selectedCategory
    ? vehicles.filter(v => v.category === selectedCategory)
    : []


  const categoryOwned = categoryVehicles.filter(v => v.owned).length
  const categoryMissing = categoryVehicles.length - categoryOwned
  const categoryPercentage = categoryVehicles.length > 0
    ? (categoryOwned / categoryVehicles.length) * 100
    : 0

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '40px' }}>

    
      <div style={{
        background: 'linear-gradient(180deg, #1a0a0a, #0a0a0a)',
        borderBottom: '2px solid var(--hw-red)',
        padding: '40px 0'
      }}>
        <div className="container">
          <h1 className="section-title">
            <i className="fas fa-tags me-2" style={{ fontSize: '1.5rem' }}></i>
            CATEGORÍAS
          </h1>
          <p style={{ color: 'var(--hw-text-muted)', marginTop: '16px' }}>
            Selecciona una categoría para explorar sus vehículos
          </p>
        </div>
      </div>

      <div className="container mt-5">

    
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 mb-5">
          {categories.map(category => {
            const config = categoryConfig[category] || { icon: 'fa-car', color: '#e31837', emoji: '🚗' }
            const catVehicles = vehicles.filter(v => v.category === category)
            const catOwned = catVehicles.filter(v => v.owned).length

            return (
              <div key={category} className="col">
                <div
                  className={`category-card ${selectedCategory === category ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category ? null : category
                  )}
                  style={{ padding: '0', overflow: 'hidden' }}
                >

                  {/* IMAGEN DE LA CATEGORÍA */}
                  <div style={{ height: '110px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={config.image}
                      alt={category}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: 'linear-gradient(180deg, transparent 30%, rgba(10,22,40,0.85) 100%)',
                    }} />
                    <i
                      className={`fas ${config.icon}`}
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        color: config.color,
                        fontSize: '1.2rem',
                        textShadow: `0 0 10px ${config.color}`
                      }}
                    />
                  </div>


                  <div style={{ padding: '12px' }}>

                    {/* Nombre de categoría */}
                    <div className="category-name" style={{ color: config.color }}>
                      {category}
                    </div>

                    {/* Estadí */}
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--hw-text-muted)',
                      marginTop: '5px'
                    }}>
                      <i className="fas fa-check-circle me-1" style={{ color: 'var(--hw-success)' }}></i>
                      {catOwned} / {catVehicles.length}
                    </div>

                    {/* Mbarrprogreso */}
                    <div className="hw-progress mt-2" style={{ height: '4px' }}>
                      <div
                        className="hw-progress-bar"
                        style={{
                          width: `${(catOwned / catVehicles.length) * 100}%`,
                          background: config.color,
                          boxShadow: `0 0 8px ${config.color}`
                        }}
                      />
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {selectedCategory && (
          <div>
            {/* Encabezado de la categoría */}
            <div className="stat-card mb-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2 className="section-title mb-3">
                    {categoryConfig[selectedCategory]?.emoji} {selectedCategory}
                  </h2>
                  <ProgressBar
                    label={`Progreso en ${selectedCategory}`}
                    owned={categoryOwned}
                    total={categoryVehicles.length}
                    percentage={categoryPercentage}
                  />
                </div>
                <div className="col-md-6">
                  <div className="row g-3 mt-2 mt-md-0">
                    <div className="col-4 text-center">
                      <div style={{
                        fontSize: '1.8rem',
                        fontFamily: 'Orbitron',
                        color: 'var(--hw-text)'
                      }}>
                        {categoryVehicles.length}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--hw-text-muted)' }}>
                        TOTAL
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div style={{
                        fontSize: '1.8rem',
                        fontFamily: 'Orbitron',
                        color: 'var(--hw-success)'
                      }}>
                        {categoryOwned}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--hw-text-muted)' }}>
                        OBTENIDOS
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div style={{
                        fontSize: '1.8rem',
                        fontFamily: 'Orbitron',
                        color: 'var(--hw-orange)'
                      }}>
                        {categoryMissing}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--hw-text-muted)' }}>
                        FALTANTES
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de vehículos de la categoría */}
            {/* Nota: En Categories no pasamos toggleOwned/toggleFavorite */}
            {/* Solo mostramos los autos (modo vista) */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {categoryVehicles.map(vehicle => (
                <div key={vehicle.id} className="col">
                  {/* Versión simplificada de la tarjeta (solo vista) */}
                  <div className={`vehicle-card position-relative ${vehicle.owned ? 'owned' : ''}`}>
                    <div style={{ overflow: 'hidden', height: '180px' }}>
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="vehicle-card-img"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x200/1a1a2e/e31837?text=HOT+WHEELS'
                        }}
                      />
                    </div>
                    <div className="vehicle-card-body">
                      <div className="vehicle-card-name">{vehicle.name}</div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="vehicle-card-year">
                          <i className="fas fa-calendar-alt me-1"></i>{vehicle.year}
                        </span>
                        <span style={{
                          fontSize: '0.8rem',
                          color: vehicle.owned ? 'var(--hw-success)' : 'var(--hw-orange)',
                          fontWeight: '700'
                        }}>
                          <i className={`fas ${vehicle.owned ? 'fa-check-circle' : 'fa-clock'} me-1`}></i>
                          {vehicle.owned ? 'Obtenido' : 'Faltante'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/*no hay categoría seleccionada */}
        {!selectedCategory && (
          <div className="text-center py-5">
            <i className="fas fa-hand-pointer fa-3x mb-3" style={{ color: 'var(--hw-red)' }}></i>
            <p style={{ color: 'var(--hw-text-muted)', fontSize: '1.1rem' }}>
              Selecciona una categoría para ver sus vehículos
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Categories