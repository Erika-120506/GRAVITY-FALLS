export default function Benefits() {
  const diffs = [
    { title: "Enfoque en Resultados", sub: "Calculamos el ROI de cada agente." },
    { title: "Soluciones a medida", sub: "Nada de plantillas genéricas." },
    { title: "IA Práctica, no teórica", sub: "Herramientas que funcionan hoy." },
    { title: "Acompañamiento", sub: "Estamos contigo 24/7." }
  ];

  return `
    <style>
      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin-top: 3rem;
      }
      @media (min-width: 768px) {
        .benefits-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }
      .benefit-item {
        text-align: center;
        padding: 2rem;
        border-radius: 12px;
        background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%);
      }
      .benefit-icon-wrapper {
        margin-bottom: 1rem;
        display: inline-block;
      }
      .b-title {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: #fff;
      }
      .b-sub {
        font-size: 0.85rem;
        color: var(--text-secondary);
      }
    </style>
    <section class="section" id="benefits">
      <div class="container">
        <h2 style="text-align: center; margin-bottom: 1rem;">Nuestros Diferenciales</h2>
        <div class="benefits-grid">
          ${diffs.map((d, i) => `
            <div class="benefit-item glass-card">
              <div class="benefit-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="icon-cyan">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="var(--accent-cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="var(--accent-cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h4 class="b-title">${d.title}</h4>
              <p class="b-sub">${d.sub}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
