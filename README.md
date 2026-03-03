# Portfolio

A modern, high-performance web portfolio built with Nuxt 3, Vue 3, and Tailwind CSS. 

## Features

- Server-Side Rendering (SSR) via Nuxt 3
- Utility-first styling with Tailwind CSS
- Smooth scroll integration using Studio Freight Lenis
- Complex scroll and entrance animations via GSAP and ScrollTrigger
- Centralized content management through JSON
- Fully responsive, monochromatic design

## Prerequisites

- Node.js (v18 or higher recommended)
- pnpm

## Local Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Build & Deployment

### Manual Build

To build the application for production:
```bash
pnpm run build
```

To preview the production build locally:
```bash
node .output/server/index.mjs
```

### Docker Deployment

This repository includes a multi-stage `Dockerfile` optimized for production deployments on platforms such as Digital Ocean App Platform.

To build the Docker image locally:
```bash
docker build -t portfolio-app .
```

To run the Docker container:
```bash
docker run -p 3000:3000 -e PORT=3000 portfolio-app
```

## Project Structure

- `/components`: Reusable Vue components (e.g., HeroSection, ExperienceSection, TechStack, AboutSection)
- `/pages`: Main application routes
- `/layouts`: Shared UI shells (Navigation, Footer)
- `/assets`: Global CSS and styling rules
- `/data`: Centralized source of truth for portfolio content (`portfolio.json`)
- `/plugins`: Client-side Nuxt plugins (e.g., Lenis integration)
