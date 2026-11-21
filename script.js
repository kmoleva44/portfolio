(() => {
  'use strict';
  const content = window.PORTFOLIO_CONTENT || {works:[],videos:[]};
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open'); navToggle.setAttribute('aria-expanded','false');}));
  document.getElementById('year').textContent = new Date().getFullYear();
  const escapeHTML = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function artHTML(item){
    if(item.image) return `<img class="real-work-image" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy" style="width:100%;aspect-ratio:1;object-fit:cover">`;
    return `<div class="artwork ${escapeHTML(item.art)}"><span class="art-top">${escapeHTML(item.artTop)}</span><span class="art-big">${escapeHTML(item.artBig)}</span><span class="art-bottom">${escapeHTML(item.artBottom)}</span></div>`;
  }
  const grid = document.getElementById('workGrid');
  content.works.forEach(item => {
    const article = document.createElement('article');
    article.className = 'work-item'; article.dataset.category = item.category;
    article.innerHTML = `<button type="button" class="work-button" aria-label="Подробнее: ${escapeHTML(item.title)}">${artHTML(item)}<div class="work-meta"><div><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.categoryLabel)}</small></div><span class="work-arrow" aria-hidden="true">↗</span></div></button>`;
    article.querySelector('button').addEventListener('click', () => showDetail(item));
    grid.appendChild(article);
  });
  const dialog = document.getElementById('workDialog');
  const close = document.getElementById('closeDialog');
  function showDetail(item) {
    document.getElementById('modalVisual').innerHTML = artHTML(item);
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalDescription').textContent = item.description;
    dialog.querySelector('.modal-info').hidden = Boolean(item.image);
    dialog.showModal(); document.body.classList.add('modal-open');
  }
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',(e)=>{if(e.target===dialog) dialog.close();});
  dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
    const selected=btn.dataset.filter;
    document.querySelectorAll('.filter').forEach(x=>{x.classList.toggle('active',x===btn);x.setAttribute('aria-pressed',String(x===btn));});
    grid.querySelectorAll('.work-item').forEach(x=>x.hidden=selected!=='all'&&x.dataset.category!==selected);
  }));
  const videoGrid = document.getElementById('videoGrid');
  content.videos.forEach((item,i)=>{
    const el=document.createElement('article');el.className='video-item';
    const visual=item.poster?`<img src="${escapeHTML(item.poster)}" alt="Превью: ${escapeHTML(item.title)}" loading="lazy" class="video-poster" style="object-fit:cover;width:100%">`:`<div class="video-poster ${escapeHTML(item.art)}"><span>${escapeHTML(item.project)} / ВИДЕО 0${i+1}</span><strong>ТВОЁ<br>ВИДЕО<br>ЗДЕСЬ ↗</strong><span>ДОБАВИТЬ РЕАЛЬНЫЙ РОЛИК</span></div>`;
    const action=item.url?`<a class="video-view" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">Посмотреть ролик ↗</a>`:`<span class="video-placeholder">Ссылка на видео будет добавлена</span>`;
    const clickableVisual = item.url ? `<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="Смотреть видео: ${escapeHTML(item.title)}" style="display:block">${visual}</a>` : visual;
el.innerHTML=`${clickableVisual}<h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.role)}</p>${action}`;

    videoGrid.appendChild(el);
  });
})();
