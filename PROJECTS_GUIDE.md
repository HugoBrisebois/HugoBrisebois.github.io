# Project Management Guide

This site uses Hugo content and templates for managing portfolio projects.

## Architecture

```
content/projects/
├── _index.md            → Projects section metadata
├── project1.md          → Project detail content and front matter
└── ... (20 projects)

layouts/projects/
├── list.html             → Project listing and tag filters
└── single.html           → Individual project detail page

static/images/            → Project assets
```

## Adding a New Project

1. **Create `content/projects/projectX.md`**:
  ```yaml
   ---
   title: Project Title
   description: Brief description
   date: 2026-07-13
   image: image-filename.png
   featured: false
   tags: [design, illustration]
   ---

   Project details go here.
   ```

2. **Add image** to `static/images/`.

3. **Run `hugo server`** to preview the site.

## Modifying a Project

Edit the relevant Markdown file. Changes appear immediately:
- Update title, description, or date
- Add/remove tags for filtering
- Change image reference

## Tags & Filtering

Add tags to enable category filtering on the projects page:

```json
tags: [design, 3d, photoshop]
```

Filter buttons are automatically generated from unique tags across all projects.

## File Naming Best Practices

- **Image files**: Use hyphens for spacing, include size/type suffix
  - ✅ `mando-1.png`, `ford-gt-1.png`
  - ❌ `mando poster.png`, `FORDGT.PNG`
  
- **Project IDs**: Use `projectX` format (consistent with existing structure)
  - ✅ `project1`, `project2`
  - ❌ `my-project`, `MyProject`

## Code Quality

- **Separation of concerns**: Content (Markdown) → Templates (Hugo) → Presentation (HTML/CSS)
- **No code duplication**: Project info in one place only
- **Maintainable**: Easy to scale to 50+ projects
- **Performant**: Project pages are rendered at build time
- **Accessible**: Semantic HTML with proper alt text

## CSS Classes

- `.project-card` - Individual project card element
- `.tag-filter` - Filter button
- `.active` - Active filter state
- `data-tags` - Project tags attribute

## Troubleshooting

**Projects not showing?**
- Check the Markdown front matter
- Verify the image exists in `static/images/` and the filename matches
- Check the generated page for template errors

**Images not loading?**
- Verify the filename in front matter matches the image file exactly
- Check case sensitivity (`Mando-1.png` ≠ `mando-1.png`)
- Ensure the image is in `static/images/`

**Filters not working?**
- Ensure the generated project cards have matching `data-tags` values
- Check that projects have `data-tags` attribute set
