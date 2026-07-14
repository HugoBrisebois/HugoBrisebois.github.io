# Project Management Guide

This directory uses a clean, data-driven architecture for managing portfolio projects.

## Architecture

```
projects/
├── index.html          → Main page template (loads projects dynamically)
├── project1/
│   └── index.html      → Individual project detail pages
├── project2/
│   └── index.html
└── ... (20 projects)

data/
└── projects.json       → Single source of truth for all project metadata

js/
├── projects-loader.js  → Loads JSON and renders project cards
└── project-filter.js   → Handles tag-based filtering
```

## Adding a New Project

1. **Update `data/projects.json`**:
   ```json
   {
     "id": "projectX",
     "title": "Project Title",
     "description": "Brief description",
     "image": "image-filename.png",
     "date": "Jul 13, 2026",
     "tags": ["design", "illustration"]
   }
   ```

2. **Create project detail page** (optional):
   ```bash
   mkdir -p projects/projectX
   # Create projects/projectX/index.html for project detail page
   ```

3. **Add image** to `images/` folder

4. **Done!** The project automatically appears on the main projects page

## Modifying a Project

Simply edit the relevant entry in `data/projects.json`. Changes appear immediately:
- Update title, description, or date
- Add/remove tags for filtering
- Change image reference

## Tags & Filtering

Add tags to enable category filtering on the projects page:

```json
"tags": ["design", "3d", "photoshop"]
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

- **Separation of concerns**: Data (JSON) → Logic (JS) → Presentation (HTML)
- **No code duplication**: Project info in one place only
- **Maintainable**: Easy to scale to 50+ projects
- **Performant**: Single fetch request loads all projects
- **Accessible**: Semantic HTML with proper alt text

## CSS Classes

- `.project-card` - Individual project card element
- `.tag-filter` - Filter button
- `.active` - Active filter state
- `data-tags` - Project tags attribute

## Troubleshooting

**Projects not showing?**
- Check `data/projects.json` syntax (must be valid JSON)
- Verify image file exists and filename matches
- Check browser console for fetch errors

**Images not loading?**
- Verify filename in JSON matches image file exactly
- Check case sensitivity (`Mando-1.png` ≠ `mando-1.png`)
- Ensure image is in `images/` folder

**Filters not working?**
- Ensure `projects-loader.js` loads before `project-filter.js`
- Check that projects have `data-tags` attribute set
