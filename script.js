// ===== Мобильное меню =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Закрытие меню при клике по ссылке
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
  });
});

// ===== Плавное появление секций =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .fact, .timeline__item, .material, .gallery__item, .stat')
  .forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

// Добавляем CSS для анимации через JS (чтобы не загромождать основной файл)
const style = document.createElement('style');
style.textContent = `
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.visible { opacity: 1; transform: none; }
`;
document.head.appendChild(style);

// ===== Тень шапки при скролле =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 20 ? '0 4px 20px rgba(0,0,0,.08)' : 'none';
});

/* =========================================================
   ПРОСМОТР ГРАМОТ (Лайтбокс на главной)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const certLinks = document.querySelectorAll('.cert-link');
  const certLb = document.getElementById('certLightbox');
  const certLbImg = document.getElementById('certLbImg');
  const certLbClose = document.getElementById('certLbClose');

  // Если лайтбокса нет на странице — ничего не делаем
  if (!certLb) return;

  // Функция закрытия
  function closeCertLb() {
    certLb.classList.remove('active');
    certLb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    certLbImg.src = '';
  }

  // Открытие при клике на ссылку
  certLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = link.getAttribute('data-img');
      if (imgSrc) {
        certLbImg.src = imgSrc;
        certLb.classList.add('active');
        certLb.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Закрытие по крестику
  certLbClose.addEventListener('click', closeCertLb);

  // Закрытие по клику на темный фон
  certLb.addEventListener('click', (e) => {
    if (e.target === certLb) closeCertLb();
  });

  // Закрытие по клавише Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certLb.classList.contains('active')) {
      closeCertLb();
    }
  });
});