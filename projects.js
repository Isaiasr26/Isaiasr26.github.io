/* =========================================================
   PROYECTOS — se usan en el inicio (featured) y en proyectos.html

   Campos de cada proyecto:
   - area:     'ia' | 'web' | 'backend'   (ver AREAS)
   - featured: true = aparece también en el inicio (como ficha grande)
   - status:   'Terminado' | 'En desarrollo'
   - specs:    filas de la ficha técnica [['Etiqueta', 'Valor'], ...]
   - image:    captura en assets/ (recomendado)
   - cover:    si no hay captura: 'neural' | 'tree' | 'code'
   - video:    ruta a un .mp4/.webm en assets/ → se reproduce en "Ver demo"
   - demo:     URL de la demo en línea (si existe)
   - repo:     URL del repositorio de GitHub ('' = privado)
   ========================================================= */

const AREAS = {
    ia:      { label: 'Inteligencia Artificial', short: 'IA',      icon: 'fa-brain' },
    web:     { label: 'Desarrollo Web',          short: 'Web',     icon: 'fa-globe' },
    backend: { label: 'Backend y Datos',         short: 'Backend', icon: 'fa-server' }
};

const PROJECTS = [
    {
        id: 'aci',
        title: 'ACI System',
        subtitle: 'Asistente de inteligencia clínica',
        area: 'ia',
        featured: true,
        year: '2025',
        context: 'Samsung Innovation Campus',
        status: 'Terminado',
        summary: 'Plataforma de triaje que predice riesgo de enfermedades y sugiere protocolos clínicos con IA generativa.',
        points: [
            'Proyecto final de Samsung Innovation Campus: plataforma de triaje clínico.',
            'Predice riesgo de diabetes, hipertensión, COVID-19 y gripe con modelos Random Forest.',
            'Sugiere protocolos clínicos con IA generativa (Llama 3).',
            'Centro de comando epidemiológico con alertas de brotes, cálculo de ROI preventivo y expedientes clínicos en PDF.'
        ],
        tags: ['Python', 'Scikit-learn', 'Llama 3', 'Streamlit', 'Plotly'],
        specs: [['Modelo', 'Random Forest · 4 enfermedades'], ['IA gen.', 'Llama 3 · protocolos clínicos']],
        image: 'assets/aci-system.jpg',
        imageAlt: 'Panel del Centro de Comando Epidemiológico de ACI System',
        video: '', demo: '', repo: ''
    },
    {
        id: 'cori',
        title: 'C.O.R.I',
        subtitle: 'Asistente personal con IA',
        area: 'ia',
        featured: true,
        year: '2026',
        context: 'Proyecto personal',
        status: 'En desarrollo',
        summary: 'Asistente controlado por voz para PC y teléfono, con memoria persistente, gestión de agenda y automatización de tareas.',
        points: [
            'Asistente de IA multiplataforma (PC y teléfono) controlado por voz, con memoria persistente y gestión de agenda.',
            'Automatiza tareas en el PC y puede alternar entre varios modelos de IA según la tarea.',
            'Integra Google Calendar, Gmail, Spotify, GitHub y Moodle.',
            'Reconocimiento de voz sin conexión y control por gestos con visión artificial (MediaPipe).'
        ],
        tags: ['Python', 'Claude Agent SDK', 'Groq', 'MediaPipe'],
        specs: [['Integra', 'Calendar · Gmail · Spotify · GitHub · Moodle'], ['Entrada', 'Voz sin conexión · gestos']],
        cover: 'neural',
        video: '', demo: '', repo: ''
    },
    {
        id: 'smartbom',
        title: 'Gong Cha SmartBOM',
        subtitle: 'Motor de recetas y producción',
        area: 'backend',
        featured: true,
        year: '2026',
        context: 'II GongchaCUP',
        status: 'Terminado',
        summary: 'Motor de recetas multinivel que calcula producción máxima, insumo crítico y materiales faltantes, con API REST y pruebas automatizadas.',
        points: [
            'Motor que resuelve recetas de tres niveles (bebida → base → insumos).',
            'Calcula producción máxima, insumo crítico y materiales faltantes.',
            'API REST con detección de ciclos (DFS) y transacciones atómicas.',
            'Validado con 34 pruebas automatizadas sobre los casos oficiales de la competencia.'
        ],
        tags: ['Python', 'FastAPI', 'React', 'SQLite', 'pytest'],
        specs: [['API', 'REST · detección de ciclos (DFS)'], ['Pruebas', '34 casos automatizados']],
        cover: 'tree',
        video: '', demo: '', repo: ''
    },
    {
        id: 'fccl-web',
        title: 'Portal Web FCCL',
        subtitle: 'Sitio oficial de la Fundación Carmen Conte Lombardo',
        area: 'web',
        featured: false,
        year: '2026',
        context: 'Desarrollo web',
        status: 'Terminado',
        summary: 'Sitio web oficial de la fundación: diseño accesible, carga rápida y adaptable a cualquier dispositivo.',
        points: [
            'Diseño y desarrollo del sitio web oficial de la fundación.',
            'Interfaz accesible y adaptable a celulares, tablets y computadoras.',
            'Optimizado para cargar rápido y comunicar con claridad su misión, proyectos y canales de contacto.'
        ],
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        specs: [['Tipo', 'Sitio institucional · responsive']],
        image: 'assets/fccl-web.jpg',
        imageAlt: 'Página de inicio del sitio web de la Fundación Carmen Conte Lombardo',
        video: '', demo: '', repo: ''
    }
];
