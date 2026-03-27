/* ── Mobile nav toggle ── */
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-site-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });
}

/* ── Smooth scroll for on-page anchors ── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      nav?.classList.remove("is-open");
    }
  });
});

/* ── Scroll-reveal (IntersectionObserver) ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll("[data-reveal]").forEach((el) => {
  revealObserver.observe(el);
});

/* ── Scroll progress bar ── */
const progressBar = document.querySelector(".scroll-progress");

function updateProgress() {
  if (!progressBar) return;
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct = total > 0 ? (scrolled / total) * 100 : 0;
  progressBar.style.width = pct + "%";
}

/* ── Back-to-top button ── */
const backToTop = document.querySelector(".back-to-top");

function onScroll() {
  updateProgress();
  if (!backToTop) return;
  if (window.scrollY > 400) {
    backToTop.classList.add("is-visible");
  } else {
    backToTop.classList.remove("is-visible");
  }
}

window.addEventListener("scroll", onScroll, { passive: true });

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ── Active nav link (auto-detect current page) ── */
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav__links a").forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
