export default function Navbar() {
  return `
    <style>
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1.5rem 0;
        z-index: 1000;
        background: rgba(10, 11, 16, 0.8);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
      .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logo {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 800;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .logo-icon {
        width: 24px;
        height: 24px;
        background: var(--gradient-primary);
        border-radius: 6px;
      }
      .nav-links {
        display: flex;
        gap: 2rem;
      }
      .nav-links a {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-secondary);
      }
      .nav-links a:hover {
        color: var(--text-primary);
      }
    </style>
    <nav class="navbar">
      <div class="container nav-container">
        <a href="#" class="logo">
          <div class="logo-icon"></div>
          Futur<span class="text-gradient">AI</span>
        </a>
        <div class="nav-links">
          <a href="#services">Servicios</a>
          <a href="#process">Proceso</a>
          <a href="#benefits">Beneficios</a>
          <a href="#cases">Casos de Uso</a>
        </div>
        <a href="#contacto" class="btn btn-secondary" style="padding: 0.5rem 1.2rem; font-size: 0.9rem;">Agendar Sesión</a>
      </div>
    </nav>
  `;
}
