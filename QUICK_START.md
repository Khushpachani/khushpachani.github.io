# Quick Start Guide - Deploy Your Portfolio to GitHub Pages

## 🚀 Fast Track Deployment (5 Steps)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `khush.github.io`
3. Make it **Public**
4. Click "Create repository"

### Step 2: Upload Files to GitHub
**Option A - Using GitHub Web Interface:**
1. On your new repository page, click "uploading an existing file"
2. Drag all the portfolio files (or zip them and upload)
3. Commit the files

**Option B - Using Git Command Line:**
```bash
cd /path/to/portfolio-folder
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Khushpachani/khush.github.io.git
git branch -M main
git push -u origin main
```

### Step 3: Install Dependencies (On Your Computer)
Open terminal in the portfolio folder:
```bash
npm install
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to repository Settings → Pages
2. Source: Select `gh-pages` branch
3. Save

**Your website will be live at:**
`https://khushpachani.github.io/khush.github.io`

---

## 📝 Quick Updates

To update your portfolio later:
```bash
# Make your changes, then:
npm run deploy
```

---

## ⚠️ Common Issues

**Problem:** Website shows 404
- **Solution:** Wait 5 minutes, check GitHub Pages settings

**Problem:** `npm install` fails
- **Solution:** Install Node.js from https://nodejs.org

**Problem:** `npm run deploy` fails
- **Solution:** Make sure you committed and pushed to main branch first

---

## 🎨 Quick Customization

### Change your name and title:
Edit `src/components/Main.tsx`

### Update your LinkedIn/GitHub:
Edit `src/components/Main.tsx`

### Add projects:
Edit `src/components/Project.tsx`

### Change skills:
Edit `src/components/Expertise.tsx`

---

**Need help?** Check the detailed DEPLOYMENT_GUIDE.md
