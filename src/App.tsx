import './App.css'

const services = [
  { name: 'Landing de presencia', desc: 'Una página clara con carta, fotos, ubicación, horarios y botón de reserva.', price: 800, maintenance: 0, commission: 160, monthlyCommission: 0 },
  { name: 'Web completa + mantenimiento', desc: 'Varias secciones, carta editable, blog, SEO y soporte continuo.', price: 1100, maintenance: 80, commission: 220, monthlyCommission: 8 },
  { name: 'Web con base de datos', desc: 'Reservas, panel de gestión, pedidos o catálogo conectado.', price: 1400, maintenance: 110, commission: 280, monthlyCommission: 11 },
  { name: 'Agente WhatsApp', desc: 'Responde, confirma y apunta reservas en texto, a cualquier hora.', price: 600, maintenance: 110, commission: 120, monthlyCommission: 11 },
  { name: 'Agente telefónico', desc: 'Contesta el teléfono con voz natural y registra la reserva.', price: 1000, maintenance: 200, commission: 200, monthlyCommission: 20 },
  { name: 'Automatizaciones', desc: 'Avisos, facturas, pedidos, seguimiento de clientes y reseñas.', price: 650, maintenance: 90, commission: 130, monthlyCommission: 9 },
  { name: 'Tienda online', desc: 'Para vino, producto gourmet o merchandising, con pagos y envíos.', price: 1800, maintenance: 120, commission: 360, monthlyCommission: 12 },
]

const references = [
  { name: 'Joyería Mapy', type: 'Automatizaciones' },
  { name: 'El Bocadito', type: 'Web completa' },
  { name: 'Casa Tereré', type: 'Web completa' },
]

const projections = [
  { clients: 3, initial: 660, monthly: 24 },
  { clients: 5, initial: 1100, monthly: 40 },
  { clients: 10, initial: 2200, monthly: 80 },
]

function FlowDiagram() {
  return (
    <div className="graph">
      <svg viewBox="0 0 760 280" role="img" aria-label="Esquema: Angel construye, Mateo vende, los clientes reciben">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0L10 5L0 10z" fill="var(--muted)"/>
          </marker>
        </defs>
        <g fontFamily="var(--b)" fontSize="14" textAnchor="middle">
          <rect x="10" y="100" width="170" height="80" rx="14" fill="var(--accent2)"/>
          <text x="95" y="135" fill="#fff" fontFamily="var(--h)" fontSize="20" fontWeight="700">Angel</text>
          <text x="95" y="157" fill="#fff" fontSize="13">Webs · Automatización · IA</text>

          <rect x="290" y="90" width="180" height="100" rx="14" fill="var(--accent)"/>
          <text x="380" y="130" fill="#fff" fontFamily="var(--h)" fontSize="22" fontWeight="700">Mateo</text>
          <text x="380" y="155" fill="#fff" fontSize="13">Marca, relación y venta</text>

          <g fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5">
            <rect x="580" y="15" width="170" height="48" rx="12"/>
            <rect x="580" y="75" width="170" height="48" rx="12"/>
            <rect x="580" y="135" width="170" height="48" rx="12"/>
            <rect x="580" y="195" width="170" height="48" rx="12"/>
          </g>

          <g fill="var(--ink)">
            <text x="665" y="44">Joyería Mapy</text>
            <text x="665" y="104">El Bocadito</text>
            <text x="665" y="164">Casa Tereré</text>
            <text x="665" y="224">Nuevos clientes</text>
          </g>

          <g stroke="var(--muted)" strokeWidth="1.8" fill="none" markerEnd="url(#arrow)">
            <path d="M180 140H288"/>
            <path d="M470 120C520 90 540 50 578 40"/>
            <path d="M470 135C520 120 540 105 578 99"/>
            <path d="M470 150C520 155 540 160 578 159"/>
            <path d="M470 165C520 190 540 210 578 219"/>
          </g>

          <text x="234" y="127" fill="var(--muted)" fontSize="12">entrega</text>
          <text x="380" y="220" fill="var(--muted)" fontSize="12">cobra al cliente su precio</text>
          <text x="95" y="210" fill="var(--muted)" fontSize="12">recibe su comisión</text>
          <text x="380" y="265" fill="var(--muted)" fontSize="13">El cliente final solo ve a Mateo.</text>
        </g>
      </svg>
    </div>
  )
}

function WebMockup() {
  return (
    <div className="mockup-frame">
      <div className="mockup-dots">
        <span></span><span></span><span></span>
      </div>
      <div className="mockup-content">
        <div className="mockup-hero"></div>
        <div className="mockup-cols">
          <div className="mockup-block"></div>
          <div className="mockup-block"></div>
          <div className="mockup-block"></div>
        </div>
        <div className="mockup-line long"></div>
        <div className="mockup-line"></div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header>
        <span className="tag">Propuesta de alianza</span>
        <h1>Tú vendes, yo construyo.</h1>
        <p className="lead">Un esquema para que Mateo ofrezca web, automatización y agentes con IA como servicios propios, sin tocar código y sin cambiar la relación con sus clientes.</p>
      </header>

      <section>
        <h2>Cómo funciona</h2>
        <p>El cliente solo ve a Mateo. Detrás, Angel diseña, programa y mantiene todo. Mateo decide qué vender y a qué precio.</p>
        <FlowDiagram />
      </section>

      <section>
        <h2>Tu comisión</h2>
        <div className="model-grid">
          <div className="model-card">
            <div className="model-number">20%</div>
            <div className="model-label">del pago inicial</div>
          </div>
          <div className="model-card">
            <div className="model-number">10%</div>
            <div className="model-label">del mantenimiento mensual</div>
          </div>
        </div>
      </section>

      <section>
        <h2>Proyección con webs</h2>
        <p>Ejemplo de lo que ganas vendiendo webs completas a 1.100 €.</p>
        <div className="projection-grid">
          {projections.map((p) => (
            <div key={p.clients} className="projection-card">
              <div className="projection-clients">{p.clients} clientes</div>
              <div className="projection-breakdown">
                <div className="projection-row">
                  <span>Inicial</span>
                  <span>{p.initial} €</span>
                </div>
                <div className="projection-row">
                  <span>Mensual</span>
                  <span>{p.monthly} €</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="maintenance-chart">
          <div className="maintenance-chart-heading">
            <h3>La comisión de mantenimiento sigue entrando</h3>
            <p>Esta comisión se repite cada mes mientras los clientes mantengan el servicio.</p>
          </div>
          <div className="maintenance-chart-rows" aria-label="Comisión mensual de mantenimiento">
            {projections.map((p) => (
              <div key={p.clients} className="maintenance-chart-row">
                <span className="maintenance-chart-clients">{p.clients} clientes</span>
                <div className="maintenance-chart-track" aria-hidden="true">
                  <div className="maintenance-chart-fill" style={{ width: `${(p.monthly / 80) * 100}%` }} />
                </div>
                <strong>{p.monthly} €/mes</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2>Cada oferta viene con boceto</h2>
        <div className="boceto-card">
          <WebMockup />
          <h3>Tu cliente lo ve antes de decidir</h3>
          <p>Por cada propuesta que me pases te preparo un boceto web con el nombre, los colores y el estilo del negocio. Se lo enseñas y le dices: "Mira, esto puede ser tu página".</p>
          <p className="boceto-highlight">Vender algo que ya se ve es mucho más fácil que describirlo.</p>
        </div>
      </section>

      <section>
        <h2>Qué ofreces y cuánto genera</h2>
        <p>Precios orientativos que paga el cliente. Se ajustan al proyecto.</p>
        <div className="grid">
          {services.map((s) => (
            <div key={s.name} className="card">
              <h3>{s.name}</h3>
              <p className="for">{s.desc}</p>
              <div className="price">
                <div>
                  <span className="lbl">Cliente paga</span>
                  <b>{s.price} €</b>
                  {s.maintenance > 0 && <span className="lbl">+ {s.maintenance} €/mes</span>}
                </div>
                <div className="commission">
                  <span className="lbl">Tu comisión</span>
                  <b>+{s.commission} €</b>
                  {s.monthlyCommission > 0 && <span className="lbl">+ {s.monthlyCommission} €/mes</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
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

      <section>
        <h2>Qué decirle al cliente</h2>
        <p>Argumentos listos para restauración y vino.</p>
        <div className="grid">
          <div className="card">
            <h3>Para restaurantes</h3>
            <ul className="hooks">
              <li><strong>Te encuentran antes de decidir.</strong> Quien busca dónde cenar mira fotos y carta en el móvil; si no te ve, elige a otro.</li>
              <li><strong>Los platos entran por los ojos.</strong> Una carta con fotos cuidadas abre el apetito antes de llegar.</li>
              <li><strong>Reservas directas, sin intermediarios.</strong> Sin comisiones por cada mesa de plataformas ajenas.</li>
              <li><strong>Tu teléfono nunca queda sin atender.</strong> Con el agente, la reserva entra aunque estés en pleno servicio.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Para vino y producto premium</h3>
            <ul className="hooks">
              <li><strong>Cada botella con su historia.</strong> Ficha, maridaje y origen: lo que justifica el precio.</li>
              <li><strong>Imagen a la altura del producto.</strong> Un vino de calidad con web cutre pierde valor percibido.</li>
              <li><strong>Vende cuando duermes.</strong> Pedidos y consultas por web o WhatsApp a cualquier hora.</li>
              <li><strong>Clientes que vuelven.</strong> Avisos de añada nueva, catas y eventos a quien ya compró.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Cómo empezamos</h2>
        <div className="card">
          <ul className="hooks">
            <li>Mateo elige un cliente con el que probar el primer servicio.</li>
            <li>Yo preparo una demo rápida para que se la enseñe.</li>
            <li>Si el cliente dice que sí, entrego en plazo y mantengo todo detrás.</li>
            <li>Acordamos juntos el reparto y las condiciones antes de arrancar.</li>
          </ul>
        </div>
      </section>

      <p className="note">Los precios son orientativos y se ajustan según el proyecto. Joyería Mapy, El Bocadito y Casa Tereré ya tienen su trabajo hecho conmigo; esta propuesta se centra en clientes nuevos.</p>
    </div>
  )
}

export default App
