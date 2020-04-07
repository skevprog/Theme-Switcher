const checkbox = document.getElementById('checkbox');
const page = document.documentElement;

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    page.setAttribute('data-theme', 'dark');
  } else {
    page.setAttribute('data-theme', 'light');
  }
});
