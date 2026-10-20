# CarsonLoy.com

A minimal personal website built with Astro and Markdown, hosted on GitHub Pages.

The homepage says **“Nothing to see here… yet.”** and links to the /scout privacy policy. Both pages share a dark background, light text, and simple text links.

## Edit the site

| File | Purpose |
| --- | --- |
| [`src/pages/index.md`](src/pages/index.md) | Homepage text and privacy link |
| [`src/pages/privacy.md`](src/pages/privacy.md) | /scout privacy policy at `/privacy/` |
| [`src/layouts/Page.astro`](src/layouts/Page.astro) | Shared HTML layout and dark theme |
| [`astro.config.mjs`](astro.config.mjs) | Site address, base path, and build settings |
| [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) | GitHub Pages build and deployment |

Change page text in the Markdown below the closing `---` line. The frontmatter above it selects the layout and browser-tab title. For example, the homepage starts with:

```markdown
---
layout: ../layouts/Page.astro
title: Carson Loy
---

# Nothing to see here… yet.

[/scout privacy policy](privacy/)
```

`src/pages/privacy.md` contains the policy text and its last-updated date. Update those together when publishing a revised policy.

Colors, font, spacing, and link styles are defined in the `<style is:global>` block in `src/layouts/Page.astro`. Changes there apply to both pages.

## Run locally

Use Node.js 24, matching the deployment workflow. From the project folder:

```sh
cd ~/Documents/CarsonLoy.com
npm ci
npm run dev
```

Open the URL printed in the terminal, normally `http://localhost:4321/CarsonLoy.com/`. Press **Control-C** to stop the server.

To check and build the site, then preview the production output:

```sh
npm run build
npm run preview
```

The build runs Astro's checks and generates the website in `dist/`.

## GitHub Pages setup

For the existing `CarsonLoy/CarsonLoy.com` repository:

1. Choose **Add file > Upload files** and upload `src/`, `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, and `README.md`. Commit to `main`.
2. Upload `.gitignore` and the entire `.github` folder too. In Finder, press **Command-Shift-period** to show hidden files. Alternatively, create `.github/workflows/deploy.yml` through **Add file > Create new file** and paste the local workflow's contents.
3. Open **Settings > Pages**. Set **Build and deployment > Source** to **GitHub Actions**. Leave **Custom domain** blank for now.
4. Open **Actions > Deploy to GitHub Pages > Run workflow**, select `main`, and click **Run workflow**.
5. Wait for the run to succeed, then open **Settings > Pages > Visit site**.

Upload the project contents rather than the enclosing `CarsonLoy.com` folder. Keep `node_modules/`, `dist/`, and `.astro/` local. The included workflow handles the build and deployment.

If the repository still contains the original root `index.html`, `privacy/index.html`, or `.nojekyll`, delete those superseded files. Astro now generates the pages from Markdown and publishes only `dist/`.

## Publish updates

After the Astro setup is complete, edit the Markdown or layout files and commit the changes to `main`. The **Deploy to GitHub Pages** workflow automatically rebuilds and publishes the site. You can edit the Markdown directly on GitHub or upload the changed source files while preserving their folder paths.

- Homepage: https://carsonloy.github.io/CarsonLoy.com/
- Privacy policy: https://carsonloy.github.io/CarsonLoy.com/privacy/

Deployment reference: [Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Custom domain later

When connecting the custom domain, update `site` in `astro.config.mjs` to the actual HTTPS domain and change `base` to `/`. Configure the domain in GitHub Pages and its DNS records at that time. The current relative Markdown links work with either address.
