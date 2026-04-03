import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import Process from './components/Process.js';
import Benefits from './components/Benefits.js';
import UseCases from './components/UseCases.js';
import FinalCTA from './components/FinalCTA.js';
import Footer from './components/Footer.js';

class App {
  constructor() {
    this.appElement = document.getElementById('app');
    this.render();
    this.initInteractions();
  }

  render() {
    this.appElement.innerHTML = `
      ${Navbar()}
      <main>
        ${Hero()}
        ${Services()}
        ${Process()}
        ${Benefits()}
        ${UseCases()}
        ${FinalCTA()}
      </main>
      ${Footer()}
    `;
  }

  initInteractions() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Simple Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card').forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
