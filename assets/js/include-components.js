// Load header and footer components
document.addEventListener("DOMContentLoaded", async function () {
  const isProjectPage = window.location.pathname.includes("/Projects/");
  const basePath = isProjectPage ? "../../" : "";

  function rewriteProjectPaths(html) {
    return html.replace(
      /(\b(?:src|href)=["'])Projects\//g,
      "$1../../Projects/",
    );
  }

  async function loadInlineIncludes() {
    const includeTargets = document.querySelectorAll("[data-include-path]");

    for (const target of includeTargets) {
      const includePath = target.dataset.includePath;

      if (!includePath) {
        continue;
      }

      try {
        const response = await fetch(includePath);

        if (!response.ok) {
          console.error(`Error loading include: ${includePath}`);
          continue;
        }

        let includeHTML = await response.text();

        if (target.dataset.rewriteProjectPaths === "true") {
          includeHTML = rewriteProjectPaths(includeHTML);
        }

        target.outerHTML = includeHTML;
      } catch (error) {
        console.error(`Error loading include ${includePath}:`, error);
      }
    }
  }

  function applySharedAssetPaths(scope) {
    if (!scope) {
      return;
    }

    scope.querySelectorAll("[data-shared-src]").forEach((element) => {
      element.setAttribute("src", `${basePath}${element.dataset.sharedSrc}`);
    });
  }

  function applySharedNavLinks(scope) {
    if (!scope) {
      return;
    }

    const targets = {
      home: `${basePath}index.html`,
      about: `${basePath}about.html`,
      career: `${basePath}index.html#career-overview`,
      projects: `${basePath}index.html#skill-product-design`,
      skills: `${basePath}index.html#skills`,
      resume: `${basePath}resume.html`,
    };

    scope.querySelectorAll("[data-nav-target]").forEach((link) => {
      const href = targets[link.dataset.navTarget];
      if (href) {
        link.setAttribute("href", href);
      }
    });
  }

  function setupHeaderOffsetNav(scope) {
    if (!scope) {
      return;
    }

    const careerLink = scope.querySelector('[data-nav-target="career"]');
    if (!careerLink) {
      return;
    }

    careerLink.addEventListener("click", (event) => {
      const href = careerLink.getAttribute("href");
      if (!href || !href.includes("#")) {
        return;
      }

      const hashIndex = href.indexOf("#");
      const targetHash = href.slice(hashIndex);
      const target = document.querySelector(targetHash);

      if (!target) {
        return;
      }

      event.preventDefault();

      const siteHeader = document.querySelector(".site-header");
      const headerOffset = siteHeader ? siteHeader.offsetHeight : 0;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "smooth",
      });

      history.replaceState(null, "", targetHash);
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
      applySharedAssetPaths(document.querySelector(".site-header"));
      applySharedNavLinks(document.querySelector(".site-header"));
      setupHeaderOffsetNav(document.querySelector(".site-header"));
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
      applySharedAssetPaths(document.querySelector(".site-footer"));
      applySharedNavLinks(document.querySelector(".site-footer"));
    }
  } catch (error) {
    console.error("Error loading footer:", error);
  }

  // Load page-level partials (for example, project card snippets)
  await loadInlineIncludes();
});
