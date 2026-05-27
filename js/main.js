const searchItems = [
  {
    title: "Om kollegiet",
    category: "Side",
    description: "Læs om Nybrogård Kollegiet, området, historien, faciliteter og livet på kollegiet.",
    url: "om-kollegiet.html",
    keywords: ["om", "kollegiet", "nybrogård", "faciliteter", "lokation", "transport", "historie", "sø", "dtu"]
  },
  {
    title: "Faciliteter",
    category: "Om kollegiet",
    description: "Få overblik over fællesrum, udeområder og praktiske faciliteter.",
    url: "om-kollegiet.html#faciliteter",
    keywords: ["faciliteter", "fællesrum", "udeområder", "køkken", "lokaler"]
  },
  {
    title: "Bolig & ansøgning",
    category: "Side",
    description: "Se boligtyper, priser og hvordan du søger en bolig på kollegiet.",
    url: "bolig-ansoegning.html",
    keywords: ["bolig", "ansøgning", "ansoegning", "søg", "soeg", "værelse", "lejlighed", "pris", "priser"]
  },
  {
    title: "Priser",
    category: "Bolig & ansøgning",
    description: "Find information om husleje, betaling og boligtyper.",
    url: "bolig-ansoegning.html#priser",
    keywords: ["pris", "priser", "husleje", "betaling", "depositum", "økonomi"]
  },
  {
    title: "Flyt ind / flyt ud",
    category: "Bolig & ansøgning",
    description: "Praktisk information til indflytning og fraflytning.",
    url: "bolig-ansoegning.html#flyt-ind-ud",
    keywords: ["flyt", "indflytning", "fraflytning", "nøgle", "kontrakt"]
  },
  {
    title: "For beboere",
    category: "Side",
    description: "Find praktisk information, regler, vaskeri, internet og vigtige beskeder.",
    url: "for-beboere.html",
    keywords: ["beboer", "beboere", "praktisk", "regler", "vaskeri", "internet", "nyheder"]
  },
  {
    title: "Vaskeri",
    category: "For beboere",
    description: "Find information om vaskeri, login og praktisk brug.",
    url: "for-beboere.html#vaskeri",
    keywords: ["vaskeri", "vask", "tøj", "login", "maskine", "tørretumbler"]
  },
  {
    title: "Internet",
    category: "For beboere",
    description: "Få hjælp til internet, netværk og opsætning.",
    url: "for-beboere.html#internet",
    keywords: ["internet", "wifi", "wi-fi", "net", "netværk", "support", "router"]
  },
  {
    title: "Regler",
    category: "For beboere",
    description: "Læs kollegiets regler og praktiske retningslinjer.",
    url: "for-beboere.html#regler",
    keywords: ["regler", "husorden", "støj", "fællesområder", "beboer"]
  },
  {
    title: "Fællesskab",
    category: "Side",
    description: "Udforsk klubber, events, fællesområder og sociale aktiviteter.",
    url: "faellesskab.html",
    keywords: ["fællesskab", "faellesskab", "social", "klubber", "events", "aktiviteter"]
  },
  {
    title: "Klubber",
    category: "Fællesskab",
    description: "Find kollegiets klubber som kanolaug, musikrum, motionsklub og café.",
    url: "faellesskab.html#klubber",
    keywords: ["klub", "klubber", "kanolaug", "musik", "motionsklub", "fitness", "café", "kaeldercafe"]
  },
  {
    title: "Kontakt & hjælp",
    category: "Side",
    description: "Find den rigtige kontaktperson eller få svar på ofte stillede spørgsmål.",
    url: "kontakt-hjaelp.html",
    keywords: ["kontakt", "hjælp", "hjaelp", "faq", "spørgsmål", "sekretariat", "varmemester"]
  },
  {
    title: "Varmemester",
    category: "Kontakt & hjælp",
    description: "Kontakt varmemester ved problemer med varme, vand, nøgler eller vedligeholdelse.",
    url: "kontakt-hjaelp.html#varmemester",
    keywords: ["varmemester", "varme", "vand", "nøgle", "vedligeholdelse", "reparation"]
  },
  {
    title: "Sekretariat",
    category: "Kontakt & hjælp",
    description: "Kontakt sekretariatet ved spørgsmål om kontrakt, betaling eller generelle henvendelser.",
    url: "kontakt-hjaelp.html#sekretariat",
    keywords: ["sekretariat", "kontakt", "kontrakt", "betaling", "mail", "telefon"]
  }
];

const overlay = document.querySelector("[data-search-overlay]");
const openButtons = document.querySelectorAll("[data-search-open]");
const closeButtons = document.querySelectorAll("[data-search-close]");
const searchInput = document.querySelector("#siteSearchInput");
const resultsContainer = document.querySelector("[data-search-results]");
const searchInfo = document.querySelector("[data-search-info]");
const suggestionButtons = document.querySelectorAll("[data-search-term]");

function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .replaceAll("æ", "ae")
    .replaceAll("ø", "oe")
    .replaceAll("å", "aa");
}

function openSearch() {
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("search-lock");

  setTimeout(() => {
    searchInput.focus();
  }, 50);
}

function closeSearch() {
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("search-lock");
}

function renderResults(query) {
  const cleanQuery = normalizeText(query);

  resultsContainer.innerHTML = "";

  if (!cleanQuery) {
    searchInfo.textContent = "Skriv noget for at finde relevante sider.";
    return;
  }

  const results = searchItems.filter((item) => {
    const searchableText = normalizeText(`
      ${item.title}
      ${item.category}
      ${item.description}
      ${item.keywords.join(" ")}
    `);

    return searchableText.includes(cleanQuery);
  });

  searchInfo.textContent =
    results.length === 1
      ? "1 resultat fundet"
      : `${results.length} resultater fundet`;

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="search-no-results">
        <strong>Ingen resultater fundet.</strong><br>
        Prøv fx “vaskeri”, “internet”, “ansøgning” eller “kontakt”.
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = results
    .map((item) => {
      return `
        <a class="search-result-card" href="${item.url}">
          <span class="search-result-meta">
            <i class="bi bi-arrow-right-circle" aria-hidden="true"></i>
            ${item.category}
          </span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </a>
      `;
    })
    .join("");
}

openButtons.forEach((button) => {
  button.addEventListener("click", openSearch);
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeSearch);
});

searchInput.addEventListener("input", (event) => {
  renderResults(event.target.value);
});

suggestionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const term = button.dataset.searchTerm;
    searchInput.value = term;
    renderResults(term);
    searchInput.focus();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && overlay.classList.contains("is-open")) {
    closeSearch();
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
});




// Image lightbox with zoom
const galleryButtons = document.querySelectorAll("[data-full-image]");
const lightbox = document.querySelector("[data-image-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close]");
const zoomInButton = document.querySelector("[data-lightbox-zoom-in]");
const zoomOutButton = document.querySelector("[data-lightbox-zoom-out]");
const resetZoomButton = document.querySelector("[data-lightbox-reset]");

let lightboxZoom = 1;

function setLightboxZoom(value) {
  lightboxZoom = Math.min(Math.max(value, 1), 3);
  lightboxImage.style.setProperty("--lightbox-zoom", lightboxZoom);
}

function openLightbox(imageSrc, imageAlt) {
  if (!lightbox || !lightboxImage) return;

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt || "Billede fra Nybrogård Kollegiet";

  setLightboxZoom(1);

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  lightboxImage.src = "";
  lightboxImage.alt = "";
  setLightboxZoom(1);
}

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const imageSrc = button.dataset.fullImage;
    const image = button.querySelector("img");
    const imageAlt = image ? image.alt : "";

    openLightbox(imageSrc, imageAlt);
  });
});

lightboxCloseButtons.forEach((button) => {
  button.addEventListener("click", closeLightbox);
});

if (zoomInButton) {
  zoomInButton.addEventListener("click", () => {
    setLightboxZoom(lightboxZoom + 0.25);
  });
}

if (zoomOutButton) {
  zoomOutButton.addEventListener("click", () => {
    setLightboxZoom(lightboxZoom - 0.25);
  });
}

if (resetZoomButton) {
  resetZoomButton.addEventListener("click", () => {
    setLightboxZoom(1);
  });
}

if (lightboxImage) {
  lightboxImage.addEventListener("click", () => {
    if (lightboxZoom >= 3) {
      setLightboxZoom(1);
    } else {
      setLightboxZoom(lightboxZoom + 0.5);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (!lightbox || !lightbox.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "+" || event.key === "=") {
    setLightboxZoom(lightboxZoom + 0.25);
  }

  if (event.key === "-") {
    setLightboxZoom(lightboxZoom - 0.25);
  }
});