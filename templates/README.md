# Portfolio Templates & Components

## Shared Header and Footer System

The site now uses **dynamically loaded header and footer components** that are automatically injected into all pages. This ensures consistent navigation and branding across the entire site without code duplication.

### Component Files

- [assets/includes/header.html](/assets/includes/header.html) - Global header component
- [assets/includes/footer.html](/assets/includes/footer.html) - Global footer component
- [assets/js/include-components.js](/assets/js/include-components.js) - Script that loads and injects components

## NEW: Using Shared Components

Every page should include these elements:

### 1. Placeholder Divs

Add these placeholder divs in your HTML (the JavaScript will replace them with the actual header/footer):

```html
<div data-include="header"></div>
<!-- page content -->
<div data-include="footer"></div>
```

### 2. Stylesheet Link

In the `<head>` section:

```html
<link rel="stylesheet" href="../../assets/css/style.css" />
```

### 3. Component Loader Script

At the end of the `<body>` section:

```html
<script src="../../assets/js/include-components.js"></script>
```

## DEPRECATED: Header Template (No longer needed)

Use this header on every page to maintain consistent navigation:

```html
<header class="site-header">
  <div class="site-header-inner">
    <a href="../../index.html" class="site-name">Devin Caulfield</a>
    <nav class="site-nav">
      <ul>
        <li><a href="../../index.html">Portfolio</a></li>
        <li><a href="../../about.html">About</a></li>
      </ul>
    </nav>
  </div>
</header>
```

**Note:** Adjust the `href` paths based on the page's location:

- For pages in `Projects/<project>/index.html`, use `../../index.html`
- For pages in the root directory, use `index.html`

## Footer Template

Use this footer on every page:

```html
<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-section">
      <h3>Contact</h3>
      <p>
        Email:
        <a href="mailto:your.email@example.com">your.email@example.com</a>
      </p>
      <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
      <p>Location: Boston, MA</p>
    </div>

    <div class="footer-section">
      <h3>Connect</h3>
      <div class="social-links">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          title="LinkedIn"
          >in</a
        >
        <a href="https://github.com/yourprofile" target="_blank" title="GitHub"
          >gh</a
        >
      </div>
    </div>

    <div class="footer-section">
      <h3>Quick Links</h3>
      <p><a href="../../index.html">Portfolio</a></p>
      <p><a href="../../about.html">About</a></p>
      <p><a href="../../index.html#skills">Skills</a></p>
      <p><a href="../../index.html#career-overview">Career</a></p>
    </div>
  </div>
</footer>
```

**Note:** Adjust the `href` paths based on the page's location, similar to the header.

## Stylesheet Link

Every page should include this link in the `<head>`:

```html
<link rel="stylesheet" href="../../assets/css/style.css" />
```

For pages in the root directory:

```html
<link rel="stylesheet" href="assets/css/style.css" />
```

## Page Template Structure

Here's a complete template for new pages:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title | Devin Caulfield</title>
    <link rel="stylesheet" href="../../assets/css/style.css" />
  </head>
  <body>
    <!-- HEADER -->
    <header class="site-header">
      <div class="site-header-inner">
        <a href="../../index.html" class="site-name">Devin Caulfield</a>
        <nav class="site-nav">
          <ul>
            <li><a href="../../index.html">Portfolio</a></li>
            <li><a href="../../about.html">About</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main>
      <!-- Add your content here -->
    </main>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Contact</h3>
          <p>
            Email:
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
          <p>Location: Boston, MA</p>
        </div>

        <div class="footer-section">
          <h3>Connect</h3>
          <div class="social-links">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              title="LinkedIn"
              >in</a
            >
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              title="GitHub"
              >gh</a
            >
          </div>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <p><a href="../../index.html">Portfolio</a></p>
          <p><a href="../../about.html">About</a></p>
          <p><a href="../../index.html#skills">Skills</a></p>
          <p><a href="../../index.html#career-overview">Career</a></p>
        </div>
      </div>
    </footer>
  </body>
</html>
```

## NEW: Project Page Template

All project pages follow this structure:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project Name | Devin Caulfield</title>
    <link rel="stylesheet" href="../../assets/css/style.css" />
  </head>
  <body>
    <div data-include="header"></div>

    <main>
      <section class="hero-section">
        <div class="site-container">
          <div class="hero-card">
            <div class="hero-image">
              <img src="images/hero.jpg" alt="Project Name" />
            </div>
            <div class="hero-content">
              <div class="hero-eyebrow">Project Category</div>
              <h1>Project Title</h1>
              <p>Brief project description.</p>
              <div class="hero-buttons">
                <a href="../../index.html#portfolio" class="btn-primary"
                  >Back to Portfolio</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="article-section">
        <div class="site-container">
          <article class="article-content">
            <h2>Overview</h2>
            <p>Overview content...</p>

            <h2>Problem Statement</h2>
            <p>Problem content...</p>

            <h2>Solution & Approach</h2>
            <p>Solution content...</p>

            <h2>Results & Outcomes</h2>
            <p>Results content...</p>

            <h2>Key Learnings</h2>
            <p>Learnings content...</p>
          </article>
        </div>
      </section>
    </main>

    <div data-include="footer"></div>
    <script src="../../assets/js/include-components.js"></script>
  </body>
</html>
```

## Current Site Status

All pages now use the shared component system:

| Page               | Location                                   | Status           |
| ------------------ | ------------------------------------------ | ---------------- |
| Portfolio          | `/index.html`                              | ✅ Updated       |
| About              | `/about.html`                              | ✅ Updated       |
| BMC Kilo Redesign  | `/Projects/BMC - Kilo Redesign/index.html` | ✅ Updated       |
| All Other Projects | `/Projects/*/index.html`                   | ✅ All populated |

## Benefits of Shared Components

1. **Single Source of Truth** - Header and footer code exists once
2. **Consistency** - All pages have identical navigation and branding
3. **Easy Maintenance** - Update header/footer globally in one file
4. **Reduced Duplication** - Less duplicated code across multiple pages
5. **Separation of Concerns** - Content creators focus on page content, not boilerplate

## Adding a New Project

1. Create a folder: `/Projects/Your-Project-Name/`
2. Create `index.html` using the Project Page Template above
3. Create an `images/` folder for project images
4. The shared header/footer will automatically appear on your page when loaded

## All pages automatically inherit styling from `assets/css/style.css`.
