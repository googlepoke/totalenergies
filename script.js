document.addEventListener('DOMContentLoaded', function() {
  var refererWarning = document.querySelector('.referer-warning');
  if (refererWarning) refererWarning.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
  // Target the paragraph using its class name
  var description = document.querySelector('.c-accordion__description');

  // Add a click event listener to the paragraph
  description.addEventListener('click', function() {
    // Navigate to the URL in the same browser tab when the paragraph is clicked
    window.location.href = 'https://ifs.super.site/northpower/packaged-for-you';
  });
});
