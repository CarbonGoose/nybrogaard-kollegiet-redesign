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































/* =====================================================
   Fællesskab: club modal + relevant club info
   Paste this at the bottom of js/main.js
===================================================== */

const clubModalContent = {
  kaeldercafeen: {
    category: "Social klub",
    title: "KælderCaféen",
    description:
      "KælderCaféen er kollegiets bar og sociale samlingspunkt. Den drives af frivillige beboere og er især stedet for fredagsbar, temafester, drinks, øl og en nem måde at møde andre kollegianere på.",
    details: [
      "Drives af frivillige beboere.",
      "Holder typisk åbent fredag og ved udvalgte arrangementer.",
      "Der afholdes også temafester og særlige events.",
      "Man kan engagere sig som bartender eller hjælpe i barens udvalg.",
      "God for nye beboere, der gerne vil møde folk på en afslappet måde."
    ],
    facebook: "https://www.facebook.com/KaelderCafeen/",
    images: [
      "assets/images/kældercafe.jpg",
      "assets/images/kældercafe2.jpg"
    ]
  },

  motionsklubben: {
    category: "Aktiv klub",
    title: "Motionsklubben",
    description:
      "Motionsklubben er kollegiets eget motionsrum i O-kælderen. Det er for beboere, der gerne vil træne tæt på hjemmet — uden at skulle betale for et eksternt fitnesscenter.",
    details: [
      "Ligger i kælderen i opgang O.",
      "Motionsrummet har åbent hele døgnet.",
      "Der er maskiner og udstyr til forskellige øvelser.",
      "Adgang gives via varmemesteren efter tilmelding.",
      "Facebookgruppen bruges til information, idéer og forbedringsforslag."
    ],
    facebook: "https://www.facebook.com/groups/1439073929643407/",
    images: [
      "assets/images/motion1.jpg",
      "assets/images/motion2.jpg"
    ]
  },

  kanolauget: {
    category: "Natur og aktivitet",
    title: "Kano- og kajaklauget",
    description:
      "Kano- og kajaklauget giver beboere mulighed for at bruge kollegiets kanoer og kajakker på Lyngby Sø, Bagsværd Sø og Mølleåen. Det er en af de klubber, der virkelig udnytter Nybros placering ved vandet.",
    details: [
      "Klubben har kanoer og kajakker til brug for medlemmer.",
      "Medlemskab er gratis.",
      "For at blive medlem skal man registreres via varmemesteren.",
      "Man skal deltage i introduktionskursus før brug af udstyret.",
      "Reservation foregår via beboerlogin, når man er medlem.",
      "Redningsvest og regler for færdsel på søerne skal overholdes."
    ],
    facebook: "https://www.facebook.com/groups/171257265128384/",
    images: [
      "assets/images/kano.jpg",
      "assets/images/kano2.jpg"
    ]
  },

  braetspilsklubben: {
    category: "Social klub",
    title: "Brætspilsklubben",
    description:
      "Brætspilsklubben — også kaldet Brættet — er Nybros egen brætspilsklub i CD-kælderen. Her kan beboere mødes om brætspil, hygge, spil-aftaler og små sociale arrangementer.",
    details: [
      "Holder til i CD-kælderen.",
      "Medlemskab er gratis ifølge klubbens nuværende side.",
      "Officielle spilbegivenheder holdes ugentligt.",
      "Tidspunkter og aftaler deles i Facebookgruppen.",
      "Medlemmer kan låne brætspil og bruge klublokalet.",
      "Klubben opfordrer beboere til selv at tage initiativ til spilleaftener."
    ],
    facebook: "https://www.facebook.com/groups/1402237493173038/",
    images: [
      "assets/images/kollegie-social.jpg",
      "assets/images/img_2664.jpg"
    ]
  },

  cykelvaerksted: {
    category: "Praktisk klub",
    title: "Cykelværksted",
    description:
      "Cykelværkstedet er kollegiets praktiske værksted til cykelreparationer og vedligeholdelse. Perfekt til alt fra punkteringer til den der mystiske lyd, cyklen laver, når den har valgt drama.",
    details: [
      "Ligger i kælderen ved blok M.",
      "For at blive medlem skal man tage sit vaskekort med til varmemesteren.",
      "Værkstedet har værktøj til de fleste almindelige cykelreparationer.",
      "Der er blandt andet kædeværktøj, kassetteaftrækker, wire- og kabelsaks og hjulopretter.",
      "Man skal rydde op efter sig selv og hænge værktøj på plads.",
      "Facebookgruppen bruges til hjælp, erfaringer, værktøj og varsling om cykeloprydning."
    ],
    facebook: "https://www.facebook.com/groups/751662049138329/",
    images: [
      "assets/images/bus.jpg",
      "assets/images/house.png"
    ]
  },

  filmklubben: {
    category: "Social klub",
    title: "Filmklubben",
    description:
      "Filmklubben er kollegiets hjemmebiograf i B-kælderen med surroundsound, sofarækker og stort lærred. Den kan bruges af registrerede medlemmer via booking.",
    details: [
      "Holder til i B-kælderen.",
      "Rummet har hjemmebiograf med surroundsound, sofarækker og stort lærred.",
      "Man bliver medlem ved at læse og underskrive reglementet hos varmemesteren.",
      "Adgang gives via aktiveret SALTO-brik.",
      "Booking er kun for registrerede medlemmer.",
      "Der er DVD/Blu-ray-afspiller og HDMI-stik til egen computer."
    ],
    facebook: "https://www.facebook.com/groups/632002704276746/",
    images: [
      "assets/images/img_2710.jpg",
      "assets/images/kollegie-social.jpg"
    ]
  },

  kunstklubben: {
    category: "Kreativ klub",
    title: "Kunstklubben",
    description:
      "Kunstklubben holder til i et hyggeligt atelier i F-kælderen ved siden af musikrummet. Klubben giver beboere plads til kreative projekter, kunst, værkstedsarbejde og små te-pauser midt i skaberkaosset.",
    details: [
      "Ligger i F-kælderen ved siden af Musikrummet.",
      "Formålet er at give medlemmer plads til at arbejde med kunst og kreative projekter.",
      "Rummet kan bruges til forskellige typer kunstnerisk arbejde.",
      "Man skal efterlade rummet pænt og ryddeligt.",
      "Der er mulighed for at låse egne ting inde med en lille hængelås.",
      "Adgang fås ved registrering hos varmemesteren."
    ],
    facebook: "https://www.facebook.com/groups/619193229277730/",
    images: [
      "assets/images/img_2664.jpg",
      "assets/images/kollegie-social.jpg"
    ]
  },

  musikrum: {
    category: "Kreativ klub",
    title: "Musikrummet",
    description:
      "Musikrummet er øvelokalet for beboere, der spiller musik eller gerne vil øve sig. Det ligger under EF-køkkenerne og rummer både fælles gear og privat gear fra beboere.",
    details: [
      "Ligger i kælderen under EF-køkkenerne.",
      "Kun beboere kan blive medlem.",
      "Medlemskab er gratis.",
      "Rummet har blandt andet trommesæt, klaver og øve-PA-anlæg.",
      "Privat gear skal markeres tydeligt med navn og værelse.",
      "Reservation foregår ved at skrive sig på sedlerne på døren.",
      "Man må højst bruge rummet fire timer, hvis andre også vil bruge det samme dag.",
      "Det er ikke tilladt at spille efter kl. 22."
    ],
    facebook: "https://www.facebook.com/groups/378872605654962/",
    images: [
      "assets/images/musik.jpg",
      "assets/images/musik2.jpg"
    ]
  },

  bryggerklub: {
    category: "Social og praktisk klub",
    title: "Bryggerklub",
    description:
      "Bryggerklubben holder til i et lille lokale i D-kælderen, hvor der brygges øl, cider, vin og andet godt i ca. 20 liters portioner. Den er for beboere, der vil lære hjemmebryg og dele erfaringer med andre.",
    details: [
      "Ligger i D-kælderen.",
      "Klubben har udstyr til øl, cider, vin m.m. i portioner på ca. 20 liter.",
      "Udstyret inkluderer blandt andet saftkoger, gæringsspande, vandlåse, hydrometer og nedkølingsspiral.",
      "Klubben bruger Facebookgruppen til koordination og erfaringsudveksling.",
      "Nye medlemmer skal læse lidt om bryggeprocessen først.",
      "Et eksisterende medlem kan hjælpe med første bryg, men tanken er, at man selv lærer processen."
    ],
    facebook: "https://www.facebook.com/groups/454792794605313/",
    images: [
      "assets/images/img_2591.jpg",
      "assets/images/kollegie-social.jpg"
    ]
  },

  miljoegruppen: {
    category: "Bæredygtighed",
    title: "Miljøgruppen",
    description:
      "Miljøgruppen arbejder for et bedre miljø på og omkring kollegiet. Gruppen laver blandt andet kampagner, byttemarkeder og initiativer omkring affald, genbrug og fælles ansvar.",
    details: [
      "Arbejder for et bedre miljø for kollegiet og beboerne.",
      "Laver informationskampagner om energibesparelse, affaldssortering, havebrug og andre miljøemner.",
      "Arrangerer byttemarkeder, hvor beboere kan give og modtage brugbare ting.",
      "Arrangerer fælles affaldsopsamling på udendørsarealerne.",
      "Facebooksiden bruges til aktiviteter og diskussioner."
    ],
    facebook: "https://www.facebook.com/groups/NybroMiljo/",
    images: [
      "assets/images/outdoor5.jpg",
      "assets/images/outdoor6.jpg"
    ]
  },

  haveforening: {
    category: "Natur og udeliv",
    title: "Nybrogård Haveforening",
    description:
      "Haveforeningen er for beboere med grønne fingre, havedrømme eller bare lyst til lidt jord under neglene. Foreningen råder over CD-, LM- og NO-haverne samt kollegiets fælles bærbuske og frugttræer.",
    details: [
      "Haveforeningen har eksisteret siden 1978.",
      "Foreningen råder over CD-haverne, LM-haverne og NO-haverne.",
      "Der er cirka 46 haver i forskellige størrelser.",
      "Som medlem kan man få tildelt en have alene eller dele den med andre.",
      "Der findes haveredskaber, haveslange og trillebør til hvert haveareal.",
      "Der arrangeres fælles havedage i løbet af året.",
      "Tilmelding sker via haveformanden, og venteliste kan forekomme."
    ],
    facebook:
      "https://www.facebook.com/search/groups/?q=Nybrog%C3%A5rd%20Haveforening",
    images: [
      "assets/images/outdoor2.jpg",
      "assets/images/outdoor3.jpg"
    ]
  }
};

function initCommunityClubModal() {
  const modal = document.querySelector("[data-club-modal]");
  if (!modal) return;

  const titleEl = modal.querySelector("[data-club-modal-title]");
  const categoryEl = modal.querySelector("[data-club-modal-category]");
  const descriptionEl = modal.querySelector("[data-club-modal-description]");
  const detailsEl = modal.querySelector("[data-club-modal-details]");
  const imagesEl = modal.querySelector("[data-club-modal-images]");
  const facebookEl = modal.querySelector("[data-club-modal-facebook]");

  const clubTitleMap = {
    "kældercaféen": "kaeldercafeen",
    "kaeldercafeen": "kaeldercafeen",
    "motionsklubben": "motionsklubben",
    "kano- og kajaklauget": "kanolauget",
    "kano og kajaklauget": "kanolauget",
    "brætspilsklubben": "braetspilsklubben",
    "braetspilsklubben": "braetspilsklubben",
    "cykelværksted": "cykelvaerksted",
    "cykelvaerksted": "cykelvaerksted",
    "filmklubben": "filmklubben",
    "kunstklubben": "kunstklubben",
    "musikrummet": "musikrum",
    "bryggerklub": "bryggerklub",
    "bryggerklubben": "bryggerklub",
    "miljøgruppen": "miljoegruppen",
    "miljoegruppen": "miljoegruppen",
    "nybrogård haveforening": "haveforening",
    "nybrogaard haveforening": "haveforening",
    "haveforeningen": "haveforening"
  };

  function normalizeClubText(text) {
    return String(text || "")
      .toLowerCase()
      .trim()
      .replaceAll("æ", "ae")
      .replaceAll("ø", "oe")
      .replaceAll("å", "aa");
  }

  function getClubIdFromCard(card) {
    if (card.dataset.club && clubModalContent[card.dataset.club]) {
      return card.dataset.club;
    }

    if (card.id && clubModalContent[card.id]) {
      return card.id;
    }

    const title = card.querySelector("h2, h3, .club-title")?.textContent;
    const normalizedTitle = normalizeClubText(title);

    return clubTitleMap[normalizedTitle];
  }

  function createButton(clubId) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-sm btn-primary";
    button.dataset.clubModalOpen = clubId;
    button.textContent = "Læs mere";
    return button;
  }

  function createFacebookLink(url) {
    const link = document.createElement("a");
    link.className = "btn btn-sm btn-outline-secondary";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Find gruppe";
    return link;
  }

  function getOrCreateActions(card) {
    const existingActions = card.querySelector(".club-actions");

    if (existingActions) {
      return existingActions;
    }

    const oldActionLink = Array.from(card.querySelectorAll("a")).find((link) =>
      /læs mere|laes mere|facebook|find gruppe|regler|tilmelding/i.test(
        link.textContent
      )
    );

    if (oldActionLink?.parentElement) {
      oldActionLink.parentElement.classList.add("club-actions");
      return oldActionLink.parentElement;
    }

    const actions = document.createElement("div");
    actions.className = "club-actions";
    card.appendChild(actions);
    return actions;
  }

  function updateClubActions() {
    const clubCards = document.querySelectorAll(
      ".club-card, .community-club-card, [data-club-card]"
    );

    clubCards.forEach((card) => {
      const clubId = getClubIdFromCard(card);
      const club = clubModalContent[clubId];

      if (!club) return;

      const actions = getOrCreateActions(card);

      actions.replaceChildren(
        createButton(clubId),
        createFacebookLink(club.facebook)
      );
    });
  }

  function renderImages(images, title) {
    imagesEl.innerHTML = "";

    images.forEach((imageSrc, index) => {
      const image = document.createElement("img");
      image.src = imageSrc;
      image.alt = `${title} billede ${index + 1}`;
      image.loading = "lazy";

      image.onerror = () => {
        image.remove();
      };

      imagesEl.appendChild(image);
    });
  }

  function renderDetails(details) {
    detailsEl.innerHTML = "";

    details.forEach((detail) => {
      const item = document.createElement("li");
      item.textContent = detail;
      detailsEl.appendChild(item);
    });
  }

  function openModal(clubId) {
    const club = clubModalContent[clubId];
    if (!club) return;

    titleEl.textContent = club.title;
    categoryEl.textContent = club.category;
    descriptionEl.textContent = club.description;
    facebookEl.href = club.facebook;

    renderDetails(club.details);
    renderImages(club.images, club.title);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("club-modal-open");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("club-modal-open");
  }

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-club-modal-open]");
    const closeButton = event.target.closest("[data-club-modal-close]");

    if (openButton) {
      openModal(openButton.dataset.clubModalOpen);
    }

    if (closeButton) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  updateClubActions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCommunityClubModal);
} else {
  initCommunityClubModal();
}







/* =====================================================
   Fællesskab: prototype events pagination
   Shows nearest upcoming events first, then older posts
===================================================== */

function initCommunityEventsPagination() {
  const board = document.querySelector("[data-community-events-board]");
  if (!board) return;

  const featuredEl = board.querySelector("[data-event-featured]");
  const listEl = board.querySelector("[data-event-list]");
  const prevButton = board.querySelector("[data-events-prev]");
  const nextButton = board.querySelector("[data-events-next]");
  const pageStatus = board.querySelector("[data-events-page-status]");

  const eventPosts = [
    /* Newest / soon upcoming events */
    {
      date: "21. juni 2026",
      category: "Fællesskab",
      title: "Sommerdag ved fællesområderne",
      description:
        "En større fælles sommerdag med små aktiviteter, fællesspisning og hygge på tværs af gange og klubber.",
      note: "Kommende event"
    },
    {
      date: "14. juni 2026",
      category: "KælderCaféen",
      title: "Sommerbar i KælderCaféen",
      description:
        "Sommeraften med drinks, musik og fællesskab i caféen. En oplagt mulighed for at møde andre beboere før sommerferien.",
      note: "Kommende event"
    },
    {
      date: "7. juni 2026",
      category: "Velkomst",
      title: "Åben klubaften for nye beboere",
      description:
        "En uformel aften hvor nye beboere kan møde klubberne, stille spørgsmål og finde ud af, hvor de har lyst til at være med.",
      note: "Kommende event"
    },

    /* Older posts / archive */
    {
      date: "25. maj 2026",
      category: "Miljøgruppen",
      title: "Byttemarked i fællesområdet",
      description:
        "Beboere kunne give brugbare ting videre, finde gratis genbrugsguld og støtte en mere bæredygtig hverdag på kollegiet.",
      note: "Afholdt"
    },
    {
      date: "17. maj 2026",
      category: "Udeliv",
      title: "Fælles oprydning af udeområder",
      description:
        "Beboere mødtes til oprydning, affaldsindsamling og en hyggelig afslutning med snacks og fællesskab.",
      note: "Afholdt"
    },
    {
      date: "4. maj 2026",
      category: "Brætspil",
      title: "Brætspilsmaraton i CD-kælderen",
      description:
        "En lang spilaften med klassikere, nye spil og snacks for både erfarne spillere og nysgerrige beboere.",
      note: "Afholdt"
    },
    {
      date: "20. april 2026",
      category: "Haveforeningen",
      title: "Fælles havedag",
      description:
        "Haveforeningen inviterede til klargøring af haverne, introduktion til nye medlemmer og jord under neglene.",
      note: "Afholdt"
    },
    {
      date: "12. april 2026",
      category: "Filmklubben",
      title: "Filmquiz og fælles visning",
      description:
        "Filmklubben holdt temaaften i hjemmebiografen med quiz, snacks og fælles filmvisning i B-kælderen.",
      note: "Afholdt"
    },
    {
      date: "29. marts 2026",
      category: "Kunstklubben",
      title: "Kreativ søndag i atelieret",
      description:
        "En rolig kreativ eftermiddag med tegning, maling og introduktion til Kunstklubbens lokale i F-kælderen.",
      note: "Afholdt"
    }
  ];

  const postsPerPage = 3;
  let currentPage = 0;
  const totalPages = Math.ceil(eventPosts.length / postsPerPage);

  function createEventItem(event) {
    const article = document.createElement("article");
    article.className = "hero-news-mini-item community-event-item";

    article.innerHTML = `
      <div class="club-news-item-main">
        <span>${event.category}</span>
        <p>${event.title}</p>
        <small class="club-news-date">${event.date} · ${event.note}</small>
      </div>
    `;

    return article;
  }

  function createPlaceholderItem() {
    const article = document.createElement("article");
    article.className = "hero-news-mini-item community-event-item community-event-placeholder";
    article.setAttribute("aria-hidden", "true");

    article.innerHTML = `
      <div class="club-news-item-main">
        <span>Placeholder</span>
        <p>Placeholder</p>
        <small class="club-news-date">Placeholder</small>
      </div>
    `;

    return article;
  }

  function renderFeaturedEvent(event) {
    featuredEl.innerHTML = `
      <span class="hero-live-label">${event.category}</span>
      <p>${event.title}</p>
      <small class="club-news-date">${event.date} · ${event.note}</small>
      <p class="community-event-featured-text">
        ${event.description}
      </p>
    `;
  }

  function renderEvents() {
    const start = currentPage * postsPerPage;
    const visiblePosts = eventPosts.slice(start, start + postsPerPage);

    const featuredPost = visiblePosts[0];
    const listPosts = visiblePosts.slice(1);

    renderFeaturedEvent(featuredPost);

    listEl.innerHTML = "";

    listPosts.forEach((event) => {
      listEl.appendChild(createEventItem(event));
    });

    /*
      Keeps the card height stable.
      If the last page only has 1 event, invisible placeholders fill the missing space.
    */
    const missingListItems = postsPerPage - 1 - listPosts.length;

    for (let i = 0; i < missingListItems; i++) {
      listEl.appendChild(createPlaceholderItem());
    }

    pageStatus.textContent = `Side ${currentPage + 1} af ${totalPages}`;

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
  }

  prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderEvents();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      renderEvents();
    }
  });

  renderEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCommunityEventsPagination);
} else {
  initCommunityEventsPagination();
}