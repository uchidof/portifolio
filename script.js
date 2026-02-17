const translations = {
  pt: {
    title: "OLÁ MUNDO",
    description:
      "Este é meu portfólio inicial. Aqui você encontrará meus projetos, habilidades e evolução como desenvolvedor.",
    about: "Sobre mim",
    projects: "Projetos",
    contact: "Contato",
  },
  en: {
    title: "HELLO WORLD",
    description:
      "This is my starter portfolio. Here you will find my projects, skills and growth as a developer.",
    about: "About Me",
    projects: "Projects",
    contact: "Contact"
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
});

// idioma inicial
translatePage(currentLang);
