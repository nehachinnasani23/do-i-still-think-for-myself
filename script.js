const instagramShare = document.querySelector("[data-copy-link]");
const copyFeedback = document.querySelector(".copy-feedback");

if (instagramShare) {
  instagramShare.addEventListener("click", async (event) => {
    event.preventDefault();

    const bookUrl = instagramShare.dataset.copyLink;

    try {
      await navigator.clipboard.writeText(bookUrl);
      if (copyFeedback) {
        copyFeedback.textContent = "Book link copied. Paste it into your Instagram post, story, or bio.";
      }
    } catch {
      if (copyFeedback) {
        copyFeedback.textContent = "Copy this link: " + bookUrl;
      }
    }
  });
}
