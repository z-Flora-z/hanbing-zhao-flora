const header = document.querySelector(".site-header");
const contactModal = document.querySelector("[data-contact-modal]");
const contactOpenButtons = document.querySelectorAll("[data-contact-open]");
const contactCloseButtons = document.querySelectorAll("[data-contact-close]");
const copyButtons = document.querySelectorAll("[data-copy]");
const copyStatus = document.querySelector("[data-copy-status]");

const updateHeader = () => {
  if (window.scrollY > 12) {
    header?.classList.add("is-scrolled");
  } else {
    header?.classList.remove("is-scrolled");
  }
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const openContactModal = () => {
  copyStatus.textContent = "";

  if (contactModal?.showModal && !contactModal.open) {
    contactModal.showModal();
  }
};

const closeContactModal = () => {
  if (contactModal?.open) {
    contactModal.close();
  }
};

contactOpenButtons.forEach((button) => {
  button.addEventListener("click", openContactModal);
});

contactCloseButtons.forEach((button) => {
  button.addEventListener("click", closeContactModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactModal?.open) {
    closeContactModal();
  }
});

contactModal?.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    closeContactModal();
  }
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      copyStatus.textContent = "Copied to clipboard.";
    } catch {
      copyStatus.textContent = value;
    }
  });
});
