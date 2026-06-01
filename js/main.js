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
  },
  {
    title: "Hvem skal jeg kontakte?",
    category: "Kontakt & hjælp",
    description: "Få hjælp til at vælge mellem varmemester, sekretariat, netgruppe, beboerråd, klagenævn og KAB.",
    url: "kontakt-hjaelp.html#kontakt-guide",
    keywords: ["hvem", "kontakte", "kontaktguide", "hjælp", "hjaelp", "varmemester", "sekretariat", "netgruppe"]
  },
  {
    title: "Kontaktoversigt",
    category: "Kontakt & hjælp",
    description: "Se samlet oversigt over kontaktpersoner, telefonnumre, åbningstider og officielle links.",
    url: "kontakt-hjaelp.html#kontaktoversigt",
    keywords: ["kontaktoversigt", "telefon", "åbningstider", "aabningstider", "mail", "adresse"]
  },
  {
    title: "FAQ",
    category: "Kontakt & hjælp",
    description: "Find svar på ofte stillede spørgsmål om drift, internet, klager og administration.",
    url: "kontakt-hjaelp.html#faq",
    keywords: ["faq", "spørgsmål", "spoergsmaal", "ofte", "hjælp", "hjaelp"]
  },
  {
    title: "Netgruppen",
    category: "Kontakt & hjælp",
    description: "Kontakt netgruppen ved problemer med internet, Wi-Fi, kabler eller flytning af forbindelse.",
    url: "kontakt-hjaelp.html#netgruppen",
    keywords: ["netgruppen", "internet", "wifi", "wi-fi", "netværk", "netvaerk", "kabel"]
  },
  {
    title: "Klagenævnet",
    category: "Kontakt & hjælp",
    description: "Find hjælp til klager ved overtrædelse af husordenen.",
    url: "kontakt-hjaelp.html#klagenaevn",
    keywords: ["klage", "klagenævn", "klagenaevn", "husorden", "støj", "stoej", "nabo"]
  }
];

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replaceAll("æ", "ae")
    .replaceAll("ø", "oe")
    .replaceAll("å", "aa");
}

function getSearchElements() {
  return {
    overlay: document.querySelector("[data-search-overlay]"),
    searchInput: document.querySelector("#siteSearchInput"),
    resultsContainer: document.querySelector("[data-search-results]"),
    searchInfo: document.querySelector("[data-search-info]")
  };
}

function openSearch() {
  const { overlay, searchInput } = getSearchElements();

  if (!overlay || !searchInput) return;

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("search-lock");

  setTimeout(() => {
    searchInput.focus();
  }, 50);
}

function closeSearch() {
  const { overlay } = getSearchElements();

  if (!overlay) return;

  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("search-lock");
}

function renderResults(query) {
  const { resultsContainer, searchInfo } = getSearchElements();

  if (!resultsContainer || !searchInfo) return;

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

// Search event delegation
document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const openButton = event.target.closest("[data-search-open]");
  const closeButton = event.target.closest("[data-search-close]");
  const suggestionButton = event.target.closest("[data-search-term]");

  if (openButton) {
    openSearch();
    return;
  }

  if (closeButton) {
    closeSearch();
    return;
  }

  if (suggestionButton) {
    const { searchInput } = getSearchElements();
    const term = suggestionButton.dataset.searchTerm;

    if (!searchInput || !term) return;

    searchInput.value = term;
    renderResults(term);
    searchInput.focus();
  }
});

document.addEventListener("input", (event) => {
  if (!(event.target instanceof Element)) return;

  if (event.target.matches("#siteSearchInput")) {
    renderResults(event.target.value);
  }
});

document.addEventListener("keydown", (event) => {
  const { overlay } = getSearchElements();

  if (event.key === "Escape" && overlay && overlay.classList.contains("is-open")) {
    closeSearch();
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
});


// Image lightbox gallery with swipe, wheel zoom and pinch zoom
function initImageLightbox() {
  const galleryButtons = Array.from(document.querySelectorAll("[data-full-image]"));
  const lightbox = document.querySelector("[data-image-lightbox]");
  const lightboxFrame = document.querySelector(".image-lightbox-frame");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close]");
  const lightboxPrevButton = document.querySelector("[data-lightbox-prev]");
  const lightboxNextButton = document.querySelector("[data-lightbox-next]");

  let currentImageIndex = 0;
  let lightboxZoom = 1;
  let translateX = 0;
  let translateY = 0;

  let touchStartX = 0;
  let touchStartY = 0;
  let lastTouchDistance = 0;
  let isDragging = false;

  function setLightboxTransform() {
    if (!lightboxImage) return;

    lightboxImage.style.setProperty("--lightbox-zoom", lightboxZoom);
    lightboxImage.style.setProperty("--lightbox-x", `${translateX}px`);
    lightboxImage.style.setProperty("--lightbox-y", `${translateY}px`);
  }

  function resetLightboxZoom() {
    lightboxZoom = 1;
    translateX = 0;
    translateY = 0;
    setLightboxTransform();

    if (lightboxImage) {
      lightboxImage.style.cursor = "zoom-in";
    }
  }

  function clampZoom(value) {
    return Math.min(Math.max(value, 1), 4);
  }

  function setLightboxZoom(value) {
    lightboxZoom = clampZoom(value);

    if (lightboxZoom === 1) {
      translateX = 0;
      translateY = 0;
    }

    setLightboxTransform();

    if (lightboxImage) {
      lightboxImage.style.cursor = lightboxZoom > 1 ? "grab" : "zoom-in";
    }
  }

  function showLightboxImage(index) {
    if (!galleryButtons.length || !lightboxImage) return;

    if (index < 0) {
      currentImageIndex = galleryButtons.length - 1;
    } else if (index >= galleryButtons.length) {
      currentImageIndex = 0;
    } else {
      currentImageIndex = index;
    }

    const button = galleryButtons[currentImageIndex];
    const imageSrc = button.dataset.fullImage;
    const image = button.querySelector("img");
    const imageAlt = image ? image.alt : "Billede fra Nybrogård Kollegiet";

    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;

    resetLightboxZoom();
  }

  function openLightbox(index) {
    if (!lightbox || !lightboxImage) return;

    showLightboxImage(index);

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

    resetLightboxZoom();
  }

  function showNextImage() {
    showLightboxImage(currentImageIndex + 1);
  }

  function showPreviousImage() {
    showLightboxImage(currentImageIndex - 1);
  }

  function getTouchDistance(touches) {
    const firstTouch = touches[0];
    const secondTouch = touches[1];

    const diffX = firstTouch.clientX - secondTouch.clientX;
    const diffY = firstTouch.clientY - secondTouch.clientY;

    return Math.sqrt(diffX * diffX + diffY * diffY);
  }

  galleryButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      openLightbox(index);
    });
  });

  lightboxCloseButtons.forEach((button) => {
    button.addEventListener("click", closeLightbox);
  });

  if (lightboxNextButton) {
    lightboxNextButton.addEventListener("click", showNextImage);
  }

  if (lightboxPrevButton) {
    lightboxPrevButton.addEventListener("click", showPreviousImage);
  }

  if (lightboxFrame) {
    lightboxFrame.addEventListener("wheel", (event) => {
      if (!lightbox || !lightbox.classList.contains("is-open")) return;

      event.preventDefault();

      const zoomDirection = event.deltaY < 0 ? 0.18 : -0.18;
      setLightboxZoom(lightboxZoom + zoomDirection);
    }, { passive: false });

    lightboxFrame.addEventListener("dblclick", () => {
      if (lightboxZoom > 1) {
        setLightboxZoom(1);
      } else {
        setLightboxZoom(2);
      }
    });

    lightboxFrame.addEventListener("touchstart", (event) => {
      if (!lightbox || !lightbox.classList.contains("is-open")) return;

      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;

      if (event.touches.length === 2) {
        lastTouchDistance = getTouchDistance(event.touches);
      }

      if (lightboxZoom > 1) {
        isDragging = true;
      }
    }, { passive: true });

    lightboxFrame.addEventListener("touchmove", (event) => {
      if (!lightbox || !lightbox.classList.contains("is-open")) return;

      if (event.touches.length === 2) {
        event.preventDefault();

        const currentDistance = getTouchDistance(event.touches);
        const zoomChange = (currentDistance - lastTouchDistance) / 180;

        setLightboxZoom(lightboxZoom + zoomChange);
        lastTouchDistance = currentDistance;

        return;
      }

      if (event.touches.length === 1 && lightboxZoom > 1 && isDragging) {
        event.preventDefault();

        const currentX = event.touches[0].clientX;
        const currentY = event.touches[0].clientY;

        translateX += currentX - touchStartX;
        translateY += currentY - touchStartY;

        touchStartX = currentX;
        touchStartY = currentY;

        setLightboxTransform();
      }
    }, { passive: false });

    lightboxFrame.addEventListener("touchend", (event) => {
      if (!lightbox || !lightbox.classList.contains("is-open")) return;

      const touchEndX = event.changedTouches[0].clientX;
      const touchEndY = event.changedTouches[0].clientY;

      const swipeDistanceX = touchEndX - touchStartX;
      const swipeDistanceY = touchEndY - touchStartY;

      const isHorizontalSwipe = Math.abs(swipeDistanceX) > 60 && Math.abs(swipeDistanceY) < 80;

      if (lightboxZoom === 1 && isHorizontalSwipe) {
        if (swipeDistanceX < 0) {
          showNextImage();
        } else {
          showPreviousImage();
        }
      }

      isDragging = false;
      lastTouchDistance = 0;
    });
  }

  if (lightboxImage) {
    lightboxImage.addEventListener("mousedown", (event) => {
      if (lightboxZoom <= 1) return;

      isDragging = true;
      lightboxImage.style.cursor = "grabbing";

      const startX = event.clientX;
      const startY = event.clientY;
      const initialTranslateX = translateX;
      const initialTranslateY = translateY;

      function handleMouseMove(moveEvent) {
        translateX = initialTranslateX + moveEvent.clientX - startX;
        translateY = initialTranslateY + moveEvent.clientY - startY;

        setLightboxTransform();
      }

      function handleMouseUp() {
        isDragging = false;
        lightboxImage.style.cursor = "grab";

        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      showNextImage();
    }

    if (event.key === "ArrowLeft") {
      showPreviousImage();
    }

    if (event.key === "+" || event.key === "=") {
      setLightboxZoom(lightboxZoom + 0.25);
    }

    if (event.key === "-") {
      setLightboxZoom(lightboxZoom - 0.25);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initImageLightbox);
} else {
  initImageLightbox();
}