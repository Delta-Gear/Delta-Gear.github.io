// Load header and footer components
document.addEventListener("DOMContentLoaded", async function () {
  const isProjectPage = window.location.pathname.includes("/Projects/");
  const basePath = isProjectPage ? "../../" : "";

  function applySharedNavLinks(scope) {
    if (!scope) {
      return;
    }

    const targets = {
      home: `${basePath}index.html`,
      career: `${basePath}index.html#career-overview`,
      projects: `${basePath}index.html#portfolio`,
      resume: `${basePath}resume.html`,
    };

    scope.querySelectorAll("[data-nav-target]").forEach((link) => {
      const href = targets[link.dataset.navTarget];
      if (href) {
        link.setAttribute("href", href);
      }
    });
  }

  // Load header
  try {
    const headerResponse = await fetch(
      `${basePath}assets/includes/header.html`,
    );
    const headerHTML = await headerResponse.text();
    const headerPlaceholder = document.querySelector('[data-include="header"]');
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = headerHTML;
      applySharedNavLinks(document.querySelector(".site-header"));
    }
  } catch (error) {
    console.error("Error loading header:", error);
  }

  // Load footer
  try {
    const footerResponse = await fetch(
      `${basePath}assets/includes/footer.html`,
    );
    const footerHTML = await footerResponse.text();
    const footerPlaceholder = document.querySelector('[data-include="footer"]');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = footerHTML;
    }
  } catch (error) {
    console.error("Error loading footer:", error);
  }
});
