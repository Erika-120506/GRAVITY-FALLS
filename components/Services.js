export default function Services() {
  const services = [
    {
      title: "Automatizaciones con IA",
      desc: "Conectamos tus sistemas existentes para eliminar tareas repetitivas. Flujos de trabajo que operan 24/7 sin error humano.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#cyan-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      color: 'cyan'
    },
    {
      title: "Agentes de IA Personalizados",
      desc: "Empleados virtuales entrenados con el conocimiento de tu empresa. Atención al cliente, ventas y soporte interno automatizado.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#purple-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
      color: 'purple'
    },
    {
      title: "Consultoría Estratégica",
      desc: "Análisis profundo de tu modelo de negocio para identificar oportunidades de implementación de IA con mayor y más rápido ROI.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#cyan-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
      color: 'cyan'
    },
    {
      title: "Integraciones Inteligentes",
      desc: "Unificamos tu stack tecnológico. Hacemos que tu CRM, ERP y bases de datos 'hablen' con modelos de lenguaje avanzados.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#purple-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg>`,
      color: 'purple'
    }
  ];

  return `
    <style>
      .services-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        margin-top: 4rem;
      }
      .service-icon {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        background: rgba(255,255,255,0.03);
      }
      .icon-cyan {
        border: 1px solid rgba(6, 182, 212, 0.2);
        box-shadow: inset 0 0 20px rgba(6, 182, 212, 0.05);
      }
      .icon-purple {
        border: 1px solid rgba(168, 85, 247, 0.2);
        box-shadow: inset 0 0 20px rgba(168, 85, 247, 0.05);
      }
      .service-title {
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }
      .service-desc {
        color: var(--text-secondary);
        font-size: 0.95rem;
      }
      
      /* Gradients for SVGs */
      .svg-defs { width: 0; height: 0; position: absolute; }
    </style>
    
    <svg class="svg-defs">
      <defs>
        <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
        <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a855f7" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
      </defs>
    </svg>

    <section class="section" id="services">
      <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto;">
          <h2>Toma el control absoluto de tus procesos</h2>
          <p style="color: var(--text-secondary); margin-top: 1rem;">Nuestra agencia no solo entrega software, construimos la infraestructura operativa del mañana enfocada exclusivamente en resultados medibles.</p>
        </div>
        
        <div class="grid services-grid">
          ${services.map(s => `
            <div class="glass-card">
              <div class="service-icon icon-${s.color}">
                ${s.icon}
              </div>
              <h3 class="service-title">${s.title}</h3>
              <p class="service-desc">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
