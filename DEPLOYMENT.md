# GitHub Pages Deployment

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. This will allow the workflow to deploy to GitHub Pages

### 2. Repository Settings

The GitHub Actions workflow will automatically:
- Build your Eleventy site when you push to the `main` branch
- Deploy the built site to GitHub Pages
- Handle the correct path prefix for your repository name

### 3. How It Works

The deployment process:

1. **Trigger**: Pushes to `main` branch or pull requests
2. **Build**: 
   - Installs Node.js dependencies
   - Builds CSS with Sass
   - Builds the Eleventy site
3. **Deploy**: Uploads the `_site` directory to GitHub Pages

### 4. Configuration

The site is configured with:
- **Path Prefix**: `/static-website/` (matches your repository name)
- **Output Directory**: `_site`
- **Base URL**: Automatically adjusted for GitHub Pages

### 5. Local Development

For local development, use:
```bash
npm start
```

For testing with GitHub Pages path prefix:
```bash
npm run start-ghpages
```

### 6. Manual Deployment

To manually trigger a deployment:
1. Make changes to your content
2. Commit and push to the `main` branch
3. The GitHub Action will automatically build and deploy

### 7. Troubleshooting

If the deployment fails:
1. Check the **Actions** tab in your GitHub repository
2. Review the build logs for any errors
3. Ensure all dependencies are properly listed in `package.json`

### 8. Custom Domain (Optional)

If you want to use a custom domain:
1. Add your domain to the **Custom domain** field in GitHub Pages settings
2. Update the `pathPrefix` in `eleventy.config.js` to `/` instead of `/static-website/`
3. Add a `CNAME` file to your `public/` directory with your domain name

## File Structure

```
.github/workflows/deploy.yml  # GitHub Actions workflow
scripts/deploy.js            # Deployment helper script
eleventy.config.js           # Eleventy configuration with path prefix
```

Your site will be available at: `https://[your-username].github.io/static-website/` 