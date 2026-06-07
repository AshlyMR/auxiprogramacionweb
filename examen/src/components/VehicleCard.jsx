function VehicleCard({ vehicle, toggleOwned, toggleFavorite }) {
    return (
        <div className={`vehicle-card position-relative ${vehicle.owned ? 'owned' : ''}`}>


            <div style={{ overflow: 'hidden', height: '200px', backgroundColor: '#1a1a2e' }}>
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="vehicle-card-img"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                    }}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200/1a1a2e/e31837?text=HOT+WHEELS'
                    }}
                />
            </div>

  
            <div className="vehicle-card-body">

     
                <div className="vehicle-card-name">{vehicle.name}</div>

         
                <div className="d-flex justify-content-between align-items-center my-2">
                    <span className="vehicle-card-category">
                        <i className="fas fa-tag me-1"></i>
                        {vehicle.category}
                    </span>
                    <span className="vehicle-card-year">
                        <i className="fas fa-calendar-alt me-1"></i>
                        {vehicle.year}
                    </span>
                </div>

        
                <p style={{
                    color: 'var(--hw-text-muted)',
                    fontSize: '0.8rem',
                    marginBottom: '12px',
                    minHeight: '36px'
                }}>
                    {vehicle.description}
                </p>

                <div className="d-flex gap-2">

                    <button
                        className={`btn-collect ${vehicle.owned ? 'collected' : ''}`}
                        onClick={() => toggleOwned(vehicle.id)}
                    >
                        <i className={`fas ${vehicle.owned ? 'fa-check-circle' : 'fa-plus-circle'} me-1`}></i>
                        {vehicle.owned ? 'Obtenido' : 'Agregar'}
                    </button>

                    <button
                        className={`btn-favorite ${vehicle.favorite ? 'active' : ''}`}
                        onClick={() => toggleFavorite(vehicle.id)}
                        title={vehicle.favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                    >
                        <i className={`fas ${vehicle.favorite ? 'fa-star' : 'fa-star'}`}></i>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default VehicleCard
