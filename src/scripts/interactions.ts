const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Reveal on scroll
const reveals = document.querySelectorAll<HTMLElement>(".reveal");
if (reduce || !("IntersectionObserver" in window)) {
  reveals.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }),
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  reveals.forEach((el) => io.observe(el));
}

// Card spotlight
document.querySelectorAll<HTMLElement>(".spot").forEach((el) => {
  el.addEventListener("pointermove", (event) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });
});

// Hero window flattens as you scroll
const tilt = document.querySelector<HTMLElement>("[data-tilt]");
if (tilt && !reduce) {
  let queued = false;
  const update = () => {
    queued = false;
    tilt.style.setProperty("--p", Math.min(Math.max(window.scrollY / 480, 0), 1).toFixed(3));
  };
  window.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
}

// Tab groups (with optional autoplay)
document.querySelectorAll<HTMLElement>("[data-tabgroup]").forEach((group) => {
  const tabs = Array.from(group.querySelectorAll<HTMLElement>("[data-tab]"));
  const panels = Array.from(group.querySelectorAll<HTMLElement>("[data-panel]"));
  const interval = reduce ? 0 : Number(group.dataset.autoplay || 0);
  const isTabs = tabs[0]?.getAttribute("role") === "tab";
  let current = 0;
  let timer: number | undefined;
  let userPicked = false;

  group.style.setProperty("--dur", `${interval}ms`);

  const select = (index: number) => {
    current = index;
    group.dataset.active = String(index + 1);
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.classList.toggle("is-active", on);
      tab.setAttribute(isTabs ? "aria-selected" : "aria-pressed", String(on));
      if (isTabs) tab.tabIndex = on ? 0 : -1;
    });
    panels.forEach((panel, i) => { panel.hidden = i !== index; });
  };

  const stop = () => { window.clearInterval(timer); timer = undefined; };
  const start = () => {
    if (!interval || userPicked || timer) return;
    timer = window.setInterval(() => select((current + 1) % tabs.length), interval);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => { userPicked = true; stop(); group.classList.add("is-manual"); select(index); });
    tab.addEventListener("keydown", (event) => {
      if (!isTabs || (event.key !== "ArrowRight" && event.key !== "ArrowLeft")) return;
      event.preventDefault();
      const next = (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
    });
  });

  group.addEventListener("pointerenter", stop);
  group.addEventListener("pointerleave", start);

  select(0);
  if (interval && "IntersectionObserver" in window) {
    new IntersectionObserver((entries) => entries.forEach((entry) => (entry.isIntersecting ? start() : stop())), { threshold: 0.35 }).observe(group);
  } else {
    start();
  }
});

// FAQ: one open at a time
const faqItems = Array.from(document.querySelectorAll<HTMLDetailsElement>(".faq-item"));
faqItems.forEach((item) => item.addEventListener("toggle", () => {
  if (item.open) faqItems.forEach((other) => { if (other !== item) other.open = false; });
}));

// Copy CNPJ
document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((btn) => {
  const label = btn.querySelector<HTMLElement>("[data-copy-label]");
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy || "");
      if (label) label.textContent = "Copiado ✓";
    } catch {
      const text = btn.parentElement?.querySelector("[data-copy-text]");
      if (text) window.getSelection()?.selectAllChildren(text);
      if (label) label.textContent = "Selecionado";
    }
    btn.classList.add("is-done");
    window.setTimeout(() => { if (label) label.textContent = "Copiar"; btn.classList.remove("is-done"); }, 2000);
  });
});

// Sticky CTA: visible after the hero buttons, hidden near the final CTA
const sticky = document.querySelector<HTMLElement>("[data-sticky]");
const heroActions = document.querySelector(".hero-actions");
const finalCta = document.querySelector("#contato");
if (sticky && heroActions && finalCta && "IntersectionObserver" in window) {
  let pastHero = false;
  let atEnd = false;
  const sync = () => {
    const show = pastHero && !atEnd;
    sticky.classList.toggle("is-on", show);
    sticky.setAttribute("aria-hidden", String(!show));
    sticky.tabIndex = show ? 0 : -1;
  };
  new IntersectionObserver(([entry]) => { pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0; sync(); }).observe(heroActions);
  new IntersectionObserver(([entry]) => { atEnd = entry.isIntersecting; sync(); }, { threshold: 0.25 }).observe(finalCta);
}

// Count-up numbers
document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const format = (value: number) => Math.round(value).toLocaleString("pt-BR") + suffix;
  if (reduce || !("IntersectionObserver" in window)) return;
  el.textContent = format(0);
  new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1600, 1);
      el.textContent = format(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, { threshold: 0.6 }).observe(el);
});
