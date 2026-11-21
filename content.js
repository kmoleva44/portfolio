/*
  ДАННЫЕ ДЛЯ ПОРТФОЛИО
  1. Скопируйте настоящие изображения в папку assets (например: assets/megapolis-banner.jpg).
  2. Укажите путь в image. Пока image пустой, отображается демонстрационная карточка.
  3. Для видео вставьте ссылку в url. Подойдут ссылки на ролики VK, Rutube и др.
  4. Измените названия и описания на реальные проекты и задачи.
  ВАЖНО: демонстрационные работы ниже НЕ заявляются как реальные кейсы.
*/
window.PORTFOLIO_CONTENT = {
  works: [
    { id: 1, category: 'megapolis', categoryLabel: 'МЕГАПОЛИС', title: 'Рекламные материалы', description: 'Добавьте сюда свой лучший рекламный баннер или серию макетов и коротко опишите задачу.', image: 'assets/megapolis-banner-01.jpg.jpg', artTop: '01 / DIGITAL', artBig: 'ИДЕЯ.\nВИЗУАЛ.', artBottom: 'МЕСТО ДЛЯ РЕАЛЬНОГО МАКЕТА' },
    { id: 2, category: 'argos', categoryLabel: 'АРГОС', title: 'Оформление социальных сетей', description: 'Добавьте сюда обложку, публикацию или визуальную серию из работы для юридической компании.', image: 'assets/megapolis-banner-02.jpg.jpg', artTop: '02 / SOCIAL', artBig: 'ЯСНО.\nПО ДЕЛУ.', artBottom: 'МЕСТО ДЛЯ РЕАЛЬНОГО МАКЕТА' },
    { id: 3, category: 'megapolis', categoryLabel: 'МЕГАПОЛИС', title: 'Контент для недвижимости', description: 'Подойдёт карусель с планировками, строительным отчётом или материалами акции.', image: 'assets/megapolis-banner-03.jpg.jpg', art: 'lime', artTop: '03 / REAL ESTATE', artBig: 'ДОМ —\nЭТО ИДЕЯ.', artBottom: 'МЕСТО ДЛЯ РЕАЛЬНОГО МАКЕТА' },
    { id: 4, category: 'ai', categoryLabel: 'AI / ДИЗАЙН', title: 'AI-визуалы', description: 'Добавьте изображение, созданное с помощью нейросетей, и кратко поясните свою роль.', image: 'assets/megapolis-banner-04.jpg.jpg', art: 'violet', artTop: '04 / AI CREATIVE', artBig: 'НОВАЯ\nОПТИКА.', artBottom: 'МЕСТО ДЛЯ РЕАЛЬНОГО МАКЕТА' },
    { id: 5, category: 'argos', categoryLabel: 'АРГОС', title: 'Рекламный креатив', description: 'Добавьте баннер юридической компании. При публикации учитывайте требования к рекламному предупреждению.', image: '', art: 'sand', artTop: '05 / CAMPAIGN', artBig: 'СМЫСЛ\nВ ДЕТАЛЯХ.', artBottom: 'МЕСТО ДЛЯ РЕАЛЬНОГО МАКЕТА' },
    { id: 6, category: 'ai', categoryLabel: 'AI / ДИЗАЙН', title: 'Графический дизайн', description: 'Добавьте вашу предметную композицию, обложку, постер или другой дизайн-проект.', image: '', art: 'dark', artTop: '06 / DESIGN', artBig: 'БОЛЬШЕ\nИДЕЙ.', artBottom: 'МЕСТО ДЛЯ РЕАЛЬНОГО МАКЕТА' }
  ],
  videos: [
    { title: 'Обзор недвижимости', project: 'МЕГАПОЛИС', role: 'Идея · съёмка · монтаж', url: '', poster: '', art: 'lime' },
    { title: 'Видео для соцсетей', project: 'МЕГАПОЛИС', role: 'Съёмка · монтаж · оформление', url: '', poster: '', art: 'coral' },
    { title: 'Экспертный ролик', project: 'АРГОС', role: 'Сценарий / материалы · монтаж', url: '', poster: '', art: 'blue' }
  ]
};
