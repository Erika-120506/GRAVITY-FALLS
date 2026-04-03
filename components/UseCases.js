export default function UseCases() {
  const cases = [
    {
      company: "E-Commerce Logistics",
      problem: "Altos tiempos de respuesta en atención al cliente sobre estado de pedidos.",
      solution: "Agente de IA conectado a Shopify y la API de envíos.",
      result: "Reducción del 80% en tickets humanos y tiempo de respuesta de < 2 seg.",
      roi: "+320% ROI en 3 meses"
    },
    {
      company: "B2B SaaS Sales",
      problem: "Calificación de leads manual muy lenta y costosa.",
      solution: "Bot pre-calificador por WhatsApp + Ingestión en Salesforce automática.",
      result: "Aumento del 45% en reuniones agendadas con prospectos calificados.",
      roi: "Ahorro de 40h/semana"
    }
  ];

  return `
    <style>
      .usecases-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 3rem;
      }
      .case-card {
        padding: 2.5rem;
        border-left: 4px solid var(--accent-purple);
        transition: all 0.3s ease;
      }
      .case-card:hover {
        border-left-color: var(--accent-cyan);
      }
      .case-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      .case-company {
        font-family: var(--font-heading);
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
      }
      .case-roi {
        background: rgba(6, 182, 212, 0.1);
        color: var(--accent-cyan);
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: bold;
      }
      .case-body {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      @media (min-width: 768px) {
        .case-body { grid-template-columns: 1fr 1fr 1fr; gap: 2rem;}
      }
      .case-col h5 {
        color: var(--text-secondary);
        font-size: 0.85rem;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        letter-spacing: 1px;
      }
      .case-col p {
        font-size: 0.95rem;
      }
    </style>
    
    <section class="section" id="cases">
      <div class="container">
        <h2>Casos de Éxito Reales</h2>
        <p style="color: var(--text-secondary); margin-top: 1rem; max-width: 600px;">
          Descubre cómo hemos transformado operaciones críticas con agentes especializados y flujos de automatización integrales.
        </p>

        <div class="usecases-container">
          ${cases.map(c => `
            <div class="glass-card case-card">
              <div class="case-header">
                <span class="case-company">${c.company}</span>
                <span class="case-roi">${c.roi}</span>
              </div>
              <div class="case-body">
                <div class="case-col">
                  <h5>Problema</h5>
                  <p>${c.problem}</p>
                </div>
                <div class="case-col">
                  <h5>Nuestra Solución</h5>
                  <p>${c.solution}</p>
                </div>
                <div class="case-col">
                  <h5>Resultado</h5>
                  <p>${c.result}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
