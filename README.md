# Christian Apologetics Talks

A sub-site for **talks.developingapologist.com** that showcases Christian apologetics presentations for *The Developing Apologist*.

## 🎯 Features

- **Hero Section** with tagline: "Equipping Believers with Reasoned Faith — One Talk at a Time."
- **Responsive Card Grid** displaying all presentations
- **Filter by Difficulty** (Beginner, Intermediate, Advanced)
- **YouTube Embeds** with lazy loading
- **GitHub Pages Integration** for slides
- **Blog Post Links** for related content
- **Tag System** for categorization
- **Dark Mode** developer aesthetic matching the main site
- **Shared Layouts** with responsive navbar and footer components
- **Work in Progress Badge** with toggle functionality

## 🛠 Tech Stack

- **Eleventy (11ty)** - Static site generation
- **Nunjucks (njk)** - Templating engine
- **Tailwind CSS** - Styling framework
- **Luxon** - Date formatting for dynamic content
- **Shared CSS** - Reuses styles from main site (`../website/src/css`)
- **Shared Layouts** - Git submodule for consistent branding across sites

## 📁 Project Structure

```
talks/
├── src/
│   ├── _data/
│   │   ├── talks.js          # Presentation data
│   │   └── site.js           # Site configuration for shared layouts
│   ├── _includes/
│   │   ├── base.njk          # Base layout template (uses shared components)
│   │   └── shared/           # Git submodule for shared layouts
│   │       └── includes/
│   │           └── components/
│   │               ├── navbar.njk
│   │               └── footer.njk
│   ├── css/
│   │   └── main.css          # Main stylesheet
│   └── index.njk             # Homepage
├── package.json
├── tailwind.config.js
├── eleventy.config.js
├── postcss.config.js
├── CNAME                     # Subdomain configuration
├── _redirects               # Netlify redirects
└── .gitmodules              # Git submodule configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone with submodules:**
   ```bash
   git clone --recursive <repository-url>
   # Or if already cloned:
   git submodule update --init --recursive
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build CSS:**
   ```bash
   npm run build:css
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build:full
   ```

## 🎨 Shared Layouts

This project uses shared layouts from the `developing-apologist/shared-layouts` repository as a Git submodule for consistent branding across all sites.

### Features

- ✅ **Responsive navbar** with mobile hamburger menu
- ✅ **Footer component** with brand section and quick links
- ✅ **Work in progress badge** (toggleable)
- ✅ **Custom color scheme** integration
- ✅ **Luxon date formatting** for copyright year
- ✅ **Dynamic navigation active states**
- ✅ **SEO meta tags** and Open Graph support

### Configuration

All site configuration is centralized in `src/_data/site.js`:

- **Logo**: `logo_image`, `logo_alt`
- **Site Info**: `site_title`, `site_description`
- **Navigation**: `nav_links` array with active state detection
- **Footer**: Section titles, visibility toggles
- **Badge**: `show_wip_badge` toggle

### Usage

The existing `base.njk` layout has been updated to use shared components. Simply use it as before:

```njk
---
layout: base.njk
title: Your Page Title
description: Your page description
---

<div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-vs-fg">
        Your Page Content
    </h1>
    
    <p class="text-gray-300">
        This content will be wrapped in the layout with shared navbar and footer.
    </p>
</div>
```

### Using Individual Components

You can also use the navbar and footer components individually in any template:

```njk
<!-- Navigation -->
{% set logo_image = site.logo_image %}
{% set logo_alt = site.logo_alt %}
{% set site_title = site.site_title %}
{% set show_wip_badge = site.show_wip_badge %}
{% set nav_links = site.nav_links %}
{% include "shared/includes/components/navbar.njk" %}

<!-- Footer -->
{% set logo_image = site.logo_image %}
{% set logo_alt = site.logo_alt %}
{% set site_title = site.site_title %}
{% set site_description = site.site_description %}
{% set show_wip_badge = site.show_wip_badge %}
{% set nav_links = site.nav_links %}
{% set quick_links_title = site.quick_links_title %}
{% set show_quick_links = site.show_quick_links %}
{% set show_resources = site.show_resources %}
{% set copyright_text = site.copyright_text %}
{% include "shared/includes/components/footer.njk" %}
```

### Updating Shared Layouts

To update the shared layouts to the latest version:

```bash
# Update the submodule
git submodule update --remote

# Commit the update
git add src/_includes/shared
git commit -m "Update shared layouts submodule"
```

### Customization

#### Colors
The shared layouts use the custom color scheme defined in `tailwind.config.js`:
- `logo-steel`, `logo-circuit`, `logo-orange`, `logo-blue`, `logo-glow`
- `vs-fg` for text colors

#### Navigation Active States
Update the `active` property in `site.js` to reflect the current page:

```javascript
nav_links: [
    { href: "/", label: "Home", active: page.url == "/" },
    { href: "/about/", label: "About", active: page.url == "/about/" }
]
```

#### Footer Sections
Control footer visibility and titles:

```javascript
show_quick_links: true,
show_resources: false, // Set to false to hide resources section
quick_links_title: "Quick Links"
```

### Current Configuration

The current setup includes:
- **Navigation**: Links to main site, about, blog, and presentations (with presentations marked as active)
- **Footer**: Quick links section using navigation data, resources section disabled
- **Work in Progress Badge**: Enabled
- **Date Formatting**: Using Luxon for dynamic copyright year

## 📝 Adding New Talks

To add a new presentation, edit `src/_data/talks.js` and add a new object:

```javascript
{
  id: "unique-talk-id",
  title: "Talk Title",
  description: "Brief description of the talk content...",
  slides: "https://developingapologist.github.io/talks/talk-id",
  youtube: "https://www.youtube.com/embed/VIDEO_ID", // or null
  blog: "https://developingapologist.com/blog/post-url", // or null
  tags: ["Beginner", "Philosophy", "Category"],
  date: "2024-01-15",
  duration: "45 minutes"
}
```

### Talk Properties

- **id**: Unique identifier for the talk
- **title**: Presentation title
- **description**: Brief description (2-3 sentences)
- **slides**: Link to GitHub Pages slides (or null)
- **youtube**: YouTube embed URL (or null for upcoming)
- **blog**: Related blog post URL (or null)
- **tags**: Array of tags (first tag should be difficulty level)
- **date**: Presentation date (YYYY-MM-DD)
- **duration**: Talk duration

## 🎨 Customization

### Styling

The site uses the same color scheme and styling as the main site:

- **Primary Colors**: Logo blue (#00BFFF), orange (#FFA500)
- **Background**: Dark navy (#0A0F1C), steel gray (#1C2B3A)
- **Accents**: Circuit blue (#124B70), glow blue (#3ECFFF)

### CSS Structure

- Main styles: `src/css/main.css`
- Imports shared styles from: `../website/src/css/main.css`
- Tailwind config: `tailwind.config.js`

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: recursive
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run build:full
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

### Netlify

1. Connect repository to Netlify
2. Set build command: `npm run build:full`
3. Set publish directory: `_site`
4. Add custom domain: `talks.developingapologist.com`

## 🔧 Development

### Available Scripts

- `npm run build` - Build the site
- `npm run build:css` - Build CSS only
- `npm run build:full` - Build CSS and site
- `npm run start` - Start development server
- `npm run dev` - Start with CSS watching
- `npm run clean` - Clean build directory

### CSS Development

The site imports shared styles from the main site. To modify shared styles:

1. Edit `../website/src/css/main.css`
2. Rebuild CSS: `npm run build:css`

## 📊 Performance

- **Lazy Loading**: YouTube embeds load only when visible
- **Optimized CSS**: Tailwind purges unused styles
- **Static Generation**: Fast loading with Eleventy
- **Responsive Images**: Optimized for all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- **Main Site**: https://developingapologist.com
- **Blog**: https://developingapologist.com/blog
- **GitHub**: https://github.com/developingapologist
- **Talks Site**: https://talks.developingapologist.com

---

Built with ❤️ for equipping believers with reasoned faith.
