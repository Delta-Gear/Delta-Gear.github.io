// Project Navigation Script
document.addEventListener("DOMContentLoaded", async function () {
  const isProjectPage = window.location.pathname.includes("/Projects/");

  if (!isProjectPage) {
    return;
  }

  // Get current project folder name from URL
  const pathParts = window.location.pathname.split("/");
  const currentProjectIndex = pathParts.indexOf("Projects");
  const currentProjectFolder = pathParts[currentProjectIndex + 1];

  // List of all projects
  const allProjects = [
    "BMC - Kilo Redesign",
    "BMC - Retinal Imaging Machine",
    "BU - Med Robot - Haptic End Effector",
    "BU - Robotic Pose Estimation AI",
    "BU - WIPERS",
    "DC - Kaleidoscope Lamp",
    "DC - Ouija",
    "Lenze",
    "MIT - Google Streetview",
    "MIT - Malaria Detection",
    "UM - DFAM Decision Tool",
    "UM - FEA Sim of Bone",
    "UM - Particulate Mask",
  ];

  // Get other projects (excluding current)
  const otherProjects = allProjects.filter(
    (project) => project !== currentProjectFolder,
  );

  // Function to load project metadata from the project card partial
  async function loadProjectCard(projectFolder) {
    try {
      const response = await fetch(`../../Projects/${projectFolder}/card.html`);
      if (response.ok) {
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const image = doc.querySelector(".project-image img");
        const title = doc.querySelector(".project-title")?.textContent?.trim();
        const tagline = doc
          .querySelector(".project-tagline")
          ?.textContent?.trim();
        const imageSrc = image?.getAttribute("src")?.trim();
        const imageAlt = image?.getAttribute("alt")?.trim() || title;

        if (!title || !tagline || !imageSrc) {
          return null;
        }

        return {
          folder: projectFolder,
          title,
          tagline,
          imageSrc: `../../${imageSrc}`,
          imageAlt,
        };
      }
    } catch (error) {
      console.error(`Error loading project ${projectFolder}:`, error);
    }
    return null;
  }

  // Load and display explore projects
  async function loadExploreProjects() {
    const exploreGrid = document.getElementById("explore-projects-grid");
    if (!exploreGrid) {
      return;
    }

    // Load exactly 2 random projects
    const projectsToShow = otherProjects
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(2, otherProjects.length));

    for (const projectFolder of projectsToShow) {
      const projectData = await loadProjectCard(projectFolder);
      if (projectData) {
        const cardWrapper = document.createElement("a");
        const image = document.createElement("img");
        const media = document.createElement("div");
        const content = document.createElement("div");
        const title = document.createElement("h3");
        const subtitle = document.createElement("p");

        cardWrapper.href = `../../Projects/${projectFolder}/index.html`;
        cardWrapper.className = "explore-project-link";

        media.className = "explore-project-media";
        image.className = "explore-project-image";
        image.src = projectData.imageSrc;
        image.alt = projectData.imageAlt;
        media.appendChild(image);

        content.className = "explore-project-content";

        title.className = "explore-project-title";
        title.textContent = projectData.title;

        subtitle.className = "explore-project-subtitle";
        subtitle.textContent = projectData.tagline;

        content.append(title, subtitle);
        cardWrapper.append(media, content);

        exploreGrid.appendChild(cardWrapper);
      }
    }
  }

  // Load explore projects
  await loadExploreProjects();
});
