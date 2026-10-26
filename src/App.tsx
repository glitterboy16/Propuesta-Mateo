import './App.css'

const services = [
  { name: 'Web Corporativa', price: 1100, maintenance: 80 },
  { name: 'Landing Page', price: 600, maintenance: 50 },
  { name: 'E-commerce', price: 2200, maintenance: 120 },
  { name: 'Agente WhatsApp', price: 800, maintenance: 100 },
  { name: 'Agente Telefónico', price: 1500, maintenance: 150 },
  { name: 'Automatización', price: 500, maintenance: 60 },
  { name: 'Gestión Redes', price: 400, maintenance: 300 },
]

const references = [
  { name: 'Joyería Mapy', type: 'Automatizaciones' },
  { name: 'El Bocadito', type: 'Web completa' },
  { name: 'Casa Tereré', type: 'Web completa' },
]

const projections = [
  { clients: 3, initial: 660, monthly: 24, yearly: 948 },
  { clients: 5, initial: 1100, monthly: 40, yearly: 1580 },
  { clients: 10, initial: 2200, monthly: 80, yearly: 3160 },
]

function CheckIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3.5 8 6.5 11 12.5 5" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="flow-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Propuesta a Mateo</h1>
        <p className="subtitle">Colaboración técnica · Precios bajo supervisión</p>
      </header>

      {/* Flujo de colaboración */}
      <section className="section">
        <h2>Cómo funciona</h2>
        <div className="flow-container">
          <div className="flow-step">
            <div className="flow-title">Angel construye</div>
            <div className="flow-desc">Webs, agentes IA, automatizaciones</div>
          </div>
          <ArrowIcon />
          <div className="flow-step">
            <div className="flow-title">Mateo vende</div>
            <div className="flow-desc">Tú tienes la relación con el cliente</div>
          </div>
          <ArrowIcon />
          <div className="flow-step">
            <div className="flow-title">Cliente feliz</div>
            <div className="flow-desc">Solo te ve a ti, servicio premium</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Modelo de comisión</h2>
        <div className="model-grid">
          <div className="model-card">
            <div className="model-number">20%</div>
            <div className="model-label">del pago inicial</div>
          </div>
          <div className="model-card">
            <div className="model-number">10%</div>
            <div className="model-label">del mantenimiento</div>
          </div>
        </div>
      </section>

      {/* Proyección de ganancias */}
      <section className="section">
        <h2>Proyección de ganancias (webs)</h2>
        <div className="projection-grid">
          {projections.map((p) => (
            <div key={p.clients} className="projection-card">
              <div className="projection-clients">{p.clients} clientes</div>
              <div className="projection-bar">
                <div
                  className="projection-fill"
                  style={{ width: `${(p.yearly / 3160) * 100}%` }}
                />
              </div>
              <div className="projection-breakdown">
                <div className="projection-row">
                  <span>Inicial</span>
                  <span>{p.initial} €</span>
                </div>
                <div className="projection-row">
                  <span>Mensual</span>
                  <span>{p.monthly} €</span>
                </div>
                <div className="projection-row total">
                  <span>Año 1</span>
                  <span>{p.yearly.toLocaleString()} €</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Servicios</h2>
        <div className="table-container">
          <table className="services-table">
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Precio</th>
                <th>Manten.</th>
                <th>Tu inicial</th>
                <th>Tu mensual</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.name}>
                  <td>{s.name}</td>
                  <td className="number">{s.price} €</td>
                  <td className="number">{s.maintenance} €</td>
                  <td className="number highlight">{Math.round(s.price * 0.2)} €</td>
                  <td className="number highlight">{Math.round(s.maintenance * 0.1)} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Referencias</h2>
        <div className="refs-grid">
          {references.map((r) => (
            <div key={r.name} className="ref-card">
              <div className="ref-name">{r.name}</div>
              <div className="ref-type">{r.type}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Incluido</h2>
        <ul className="includes-list">
          <li><CheckIcon />Boceto visual por cada propuesta</li>
          <li><CheckIcon />El cliente solo te ve a ti</li>
          <li><CheckIcon />Tú decides el precio final</li>
        </ul>
      </section>

      <footer className="footer">
        <p>Precios orientativos · Ajustables según proyecto</p>
      </footer>
    </div>
  )
}

export default App
