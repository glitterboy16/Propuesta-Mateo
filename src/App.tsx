import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import './App.css'

const services = [
  {
    name: 'Web Corporativa',
    description: 'Diseño profesional, responsive, SEO optimizado',
    price: 1100,
    maintenance: 80,
    icon: '🌐'
  },
  {
    name: 'Landing Page',
    description: 'Página de aterrizaje optimizada para conversión',
    price: 600,
    maintenance: 50,
    icon: '🚀'
  },
  {
    name: 'E-commerce',
    description: 'Tienda online completa con pasarela de pago',
    price: 2200,
    maintenance: 120,
    icon: '🛒'
  },
  {
    name: 'Agente WhatsApp',
    description: 'Bot inteligente para reservas y atención 24/7',
    price: 800,
    maintenance: 100,
    icon: '💬'
  },
  {
    name: 'Agente Telefónico',
    description: 'IA que atiende llamadas y gestiona reservas',
    price: 1500,
    maintenance: 150,
    icon: '📞'
  },
  {
    name: 'Automatización',
    description: 'Flujos automáticos para ahorrar tiempo',
    price: 500,
    maintenance: 60,
    icon: '⚙️'
  },
  {
    name: 'Gestión Redes',
    description: 'Contenido, programación y análisis mensual',
    price: 400,
    maintenance: 300,
    icon: '📱'
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const commission = Math.round(service.price * 0.20)
  const monthlyCommission = Math.round(service.maintenance * 0.10)

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut"
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="service-icon"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? [0, -10, 10, 0] : 0
        }}
        transition={{ duration: 0.4 }}
      >
        {service.icon}
      </motion.div>
      <h3>{service.name}</h3>
      <p className="service-description">{service.description}</p>

      <div className="price-block">
        <div className="price-row">
          <span>Precio cliente</span>
          <span className="price">{service.price} €</span>
        </div>
        <div className="price-row">
          <span>Mantenimiento</span>
          <span className="price">{service.maintenance} €/mes</span>
        </div>
      </div>

      <motion.div
        className="commission-block"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0.7,
          height: "auto"
        }}
      >
        <div className="commission-title">Tu comisión</div>
        <div className="commission-row">
          <span>Al cerrar</span>
          <span className="commission-value">+{commission} €</span>
        </div>
        <div className="commission-row">
          <span>Cada mes</span>
          <span className="commission-value">+{monthlyCommission} €</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="app">
      <motion.div
        className="background-gradient"
        style={{ y: backgroundY }}
      />

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          >
            Propuesta de Alianza
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Mateo, <span className="gradient-text">ganemos juntos</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tú vendes, yo construyo. El cliente recibe excelencia.
          </motion.p>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1 },
              y: { repeat: Infinity, duration: 1.5 }
            }}
          >
            <span>↓</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* How it Works */}
      <section className="how-it-works">
        <motion.h2
          {...fadeInUp}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
        >
          Cómo funciona
        </motion.h2>

        <motion.div
          className="flow-diagram"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="flow-item" variants={fadeInUp}>
            <div className="flow-icon">🛠️</div>
            <h3>Angel construye</h3>
            <p>Webs, agentes IA, automatizaciones</p>
          </motion.div>

          <motion.div
            className="flow-arrow"
            variants={fadeInUp}
          >
            →
          </motion.div>

          <motion.div className="flow-item" variants={fadeInUp}>
            <div className="flow-icon">🤝</div>
            <h3>Mateo vende</h3>
            <p>Tú tienes la relación con el cliente</p>
          </motion.div>

          <motion.div
            className="flow-arrow"
            variants={fadeInUp}
          >
            →
          </motion.div>

          <motion.div className="flow-item" variants={fadeInUp}>
            <div className="flow-icon">✨</div>
            <h3>Cliente feliz</h3>
            <p>Solo te ve a ti, servicio premium</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Commission Model */}
      <section className="commission-section">
        <motion.div
          className="commission-card main"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Tu beneficio</h2>
          <div className="commission-grid">
            <motion.div
              className="commission-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="commission-percent">20%</div>
              <div className="commission-label">del pago inicial</div>
              <div className="commission-example">Ej: Web 1.100€ → <strong>220€ para ti</strong></div>
            </motion.div>
            <motion.div
              className="commission-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="commission-percent">10%</div>
              <div className="commission-label">del mantenimiento</div>
              <div className="commission-example">Ej: 80€/mes → <strong>8€/mes para ti</strong></div>
            </motion.div>
          </div>

          <motion.div
            className="example-calc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>📊 Ejemplo con 5 clientes</h3>
            <div className="calc-row">
              <span>5 webs × 220€ comisión inicial</span>
              <span className="calc-value">1.100€</span>
            </div>
            <div className="calc-row">
              <span>5 mantenim. × 8€/mes × 12 meses</span>
              <span className="calc-value">480€/año</span>
            </div>
            <div className="calc-total">
              <span>Primer año</span>
              <span className="calc-value highlight">+1.580€</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Catalog */}
      <section className="services">
        <motion.h2
          {...fadeInUp}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
        >
          Catálogo de servicios
        </motion.h2>
        <motion.p
          className="section-subtitle"
          {...fadeInUp}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
        >
          Estos son los precios sugeridos al cliente. Tú decides el precio final.
        </motion.p>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Boceto Section */}
      <section className="boceto-section">
        <motion.div
          className="boceto-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="boceto-icon">🎨</div>
          <div className="boceto-content">
            <h3>Cada oferta incluye boceto</h3>
            <p>
              Por cada propuesta que hagas, te preparo un boceto visual de la web
              para que se lo enseñes al cliente. Así lo tiene más fácil de visualizar
              y tú más fácil de vender.
            </p>
          </div>
        </motion.div>
      </section>

      {/* References Section */}
      <section className="references-section">
        <motion.h2
          {...fadeInUp}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
        >
          Referencias de calidad
        </motion.h2>
        <motion.div
          className="references-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="reference-card" variants={fadeInUp}>
            <div className="reference-header">
              <span className="reference-icon">💎</span>
              <span className="reference-name">Joyería Mapy</span>
            </div>
            <div className="reference-type">Automatizaciones & Servicios IA</div>
            <p className="reference-desc">
              Agentes inteligentes, automatización de procesos y atención al cliente 24/7.
            </p>
          </motion.div>

          <motion.div className="reference-card" variants={fadeInUp}>
            <div className="reference-header">
              <span className="reference-icon">🥪</span>
              <span className="reference-name">El Bocadito</span>
            </div>
            <div className="reference-type">Web Completa</div>
            <p className="reference-desc">
              Diseño web profesional con sistema de reservas integrado.
            </p>
          </motion.div>

          <motion.div className="reference-card" variants={fadeInUp}>
            <div className="reference-header">
              <span className="reference-icon">🍖</span>
              <span className="reference-name">Casa Tereré</span>
            </div>
            <div className="reference-type">Web Completa</div>
            <p className="reference-desc">
              Web corporativa con carta digital y gestión de pedidos.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Ideal For */}
      <section className="ideal-section">
        <motion.h2
          {...fadeInUp}
          whileInView="animate"
          initial="initial"
          viewport={{ once: true }}
        >
          Perfecto para tus clientes de
        </motion.h2>
        <motion.div
          className="ideal-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="ideal-item" variants={fadeInUp}>
            <span className="ideal-icon">🍽️</span>
            <span>Restauración</span>
          </motion.div>
          <motion.div className="ideal-item" variants={fadeInUp}>
            <span className="ideal-icon">🍷</span>
            <span>Bodegas y Vinos</span>
          </motion.div>
          <motion.div className="ideal-item" variants={fadeInUp}>
            <span className="ideal-icon">🏨</span>
            <span>Hoteles</span>
          </motion.div>
          <motion.div className="ideal-item" variants={fadeInUp}>
            <span className="ideal-icon">💈</span>
            <span>Servicios locales</span>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Lo hablamos?</h2>
          <p>Sin compromiso. Charlamos y vemos cómo encajarlo con lo que ya tienes.</p>
          <motion.a
            href="https://wa.me/34XXXXXXXXX"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hablemos por WhatsApp
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <motion.div
          className="price-notice"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ⚠️ Todos los precios están bajo supervisión y pueden ajustarse según el proyecto.
        </motion.div>
        <p>Propuesta exclusiva para Mateo · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
