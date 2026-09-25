# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   
3. **Follow prompts**:
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: taskflow-landing
   - Directory: ./
   - Override settings: No

4. **Production deployment**:
   ```bash
   vercel --prod
   ```

**OR use Vercel Web UI**:
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite - just click Deploy!

---

### Option 2: Netlify

**Method A - Drag & Drop**:
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder
4. Done! Get your live URL

**Method B - CLI**:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Method C - GitHub Integration**:
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Build settings are pre-configured in `netlify.toml`

---

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/taskflow-landing",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Configure in GitHub**:
   - Go to repository Settings → Pages
   - Source: gh-pages branch
   - Your site will be live at the homepage URL

---

## Post-Deployment Checklist

- [ ] Test all responsive breakpoints
- [ ] Verify all navigation links work
- [ ] Check page load performance
- [ ] Test on mobile device
- [ ] Verify meta tags and SEO
- [ ] Test all CTAs and buttons
- [ ] Confirm smooth scrolling works
- [ ] Check browser console for errors

---

## Custom Domain (Optional)

### Vercel:
1. Go to project settings
2. Add your domain
3. Configure DNS records as instructed

### Netlify:
1. Go to Domain settings
2. Add custom domain
3. Update DNS records

---

## Environment Variables

This project doesn't require environment variables for basic deployment. 

If you add analytics or backend integration later:
- Vercel: Add in Project Settings → Environment Variables
- Netlify: Add in Site Settings → Environment Variables

---

## Troubleshooting

### Build fails
- Ensure Node.js 16+ is installed
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm run build -- --force`

### Site loads but looks broken
- Check if `base` in `vite.config.js` matches your deployment path
- For GitHub Pages, ensure homepage is set correctly in package.json

### 404 on refresh
- Add redirect rules (already configured in netlify.toml)
- For Vercel, add vercel.json with rewrites (already included)

---

## Performance Optimization

Already included in the build:
- Minified CSS and JavaScript
- Code splitting
- Tree shaking
- Asset optimization

Build output typically:
- HTML: ~0.6 KB gzipped
- CSS: ~4 KB gzipped
- JS: ~74 KB gzipped
- **Total**: < 80 KB

---

## Monitoring

After deployment, monitor:
- **Vercel Analytics**: Built-in analytics dashboard
- **Netlify Analytics**: Available in site dashboard
- **Google Analytics**: Add tracking code if needed
- **Lighthouse**: Run in Chrome DevTools for performance score

---

## Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server

# Production Build
npm run build        # Build for production
npm run preview      # Preview production build locally

# Deploy
vercel              # Deploy to Vercel (staging)
vercel --prod       # Deploy to Vercel (production)
netlify deploy      # Deploy to Netlify (draft)
netlify deploy --prod # Deploy to Netlify (production)
npm run deploy      # Deploy to GitHub Pages
```

---

**Need help?** Check the platform-specific documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages](https://docs.github.com/en/pages)
