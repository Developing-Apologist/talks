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

## 🛠 Tech Stack

- **Eleventy (11ty)** - Static site generation
- **Nunjucks (njk)** - Templating engine
- **Tailwind CSS** - Styling framework
- **Shared CSS** - Reuses styles from main site (`../website/src/css`)

## 📁 Project Structure

```
talks/
├── src/
│   ├── _data/
│   │   └── talks.js          # Presentation data
│   ├── _includes/
│   │   └── base.njk          # Base layout template
│   ├── css/
│   │   └── main.css          # Main stylesheet
│   └── index.njk             # Homepage
├── package.json
├── tailwind.config.js
├── eleventy.config.js
├── postcss.config.js
├── CNAME                     # Subdomain configuration
└── _redirects               # Netlify redirects
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build CSS:**
   ```bash
   npm run build:css
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build:full
   ```

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
