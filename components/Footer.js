export default function Footer() {
  return `
    <style>
      .footer {
        padding: 4rem 0 2rem 0;
        border-top: 1px solid rgba(255,255,255,0.05);
        margin-top: 4rem;
        background: rgba(10, 11, 16, 0.5);
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-bottom: 3rem;
      }
      @media (min-width: 768px) {
        .footer-grid {
          grid-template-columns: 2fr 1fr 1fr;
        }
      }
      .footer-logo {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 800;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      .footer-desc {
        color: var(--text-secondary);
        max-width: 300px;
        font-size: 0.9rem;
      }
      .footer-links h4 {
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
      .footer-links ul {
        list-style: none;
      }
      .footer-links li {
        margin-bottom: 0.5rem;
      }
      .footer-links a {
        color: var(--text-secondary);
        font-size: 0.9rem;
      }
      .footer-links a:hover {
        color: var(--text-primary);
      }
      .copyright {
        text-align: center;
        color: rgba(255,255,255,0.3);
        font-size: 0.85rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.05);
      }
    </style>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-logo">
              <div class="logo-icon" style="width: 24px; height: 24px; background: var(--gradient-primary); border-radius: 6px;"></div>
              Futur<span class="text-gradient">AI</span>
            </div>
            <p class="footer-desc">
              Transformando la forma en que el mundo hace negocios mediante la inteligencia artificial práctica y orientada a resultados.
            </p>
          </div>
          <div class="footer-links">
            <h4>Soluciones</h4>
            <ul>
              <li><a href="#services">Automatización AI</a></li>
              <li><a href="#services">Agentes Inteligentes</a></li>
              <li><a href="#services">Consultoría</a></li>
              <li><a href="#services">Integraciones API</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Secciones</h4>
            <ul>
              <li><a href="#process">Metodología</a></li>
              <li><a href="#benefits">Diferenciales</a></li>
              <li><a href="#cases">Casos de Uso</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} FuturAI. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `;
}
