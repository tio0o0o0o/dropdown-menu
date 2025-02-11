class Dropdown {
  static #getCorrespondingContent(button) {
    const contents = Array.from(document.querySelectorAll(".dropdown-content"));
    return contents.find((value) => value.id === button.dataset.for);
  }

  static #initializeClickDropdown(button) {
    const content = this.#getCorrespondingContent(button);
    content.style.display = "none";
    button.addEventListener("click", (event) => {
      if (content.style.display === "none") {
        content.style.display = "block";
        event.stopPropagation();
      }
    });
    document.addEventListener("click", () => {
      if (content.style.display === "block") content.style.display = "none";
    });
  }

  static #initializeToggleDropdown(button) {
    const content = this.#getCorrespondingContent(button);
    content.style.display = "none";
    button.addEventListener("click", (event) => {
      if (content.style.display === "none") content.style.display = "block";
      else content.style.display = "none";
    });
  }

  static #initializeHoverDropdown(button) {
    const content = this.#getCorrespondingContent(button);
    content.style.display = "none";
    button.addEventListener("mouseenter", () => {
      content.style.display = "block";
    });
    button.addEventListener("mouseleave", () => {
      content.style.display = "none";
    });
  }

  static initializeDropdowns() {
    Array.from(document.querySelectorAll(".dropdown-button-click")).forEach(
      (button) => {
        this.#initializeClickDropdown(button);
      }
    );

    Array.from(document.querySelectorAll(".dropdown-button-hover")).forEach(
      (button) => {
        this.#initializeHoverDropdown(button);
      }
    );

    Array.from(document.querySelectorAll(".dropdown-button-toggle")).forEach(
      (button) => {
        this.#initializeToggleDropdown(button);
      }
    );
  }
}

exports.initializeDropdowns = Dropdown.initializeDropdowns;
