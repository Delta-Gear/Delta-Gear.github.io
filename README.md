# Devin Caulfield Portfolio

Personal portfolio site showcasing robotics, AI, and product development work.

## Tech Stack

- Static HTML, CSS, and JavaScript
- Shared header/footer components loaded client-side
- Per-project pages with reusable card snippets

## Project Structure

```
.
|- index.html
|- about.html
|- resume.html
|- assets/
|  |- css/style.css
|  |- includes/header.html
|  |- includes/footer.html
|  `- js/include-components.js
|- Projects/
|  `- <Project Name>/
|     |- index.html
|     |- card.html
|     `- images/
`- templates/
	 `- project-template.html
```

## Local Development

Because shared components and cards are loaded with `fetch`, run the site from a local web server instead of opening files directly.

PowerShell example:

```powershell
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## How Project Cards Work

- `index.html` contains card-list containers using `data-project-cards`.
- JavaScript fetches each `Projects/<Project Name>/card.html` and injects it into the list.
- Clicking a loaded card routes to `Projects/<Project Name>/index.html`.

## Adding a New Project

1. Create `Projects/<Project Name>/index.html`.
2. Create `Projects/<Project Name>/card.html`.
3. Add images under `Projects/<Project Name>/images/`.
4. Add the project folder name to the appropriate `data-project-cards` list in `index.html`.

## Notes

- Shared header/footer placeholders:
  - `<div data-include="header"></div>`
  - `<div data-include="footer"></div>`
- Include component loader before `</body>`:
  - `<script src="assets/js/include-components.js"></script>` (root pages)
  - `<script src="../../assets/js/include-components.js"></script>` (project pages)
