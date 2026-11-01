/* =========================================================
   ЛОКАЛЬНАЯ ФОТОГАЛЕРЕЯ
   Темы и фото задаются вручную в массиве ALBUMS ниже.
   ========================================================= */

// ⚠️ РЕДАКТИРУЙТЕ ЗДЕСЬ: список альбомов и фото в них
const ALBUMS = [
  {
    theme: 'Классная жизнь',                     // название темы (как видит посетитель)
    folder: 'images/gallery/КласснаяЖизнь',     // путь к папке с фото
    photos: [
    
  { file: 'IMG_20261031_212547.jpg' },
  { file: 'IMG_20261031_212552.jpg' },
  { file: 'IMG_20261031_212554.jpg' },
  { file: 'IMG_20261031_212555.jpg' },
  { file: 'IMG_20261031_212557.jpg' },
  { file: 'IMG_20261031_212609.jpg' },
  { file: 'IMG_20261031_212611.jpg' },
  { file: 'IMG_20261031_212612.jpg' },
  { file: 'IMG_20261031_212614.jpg' },
  { file: 'IMG_20261031_212618.jpg' },
  { file: 'IMG_20261031_212620.jpg' },
  { file: 'IMG_20261031_212622.jpg' },
  { file: 'IMG_20261031_212625.jpg' },
  { file: 'IMG_20261031_212627.jpg' },
  { file: 'IMG_20261031_212634.jpg' },
  { file: 'IMG_20261031_212638.jpg' },
  { file: 'IMG_20261101_123457.jpg' }

    ]
  },
  {
    theme: 'Мои достижения',
    folder: 'images/gallery/МоиДостижения',
    photos: [
      { file: 'IMG_20261031_105239.jpg', caption: 'Диплом победителя школьного этапа Всероссийского конкурса «Учитель года России» в 2027 году' },
  { file: 'IMG_20261031_105252.jpg', caption: 'Благодарность Губернатора Нижегородской области за многолетний добросовестный труд и высокие достижения в профессиональной деятельности' },
  { file: 'IMG_20261031_105256.jpg', caption: 'Благодарственное письмо Управления образования администрации Воскресенского района в связи с юбилеем' },
  { file: 'IMG_20261031_105259.jpg', caption: 'Благодарность администрации школы за качественные показатели в деле обучения и воспитания детей' },
  { file: 'IMG_20261031_105303.jpg', caption: 'Почетная грамота Лауреата муниципального конкурса «Учитель года - 2019»' },
  { file: 'IMG_20261031_105305.jpg', caption: 'Почетная грамота Администрации Воскресенского района за профессионализм и добросовестный труд по итогам 2019-2020 учебного года' },
  { file: 'IMG_20261031_105309.jpg', caption: 'Благодарность Администрации Воскресенского района в связи с 135-летием школы' },
  { file: 'IMG_20261031_105312.jpg', caption: 'Грамота за добросовестный труд в системе образования и в связи с Днём учителя' },
  { file: 'IMG_20261031_105315.jpg', caption: 'Сертификат участника муниципального конкурса «Учитель года – 2017»' },
  { file: 'IMG_20261031_105319.jpg', caption: 'Благодарственное письмо за подготовку победителя и призеров районного конкурса декоративно-прикладного творчества «Первые шаги»' },
  { file: 'IMG_20261031_105322.jpg', caption: 'Благодарность МЦНМО за участие в проведении и проверке Всероссийских проверочных работ ВПР-2017 (2 класс, русский язык)' },
  { file: 'IMG_20261031_105325.jpg', caption: 'Грамота за профессионализм и творческий подход к делу обучения и воспитания детей в связи с Днём учителя' },
  { file: 'IMG_20261031_105329.jpg', caption: 'Сертификат об участии в проекте «Медиация в образовании» (2016-2017 учебный год)' },
  { file: 'IMG_20261031_105335.jpg', caption: 'Диплом за творческий подход и высокий уровень мастерства при организации олимпиады «Пятёрочка» (26.11.2015)' },
  { file: 'IMG_20261031_105338.jpg', caption: 'Диплом за творческий подход и высокий уровень мастерства при организации олимпиады «Пятёрочка» (06.05.2015)' },
  { file: 'IMG_20261031_105341.jpg', caption: 'Диплом куратора за творческий подход и высокий уровень мастерства при проведении викторины «Любознайка» (30.03.2015)' },
  { file: 'IMG_20261031_105346.jpg', caption: 'Диплом куратора за творческий подход и высокий уровень мастерства при проведении викторины «Любознайка» (24.02.2015)' },
  { file: 'IMG_20261031_105349.jpg', caption: 'Благодарственное письмо за активное участие в проекте «Лисенок»' },
  { file: 'IMG_20261031_105352.jpg', caption: 'Грамота за участие в муниципальном конкурсе «Учитель года - 2015»' },
  { file: 'IMG_20261031_105355.jpg', caption: 'Благодарность Земского собрания и Администрации района за многолетний добросовестный труд в связи с Днём учителя' },
  { file: 'IMG_20261031_105358.jpg', caption: 'Сертификат участника районного конкурса «ИКТ в образовании - 2013» (номинация «Современный урок с применением ИКТ»)' },
  { file: 'IMG_20261031_105401.jpg', caption: 'Грамота за многолетний труд в деле образования детей и в связи с юбилеем образовательного учреждения' },
  { file: 'IMG_20261031_105405.jpg', caption: 'Грамота Управления образования за высокий профессионализм и в связи с празднованием «Дня Учителя»' },
  { file: 'IMG_20261031_105408.jpg', caption: 'Благодарственное письмо Земского собрания за активную работу и творческий подход в организации летнего труда и отдыха детей' },
  { file: 'IMG_20261031_105413.jpg', caption: 'Грамота за достижения в педагогической деятельности, высокие творческие результаты и профессионализм' },
  { file: 'IMG_20261031_105417.jpg', caption: 'Грамота Нижегородского регионального отделения партии «Единая Россия» за многолетний добросовестный труд и в связи с Днём учителя' }
    ]
  },
  {
    theme: 'Достижения моих учеников',
    folder: 'images/gallery/ДостиженияМоихУчеников',
    photos: [
      {}
    ]
  }
  // Добавьте новые альбомы по образцу
];

/* =========================================================
   ДАЛЬШЕ — ЛОГИКА, МЕНЯТЬ НЕ НУЖНО
   ========================================================= */

// Собираем плоский список фото: {url, theme, caption}
const allPhotos = [];
ALBUMS.forEach(album => {
  album.photos.forEach(p => {
    allPhotos.push({
      url: `${album.folder}/${encodeURIComponent(p.file)}`,
      theme: album.theme,
      caption: p.caption || album.theme
    });
  });
});

const grid        = document.getElementById('galleryGrid');
const themeFilter = document.getElementById('themeFilter');
const emptyEl     = document.getElementById('galleryEmpty');

let visiblePhotos = [];
let currentIndex  = 0;
let currentTheme  = 'all';

/* ===== Фильтр по темам ===== */
function buildThemeFilter() {
  themeFilter.innerHTML = '';
  const themes = ALBUMS.map(a => a.theme);

  const allBtn = document.createElement('button');
  allBtn.className = 'theme-btn theme-btn--active';
  allBtn.dataset.theme = 'all';
  allBtn.textContent = 'Все фото';
  themeFilter.appendChild(allBtn);

  themes.forEach(theme => {
    const count = allPhotos.filter(p => p.theme === theme).length;
    if (!count) return; // не показываем пустые темы
    const btn = document.createElement('button');
    btn.className = 'theme-btn';
    btn.dataset.theme = theme;
    btn.textContent = `${theme} (${count})`;
    themeFilter.appendChild(btn);
  });

  themeFilter.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      themeFilter.querySelectorAll('.theme-btn')
        .forEach(b => b.classList.remove('theme-btn--active'));
      btn.classList.add('theme-btn--active');
      currentTheme = btn.dataset.theme;
      renderGrid(currentTheme);
    });
  });
}

/* ===== Сетка фото ===== */
function renderGrid(theme) {
  grid.innerHTML = '';
  visiblePhotos = theme === 'all'
    ? allPhotos
    : allPhotos.filter(p => p.theme === theme);

  if (!visiblePhotos.length) {
    emptyEl.hidden = false;
    return;
  }
  emptyEl.hidden = true;

  visiblePhotos.forEach((photo, i) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.caption}" loading="lazy"
           onerror="this.parentNode.style.display='none'">
      <div class="gallery-card__caption">${photo.caption}</div>
    `;
    card.addEventListener('click', () => openLightbox(i));
    grid.appendChild(card);
  });
}

/* ===== Лайтбокс ===== */
const lb        = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbCounter = document.getElementById('lbCounter');
const lbClose   = document.getElementById('lbClose');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lb.classList.add('active');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lb.classList.remove('active');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const photo = visiblePhotos[currentIndex];
  if (!photo) return;
  lbImg.src = photo.url;
  lbImg.alt = photo.caption;
  lbCaption.textContent = photo.caption;
  lbCounter.textContent = `${currentIndex + 1} / ${visiblePhotos.length}`;
  const single = visiblePhotos.length <= 1;
  lbPrev.style.display = single ? 'none' : 'flex';
  lbNext.style.display = single ? 'none' : 'flex';
}

function nextPhoto() {
  currentIndex = (currentIndex + 1) % visiblePhotos.length;
  updateLightbox();
}
function prevPhoto() {
  currentIndex = (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
  updateLightbox();
}

lbClose.addEventListener('click', closeLightbox);
lbNext.addEventListener('click', nextPhoto);
lbPrev.addEventListener('click', prevPhoto);
lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

document.addEventListener('keydown', (e) => {
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextPhoto();
  if (e.key === 'ArrowLeft') prevPhoto();
});

/* ===== Свайпы на телефоне ===== */
let touchStartX = 0;
lb.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
lb.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(dx) > 50) dx < 0 ? nextPhoto() : prevPhoto();
}, { passive: true });

/* ===== Бургер-меню и «Наверх» ===== */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});
document.getElementById('backToTop').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== СТАРТ ===== */
buildThemeFilter();
renderGrid('all');

/* ===== Поиск фото с первой страницы мои ученики ===== */

window.addEventListener('load', () => {
  setTimeout(() => {
    const hash = window.location.hash; // Получаем "#photo=IMG_20261031_212557.jpg"
    
    if (hash && hash.startsWith('#photo=')) {
      // Вытаскиваем имя файла
      const photoName = decodeURIComponent(hash.replace('#photo=', ''));
      
      // Ищем фото в массиве allPhotos (который мы собирали в gallery.js)
      // visiblePhotos - это массив фото, которые сейчас отображаются
      const photoIndex = visiblePhotos.findIndex(p => p.url.includes(photoName));
      
      if (photoIndex !== -1) {
        // Если нашли — открываем лайтбокс на этом фото
        openLightbox(photoIndex);
      }
    }
  }, 500); // Задержка, чтобы страница успела отрисоваться
});
