# Contributing Guide

Thank you for taking the time to improve our documentation! This guide explains how to propose changes, preview them locally, and get them merged.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project structure](#project-structure)
- [Setting up locally](#setting-up-locally)
- [Making changes](#making-changes)
- [Opening a pull request](#opening-a-pull-request)
- [Review process](#review-process)
- [How deployment works](#how-deployment-works)
- [Style guidelines](#style-guidelines)
- [Need help?](#need-help)

---

## Prerequisites

| Tool | Minimum version | Check |
|------|----------------|-------|
| Git  | 2.x            | `git --version` |
| Node.js | 18.x (LTS recommended) | `node --version` |
| npm  | 9.x (ships with Node 18+) | `npm --version` |

> **Tip:** Use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to manage Node versions easily.

---

## Project structure

```
.
├── docs/                  # Markdown documentation pages
│   ├── intro.md
│   └── ...
├── blog/                  # Optional blog posts
├── src/                   # Custom React pages, components, CSS
├── static/                # Static assets (images, fonts, etc.)
├── docusaurus.config.js   # Site-level configuration
├── sidebars.js            # Sidebar navigation structure
└── package.json
```

Most contributions will only touch files inside `docs/`.

---

## Setting up locally

1. **Fork** this repository using the "Fork" button on GitHub.

2. **Clone** your fork:

   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

3. **Add the upstream remote** so you can pull future changes:

   ```bash
   git remote add upstream https://github.com/<org>/<repo-name>.git
   ```

4. **Install dependencies:**

   ```bash
   npm ci
   ```

5. **Start the local dev server:**

   ```bash
   npm run start
   ```

   The site will open at `http://localhost:3000` and hot-reload as you edit files.

---

## Making changes

### Always branch off `main`

```bash
# Make sure your local main is up to date first
git checkout main
git pull upstream main

# Create a feature branch with a descriptive name
git checkout -b docs/add-authentication-guide
```

Good branch name patterns:

| Purpose | Example |
|---------|---------|
| New page or section | `docs/add-quickstart` |
| Fix a typo or broken link | `fix/typo-in-intro` |
| Update existing content | `update/api-reference-v2` |
| Structural / config change | `chore/update-sidebar-order` |

### Write or edit documentation

- Add new pages as `.md` or `.mdx` files inside `docs/`.
- Register new pages in `sidebars.js` if they don't appear automatically.
- Place images and other assets in `static/img/` and reference them with `/img/<filename>`.

### Verify your changes look right

```bash
npm run build    # Catches broken links and MDX errors
npm run serve    # Previews the production build at http://localhost:3000
```

Fix any errors or warnings before opening a PR.

### Commit your work

Write clear, atomic commit messages:

```bash
git add docs/authentication.md static/img/auth-flow.png
git commit -m "docs: add authentication guide with OAuth flow diagram"
```

We loosely follow the [Conventional Commits](https://www.conventionalcommits.org/) style (`docs:`, `fix:`, `chore:`, etc.).

---

## Opening a pull request

1. **Push** your branch to your fork:

   ```bash
   git push origin docs/add-authentication-guide
   ```

2. Go to the original repository on GitHub. You will see a **"Compare & pull request"** banner — click it.

3. Fill in the PR template:
   - **Title** – one sentence describing what changed.
   - **Description** – why the change is needed, what you updated, and any screenshots if relevant.
   - **Checklist** – confirm the build passes and the preview looks correct.

4. Set the base branch to **`main`** (this should be the default).

5. Submit the PR. A maintainer will review it and may request changes.

> **Never push directly to `main`.** Direct pushes are disabled; all changes must come through a pull request.

---

## Review process

- A maintainer will review your PR, usually within a few business days.
- They may leave comments or request changes — please respond to every comment, either by updating the code or explaining your reasoning.
- Once approved, a maintainer will merge the PR using a **squash merge** to keep the history clean.
- The live site is updated automatically within minutes of the merge (see below).

---

## How deployment works

```
Your PR  ──►  Review  ──►  Merge to main  ──►  GitHub Actions builds & deploys  ──►  Live site
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered **only** when commits land on `main`, either via a merged pull request or a direct push by a maintainer. It:

1. Checks out the repository.
2. Installs dependencies with `npm ci`.
3. Runs `npm run build` to produce the static site.
4. Publishes the output to GitHub Pages.

PRs themselves do **not** trigger a deployment — they only run the build step to catch errors early (if you add a separate CI check job). The live site is only ever updated from `main`.

---

## Style guidelines

- **Use sentence case** for headings: "Getting started" not "Getting Started".
- **One idea per paragraph** — keep paragraphs short and scannable.
- **Code blocks** – always specify the language for syntax highlighting (` ```bash `, ` ```js `, etc.).
- **Links** – prefer relative links between docs pages: `[See quickstart](./quickstart.md)`.
- **Images** – include descriptive alt text: `![OAuth flow diagram showing three steps](/img/auth-flow.png)`.
- **Admonitions** – use Docusaurus admonitions for tips, warnings, and notes:

  ```md
  :::tip
  This is a helpful tip.
  :::

  :::caution
  Watch out for this gotcha.
  :::
  ```

---

## Need help?

- **Browse existing docs** to understand the tone and format.
- **Open an issue** if you find a bug or want to propose a large change before writing it.
- **Start a discussion** in the GitHub Discussions tab for open-ended questions.

We appreciate every contribution, big or small. Thank you! 🎉
