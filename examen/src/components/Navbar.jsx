import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ vehicles }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const ownedCount = vehicles.filter(v => v.owned).length

    return (
        <nav className="hw-navbar navbar navbar-expand-lg">
            <div className="container">

                <NavLink to="/" className="navbar-brand">
                    <i className="fas fa-bolt me-2"></i>
                    HOT WHEELS
                </NavLink>

                <button
                    className="navbar-toggler"
                    style={{ borderColor: 'var(--hw-red)' }}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className="fas fa-bars" style={{ color: 'var(--hw-red)' }}></i>
                </button>


                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto align-items-center gap-1">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <i className="fas fa-home me-1"></i>
                                Inicio
                            </NavLink>
                        </li>

                        {/* Linkco*/}
                        <li className="nav-item">
                            <NavLink
                                to="/coleccion"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <i className="fas fa-car me-1"></i>
                                Mi Colección
                            </NavLink>
                        </li>

                        {/* LinCates */}
                        <li className="nav-item">
                            <NavLink
                                to="/categorias"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <i className="fas fa-tags me-1"></i>
                                Categorías
                            </NavLink>
                        </li>

                        {/* Conta */}
                        <li className="nav-item ms-2">
                            <span
                                className="badge rounded-pill"
                                style={{
                                    background: 'var(--hw-gradient)',
                                    fontSize: '0.85rem',
                                    padding: '8px 14px'
                                }}
                            >
                                <i className="fas fa-trophy me-1"></i>
                                {ownedCount} / {vehicles.length}
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar