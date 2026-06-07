function ProgressBar({ percentage, label, owned, total }) {
    const safePercentage = Math.min(100, Math.max(0, percentage))

    let barColor = 'var(--hw-gradient)'
    if (safePercentage === 100) barColor = 'linear-gradient(135deg, #00c851, #007E33)'
    else if (safePercentage >= 75) barColor = 'linear-gradient(135deg, #ffd700, #ff8c00)'

    return (
        <div className="mb-3">
            {/* Encabe */}
            <div className="d-flex justify-content-between align-items-center mb-1">
                <span style={{ color: 'var(--hw-text)', fontWeight: '600', fontSize: '0.9rem' }}>
                    {label}
                </span>
                <span style={{ color: 'var(--hw-yellow)', fontWeight: '700', fontSize: '0.85rem' }}>
                    {owned}/{total} — {safePercentage.toFixed(0)}%
                </span>
            </div>

            {/* Barra de progreso */}
            <div className="hw-progress">
                <div
                    className="hw-progress-bar"
                    style={{
                        width: `${safePercentage}%`,
                        background: barColor
                    }}
                />
            </div>
        </div>
    )
}

export default ProgressBar