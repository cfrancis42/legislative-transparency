# Federal Legislative Transparency & Accountability Act website

This is a static website for a citizen legislative proposal. No coding or paid hosting is required.

## Publish on GitHub Pages (web browser only)

1. Sign in at https://github.com.
2. Click the **+** menu (top right) and choose **New repository**.
3. Name it `legislative-transparency` and select **Public**. Click **Create repository**.
4. Unzip the downloaded website ZIP file on your computer. The four files inside are `index.html`, `styles.css`, `script.js`, and `proposal.pdf` (plus this README).
5. In your new repository, click **Add file → Upload files**. Drag all five files into the upload area. **Important:** upload the files themselves, not the outer folder or ZIP. They must be at the top level of the repository.
6. Click **Commit changes**.
7. Open **Settings → Pages** in the repository.
8. Under **Build and deployment**, choose **Deploy from a branch** as Source. Select **main** and **/(root)**, then click **Save**.
9. After GitHub publishes the site, its URL will be `https://YOUR-USERNAME.github.io/legislative-transparency/`. Replace YOUR-USERNAME with your GitHub username. It can take several minutes for the site to appear.
10. Visit the website and test **Read the proposal**, **Download PDF**, and **Copy website link**.

## Updating your PDF later

Upload a revised file named exactly `proposal.pdf` to the same repository root and commit the change. The website will use the updated PDF after deployment. Keep the same filename.

## Privacy and accuracy

The public PDF includes the author's name and South Carolina but no personal phone number. Review all public materials before publishing. This is a citizen proposal, not an introduced bill or enacted law.

## Troubleshooting

- **404 error:** Wait a few minutes and verify Settings → Pages is set to main / (root). Confirm `index.html` is at repository root.
- **PDF not displaying:** Use the 'Open PDF in a new tab' or download link. Some mobile browsers do not embed PDFs.
- **Styles missing:** Confirm `styles.css` is in the same folder as `index.html`.
