// =================== TRADUÇÃO ===================

const translations = {
  pt: {
    title: "OLÁ MUNDO!",
    description:
      "Este é meu portfólio inicial. Aqui você encontrará meus projetos, habilidades e evolução como desenvolvedor.",
    about: "Sobre mim",
    projects: "Projetos",
    contact: "Contato",
    projectsTitle: "PROJETOS",
    projectsDescription: "Projetos e experimentos desenvolvidos ao longo da minha jornada."
  },
  en: {
    title: "HELLO WORLD!",
    description:
      "This is my starter portfolio. Here you will find my projects, skills and growth as a developer.",
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
    projectsTitle: "PROJECTS",
    projectsDescription: "Projects and experiments built throughout my journey."
  }
};

let currentLang = "pt";

const toggleButton = document.getElementById("langToggle");

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });
}

toggleButton.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  translatePage(currentLang);
  toggleButton.textContent = currentLang.toUpperCase();
  renderProjects(); // 🔥 atualiza os projetos ao trocar idioma
});

translatePage(currentLang);

// =================== CAROUSEL ===================

const carousel = document.getElementById("projectsCarousel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const scrollAmount = 350;

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

// =================== RENDER PROJETOS ===================

function renderProjects() {
  carousel.innerHTML = "";

  projects.forEach(project => {

    const color = languageColors[project.tag.en] || "#999";
    
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h3>${project.title[currentLang]}</h3>
      <p>${project.description[currentLang]}</p>
      <div class="card-footer">
        <span class="tag small"
              style="background:${color}; color:white;">
          ${project.tag[currentLang]}
        </span>
        <a href="${project.link}" target="_blank">
          <button class="details-btn">+ Detalhes ➚</button>
        </a>
      </div>
    `;

    carousel.appendChild(card);
  });
}

renderProjects();