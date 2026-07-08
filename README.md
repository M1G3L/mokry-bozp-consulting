**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment with GitHub Actions and GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` which builds the app and deploys the generated `dist` folder to GitHub Pages.

Deployment flow:
1. Push your changes to `dev`.
2. Create a pull request from `dev` into `main`.
3. After the PR is merged, the workflow runs on `main` and deploys to GitHub Pages.

The workflow automatically:
   - checks out the repo
   - installs dependencies
   - builds the app with `npm run build`
   - uploads `dist` as the Pages artifact
   - deploys the site to GitHub Pages

If you need to change the deployment branch, update the `branches:` section in `.github/workflows/deploy.yml` and configure Pages in repository settings accordingly.
