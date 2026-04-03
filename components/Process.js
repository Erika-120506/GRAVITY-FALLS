export default function Process() {
  const steps = [
    { title: "Diagnóstico", desc: "Auditamos tus flujos de trabajo actuales e identificamos cuellos de botella." },
    { title: "Diseño de Solución", desc: "Arquitectamos el sistema inteligente y seleccionamos los modelos óptimos." },
    { title: "Implementación", desc: "Desarrollo ágil e integración con tus plataformas (Slack, CRM, Email, etc)." },
    { title: "Optimización Continua", desc: "Monitoreo del rendimiento, fine-tuning y soporte proactivo post-lanzamiento." }
  ];

  return `
    <style>
      .process-section {
        background: linear-gradient(to bottom, transparent, rgba(168,85,247,0.03), transparent);
        border-top: 1px solid rgba(255,255,255,0.02);
        border-bottom: 1px solid rgba(255,255,255,0.02);
      }
      .process-container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-top: 4rem;
        position: relative;
      }
      .process-container::before {
        content: '';
        position: absolute;
        left: 24px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: rgba(255,255,255,0.1);
        z-index: 0;
      }
      .process-step {
        display: flex;
        gap: 2rem;
        position: relative;
        z-index: 1;
      }
      .step-number {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--bg-surface);
        border: 2px solid var(--accent-purple);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-heading);
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--accent-purple);
        box-shadow: 0 0 15px var(--glow-purple);
        flex-shrink: 0;
      }
      .step-content {
        padding-top: 0.5rem;
      }
      .step-title {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
      }
      .step-desc {
        color: var(--text-secondary);
      }
      
      @media (min-width: 768px) {
        .process-container {
          flex-direction: row;
          gap: 2rem;
        }
        .process-container::before {
          left: 0;
          top: 24px;
          bottom: auto;
          width: 100%;
          height: 2px;
        }
        .process-step {
          flex-direction: column;
          text-align: center;
          align-items: center;
          gap: 1.5rem;
          flex: 1;
        }
      }
    </style>
    
    <section class="section process-section" id="process">
      <div class="container">
        <div style="text-align: center;">
          <span class="badge">METODOLOGÍA</span>
          <h2>Cómo transformamos tu negocio</h2>
        </div>
        
        <div class="process-container glass-card">
          ${steps.map((step, i) => `
            <div class="process-step">
              <div class="step-number">${i + 1}</div>
              <div class="step-content">
                <h3 class="step-title">${step.title}</h3>
                <p class="step-desc">${step.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
