document.addEventListener('DOMContentLoaded', function (event) {
  document
    .querySelector('#button-submit')
    .addEventListener('click', function () {
      document.getElementById('section-rate').style.display = 'none';
      document.getElementById('section-thanks').style.display = 'flex';
    });

  var ratingNumbers = document.querySelectorAll('.rating-numbers i');
  ratingNumbers.forEach(function (i) {
    i.addEventListener('click', function () {
      var allStars = document.querySelectorAll('.rating-numbers i');
      clearStars(allStars);
      var value = i.innerText;
      selectedStars(allStars, value);
      updateCounter(value);
    });
  });
});

function clearStars(stars) {
  stars.forEach((s) => s.classList.remove('selected'));
}

function selectedStars(stars, value) {
  for (var n = 0; n < value; n++) stars[n].classList.add('selected');
}

function updateCounter(value) {
  document.querySelector('[counter-stars]').innerText = value;
}
