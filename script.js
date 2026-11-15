/* =========================================================
   Portafolio — Isaías Reyes
   Los datos de los proyectos están en projects.js
   ========================================================= */
window.__portfolioReady = true;

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';
const TECH_ICONS = {
    'Python': 'python/python-original', 'TypeScript': 'typescript/typescript-original',
    'JavaScript': 'javascript/javascript-original', 'React': 'react/react-original',
    'FastAPI': 'fastapi/fastapi-original', 'SQLite': 'sqlite/sqlite-original',
    'Scikit-learn': 'scikitlearn/scikitlearn-original', 'Streamlit': 'streamlit/streamlit-original',
    'HTML5': 'html5/html5-original', 'CSS3': 'css3/css3-original', 'pytest': 'pytest/pytest-original',
    'Next.js': 'nextjs/nextjs-line', 'Node.js': 'nodejs/nodejs-original', 'Supabase': 'supabase/supabase-original',
    'PostgreSQL': 'postgresql/postgresql-original', 'Tailwind CSS': 'tailwindcss/tailwindcss-original',
    'Django': 'django/django-plain', 'Pandas': 'pandas/pandas-plain', 'NumPy': 'numpy/numpy-original'
};
const INVERT = new Set(['Next.js', 'Django', 'Pandas', 'GitHub', 'Vercel']);
const FA_ICONS = { 'Claude Agent SDK': 'fa-robot', 'Groq': 'fa-bolt', 'MediaPipe': 'fa-hand', 'Llama 3': 'fa-brain', 'Plotly': 'fa-chart-line', 'Gemini API': 'fa-star' };

/* Stack en movimiento: [ícono devicon o 'fa:clase', nombre] */
const STACK = [
    ['Lenguajes', [['python/python-original', 'Python'], ['typescript/typescript-original', 'TypeScript'], ['javascript/javascript-original', 'JavaScript'], ['postgresql/postgresql-original', 'SQL'], ['c/c-original', 'C'], ['cplusplus/cplusplus-original', 'C++'], ['html5/html5-original', 'HTML5'], ['css3/css3-original', 'CSS3']]],
    ['Frameworks', [['react/react-original', 'React'], ['nextjs/nextjs-line', 'Next.js'], ['nodejs/nodejs-original', 'Node.js'], ['fastapi/fastapi-original', 'FastAPI'], ['django/django-plain', 'Django'], ['streamlit/streamlit-original', 'Streamlit'], ['tailwindcss/tailwindcss-original', 'Tailwind CSS']]],
    ['Datos · IA', [['scikitlearn/scikitlearn-original', 'Scikit-learn'], ['numpy/numpy-original', 'NumPy'], ['pandas/pandas-plain', 'Pandas'], ['supabase/supabase-original', 'Supabase'], ['sqlite/sqlite-original', 'SQLite'], ['fa:fa-robot', 'Claude Agent SDK'], ['fa:fa-bolt', 'Groq'], ['fa:fa-hand', 'MediaPipe']]],
    ['Herramientas', [['git/git-original', 'Git'], ['github/github-original', 'GitHub'], ['vercel/vercel-original', 'Vercel'], ['vitejs/vitejs-original', 'Vite'], ['pytest/pytest-original', 'pytest'], ['figma/figma-original', 'Figma'], ['vscode/vscode-original', 'VS Code']]]
];

const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const tagHTML = (t) => {
    if (TECH_ICONS[t]) return `<span><img src="${DEVICON}${TECH_ICONS[t]}.svg" alt="" loading="lazy" class="${INVERT.has(t) ? 'inv' : ''}">${esc(t)}</span>`;
    if (FA_ICONS[t]) return `<span><i class="fas ${FA_ICONS[t]}"></i>${esc(t)}</span>`;
    return `<span>${esc(t)}</span>`;
};

/* ---------- Portadas ilustradas (cuando no hay captura) ---------- */
const COVERS = {
    neural() {
        const layers = [3, 5, 5, 2], xs = [30, 110, 190, 270];
        const pts = layers.map((n, i) => Array.from({ length: n }, (_, j) => [xs[i], (180 / (n + 1)) * (j + 1)]));
        let lines = '';
        pts.forEach((layer, i) => { if (i < pts.length - 1) layer.forEach((a) => pts[i + 1].forEach((b) => { lines += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`; })); });
        const on = [1, 6, 10, 14];
        const nodes = pts.flat().map(([x, y], k) => `<circle cx="${x}" cy="${y}" r="7"${on.includes(k) ? ' class="on"' : ''}/>`).join('');
        return `<svg class="cover-art" viewBox="0 0 300 180" aria-hidden="true">${lines}${nodes}</svg>`;
    },
    tree() {
        return `<svg class="cover-art" viewBox="0 0 240 140" aria-hidden="true">
            <path d="M120 30v14H60v14M120 44h60v14M60 80v12H30v14M60 92h30v14M180 80v12h-30v14M180 92h30v14"/>
            <rect x="88" y="10" width="64" height="20" rx="5"/>
            <rect x="32" y="58" width="56" height="22" rx="5"/><rect x="152" y="58" width="56" height="22" rx="5"/>
            <rect x="12" y="106" width="36" height="20" rx="5"/><rect x="72" y="106" width="36" height="20" rx="5"/>
            <rect x="132" y="106" width="36" height="20" rx="5" class="on"/><rect x="192" y="106" width="36" height="20" rx="5"/>
            <text x="150" y="138">insumo crítico</text>
        </svg>`;
    },
    code() { return '<i class="fas fa-code" style="font-size:52px;color:rgba(56,189,248,.6)"></i>'; }
};

const mediaHTML = (p, { tag = true, play = true, inModal = false } = {}) => {
    const area = AREAS[p.area] || {};
    let inner;
    if (inModal && p.video) inner = `<video src="${esc(p.video)}" ${p.image ? `poster="${esc(p.image)}"` : ''} controls autoplay muted loop playsinline></video>`;
    else if (p.image && inModal) inner = `<img src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}">`;
    else if (p.image) inner = `<div class="screen"><div class="screen-bar" aria-hidden="true"><i></i><i></i><i></i><span>${esc(p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}</span></div><img src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}" loading="lazy"></div>`;
    else inner = (COVERS[p.cover] || COVERS.code)();
    const tagHtml = tag ? `<span class="tag">${esc(area.short)} · ${esc(p.year)}</span>` : '';
    const playHtml = play && p.video ? `<button type="button" class="play" data-project="${esc(p.id)}"><i class="fas fa-play"></i>Ver demo</button>` : '';
    return `${inner}${tagHtml}${playHtml}`;
};

const linksHTML = (p) => {
    const parts = [`<button type="button" class="open-detail" data-project="${esc(p.id)}">Ver detalle <i class="fas fa-arrow-right"></i></button>`];
    if (p.demo) parts.push(`<a href="${esc(p.demo)}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> Demo</a>`);
    parts.push(p.repo
        ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Código</a>`
        : '<span class="off"><i class="fas fa-lock"></i> Código privado</span>');
    return parts.join('');
};

const sheetHTML = (p) => `
    <article class="sheet glow reveal">
        <div class="media${p.image ? ' has-shot' : ''}">${mediaHTML(p)}</div>
        <div class="info">
            <span class="label">${esc(p.context)}</span>
            <h3>${esc(p.title)}</h3>
            <p class="sub">${esc(p.subtitle)}</p>
            <p class="summary">${esc(p.summary)}</p>
            <table>
                <tr><td>Stack</td><td>${p.tags.map(esc).join(' · ')}</td></tr>
                ${(p.specs || []).map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}
                <tr><td>Estado</td><td>${esc(p.status)}</td></tr>
            </table>
            <div class="links">${linksHTML(p)}</div>
        </div>
    </article>`;

const cardHTML = (p) => `
    <article class="card glow reveal">
        <div class="media${p.image ? ' has-shot' : ''}">${mediaHTML(p, { tag: false })}</div>
        <div class="card-body">
            <span class="card-meta">${esc(p.context)} · ${esc(p.year)}</span>
            <h3>${esc(p.title)}</h3>
            <p class="sub">${esc(p.subtitle)}</p>
            <p class="summary">${esc(p.summary)}</p>
            <div class="tags">${p.tags.map(tagHTML).join('')}</div>
            <div class="card-foot links">${linksHTML(p)}</div>
        </div>
    </article>`;

/* ---------- Circuito de fondo ----------
   Dos capas: las pistas fijas se dibujan una sola vez (.circuit) y solo los
   pulsos se animan (.circuit-pulses), sin filtros, para que el navegador no
   tenga que redibujar todo el circuito en cada frame. */
function drawCircuit(hero) {
    const base = hero.querySelector('.circuit');
    const pulses = hero.querySelector('.circuit-pulses');
    if (!base) return;
    const NS = 'http://www.w3.org/2000/svg';
    let seed = 26;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const el = (n, a) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); return e; };
    const W = hero.offsetWidth, H = hero.offsetHeight, S = 24;
    base.replaceChildren();
    if (pulses) pulses.replaceChildren();
    if (!W || !H) return;
    [base, pulses].forEach((s) => s && s.setAttribute('viewBox', `0 0 ${W} ${H}`));
    const hr = hero.getBoundingClientRect();

    // Zona libre alrededor de la foto (las pistas de fondo no la cruzan)
    let hole = null;
    const chip = hero.querySelector('.chip');
    if (chip && chip.offsetWidth) {
        const r = chip.getBoundingClientRect(), pad = 30;
        hole = { x1: r.left - hr.left - pad, y1: r.top - hr.top - pad, x2: r.right - hr.left + pad, y2: r.bottom - hr.top + pad };
    }
    const inHole = (x, y) => !!hole && x > hole.x1 && x < hole.x2 && y > hole.y1 && y < hole.y2;
    const crosses = (pts) => pts.some(([x, y], i) => {
        if (i === 0) return inHole(x, y);
        const [px, py] = pts[i - 1];
        for (let k = 1; k <= 10; k++) { const t = k / 10; if (inHole(px + (x - px) * t, py + (y - py) * t)) return true; }
        return false;
    });

    const fBase = document.createDocumentFragment(), fPulse = document.createDocumentFragment();
    const addPulse = (d, strong) => {
        if (!pulses) return;
        const dur = `${(4 + rnd() * 5).toFixed(1)}s`, delay = `${(-rnd() * 8).toFixed(1)}s`;
        ['pg', 'pc'].forEach((cls) => {
            const p = el('path', { class: cls + (strong ? ' strong' : ''), d, pathLength: 400 });
            p.style.setProperty('--d', dur);
            p.style.setProperty('--dl', delay);
            fPulse.appendChild(p);
        });
    };
    const addTrace = (pts, { pin = false, pulse = false } = {}) => {
        const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
        fBase.appendChild(el('path', { class: pin ? 't pin' : 't', d }));
        const [ex, ey] = pts[pts.length - 1];
        if (!pin) fBase.appendChild(el('circle', { class: 'n', cx: pts[0][0], cy: pts[0][1], r: 3.2 }));
        if (rnd() < 0.4) {
            fBase.appendChild(el('circle', { class: 'halo', cx: ex, cy: ey, r: 7 }));
            fBase.appendChild(el('circle', { class: 'g', cx: ex, cy: ey, r: 3.2 }));
        } else {
            fBase.appendChild(el('circle', { class: 'n', cx: ex, cy: ey, r: 4 }));
        }
        if (pulse) addPulse(d, pin);
    };

    // 1) Pistas que salen de los pines del chip
    hero.querySelectorAll('.pins.top i, .pins.right i, .pins.bottom i').forEach((pin) => { // el lado izquierdo da al texto
        const r = pin.getBoundingClientRect();
        const side = pin.parentElement.classList;
        let x, y, dx = 0, dy = 0;
        if (side.contains('top')) { x = r.left + r.width / 2 - hr.left; y = r.top - hr.top; dy = -1; }
        else if (side.contains('bottom')) { x = r.left + r.width / 2 - hr.left; y = r.bottom - hr.top; dy = 1; }
        else if (side.contains('right')) { x = r.right - hr.left; y = r.top + r.height / 2 - hr.top; dx = 1; }
        else { x = r.left - hr.left; y = r.top + r.height / 2 - hr.top; dx = -1; }
        const pts = [[x, y]];
        const a = (1 + Math.floor(rnd() * 3)) * S;
        x += dx * a; y += dy * a; pts.push([x, y]);
        const turn = rnd() < 0.5 ? 1 : -1, b = (1 + Math.floor(rnd() * 2)) * S;
        if (dx) { x += dx * b; y += turn * b; } else { x += turn * b; y += dy * b; } // codo de 45°
        pts.push([x, y]);
        const c = (2 + Math.floor(rnd() * 4)) * S;
        x += dx * c; y += dy * c; pts.push([x, y]);
        const highlighted = pin === pin.parentElement.children[1];
        addTrace(pts, { pin: true, pulse: highlighted || rnd() < 0.25 });
    });

    // 2) Pistas de fondo (más a la derecha y en el borde izquierdo, como el banner)
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const N = Math.round(W / 38);
    let made = 0, tries = 0;
    while (made < N && tries < N * 6) {
        tries++;
        const right = rnd() < 0.8;
        let x = Math.round((right ? W * 0.5 + rnd() * W * 0.55 : rnd() * W * 0.12) / S) * S;
        let y = Math.round((rnd() * H) / S) * S;
        let [dx, dy] = dirs[Math.floor(rnd() * 4)];
        const pts = [[x, y]];
        const segs = 3 + Math.floor(rnd() * 4);
        for (let s = 0; s < segs; s++) {
            const len = (2 + Math.floor(rnd() * 5)) * S;
            x += dx * len; y += dy * len; pts.push([x, y]);
            const turn = rnd();
            if (dx !== 0 && dy !== 0) dy = 0;
            else if (turn < 0.45) [dx, dy] = dx ? [dx, rnd() < 0.5 ? 1 : -1] : [rnd() < 0.5 ? 1 : -1, dy];
            else if (turn < 0.7) [dx, dy] = dx ? [0, rnd() < 0.5 ? 1 : -1] : [rnd() < 0.5 ? 1 : -1, 0];
        }
        if (crosses(pts)) continue;
        addTrace(pts, { pulse: rnd() < 0.3 });
        made++;
    }
    for (let i = 0; i < Math.round(W / 90); i++) {
        const x = Math.round((W * 0.45 + rnd() * W * 0.55) / S) * S, y = Math.round((rnd() * H) / S) * S;
        if (inHole(x, y)) continue;
        const sz = 4 + Math.floor(rnd() * 3);
        fBase.appendChild(el('rect', { class: 's', x, y, width: sz, height: sz, rx: 1 }));
    }
    base.appendChild(fBase);
    if (pulses) pulses.appendChild(fPulse);
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const projects = typeof PROJECTS !== 'undefined' ? PROJECTS : [];

    /* 1. PANTALLA DE CARGA */
    if (root.classList.contains('is-loading')) {
        const loader = document.querySelector('.loader');
        const minTime = new Promise((r) => setTimeout(r, 2100));
        const loaded = new Promise((r) => (document.readyState === 'complete' ? r() : window.addEventListener('load', r, { once: true })));
        const maxTime = new Promise((r) => setTimeout(r, 3000));
        Promise.race([Promise.all([minTime, loaded]), maxTime]).then(() => {
            loader?.classList.add('done');
            setTimeout(() => { root.classList.remove('is-loading'); setTimeout(() => heroes.forEach(drawCircuit), 900); }, 420);
        });
    }

    /* 2. PROYECTOS */
    const featured = document.querySelector('[data-projects="featured"]');
    if (featured) featured.innerHTML = projects.filter((p) => p.featured).map(sheetHTML).join('');

    const archive = document.querySelector('[data-projects="all"]');
    const filters = document.getElementById('areaFilters');
    if (archive && filters) {
        const areas = Object.keys(AREAS).filter((a) => projects.some((p) => p.area === a));
        const plural = (n) => `${n} proyecto${n === 1 ? '' : 's'}`;
        archive.innerHTML = areas.map((a) => {
            const list = projects.filter((p) => p.area === a);
            return `<section class="area-group" data-area="${a}">
                        <header class="area-head"><span class="area-icon"><i class="fas ${AREAS[a].icon}"></i></span><h2>${esc(AREAS[a].label)}</h2><span class="area-count">${plural(list.length)}</span></header>
                        <div class="cards">${list.map(cardHTML).join('')}</div>
                    </section>`;
        }).join('');
        const chip = (key, label, n) => `<button type="button" class="filter-chip" role="tab" data-area="${key}" aria-selected="false">${esc(label)} <span>${n}</span></button>`;
        filters.innerHTML = chip('all', 'Todos', projects.length) + areas.map((a) => chip(a, AREAS[a].label, projects.filter((p) => p.area === a).length)).join('');
        const apply = (key, push) => {
            if (key !== 'all' && !areas.includes(key)) key = 'all';
            filters.querySelectorAll('.filter-chip').forEach((c) => { const on = c.dataset.area === key; c.classList.toggle('active', on); c.setAttribute('aria-selected', String(on)); });
            archive.querySelectorAll('.area-group').forEach((g) => {
                const show = key === 'all' || g.dataset.area === key;
                g.hidden = !show;
                if (show) g.querySelectorAll('.reveal').forEach((r) => r.classList.add('active'));
            });
            if (push) history.replaceState(null, '', key === 'all' ? location.pathname : `?area=${key}`);
        };
        filters.addEventListener('click', (e) => { const c = e.target.closest('.filter-chip'); if (c) apply(c.dataset.area, true); });
        apply(new URLSearchParams(location.search).get('area') || 'all', false);
    }

    /* 3. STACK EN MOVIMIENTO */
    const stackRows = document.getElementById('stackRows');
    if (stackRows) {
        stackRows.innerHTML = STACK.map(([label, items], i) => {
            const html = items.map(([icon, name]) => icon.startsWith('fa:')
                ? `<span><i class="fas ${icon.slice(3)}"></i>${esc(name)}</span>`
                : `<span><img src="${DEVICON}${icon}.svg" alt="" loading="lazy" class="${INVERT.has(name) ? 'inv' : ''}">${esc(name)}</span>`).join('');
            return `<div class="stack-row"><span class="k">${esc(label)}</span><div class="marquee"><div class="track${i % 2 ? ' rev' : ''}" aria-label="${esc(label)}: ${items.map((x) => x[1]).join(', ')}">${html.repeat(4)}</div></div></div>`;
        }).join('');
    }

    /* 4. CIRCUITO */
    const heroes = [...document.querySelectorAll('.hero')].filter((h) => h.querySelector('.circuit'));
    const redraw = () => heroes.forEach(drawCircuit);
    redraw();
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(redraw, 150); });
    document.fonts?.ready.then(redraw);
    setTimeout(redraw, 1000); // tras la animación de entrada, para medir la foto en su sitio

    /* 5. BRILLO QUE SIGUE AL CURSOR */
    let lastMove = null, moveQueued = false;
    document.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        lastMove = e;
        if (moveQueued) return;
        moveQueued = true;
        requestAnimationFrame(() => {
            moveQueued = false;
            const card = lastMove.target.closest?.('.glow');
            if (!card) return;
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${lastMove.clientX - r.left}px`);
            card.style.setProperty('--my', `${lastMove.clientY - r.top}px`);
        });
    }, { passive: true });

    /* Pausar animaciones continuas (circuito y stack) cuando no están en pantalla */
    if ('IntersectionObserver' in window) {
        const idle = new IntersectionObserver((entries) => entries.forEach((en) => en.target.classList.toggle('is-idle', !en.isIntersecting)), { rootMargin: '100px' });
        document.querySelectorAll('.hero, .stack').forEach((el) => idle.observe(el));
    }

    /* 6. AÑO */
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    /* 7. MENÚ MÓVIL */
    const toggle = document.querySelector('.mobile-toggle');
    const navList = document.getElementById('navList');
    const setMenu = (open) => {
        navList.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        const icon = toggle.querySelector('i');
        icon.classList.toggle('fa-bars', !open);
        icon.classList.toggle('fa-times', open);
    };
    toggle.addEventListener('click', () => setMenu(!navList.classList.contains('active')));
    navList.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('click', (e) => { if (navList.classList.contains('active') && !navList.contains(e.target) && !toggle.contains(e.target)) setMenu(false); });

    /* 8. TRAYECTORIA: Profesional / Liderazgo */
    const tabs = document.querySelector('#trayectoria .tabs');
    const timeline = document.getElementById('timeline');
    if (tabs && timeline) {
        const indicator = tabs.querySelector('.tab-indicator');
        const move = (t) => { indicator.style.width = `${t.offsetWidth}px`; indicator.style.transform = `translateX(${t.offsetLeft - 4}px)`; indicator.style.left = '4px'; };
        const show = (kind, animate) => {
            tabs.querySelectorAll('.tab').forEach((t) => { const on = t.dataset.filter === kind; t.classList.toggle('active', on); t.setAttribute('aria-selected', String(on)); if (on) move(t); });
            let i = 0;
            timeline.querySelectorAll('.tl-item').forEach((item) => {
                const on = item.dataset.kind === kind;
                item.hidden = !on;
                item.classList.remove('enter');
                if (on && animate) { void item.offsetWidth; item.style.animationDelay = `${i++ * 60}ms`; item.classList.add('enter'); }
            });
        };
        tabs.addEventListener('click', (e) => { const t = e.target.closest('.tab'); if (t && !t.classList.contains('active')) show(t.dataset.filter, true); });
        tabs.addEventListener('keydown', (e) => {
            if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
            const list = [...tabs.querySelectorAll('.tab')];
            const next = list[(list.indexOf(document.activeElement) + (e.key === 'ArrowRight' ? 1 : -1) + list.length) % list.length];
            next.focus(); next.click();
        });
        show('profesional', false);
        const sync = () => move(tabs.querySelector('.tab.active'));
        window.addEventListener('resize', sync);
        document.fonts?.ready.then(sync);
    }

    /* 9. INVESTIGACIÓN: aparece sola cuando hay al menos una publicación */
    const research = document.getElementById('publicaciones');
    if (research && research.querySelector('.paper')) {
        research.hidden = false;
        document.querySelector('[data-research-link]')?.removeAttribute('hidden');
    }

    /* 10. APARICIÓN AL HACER SCROLL */
    const reveals = document.querySelectorAll('.reveal');
    const counts = new Map();
    reveals.forEach((el) => { const n = counts.get(el.parentElement) || 0; el.style.setProperty('--delay', `${Math.min(n, 5) * 0.07}s`); counts.set(el.parentElement, n + 1); });
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('active'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
        reveals.forEach((el) => io.observe(el));
        const links = [...document.querySelectorAll('.nav-link[href^="#"]')];
        const spy = new IntersectionObserver((entries) => entries.forEach((en) => {
            if (en.isIntersecting) links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${en.target.id}`));
        }), { rootMargin: '-45% 0px -50% 0px' });
        links.forEach((l) => { const s = document.querySelector(l.getAttribute('href')); if (s) spy.observe(s); });
    } else {
        reveals.forEach((el) => el.classList.add('active'));
    }

    /* 11. MODAL DE PROYECTO (con video si existe) */
    const modal = document.getElementById('projectModal');
    if (modal) {
        const $ = (id) => document.getElementById(id);
        const closeBtn = modal.querySelector('.modal-close');
        let last = null;
        const open = (trigger) => {
            const p = projects.find((x) => x.id === trigger.dataset.project);
            if (!p) return;
            last = trigger;
            $('modalMedia').innerHTML = mediaHTML(p, { tag: false, play: false, inModal: true });
            $('modalMeta').textContent = `${AREAS[p.area]?.label || ''} · ${p.context} · ${p.year}`;
            $('modalTitle').textContent = p.title;
            $('modalSub').textContent = p.subtitle;
            $('modalPoints').innerHTML = p.points.map((t) => `<li>${esc(t)}</li>`).join('');
            $('modalTags').innerHTML = p.tags.map(tagHTML).join('');
            const btns = [];
            if (p.demo) btns.push(`<a class="btn btn-primary" href="${esc(p.demo)}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> Ver demo</a>`);
            if (p.repo) btns.push(`<a class="btn" href="${esc(p.repo)}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Ver código</a>`);
            if (!p.repo) btns.push('<p class="modal-note"><i class="fas fa-lock"></i> Código privado · disponible pronto</p>');
            $('modalLinks').innerHTML = btns.join('');
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            closeBtn.focus({ preventScroll: true });
        };
        const close = () => {
            if (!modal.classList.contains('active')) return;
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            $('modalMedia').querySelector('video')?.pause();
            last?.focus({ preventScroll: true });
        };
        document.addEventListener('click', (e) => { const t = e.target.closest('.open-detail, .play'); if (t) open(t); });
        closeBtn.addEventListener('click', close);
        modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { close(); setMenu(false); } });
    }

    /* 12. COPIAR CORREO */
    const copyBtn = document.getElementById('copyEmail');
    copyBtn?.addEventListener('click', async () => {
        const label = copyBtn.querySelector('span');
        try { await navigator.clipboard.writeText(copyBtn.dataset.email); label.textContent = '¡Copiado!'; }
        catch (e) { label.textContent = 'No se pudo'; }
        copyBtn.classList.add('copied');
        clearTimeout(copyBtn._t);
        copyBtn._t = setTimeout(() => { label.textContent = 'Copiar'; copyBtn.classList.remove('copied'); }, 1800);
    });

    /* 13. BOTÓN "CV": se oculta si todavía no existe el PDF */
    const cvLink = document.getElementById('cvLink');
    if (cvLink) {
        fetch(cvLink.getAttribute('href'), { method: 'HEAD' })
            .then((r) => { if (!r.ok) cvLink.hidden = true; })
            .catch(() => { cvLink.hidden = true; });
    }
});
