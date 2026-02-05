# Khush Pachani - Portfolio Website Deployment Guide

This is your personal portfolio website built with React and TypeScript, ready to be deployed on GitHub Pages.

## Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- Git
- GitHub account

## Repository Setup

Your repository should be named: `khush.github.io`
The website will be available at: `https://khushpachani.github.io/khush.github.io`

## Step-by-Step Deployment Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click on the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `khush.github.io`
5. Make it **Public**
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2. Prepare Your Local Files

1. Extract all the portfolio files to a folder on your computer
2. Open Terminal/Command Prompt
3. Navigate to the portfolio folder:
   ```bash
   cd path/to/khush-portfolio
   ```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages including React, TypeScript, and gh-pages.

### 4. Test Locally (Optional)

Before deploying, you can test the website locally:

```bash
npm start
```

This will open the website at `http://localhost:3000` in your browser.
Press `Ctrl+C` to stop the local server when done.

### 5. Initialize Git and Connect to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/Khushpachani/khush.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 6. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your React application
- Create a `gh-pages` branch
- Deploy the built files to GitHub Pages

### 7. Configure GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Khushpachani/khush.github.io`
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select the `gh-pages` branch
5. Click "Save"

### 8. Access Your Website

After 2-5 minutes, your website will be live at:
`https://khushpachani.github.io/khush.github.io`

## Making Updates

Whenever you want to update your portfolio:

1. Make your changes to the code
2. Test locally with `npm start`
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
4. Deploy the updates:
   ```bash
   npm run deploy
   ```

## Customization Tips

### Update Your Profile Picture
Replace the avatar URL in `src/components/Main.tsx` with your own photo URL.

### Update LinkedIn/GitHub Links
Edit the links in `src/components/Main.tsx` to point to your profiles.

### Add More Projects
Edit `src/components/Project.tsx` to add more security projects.

### Change Color Scheme
The main color is defined in various SCSS files. Look for `#5000ca` to change the primary color.

### Update Contact Information
Edit `src/components/Contact.tsx` to customize the contact form.

## Troubleshooting

### Website Not Loading
- Wait 5-10 minutes after deployment
- Check GitHub Pages settings
- Ensure `gh-pages` branch exists
- Clear browser cache

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Fails
- Check internet connection
- Verify GitHub authentication
- Ensure repository is public
- Check for any uncommitted changes

## Project Structure

```
khush-portfolio/
├── public/              # Static files
├── src/
│   ├── assets/         # Images and styles
│   ├── components/     # React components
│   │   ├── Main.tsx       # Hero section
│   │   ├── Expertise.tsx  # Skills section
│   │   ├── Timeline.tsx   # Work experience
│   │   ├── Project.tsx    # Projects showcase
│   │   └── Contact.tsx    # Contact form
│   ├── App.tsx         # Main app component
│   └── index.tsx       # Entry point
├── package.json        # Dependencies
└── README.md          # This file
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Material-UI** - Component library
- **SASS** - CSS preprocessor
- **FontAwesome** - Icons
- **GitHub Pages** - Hosting

## Support

If you encounter any issues:
1. Check the console for error messages (`F12` in browser)
2. Verify all dependencies are installed: `npm install`
3. Ensure Node.js version is compatible: `node --version`
4. Review GitHub Actions for deployment logs

## License

This portfolio is based on the React Portfolio Template and customized for Khush Pachani.

---

**Note**: Remember to keep your repository public for GitHub Pages to work with the free tier.
