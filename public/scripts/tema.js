(() => {
  const root = document.documentElement;
  const storageKey = "theme";
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

  let theme = prefersDark ? "dark" : "light";
  try {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === "dark" || savedTheme === "light") theme = savedTheme;
  } catch {
    // Theme still follows the system preference when storage is unavailable.
  }

  const applyTheme = (nextTheme) => {
    theme = nextTheme;
    root.setAttribute("data-theme", theme);

    const button = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
    if (button) {
      button.setAttribute("aria-pressed", String(theme === "dark"));
      button.setAttribute(
        "aria-label",
        theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro",
      );
    }
    if (icon) icon.textContent = theme === "dark" ? "light_mode" : "dark_mode";
  };

  applyTheme(theme);

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("theme-toggle")?.addEventListener("click", () => {
      const nextTheme = theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch {
        // The current page can still switch themes without persistent storage.
      }
      applyTheme(nextTheme);
    });
  });
})();
