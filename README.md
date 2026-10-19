# CarsonLoy.com

Plain HTML. No framework, dependencies, styles, or build command.

- `index.html`: homepage.
- `privacy/index.html`: scouting app privacy policy placeholder.
- `.nojekyll`: serves static files without Jekyll processing.

## Publish

1. Go to https://github.com/new while signed in as CarsonLoy.
2. Name the repository `CarsonLoy.com`, choose Public, turn Add README on, and create it.
3. Choose Add file > Upload files. Upload `index.html`, the entire `privacy` folder, and this `README.md`. Replace the generated README if asked. Commit to `main`. Upload the contents of this local folder, not the enclosing `CarsonLoy.com` folder.
4. Choose Add file > Create new file. Name it `.nojekyll`, leave it empty, and commit to `main`.
5. Open Settings > Pages. Set Source to Deploy from a branch. Select `main` and `/(root)`, then Save.
6. Leave Custom domain blank for now.
7. Wait for deployment. Settings > Pages shows Visit site; Actions shows progress.

Homepage: https://carsonloy.github.io/CarsonLoy.com/

Privacy placeholder: https://carsonloy.github.io/CarsonLoy.com/privacy/

Relative links also work with a custom domain later.

## Local preview

From this folder, run `python3 -m http.server 8000` and open http://localhost:8000/. Stop with Control-C.

## Updates

Edit or upload files and commit to `main`. GitHub Pages publishes changes automatically.
