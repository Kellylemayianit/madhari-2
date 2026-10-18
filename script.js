const root = document.documentElement;
const btn = document.getElementById('theme');
const current = () => root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const label = () => { btn.textContent = current() === 'dark' ? 'Light mode' : 'Dark mode'; };
btn.addEventListener('click', () => {
  const next = current() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  label();
});
label();
