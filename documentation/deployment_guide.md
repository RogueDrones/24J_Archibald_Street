# Deployment Guide for 24J Archibald Street Construction Tracker

This guide will help you deploy your construction tracking application to GitHub Pages, making it accessible online for all stakeholders.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Your project code ready for deployment

## Step 1: Update package.json

First, you need to add the homepage field and GitHub Pages deployment scripts to your `package.json` file:

```json
{
  "name": "24j-archibald-construction-tracker",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://yourusername.github.io/24j-archibald-tracker",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  // rest of your package.json remains the same
}
```

Replace `yourusername` with your actual GitHub username.

## Step 2: Install the gh-pages package

Run the following command to install the GitHub Pages deployment tool:

```bash
npm install --save-dev gh-pages
```

## Step 3: Update vite.config.ts

You need to modify your Vite configuration to work with GitHub Pages:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/24j-archibald-tracker/', // Add this line - must match your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

## Step 4: Set up your GitHub repository

1. Create a new repository on GitHub named `24j-archibald-tracker`
2. Initialize Git in your local project (if not already done):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/24j-archibald-tracker.git
git push -u origin main
```

## Step 5: Deploy to GitHub Pages

Run the deployment script:

```bash
npm run deploy
```

This will build your project and publish it to the `gh-pages` branch of your repository.

## Step 6: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. For the "Source", select the `gh-pages` branch
5. Click "Save"

Your site will be published at: `https://yourusername.github.io/24j-archibald-tracker`

## Step 7: Set up Custom Domain (Optional)

If you want to use a custom domain:

1. In the GitHub Pages settings, enter your custom domain
2. Create a CNAME record with your DNS provider pointing to `yourusername.github.io`
3. Add a file named `CNAME` in the `public` folder of your project with your domain name:

```
archibald-construction.example.com
```

## Updating Your Site

Whenever you need to update your site with new construction phases:

1. Update the `projectData.ts` file with new timeline entries
2. Add new drone images to your Cloudflare account
3. Update image URLs in the `projectData.ts` file
4. Run `npm run deploy` to publish the updates

## Tips for Managing Cloudflare Images

1. **Consistent Naming Convention**: 
   - Use format: `archibald_phase[number]_[view]_[YYYYMMDD].jpg`
   - Example: `archibald_phase3_aerial_20240405.jpg`

2. **Organize in Folders**:
   - Create a folder structure like:
     ```
     /archibald-project/
       /phase1/
       /phase2/
       /phase3/
       ...
     ```

3. **Image Optimization**:
   - Keep drone images under 1MB if possible
   - Use JPEG format for photos (best quality/size ratio)
   - Consider creating thumbnails for the timeline view

4. **Access Control**:
   - Set appropriate access controls in Cloudflare
   - Make sure images are publicly accessible for the web app

## Automated GitHub Actions Deployment (Optional)

For automatic deployment on every push, create a file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: dist
```

This will automatically deploy your site whenever you push changes to the main branch.