# Devin Caulfield Portfolio

Personal portfolio site showcasing robotics, AI, and product development work. Hosted at [delta-gear.github.io](https://delta-gear.github.io).

## Projects

### Boston Micromachines

- Kilo Redesign - Product redesign for medical device
- Retinal Imaging Machine - Optical imaging system

### Boston University

- Med Robot - Haptic End Effector - Surgical robotics haptic feedback
- PolyFueler - Alternative fuel system
- Robotic Pose Estimation AI - AI-powered pose detection
- WIPERS - Smart wiping system

### Personal

- Kaleidoscope Lamp - Interactive lighting installation
- Ouija - Experimental design project

### Lenze

- Lenze - Industrial automation project

### MIT

- Google Streetview - Computer vision application
- Malaria Detection - Medical imaging and AI

### UMass

- DFAM Decision Tool - Design decision support system
- FEA Simulation of Bone - Finite element analysis
- Particulate Mask - Respiratory protection design

## Tech Stack

- Static HTML, CSS, and JavaScript
- Shared header/footer components loaded client-side via `fetch`
- Per-project pages with reusable card snippets
- Responsive grid layouts with CSS custom properties

## Architecture

### File Structure

```
.
|- index.html (Home Page)
|- about.html
|- resume.html
|- assets/
|  |- resume.pdf
|  |- css/style.css
|  |- images/
|  |- includes/
|  |  |- header.html
|  |  `- footer.html
|  `- js/
|     |- include-components.js
|     `- project-navigation.js
|- Projects/
|  `- [Project Name]/
|     |- index.html
|     |- card.html
|     `- images/
`- templates/
   `- project-template.html
```

### How It Works

- **Home Page** (`index.html`) contains card-list containers using `data-project-cards` attributes
- **Project Navigation Script** (`project-navigation.js`) dynamically fetches each `Projects/[Project Name]/card.html` and injects into the grid
- **Card Clicks** route to `Projects/[Project Name]/index.html` with full project details
- **Shared Components** (header/footer) are loaded client-side via `include-components.js`

### Project Page Template

Each project page follows a consistent structure:

1. **Metadata Section** - Project overview with key details and experience sidebar
2. **Article Section** - Main content in alternating blog-row layout (text + paired images)
3. **Explore Section** - Grid of other projects with navigation

### Shared Component Placeholders

```html
<div data-include="header"></div>
<div data-include="footer"></div>
```

Include the component loader script before `</body>`:

- Root pages: `<script src="assets/js/include-components.js"></script>`
- Project pages: `<script src="../../assets/js/include-components.js"></script>`
