async function loadComponent(element) {
  const file = element.dataset.include;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Kunne ikke hente ${file}`);
    }

    const html = await response.text();
    element.outerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".main-nav .nav-link").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) return;

    const linkPage = href.split("#")[0];

    link.classList.remove("active");
    link.removeAttribute("aria-current");

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function loadMainScript() {
  const script = document.createElement("script");
  script.src = "js/main.js";
  script.defer = true;
  document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", async () => {
  const includeElements = document.querySelectorAll("[data-include]");

  await Promise.all(
    Array.from(includeElements).map((element) => loadComponent(element))
  );

  setActiveNavLink();
  loadMainScript();
});