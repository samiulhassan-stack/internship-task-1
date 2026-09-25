# Quick Start Guide 🚀

## ⚡ Get Running in 60 Seconds

```bash
# 1. Navigate to project
cd taskflow-landing

# 2. Install dependencies (if not done)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Go to http://localhost:5174
```

---

## 🎨 What You're Looking At

Your landing page includes:

1. **Navbar** - Fixed navigation with mobile menu
2. **Hero** - Eye-catching intro with animated cards
3. **Features** - 6 key product features
4. **How It Works** - 4-step process
5. **Pricing** - 3 pricing tiers
6. **Testimonials** - Customer reviews
7. **CTA** - Call-to-action section
8. **Footer** - Links and social media

---

## 🛠️ Quick Commands

```bash
npm run dev      # Start dev server (http://localhost:5174)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

---

## 📱 Test Responsive Design

### In Browser (Chrome/Edge/Firefox):
1. Press `F12` to open DevTools
2. Press `Ctrl+Shift+M` (or click device icon)
3. Select device or custom width:
   - **Mobile**: 375px (iPhone)
   - **Tablet**: 768px (iPad)
   - **Desktop**: 1200px+

### Test Points:
- ✅ Navigation menu (hamburger on mobile)
- ✅ Hero section layout
- ✅ Feature cards grid
- ✅ Pricing cards
- ✅ All text is readable
- ✅ Buttons are touch-friendly

---

## ✏️ Quick Customizations

### Change Colors
Edit `src/App.css` line 3-10:
```css
:root {
  --primary: #6366f1;      /* Main brand color */
  --secondary: #ec4899;    /* Accent color */
  /* ... */
}
```

### Update Content
Edit component JSX files in `src/components/`:
- `Hero.jsx` - Main headline and stats
- `Features.jsx` - Feature list
- `Pricing.jsx` - Pricing plans
- `Testimonials.jsx` - Customer quotes

### Change Company Name
Search and replace "TaskFlow" across all files

---

## 🚀 Deploy in 5 Minutes

### Option A: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
Follow prompts → Get instant URL!

### Option B: Netlify Drag & Drop
```bash
npm run build
```
Go to [app.netlify.com/drop](https://app.netlify.com/drop)
Drag the `dist` folder → Done!

---

## 📂 Project Structure

```
taskflow-landing/
├── src/
│   ├── components/       # All React components
│   │   ├── Navbar.jsx    # Navigation
│   │   ├── Hero.jsx      # Hero section
│   │   ├── Features.jsx  # Features grid
│   │   ├── HowItWorks.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main component
│   ├── App.css           # Global styles
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── dist/                 # Production build (after npm run build)
├── README.md             # Full documentation
├── DEPLOYMENT.md         # Deployment guide
└── VIDEO_GUIDE.md        # LinkedIn video guide
```

---

## 🎯 Next Steps

### For GitHub:
1. Create new repo on GitHub
2. Run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TaskFlow landing page"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

### For Deployment:
1. Choose platform (Vercel recommended)
2. Follow steps in `DEPLOYMENT.md`
3. Get your live URL
4. Share it!

### For Video:
1. Follow `VIDEO_GUIDE.md`
2. Record responsive demo
3. Post on LinkedIn with provided templates

---

## 🐛 Troubleshooting

### Port already in use?
- Vite automatically tries the next port (5175, 5176, etc.)
- Or kill the process using the port

### Build errors?
```bash
# Clear everything and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Styles not loading?
- Hard refresh: `Ctrl+Shift+R`
- Check browser console for errors

### Components not showing?
- Check browser console
- Verify all imports in App.jsx
- Make sure dev server is running

---

## 💡 Tips

- **Hot reload**: Save any file and see changes instantly
- **Mobile testing**: Use Chrome DevTools device mode
- **Performance**: Run Lighthouse in Chrome DevTools
- **Code quality**: Run `npm run lint` regularly

---

## 📚 Additional Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vite.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)

---

## 🆘 Need Help?

1. Check browser console for errors
2. Read the full README.md
3. Check DEPLOYMENT.md for deployment issues
4. Search error messages on Stack Overflow
5. Review component code comments

---

## ✅ Pre-Submission Checklist

Before sharing your project:

- [ ] Site runs without errors
- [ ] All links work (navigation, CTAs)
- [ ] Responsive on mobile/tablet/desktop
- [ ] README is complete
- [ ] Code is clean and formatted
- [ ] Git repo is pushed to GitHub
- [ ] Site is deployed and live
- [ ] Video is recorded
- [ ] LinkedIn post is ready

---

**Ready to ship? You've got a production-ready landing page! 🎉**

Good luck with your submission! 🚀
