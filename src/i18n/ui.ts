export type Locale = 'es' | 'fr' | 'en';

export interface ProjectCopy {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  year: string;
}

export interface TimelineEntryCopy {
  period: string;
  title: string;
  institution: string;
  points: string[];
}

export interface TimelineGroupCopy {
  title: string;
  entries: TimelineEntryCopy[];
}

export interface UiCopy {
  nav: { home: string; projects: string; about: string; language: string; theme: string };
  buttons: { downloadCv: string; contact: string; viewProjects: string; email: string; copyEmail: string; copied: string; copyFailed: string; code: string; demo: string };
  hero: { eyebrow: string; title: string; description: string; hobbies: string; photoAlt: string; photoHint: string };
  status: { eyebrow: string; message: string; availability: string; availabilityValue: string; location: string; locationValue: string; focus: string; focusAreas: string[] };
  featured: { eyebrow: string; title: string; projects: ProjectCopy[] };
  tech: { eyebrow: string; title: string; categories: { name: string; technologies: string[] }[] };
  timeline: { eyebrow: string; title: string; groups: TimelineGroupCopy[] };
  contact: { bannerEyebrow: string; bannerLink: string; eyebrow: string; title: string; socialLabel: string; github: string; linkedin: string };
  projectsPage: { title: string; description: string };
  about: { title: string; description: string; hobbiesTitle: string; hobbies: { title: string; description: string }[]; closingEyebrow: string; closing: string };
  footer: { rights: string };
}

export const ui: Record<Locale, UiCopy> = {
  es: {
    nav: { home: 'Inicio', projects: 'Proyectos', about: 'Sobre mí', language: 'Idioma', theme: 'Cambiar tema día/noche' },
    buttons: { downloadCv: 'Descargar CV', contact: 'Contactar', viewProjects: 'Ver todos los proyectos', email: 'Escribir un correo', copyEmail: 'Copiar email', copied: 'Email copiado', copyFailed: 'No se pudo copiar. Selecciona el email para copiarlo.', code: 'Código (GitHub)', demo: 'Demo / artículo' },
    hero: { eyebrow: 'Un poco sobre mí', title: '¡Hola, soy Jan!', description: 'Esta página es una pequeña ventana a las cosas que me gustan y a cómo disfruto mi tiempo fuera de los proyectos.', hobbies: 'Descubre mis hobbies', photoAlt: 'Espacio reservado para una foto de Jan', photoHint: 'Guárdala en public/images/ y sustituye este espacio' },
    status: { eyebrow: 'Estado actual', message: 'Buscando prácticas de fin de estudios (stage) y posiciones junior en inteligencia artificial.', availability: 'Disponibilidad', availabilityValue: 'A convenir', location: 'Ubicación', locationValue: 'Toulouse · Híbrido o remoto', focus: 'Áreas de enfoque', focusAreas: ['Machine Learning', 'NLP', 'Computer Vision', 'LLMs'] },
    featured: {
      eyebrow: 'Selección de trabajo', title: 'Proyectos destacados',
      projects: [
        { title: 'Clasificador de imágenes médicas con ViT', description: 'Fine-tuning de Vision Transformers y aumento de datos para detectar anomalías en imágenes médicas; enfocado en comparar sensibilidad y rendimiento del modelo.', tags: ['PyTorch', 'Vision Transformers', 'Python', 'Computer Vision'], repoUrl: 'https://github.com/JanHernandezLlobet/proyecto-vit', year: '2026' },
        { title: 'Sistema RAG sobre documentación técnica', description: 'Pipeline de recuperación con embeddings locales y búsqueda híbrida para obtener respuestas trazables sobre documentación técnica.', tags: ['LLM', 'RAG', 'LangChain', 'Vector DB'], repoUrl: 'https://github.com/JanHernandezLlobet/rag-docs', year: '2025' },
        { title: 'Algoritmos de búsqueda en grafos', description: 'Implementación y comparación de A*, Dijkstra y búsqueda bidireccional para analizar rendimiento en mapas reales.', tags: ['C++', 'Algoritmos', 'Optimización'], repoUrl: 'https://github.com/JanHernandezLlobet/graph-search', year: '2025' },
      ],
    },
    tech: { eyebrow: 'Herramientas de trabajo', title: 'Stack tecnológico', categories: [
      { name: 'IA & Machine Learning', technologies: ['PyTorch', 'Hugging Face Transformers', 'Scikit-learn', 'LangChain'] },
      { name: 'Lenguajes', technologies: ['Python', 'C++', 'SQL', 'TypeScript'] },
      { name: 'Herramientas & Entorno', technologies: ['Git', 'Docker', 'Linux', 'GitHub Actions'] },
    ] },
    timeline: { eyebrow: 'Recorrido', title: 'Formación y experiencia', groups: [
      { title: 'Formación', entries: [
        { period: 'Fechas por confirmar · Actualidad', title: 'Máster IMA en Inteligencia Artificial', institution: 'Université de Toulouse', points: ['Formación de posgrado en inteligencia artificial.', 'Profundización en aprendizaje automático y modelos de lenguaje.'] },
        { period: 'Fechas por completar', title: 'Grado previo · añadir especialidad', institution: 'Institución por completar', points: ['Añade aquí el nombre oficial del grado.', 'Completa las fechas y una materia o logro relevante.'] },
      ] },
      { title: 'Proyectos e investigación', entries: [
        { period: '2025 — 2026', title: 'Proyectos personales de inteligencia artificial', institution: 'Desarrollo independiente', points: ['Prototipo de clasificación de imágenes médicas con Vision Transformers.', 'Sistema RAG con embeddings locales y búsqueda híbrida.', 'Comparación de algoritmos de búsqueda en grafos con C++.'] },
      ] },
    ] },
    contact: { bannerEyebrow: 'Fuera del trabajo', bannerLink: 'Más allá del código: descubre mis hobbies', eyebrow: 'Hablemos', title: '¿Tienes un proyecto en mente?', socialLabel: 'Perfiles profesionales', github: 'GitHub', linkedin: 'LinkedIn' },
    projectsPage: { title: 'Proyectos', description: 'Selección de proyectos de inteligencia artificial y desarrollo.' },
    about: { title: 'Sobre mí', description: 'Conoce un poco más sobre Jan y sus aficiones.', hobbiesTitle: 'Mis hobbies', hobbies: [
      { title: 'Senderismo', description: 'Explorando rutas de alta montaña y senderos naturales los fines de semana. Perderse en los Pirineos es mi desconexión favorita.' },
      { title: 'Codificación', description: 'Desarrollando proyectos personales y explorando nuevas tecnologías. Me encanta trastear con inteligencia artificial y automatizaciones.' },
      { title: 'Audiovisual con drones', description: 'Capturando pequeños instantes, paisajes y la luz natural de las ciudades. La cámara me obliga a mirar el mundo de otra forma.' },
    ], closingEyebrow: 'Y siempre hay algo nuevo', closing: 'Entre rutas, proyectos y nuevos planes, cada afición me da una forma distinta de seguir aprendiendo.' },
    footer: { rights: 'Todos los derechos reservados.' },
  },
  fr: {
    nav: { home: 'Accueil', projects: 'Projets', about: 'À propos', language: 'Langue', theme: 'Changer de thème clair/sombre' },
    buttons: { downloadCv: 'Télécharger le CV', contact: 'Me contacter', viewProjects: 'Voir tous les projets', email: 'Envoyer un e-mail', copyEmail: 'Copier l’e-mail', copied: 'E-mail copié', copyFailed: 'Copie impossible. Sélectionnez l’adresse pour la copier.', code: 'Code (GitHub)', demo: 'Démo / article' },
    hero: { eyebrow: 'À propos de moi', title: 'Bonjour, je suis Jan !', description: 'Cette page donne un aperçu de ce qui me passionne et de la façon dont j’aime occuper mon temps en dehors de mes projets.', hobbies: 'Découvrir mes loisirs', photoAlt: 'Espace réservé à une photo de Jan', photoHint: 'Ajoutez-la dans public/images/ pour remplacer cet espace' },
    status: { eyebrow: 'Situation actuelle', message: 'À la recherche d’un stage de fin d’études ou d’un poste junior en intelligence artificielle.', availability: 'Disponibilité', availabilityValue: 'À convenir', location: 'Localisation', locationValue: 'Toulouse · Hybride ou à distance', focus: 'Domaines de spécialité', focusAreas: ['Machine Learning', 'NLP', 'Computer Vision', 'LLMs'] },
    featured: {
      eyebrow: 'Sélection de travaux', title: 'Projets à la une',
      projects: [
        { title: 'Classification d’images médicales avec ViT', description: 'Ajustement fin de Vision Transformers et augmentation de données pour détecter des anomalies sur des images médicales, avec comparaison de la sensibilité et des performances du modèle.', tags: ['PyTorch', 'Vision Transformers', 'Python', 'Computer Vision'], repoUrl: 'https://github.com/JanHernandezLlobet/proyecto-vit', year: '2026' },
        { title: 'Système RAG pour la documentation technique', description: 'Pipeline de recherche avec embeddings locaux et recherche hybride pour produire des réponses traçables à partir de documentation technique.', tags: ['LLM', 'RAG', 'LangChain', 'Vector DB'], repoUrl: 'https://github.com/JanHernandezLlobet/rag-docs', year: '2025' },
        { title: 'Algorithmes de recherche dans les graphes', description: 'Implémentation et comparaison de A*, Dijkstra et de la recherche bidirectionnelle pour analyser leurs performances sur des cartes réelles.', tags: ['C++', 'Algorithmes', 'Optimisation'], repoUrl: 'https://github.com/JanHernandezLlobet/graph-search', year: '2025' },
      ],
    },
    tech: { eyebrow: 'Outils de travail', title: 'Stack technique', categories: [
      { name: 'IA & Machine Learning', technologies: ['PyTorch', 'Hugging Face Transformers', 'Scikit-learn', 'LangChain'] },
      { name: 'Langages', technologies: ['Python', 'C++', 'SQL', 'TypeScript'] },
      { name: 'Outils & environnement', technologies: ['Git', 'Docker', 'Linux', 'GitHub Actions'] },
    ] },
    timeline: { eyebrow: 'Parcours', title: 'Formation et expérience', groups: [
      { title: 'Formation', entries: [
        { period: 'Dates à confirmer · En cours', title: 'Master IMA en intelligence artificielle', institution: 'Université de Toulouse', points: ['Formation de niveau master en intelligence artificielle.', 'Approfondissement de l’apprentissage automatique et des modèles de langage.'] },
        { period: 'Dates à compléter', title: 'Diplôme précédent · spécialité à préciser', institution: 'Établissement à préciser', points: ['Ajoutez ici l’intitulé officiel du diplôme.', 'Complétez les dates et une matière ou réalisation pertinente.'] },
      ] },
      { title: 'Projets et recherche', entries: [
        { period: '2025 — 2026', title: 'Projets personnels en intelligence artificielle', institution: 'Projets indépendants', points: ['Prototype de classification d’images médicales avec Vision Transformers.', 'Système RAG avec embeddings locaux et recherche hybride.', 'Comparaison d’algorithmes de recherche dans les graphes en C++.'] },
      ] },
    ] },
    contact: { bannerEyebrow: 'En dehors du travail', bannerLink: 'Au-delà du code : découvrir mes loisirs', eyebrow: 'Échangeons', title: 'Un projet en tête ?', socialLabel: 'Profils professionnels', github: 'GitHub', linkedin: 'LinkedIn' },
    projectsPage: { title: 'Projets', description: 'Sélection de projets en intelligence artificielle et développement.' },
    about: { title: 'À propos', description: 'Découvrez un peu mieux Jan et ses loisirs.', hobbiesTitle: 'Mes loisirs', hobbies: [
      { title: 'Randonnée', description: 'J’explore des sentiers de montagne et des chemins naturels le week-end. Me perdre dans les Pyrénées est ma façon préférée de déconnecter.' },
      { title: 'Programmation', description: 'Je développe des projets personnels et explore de nouvelles technologies. J’aime expérimenter avec l’intelligence artificielle et l’automatisation.' },
      { title: 'Audiovisuel et drones', description: 'Je capture des instants, des paysages et la lumière naturelle des villes. La caméra m’apprend à regarder le monde autrement.' },
    ], closingEyebrow: 'Et toujours de nouvelles découvertes', closing: 'Entre les randonnées, les projets et les nouvelles idées, chaque passion m’offre une façon différente d’apprendre.' },
    footer: { rights: 'Tous droits réservés.' },
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', about: 'About me', language: 'Language', theme: 'Toggle light/dark theme' },
    buttons: { downloadCv: 'Download CV', contact: 'Contact me', viewProjects: 'View all projects', email: 'Send an email', copyEmail: 'Copy email', copied: 'Email copied', copyFailed: 'Could not copy. Select the address to copy it.', code: 'Source (GitHub)', demo: 'Demo / paper' },
    hero: { eyebrow: 'A little about me', title: 'Hi, I’m Jan!', description: 'This page is a small window into the things I enjoy and how I spend my time outside of projects.', hobbies: 'Discover my hobbies', photoAlt: 'Placeholder for a photo of Jan', photoHint: 'Add it to public/images/ to replace this placeholder' },
    status: { eyebrow: 'Current status', message: 'Looking for a final-year internship or a junior role in artificial intelligence.', availability: 'Availability', availabilityValue: 'Flexible', location: 'Location', locationValue: 'Toulouse · Hybrid or remote', focus: 'Focus areas', focusAreas: ['Machine Learning', 'NLP', 'Computer Vision', 'LLMs'] },
    featured: {
      eyebrow: 'Selected work', title: 'Featured projects',
      projects: [
        { title: 'Medical image classifier with ViT', description: 'Fine-tuning Vision Transformers with data augmentation to detect anomalies in medical images, focusing on comparing model sensitivity and performance.', tags: ['PyTorch', 'Vision Transformers', 'Python', 'Computer Vision'], repoUrl: 'https://github.com/JanHernandezLlobet/proyecto-vit', year: '2026' },
        { title: 'RAG system for technical documentation', description: 'A retrieval pipeline using local embeddings and hybrid search to produce traceable answers from technical documentation.', tags: ['LLM', 'RAG', 'LangChain', 'Vector DB'], repoUrl: 'https://github.com/JanHernandezLlobet/rag-docs', year: '2025' },
        { title: 'Graph search algorithms', description: 'Implementation and comparison of A*, Dijkstra, and bidirectional search to study performance on real-world maps.', tags: ['C++', 'Algorithms', 'Optimization'], repoUrl: 'https://github.com/JanHernandezLlobet/graph-search', year: '2025' },
      ],
    },
    tech: { eyebrow: 'Tools of the trade', title: 'Technical stack', categories: [
      { name: 'AI & Machine Learning', technologies: ['PyTorch', 'Hugging Face Transformers', 'Scikit-learn', 'LangChain'] },
      { name: 'Languages', technologies: ['Python', 'C++', 'SQL', 'TypeScript'] },
      { name: 'Tools & Environment', technologies: ['Git', 'Docker', 'Linux', 'GitHub Actions'] },
    ] },
    timeline: { eyebrow: 'Background', title: 'Education and experience', groups: [
      { title: 'Education', entries: [
        { period: 'Dates to confirm · Present', title: 'IMA Master’s in Artificial Intelligence', institution: 'Université de Toulouse', points: ['Postgraduate study in artificial intelligence.', 'Further study in machine learning and language models.'] },
        { period: 'Dates to complete', title: 'Previous degree · add field', institution: 'Institution to be added', points: ['Add the official degree title here.', 'Complete the dates and a relevant course or achievement.'] },
      ] },
      { title: 'Projects and research', entries: [
        { period: '2025 — 2026', title: 'Personal artificial intelligence projects', institution: 'Independent projects', points: ['Medical image classification prototype using Vision Transformers.', 'RAG system with local embeddings and hybrid search.', 'Comparison of graph search algorithms in C++.'] },
      ] },
    ] },
    contact: { bannerEyebrow: 'Outside of work', bannerLink: 'Beyond code: discover my hobbies', eyebrow: 'Let’s talk', title: 'Have a project in mind?', socialLabel: 'Professional profiles', github: 'GitHub', linkedin: 'LinkedIn' },
    projectsPage: { title: 'Projects', description: 'Selected artificial intelligence and software development projects.' },
    about: { title: 'About me', description: 'Learn a little more about Jan and his hobbies.', hobbiesTitle: 'My hobbies', hobbies: [
      { title: 'Hiking', description: 'I explore mountain routes and nature trails on weekends. Getting lost in the Pyrenees is my favourite way to switch off.' },
      { title: 'Coding', description: 'I build personal projects and explore new technologies. I enjoy experimenting with artificial intelligence and automation.' },
      { title: 'Drone audiovisual work', description: 'I capture small moments, landscapes, and the natural light of cities. Using a camera teaches me to see the world differently.' },
    ], closingEyebrow: 'Always something new', closing: 'Between trails, projects, and new plans, each hobby gives me a different way to keep learning.' },
    footer: { rights: 'All rights reserved.' },
  },
};
