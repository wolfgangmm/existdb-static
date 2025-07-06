# eXist-db Static Website

A static website for the eXist-db project, built with [Eleventy](https://www.11ty.dev/) (v3.0). This site serves as the news and announcements platform for the eXist-db XML database project.

## About eXist-db

[eXist-db](https://exist-db.org/) is an open-source NoSQL database built entirely with XML technology. It provides XQuery, XSLT, XPath, and other XML standards for querying and transforming data.

## Project Overview

This static website provides:
- **News and Announcements**: Latest updates about eXist-db releases and development
- **Blog Posts**: Technical articles, tutorials, and community updates
- **Documentation Links**: Direct access to eXist-db documentation
- **RSS Feed**: Atom feed for staying updated with the latest news

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/exist-db/static-website.git
cd static-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080`

## Project Structure

```
static-website/
├── content/                 # Content files (Markdown, Nunjucks)
│   ├── blog/               # Blog posts
│   └── index.njk           # Home page
├── _includes/              # Template includes
│   ├── layouts/            # Page layouts
│   │   ├── base.njk        # Base HTML template
│   │   ├── home.njk        # Home page layout
│   │   └── post.njk        # Blog post layout
│   └── partials/           # Reusable components
│       ├── menubar.njk     # Navigation menu component
│       ├── footer.njk      # Footer component
│       └── tagcloud.njk    # Tag cloud component
├── _data/                  # Global data files
├── public/                 # Static assets
│   ├── css/               # Compiled CSS
│   ├── img/               # Images
│   └── js/                # JavaScript files
├── sass/                  # SCSS source files
└── eleventy.config.js     # Eleventy configuration
```

## Development

### Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build for production
- `npm run build:css` - Compile SCSS to CSS only
- `npm run start-ghpages` - Start server with GitHub Pages path prefix
- `npm run debug` - Run with debug logging

### Adding Content

#### Blog Posts

1. Create a new Markdown file in `content/blog/`
2. Use the following front matter structure:
```yaml
---
title: "Your Post Title"
date: 2024-01-01
tags: ["posts"]
author_display: "Author Name"
---
```

3. Write your content in Markdown
4. The post will automatically appear in the blog listing and RSS feed

#### Pages

1. Create a new Markdown or Nunjucks file in `content/`
2. Add navigation metadata if needed:
```yaml
---
eleventyNavigation:
  key: "Page Name"
  order: 1
---
```

### Styling

The site uses:
- **Bootstrap 5.3.7** for responsive layout and components
- **Bootstrap Icons** for icons
- **Custom SCSS** in `sass/main.scss` for project-specific styles
- **Sass** compilation for CSS preprocessing

### Image Handling

Images are automatically optimized using Eleventy's image plugin:
- Supports multiple formats (AVIF, WebP, JPEG)
- Automatic lazy loading
- Responsive sizing
- Place images in `public/img/` and reference them in your content

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed setup instructions.

### Manual Deployment

1. Build the site:
```bash
npm run build
```

2. The built site will be in the `_site/` directory

## Features

- **Static Site Generation**: Fast, secure, and SEO-friendly
- **Responsive Design**: Works on all devices
- **RSS Feed**: Atom feed for news updates
- **Tag System**: Automatic tag pages and filtering
- **Syntax Highlighting**: Code blocks with Prism.js
- **Table of Contents**: Automatic TOC generation for posts
- **Heading Anchors**: Deep linking to sections
- **Image Optimization**: Automatic image processing and optimization
- **Draft Support**: Mark posts as drafts during development

## Configuration

### Eleventy Configuration

Key configuration options in `eleventy.config.js`:
- **Input Directory**: `content/`
- **Output Directory**: `_site/`
- **Template Engine**: Nunjucks for HTML, Markdown for content
- **Path Prefix**: `/static-website/` for GitHub Pages deployment

### Site Metadata

Global site settings are in `_data/metadata.js`:
- Site title and description
- Author information
- RSS feed configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm start`
5. Submit a pull request

## License

This project is part of the eXist-db project and follows the same licensing terms.

## Links

- [eXist-db Website](https://exist-db.org/)
- [eXist-db Documentation](https://exist-db.org/exist/apps/doc/index.html)
- [eXist-db GitHub](https://github.com/exist-db/exist)
- [Eleventy Documentation](https://www.11ty.dev/docs/)
