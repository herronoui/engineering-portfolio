# Project content (embedded)

All project text, sections, and media paths live here. The site loads `projects-data.js` — no external links required to read project info.

## Edit a project

Open `projects-data.js` and find the object by `id` (e.g. `"magic-chair"`).

Each project can include:

- `sections` — titled blocks with `body` and/or `items` (shown in the viewer immediately)
- `embed.type: "pdf"` — inline PDF from `public/docs/`
- `embed.type: "html"` — embedded write-up (e.g. TouchWorld summary)

## Assets

- Images: `public/projects/*.svg`
- Magic Chair deck: `public/docs/Magic-Chair.pdf`

## Add a new project

Copy an existing entry in `PORTFOLIO_PROJECTS`, change `id`, and refresh the browser.
