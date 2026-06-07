import { useState } from 'react'
import VehicleCard from '../components/VehicleCard'

function Collection({ vehicles, toggleOwned, toggleFavorite }) {

    const [searchTerm, setSearchTerm] = useState('')         
    const [filterOwned, setFilterOwned] = useState('todos')  
    const [filterCategory, setFilterCategory] = useState('todas') 

    const categories = ['todas', ...new Set(vehicles.map(v => v.category))]


    const filteredVehicles = vehicles.filter(vehicle => {
        // Filtro 1: por nombre (búsqueda)
        const matchesSearch = vehicle.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

        // Filtro 2 (todos / obtenidos / faltantes / favoritos)
        const matchesOwned =
            filterOwned === 'todos' ? true :
                filterOwned === 'obtenidos' ? vehicle.owned :
                    filterOwned === 'faltantes' ? !vehicle.owned :
                        filterOwned === 'favoritos' ? vehicle.favorite :
                            true

        // por categoría
        const matchesCategory =
            filterCategory === 'todas' ? true :
                vehicle.category === filterCategory

        // El vehículoTODOS los filtros
        return matchesSearch && matchesOwned && matchesCategory
    })

    // Estadísti arriba
    const ownedCount = vehicles.filter(v => v.owned).length
    const favoriteCount = vehicles.filter(v => v.favorite).length

    return (
        <div style={{ minHeight: '100vh', paddingBottom: '40px' }}>

            {/* ENCABEZADO */}
            <div style={{
                background: 'linear-gradient(180deg, #1a0a0a, #0a0a0a)',
                borderBottom: '2px solid var(--hw-red)',
                padding: '40px 0'
            }}>
                <div className="container">
                    <h1 className="section-title mb-2">
                        <i className="fas fa-car me-2" style={{ fontSize: '1.5rem' }}></i>
                        MI COLECCIÓN
                    </h1>
                    <p style={{ color: 'var(--hw-text-muted)', marginTop: '16px' }}>
                        <i className="fas fa-check-circle me-1" style={{ color: 'var(--hw-success)' }}></i>
                        {ownedCount} obtenidos
                        <span className="mx-3">•</span>
                        <i className="fas fa-star me-1" style={{ color: 'var(--hw-yellow)' }}></i>
                        {favoriteCount} favoritos
                        <span className="mx-3">•</span>
                        <i className="fas fa-layer-group me-1" style={{ color: 'var(--hw-text-muted)' }}></i>
                        {vehicles.length} total
                    </p>
                </div>
            </div>

            <div className="container mt-4">


                <div className="row mb-4">
                    <div className="col-md-8 mx-auto">
                        <div className="position-relative">
                            <i className="fas fa-search position-absolute"
                                style={{
                                    left: '18px', top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--hw-red)', zIndex: 1
                                }}
                            ></i>
                            <input
                                type="text"
                                className="hw-search"
                                style={{ paddingLeft: '45px' }}
                                placeholder="🔍 Buscar vehículo por nombre..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap gap-2 mb-3">
                    <span style={{ color: 'var(--hw-text-muted)', fontSize: '0.85rem', alignSelf: 'center' }}>
                        Estado:
                    </span>
                    {['todos', 'obtenidos', 'faltantes', 'favoritos'].map(filter => (
                        <button
                            key={filter}
                            className={`filter-badge ${filterOwned === filter ? 'active' : ''}`}
                            onClick={() => setFilterOwned(filter)}
                        >
                            <i className={`fas ${filter === 'todos' ? 'fa-layer-group' :
                                    filter === 'obtenidos' ? 'fa-check-circle' :
                                        filter === 'faltantes' ? 'fa-clock' :
                                            'fa-star'
                                } me-1`}></i>
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>


                <div className="d-flex flex-wrap gap-2 mb-4">
                    <span style={{ color: 'var(--hw-text-muted)', fontSize: '0.85rem', alignSelf: 'center' }}>
                        Categoría:
                    </span>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-badge ${filterCategory === cat ? 'active' : ''}`}
                            onClick={() => setFilterCategory(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Contador de resultados */}
                <p style={{ color: 'var(--hw-text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
                    Mostrando <strong style={{ color: 'var(--hw-yellow)' }}>{filteredVehicles.length}</strong> vehículos
                </p>

                {filteredVehicles.length > 0 ? (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        {filteredVehicles.map(vehicle => (
                            <div key={vehicle.id} className="col">
                                <VehicleCard
                                    vehicle={vehicle}
                                    toggleOwned={toggleOwned}
                                    toggleFavorite={toggleFavorite}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    // Mensaje cuando no hay resultados
                    <div className="text-center py-5">
                        <i className="fas fa-search fa-3x mb-3" style={{ color: 'var(--hw-text-muted)' }}></i>
                        <p style={{ color: 'var(--hw-text-muted)', fontSize: '1.1rem' }}>
                            No se encontraron vehículos con los filtros actuales.
                        </p>
                        <button
                            className="btn-collect mt-3"
                            style={{ width: 'auto', padding: '10px 24px' }}
                            onClick={() => {
                                setSearchTerm('')
                                setFilterOwned('todos')
                                setFilterCategory('todas')
                            }}
                        >
                            <i className="fas fa-redo me-2"></i>
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Collection