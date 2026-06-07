function LoadingScreen() {
    return (
        <div className="loading-screen">

            <div className="loading-spinner"></div>


            <div className="loading-logo">HOT WHEELS</div>


            <p style={{ color: '#888', letterSpacing: '3px', marginTop: '10px', fontSize: '0.9rem' }}>
                CARGANDO COLECCIÓN...
            </p>


            <div style={{ marginTop: '20px', fontSize: '1.5rem' }}>
                <i className="fas fa-car" style={{ color: 'var(--hw-red)', margin: '0 8px' }}></i>
                <i className="fas fa-car-side" style={{ color: 'var(--hw-orange)', margin: '0 8px' }}></i>
                <i className="fas fa-flag-checkered" style={{ color: 'var(--hw-yellow)', margin: '0 8px' }}></i>
            </div>
        </div>
    )
}

export default LoadingScreen