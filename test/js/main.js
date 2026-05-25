/* =====================================================
   Nybrogård Kollegiet - Main JavaScript
   Prototype interactions for the front page
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initShortcutSearch();
  initBackToTop();
});

/* -----------------------------
   Shortcut search / filter
----------------------------- */
function initShortcutSearch() {
  const searchInput = document.querySelector("#shortcutSearch");
  const shortcutItems = document.querySelectorAll("[data-shortcut]");
  const noResultsMessage = document.querySelector("#noShortcutResults");

  if (!searchInput || shortcutItems.length === 0) {
    return;
  }

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    let visibleItems = 0;

    shortcutItems.forEach((item) => {
      const keywords = item.dataset.shortcut.toLowerCase();
      const textContent = item.textContent.toLowerCase();
      const matchesSearch =
        keywords.includes(searchValue) || textContent.includes(searchValue);

      if (matchesSearch || searchValue === "") {
        item.classList.remove("d-none");
        visibleItems++;
      } else {
        item.classList.add("d-none");
      }
    });

    if (noResultsMessage) {
      if (visibleItems === 0) {
        noResultsMessage.classList.remove("d-none");
      } else {
        noResultsMessage.classList.add("d-none");
      }
    }
  });
}

/* -----------------------------
   Back to top button
----------------------------- */
function initBackToTop() {
  const backToTopButton = document.querySelector("#backToTop");

  if (!backToTopButton) {
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add("is-visible");
    } else {
      backToTopButton.classList.remove("is-visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}