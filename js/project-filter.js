/**
 * Project Filter
 * Handles tag-based filtering of project cards
 */

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.tag-filter');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) {
    return;
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const filter = button.getAttribute('data-filter');

      // Update active state
      filterButtons.forEach(function (btn) {
        btn.classList.toggle('active', btn === button);
      });

      // Filter project cards
      projectCards.forEach(function (card) {
        const tags = (card.getAttribute('data-tags') || '').split(',').filter(Boolean);
        
        if (filter === 'all' || tags.includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
