import ProgressBar from '../components/ProgressBar'
function Home({ vehicles }) {

    const totalVehicles = vehicles.length
    const ownedVehicles = vehicles.filter(v => v.owned).length
    const missingVehicles = totalVehicles - ownedVehicles

    const categories = [...new Set(vehicles.map(v => v.category))]
    const totalCategories = categories.length


    const overallPercentage = (ownedVehicles / totalVehicles) * 100

    return (
        <div style={{ minHeight: '100vh', paddingBottom: '40px' }}>

            <div className="hw-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">


                            <span className="badge mb-3" style={{
                                background: 'rgba(227,24,55,0.2)',
                                border: '1px solid var(--hw-red)',
                                color: 'var(--hw-red)',
                                fontSize: '0.75rem',
                                letterSpacing: '2px',
                                padding: '6px 14px'
                            }}>
                                <i className="fas fa-fire me-1"></i>
                                EDICIÓN COLECCIONISTA 2026
                            </span>


                            <h1 className="hw-banner-title">
                                HOT WHEELS
                                <br />
                                <span>COLLECTION</span>
                            </h1>

                            <p className="hw-banner-subtitle">
                                <i className="fas fa-tachometer-alt me-2" style={{ color: 'var(--hw-red)' }}></i>
                                Gestiona tu colección de vehículos a escala
                            </p>


                            <div className="mt-4" style={{ maxWidth: '500px' }}>
                                <p style={{ color: 'var(--hw-text-muted)', fontSize: '0.85rem', marginBottom: '8px' }}>
                                    PROGRESO GENERAL DE COLECCIÓN
                                </p>
                                <ProgressBar
                                    percentage={overallPercentage}
                                    owned={ownedVehicles}
                                    total={totalVehicles}
                                    label="Total colección"
                                />
                            </div>

                        </div>

                        <div className="col-lg-5 d-none d-lg-block text-center">
                            <div style={{
                                width: '350px',
                                height: '350px',
                                margin: '0 auto',
                                borderRadius: '50%',
                                border: '3px solid rgba(227,24,55,0.5)',
                                overflow: 'hidden',
                                boxShadow: '0 0 40px rgba(227,24,55,0.3)'
                            }}>
                                <img
                                    src="/src/assets/images/ht-removebg-preview.png"
                                    alt="Hot Wheels"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <h2 className="section-title mb-5">
                    <i className="fas fa-chart-bar me-2" style={{ fontSize: '1.4rem' }}></i>
                    RESUMEN DE COLECCIÓN
                </h2>

                <div className="row g-4">

                    <div className="col-6 col-md-3">
                        <div className="stat-card total">
                            <i className="fas fa-car-side fa-2x mb-2" style={{ color: 'var(--hw-red)' }}></i>
                            <div className="stat-number">{totalVehicles}</div>
                            <div className="stat-label">Total Vehículos</div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="stat-card owned">
                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: 'var(--hw-success)' }}></i>
                            <div className="stat-number" style={{
                                background: 'linear-gradient(135deg, #00c851, #007E33)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>{ownedVehicles}</div>
                            <div className="stat-label">Obtenidos</div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="stat-card missing">
                            <i className="fas fa-clock fa-2x mb-2" style={{ color: 'var(--hw-orange)' }}></i>
                            <div className="stat-number" style={{
                                background: 'linear-gradient(135deg, #ff6600, #cc3300)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>{missingVehicles}</div>
                            <div className="stat-label">Faltantes</div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="stat-card categories">
                            <i className="fas fa-tags fa-2x mb-2" style={{ color: 'var(--hw-yellow)' }}></i>
                            <div className="stat-number" style={{
                                background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>{totalCategories}</div>
                            <div className="stat-label">Categorías</div>
                        </div>
                    </div>

                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <div className="stat-card">
                            <h3 className="section-title mb-4" style={{ fontSize: '1.2rem' }}>
                                <i className="fas fa-list-ul me-2"></i>
                                PROGRESO POR CATEGORÍA
                            </h3>

                            {categories.map(category => {
                                // Autos
                                const catVehicles = vehicles.filter(v => v.category === category)
                                const catOwned = catVehicles.filter(v => v.owned).length
                                const catPercentage = (catOwned / catVehicles.length) * 100

                                return (
                                    <ProgressBar
                                        key={category}
                                        label={category}
                                        owned={catOwned}
                                        total={catVehicles.length}
                                        percentage={catPercentage}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home