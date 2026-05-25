const copyButtons = document.querySelectorAll("[data-copy-link]");

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-999px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }
};

copyButtons.forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();

    const bookUrl = button.dataset.copyLink;
    const feedback = button.dataset.feedbackTarget
      ? document.querySelector(button.dataset.feedbackTarget)
      : button.closest("section")?.querySelector(".copy-feedback");
    const copied = await copyText(bookUrl);

    if (feedback) {
      feedback.textContent = copied
        ? button.dataset.copyMessage || "Book link copied."
        : "Copy this link: " + bookUrl;
    }
  });
});
