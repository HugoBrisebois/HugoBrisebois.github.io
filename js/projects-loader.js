/**
 * Projects Loader
 * Dynamically loads and renders projects from data/projects.json
 */

document.addEventListener('DOMContentLoaded', function () {
  const projectGrid = document.getElementById('projectGrid');
  const tagFilterBar = document.getElementById('tagFilterBar');

  if (!projectGrid) {
    return;
  }

  // Fetch and render projects
  fetch('../data/projects.json')
    .then(response => response.json())
    .then(data => {
      renderProjects(data.projects);
      updateTagFilters(data.projects);
    })
    .catch(error => console.error('Error loading projects:', error));

  /**
   * Render project cards
   */
  function renderProjects(projects) {
    projectGrid.innerHTML = '';

    projects.forEach(project => {
      const card = createProjectCard(project);
      projectGrid.appendChild(card);
    });
  }

  /**
   * Create a single project card element
   */
  function createProjectCard(project) {
    const article = document.createElement('article');
    article.className = 'card project-card';
    article.setAttribute('data-tags', project.tags.join(','));

    const tagsClass = project.tags.length > 0 ? project.tags.join(' ') : '';
    const link = document.createElement('a');
    link.href = `../projects/${project.id}/`;

    const img = document.createElement('img');
    img.src = `../images/${encodeURIComponent(project.image)}`;
    img.alt = 'Projects';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const title = document.createElement('h2');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const date = document.createElement('span');
    date.textContent = project.date;

    cardContent.appendChild(title);
    cardContent.appendChild(description);
    cardContent.appendChild(date);

    link.appendChild(img);
    link.appendChild(cardContent);
    article.appendChild(link);

    return article;
  }

  /**
   * Update tag filter buttons based on unique tags
   */
  function updateTagFilters(projects) {
    const uniqueTags = new Set();
    projects.forEach(project => {
      project.tags.forEach(tag => uniqueTags.add(tag));
    });

    // Only show tag filters if there are tags
    if (uniqueTags.size === 0) {
      return;
    }

    const allButton = tagFilterBar.querySelector('[data-filter="all"]');
    uniqueTags.forEach(tag => {
      const button = document.createElement('button');
      button.className = 'tag-filter';
      button.setAttribute('data-filter', tag);
      button.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
      tagFilterBar.appendChild(button);
    });
  }
});
