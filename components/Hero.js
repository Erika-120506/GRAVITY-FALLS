export default function Hero() {
  return `
    <style>
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-top: 5rem;
      }
      .hero-content {
        max-width: 800px;
        z-index: 2;
      }
      .hero-title {
        font-size: 4.5rem;
        margin-bottom: 1.5rem;
        letter-spacing: -1px;
      }
      .hero-subtitle {
        font-size: 1.2rem;
        color: var(--text-secondary);
        margin-bottom: 3rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      .hero-ctas {
        display: flex;
        gap: 1rem;
        justify-content: center;
      }
      
      /* Optional illustration/bg element for the hero */
      .hero-graphic {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 800px;
        height: 600px;
        background: radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%);
        z-index: 1;
        pointer-events: none;
      }
    </style>
    <section class="section hero-section animate-fade-in" id="home">
      <div class="bg-mesh"></div>
      <div class="hero-graphic"></div>
      <div class="container">
        <div class="hero-content">
          <span class="badge">IA APLICADA A NEGOCIOS</span>
          <h1 class="hero-title">El Futuro de tu Empresa está <br /><span class="text-gradient">Automatizado</span></h1>
          <p class="hero-subtitle">
            Implementamos agentes inteligentes y automatizaciones a medida para reducir costos operativos, escalar tus ventas y optimizar procesos corporativos.
          </p>
          <div class="hero-ctas">
            <a href="#contacto" class="btn btn-primary">Iniciar Transformación</a>
            <a href="#services" class="btn btn-secondary">Explorar Soluciones</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
