const translations = {
  es: {
    "nav.about":"Sobre mí","nav.work":"Experiencia","nav.skills":"Habilidades","nav.certificates":"Certificados","nav.contact":"Contacto",
    "hero.eyebrow":"INFORMÁTICA · DESARROLLO WEB","hero.greeting":"Hola, soy","hero.description":"Licenciada en Informática Administrativa. Transformo ideas y necesidades en soluciones web funcionales, cuidando tanto la lógica como la experiencia de quien las utiliza.","hero.projects":"Explorar mi trabajo","hero.cv":"Descargar CV","hero.location":"Tegucigalpa, Honduras","hero.open":"Abierta a oportunidades","hero.scroll":"DESLIZÁ PARA EXPLORAR",
    "profile.role":"Desarrollo frontend · Sistemas web",
    "about.eyebrow":"01 / PERFIL","about.title":"Tecnología con <span class=\"gradient-text\">intención.</span>","about.lead":"Me gusta entender cómo funcionan las cosas y convertir problemas en soluciones claras, útiles y bien organizadas.","about.p1":"Soy Licenciada en Informática Administrativa por la Universidad Nacional Autónoma de Honduras (UNAH). Durante mi práctica en la DEGT participé en el desarrollo de módulos para sistemas institucionales.","about.p2":"He trabajado con Angular, TypeScript, servicios y APIs REST, formularios reactivos e interfaces responsivas. También cuento con experiencia académica en sistemas de inventario y facturación con Laravel y MySQL.","about.p3":"Estoy en constante aprendizaje y me interesa seguir creciendo en desarrollo de software, bases de datos y calidad de sistemas.",
    "work.eyebrow":"02 / TRABAJO","work.title":"Experiencia & <span class=\"gradient-text\">proyectos.</span>","work.intro":"Una selección de experiencia y proyectos que forman parte de mi recorrido.","work.experienceType":"EXPERIENCIA PROFESIONAL","work.experienceMeta":"DEGT · UNAH · 2025–2026","work.experienceTitle":"Módulos para sistemas institucionales","work.experienceDesc":"Participación en el desarrollo frontend, navegación por roles, consumo de APIs REST, formularios reactivos, interfaces responsivas y corrección de errores.","work.academicType":"PROYECTO ACADÉMICO","work.academicMeta":"PROYECTO ACADÉMICO","work.academicTitle":"Sistema de inventario y facturación","work.academicDesc":"Sistema web para gestionar productos, ventas, facturación y usuarios, con autenticación y almacenamiento en una base de datos relacional.","work.inventoryLabel":"RESUMEN DE INVENTARIO","work.note":"Las visualizaciones son ilustrativas; no representan capturas de sistemas institucionales privados.",
    "skills.eyebrow":"03 / CAJA DE HERRAMIENTAS","skills.title":"Tecnologías que <span class=\"gradient-text\">conozco.</span>",
    "cert.eyebrow":"04 / APRENDIZAJE CONTINUO","cert.title":"Cursos & <span class=\"gradient-text\">certificados.</span>","cert.intro":"Formación complementaria en programación, datos, redes y seguridad.","cert.note":"Si un botón no abre un certificado, revisá que el nombre del PDF en js/main.js coincida exactamente con el archivo de la carpeta certificados.",
    "contact.eyebrow":"05 / SIGUIENTE PASO","contact.title":"¿Creamos algo <span class=\"gradient-text\">útil?</span>","contact.description":"Estoy abierta a oportunidades para seguir aprendiendo, aportar y construir soluciones tecnológicas.","contact.email":"Escribime un correo","footer.text":"Diseñado y desarrollado con curiosidad por Hellen Pinel.",
    "certificate.view":"Ver PDF ↗","certificate.missing":"Agregar PDF"
  },
  en: {
    "nav.about":"About","nav.work":"Experience","nav.skills":"Skills","nav.certificates":"Certificates","nav.contact":"Contact",
    "hero.eyebrow":"INFORMATION TECHNOLOGY · WEB DEVELOPMENT","hero.greeting":"Hi, I'm","hero.description":"A graduate in Administrative Computing. I turn ideas and needs into functional web solutions, caring about both the logic and the experience of the people who use them.","hero.projects":"Explore my work","hero.cv":"Download résumé","hero.location":"Tegucigalpa, Honduras","hero.open":"Open to opportunities","hero.scroll":"SCROLL TO EXPLORE",
    "profile.role":"Frontend development · Web systems",
    "about.eyebrow":"01 / PROFILE","about.title":"Technology with <span class=\"gradient-text\">purpose.</span>","about.lead":"I enjoy understanding how things work and turning problems into clear, useful, well-organized solutions.","about.p1":"I hold a degree in Administrative Computing from the National Autonomous University of Honduras (UNAH). During my internship at DEGT, I contributed to modules for institutional systems.","about.p2":"I have worked with Angular, TypeScript, services and REST APIs, reactive forms, and responsive interfaces. I also have academic project experience building inventory and invoicing systems with Laravel and MySQL.","about.p3":"I am always learning and interested in growing in software development, databases, and software quality.",
    "work.eyebrow":"02 / WORK","work.title":"Experience & <span class=\"gradient-text\">projects.</span>","work.intro":"A selection of experience and projects from my professional journey.","work.experienceType":"PROFESSIONAL EXPERIENCE","work.experienceMeta":"DEGT · UNAH · 2025–2026","work.experienceTitle":"Modules for institutional systems","work.experienceDesc":"Contributed to frontend development, role-based navigation, REST API consumption, reactive forms, responsive interfaces, and bug fixing.","work.academicType":"ACADEMIC PROJECT","work.academicMeta":"ACADEMIC PROJECT","work.academicTitle":"Inventory and invoicing system","work.academicDesc":"A web system for managing products, sales, invoicing, and users, with authentication and storage in a relational database.","work.inventoryLabel":"INVENTORY OVERVIEW","work.note":"The visuals are illustrative and are not screenshots of private institutional systems.",
    "skills.eyebrow":"03 / TOOLKIT","skills.title":"Technologies I <span class=\"gradient-text\">know.</span>",
    "cert.eyebrow":"04 / CONTINUOUS LEARNING","cert.title":"Courses & <span class=\"gradient-text\">certificates.</span>","cert.intro":"Additional training in programming, data, networking, and security.","cert.note":"If a button does not open a certificate, check that the PDF filename in js/main.js exactly matches the file in the certificados folder.",
    "contact.eyebrow":"05 / NEXT STEP","contact.title":"Shall we build something <span class=\"gradient-text\">useful?</span>","contact.description":"I am open to opportunities to keep learning, contribute, and build technological solutions.","contact.email":"Send me an email","footer.text":"Designed and developed with curiosity by Hellen Pinel.",
    "certificate.view":"View PDF ↗","certificate.missing":"Add PDF"
  }
};

// Cambiá estos nombres si los archivos que subiste tienen otros nombres.
// El campo file debe coincidir exactamente con el nombre del PDF en /certificados.
const certificates = [
  { title: "Conceptos Fundamentales de Java", provider: "INFOP · 2026", file: "java.pdf", code: "JAVA" },
  { title: "Inglés Básico", provider: "INFOP · 2026", file: "ingles-basico.pdf", code: "EN" },
  { title: "Programar en Python", provider: "INFOP · 2026", file: "python.pdf", code: "PY" },
  //{ title: "Introducción a Linux", provider: "INFOP · 2026", file: "linux.pdf", code: "LIN" },
  { title: "Introducción a la Ciberseguridad", provider: "INFOP · 2026", file: "ciberseguridad.pdf", code: "SEC" },
  { title: "Conociendo la Big Data", provider: "INFOP · 2026", file: "big-data.pdf", code: "DATA" },
  { title: "Base de Datos con MySQL", provider: "INFOP · 2024", file: "mysql.pdf", code: "SQL" },
  { title: "Diseño Web con HTML5 y WordPress", provider: "INFOP · 2024", file: "wordpress.pdf", code: "WEB" },
  { title: "Introducción a las Redes", provider: "Cisco Networking Academy · 2025", file: "", code: "NET" },
  { title: "Introducción a la Ciencia de Datos", provider: "Cisco Networking Academy · 2025", file: "", code: "DS" }
];

const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const languageToggle = document.getElementById("language-toggle");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links");
let currentLanguage = localStorage.getItem("portfolio-language") || "es";

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  themeIcon.textContent = theme === "dark" ? "☼" : "☾";
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Activar modo claro" : "Activar modo oscuro");
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#0b1020" : "#f5f7fb";
}
applyTheme(localStorage.getItem("portfolio-theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
themeToggle.addEventListener("click", () => applyTheme(root.dataset.theme === "dark" ? "light" : "dark"));

function renderCertificates() {
  const list = document.getElementById("certificate-list");
  list.innerHTML = "";
  certificates.forEach(cert => {
    const article = document.createElement("article");
    article.className = "certificate reveal";
    const icon = document.createElement("span");
    icon.className = "certificate-icon";
    icon.textContent = cert.code;
    const info = document.createElement("div");
    info.className = "certificate-info";
    const title = document.createElement("h3");
    title.textContent = cert.title;
    const provider = document.createElement("p");
    provider.textContent = cert.provider;
    info.append(title, provider);
    article.append(icon, info);
    if (cert.file) {
      const link = document.createElement("a");
      link.className = "certificate-link";
      link.href = `certificados/${cert.file}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = translations[currentLanguage]["certificate.view"];
      link.setAttribute("aria-label", `${link.textContent}: ${cert.title}`);
      article.append(link);
    } else {
      const pending = document.createElement("span");
      pending.className = "certificate-link";
      pending.textContent = translations[currentLanguage]["certificate.missing"];
      article.append(pending);
    }
    list.append(article);
  });
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("portfolio-language", language);
  document.documentElement.lang = language;
  languageToggle.textContent = language === "es" ? "EN" : "ES";
  languageToggle.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[language][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  renderCertificates();
  observeReveals();
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "es" ? "en" : "es"));
setLanguage(currentLanguage);

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(el => observer.observe(el));
}
observeReveals();

const progress = document.querySelector(".scroll-progress");
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const profileCard = document.getElementById("profile-card");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (profileCard && !reduceMotion && matchMedia("(pointer: fine)").matches) {
  profileCard.addEventListener("pointermove", event => {
    const rect = profileCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    profileCard.style.transform = `rotateY(${(x - .5) * 10}deg) rotateX(${(.5 - y) * 10}deg) translateZ(8px)`;
  });
  profileCard.addEventListener("pointerleave", () => {
    profileCard.style.transform = "rotateY(0) rotateX(0) translateZ(0)";
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
