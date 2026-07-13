document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.tag-filter');
  var projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) {
    return;
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');

      filterButtons.forEach(function (btn) {
        btn.classList.toggle('active', btn === button);
      });

      projectCards.forEach(function (card) {
        var tags = card.getAttribute('data-tags') || '';
        if (filter === 'all' || tags.split(',').includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
