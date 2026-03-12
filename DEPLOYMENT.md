# Deployment Guide

This guide explains how to deploy the HITA Festivals Portal to production.

## Quick Deploy to Vercel

The fastest way to deploy this Next.js application is using Vercel:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes

4. **Configure Domain**
   - In Vercel project settings, go to "Domains"
   - Add your custom domain: `hita.play-cast.com`
   - Follow Vercel's instructions to update DNS records

## Alternative: Deploy to Other Platforms

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Install Netlify Next.js plugin

### Custom Server

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the server**
   ```bash
   npm start
   ```

3. **Use a process manager**
   ```bash
   pm2 start npm --name "hita-portal" -- start
   ```

4. **Configure reverse proxy (nginx example)**
   ```nginx
   server {
       listen 80;
       server_name hita.play-cast.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

This application does not require any environment variables for basic operation. All configuration is in the codebase.

If you need to add environment variables in the future:

1. Create `.env.local` for local development
2. Add variables to your hosting platform's environment settings
3. Use `process.env.VARIABLE_NAME` in your code

## Post-Deployment Checklist

- [ ] Verify homepage loads correctly
- [ ] Test language switcher (English/Arabic)
- [ ] Test theme toggle (dark/light mode)
- [ ] Verify RTL layout works for Arabic
- [ ] Test both festival links open correctly
- [ ] Check mobile responsiveness
- [ ] Verify SEO metadata in page source
- [ ] Test keyboard navigation
- [ ] Check console for errors
- [ ] Test on multiple browsers

## Performance Optimization

The site is already optimized, but you can further improve:

1. **Enable Vercel Analytics**
   - Add `@vercel/analytics` package
   - Monitor real user metrics

2. **Add CDN Caching**
   - Already handled by Vercel
   - For custom servers, use Cloudflare

3. **Monitor Core Web Vitals**
   - Use Vercel Speed Insights
   - Or Google PageSpeed Insights

## Monitoring

### Vercel

- Automatic deployment previews
- Built-in analytics
- Error tracking
- Performance monitoring

### Custom Setup

Consider adding:
- Sentry for error tracking
- Google Analytics for user metrics
- Uptime monitoring (UptimeRobot, Pingdom)

## Scaling

This is a static site that scales automatically:

- **Vercel**: Automatic edge caching and scaling
- **Custom**: Use CDN like Cloudflare for static assets
- No database or server-side logic to scale

## Troubleshooting

### Build Fails

1. Check Node.js version (requires 18+)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check for TypeScript errors: `npm run build`

### Theme Not Working

- Ensure `suppressHydrationWarning` is on `<html>` tag
- Check browser localStorage is enabled

### RTL Layout Issues

- Verify `dir` attribute is set on `<html>` tag
- Check Tailwind's `rtl:` variants are working
- Test in actual Arabic locale browser

### Links Not Working

- Verify external URLs are correct
- Check `target="_blank"` is set for external links
- Ensure `rel="noopener noreferrer"` is present

## Updates and Maintenance

### Update Dependencies

```bash
npm update
npm audit fix
```

### Update Content

- Festival data: Edit `app/config/festivals.ts`
- Translations: Edit `app/config/locales.ts`
- Styles: Edit component files or `globals.css`

### Add New Festival

1. Add entry to `app/config/festivals.ts`
2. Add translations to `app/config/locales.ts`
3. Commit and push (auto-deploys on Vercel)

## Rollback

### Vercel

1. Go to deployments
2. Click on previous working deployment
3. Click "Promote to Production"

### Custom Server

1. Keep previous build artifacts
2. Switch symlink to previous version
3. Restart process manager

## Security

- No sensitive data in codebase
- All links are to trusted HITA domains
- No user data collection
- Static site = minimal attack surface

## Support

For deployment issues:
- Check Vercel documentation
- Review Next.js deployment docs
- Contact HITA technical team
