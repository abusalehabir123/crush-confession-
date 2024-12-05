const noButton = document.getElementById('no-btn');

noButton.addEventListener('mouseover', () => {
  const container = document.querySelector('.container');
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const randomX = Math.random() * (containerWidth - 100); // 100 is button width approx.
  const randomY = Math.random() * (containerHeight - 50); // 50 is button height approx.

  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});
document.getElementById('yes-btn').addEventListener('click', () => {
  document.body.innerHTML = '<h1>🎉 see you soon sunshine, you are the best 🥰</h1>';
});
