export default function FinalCTA() {
  return `
    <style>
      .cta-section {
        margin: 6rem auto;
        padding: 5rem 2rem;
        background: linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.1));
        border-radius: 30px;
        text-align: center;
        border: 1px solid rgba(255,255,255,0.05);
        position: relative;
        overflow: hidden;
      }
      .cta-section::before {
        content: '';
        position: absolute;
        width: 300px;
        height: 300px;
        background: var(--accent-purple);
        filter: blur(150px);
        top: -150px;
        left: -150px;
        opacity: 0.3;
        z-index: 0;
      }
      .cta-content {
        position: relative;
        z-index: 1;
        max-width: 600px;
        margin: 0 auto;
      }
      .cta-title {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
      }
      .cta-desc {
        color: var(--text-secondary);
        margin-bottom: 2.5rem;
      }
    </style>
    
    <div class="container" id="contacto">
      <div class="cta-section glass-card">
        <div class="cta-content">
          <h2 class="cta-title">¿Listo para escalar tus operaciones?</h2>
          <p class="cta-desc">
            Agenda una sesión de diagnóstico estratégico (sin costo). Evaluaremos tus cuellos de botella y diseñaremos una ruta de automatización precisa para tu empresa.
          </p>
          <a href="#" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2.5rem;">
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </div>
  `;
}
