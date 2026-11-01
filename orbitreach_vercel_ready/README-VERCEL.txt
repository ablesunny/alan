ORBITREACH DIGITAL — VERCEL DEPLOYMENT

This is a plain static HTML/CSS/JavaScript website. No framework or build step is required.

PROJECT ROOT
- index.html is the home page and must stay at the project root.
- about.html, services.html, portfolio.html, insights.html, contact.html, privacy.html
- 404.html is the custom not-found page.
- assets/ contains shared CSS, JavaScript, configuration, and favicon.

OPTION A — DEPLOY WITH VERCEL CLI (NO GITHUB REQUIRED)
1. Extract this folder on your computer.
2. Install Node.js if it is not already installed: https://nodejs.org/
3. Open Terminal / PowerShell inside this folder (the folder containing index.html).
4. Run: npm install -g vercel
5. Run: vercel
6. Follow the prompts to log in and create/link a project.
7. For the production deployment, run: vercel --prod

OPTION B — DEPLOY THROUGH GITHUB
1. Create a new GitHub repository.
2. Upload the CONTENTS of this folder (index.html and assets/ at the repository root).
3. In Vercel, choose Add New > Project and import that repository.
4. Set Framework Preset to Other.
5. Leave Build Command blank. Set Output Directory to . (dot) if Vercel does not already select the repository root.
6. Click Deploy. Future pushes to the connected production branch redeploy automatically.

BEFORE YOU DEPLOY
- Open assets/config.js and replace hello@yourdomain.com with your real inbox.
- Replace the email placeholder in contact.html, privacy.html, and footer links across the pages.
- Replace yourdomain.com in robots.txt and sitemap.xml with your real domain.
- Update the privacy policy to reflect your real data practices and applicable laws.
- The contact form currently opens the visitor's own email application with a prefilled message. It does NOT submit to a server. To collect enquiries automatically, connect a form backend/service and add spam protection.
- Replace capability examples with real approved case studies before presenting them as client work.

CUSTOM DOMAIN
After deployment, open your Vercel project > Settings > Domains, add your domain, and follow the DNS records Vercel displays. DNS changes can take time to propagate.

The website source package is ready to deploy, but this does not itself create a Vercel account, deploy the site, or purchase a domain.
