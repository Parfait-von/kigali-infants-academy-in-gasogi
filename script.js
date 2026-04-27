 function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navMap = { home: 0, about: 1, admissions: 2, gallery: 3, contact: 4, dashboard: 5 };
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navMap[page] !== undefined) navLinks[navMap[page]].classList.add('active');
    window.scrollTo(0, 0);
  }

  function showDash(el, section) {
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    if (el && el.classList) el.classList.add('active');
    document.querySelectorAll('.dash-section').forEach(s => s.classList.remove('active'));
    document.getElementById('ds-' + section).classList.add('active');
  }

  function filterGallery(btn, cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.display = (cat === 'all' || item.dataset.cat === cat) ? 'block' : 'none';
    });
  }

  function submitForm() {
    const msg = document.getElementById('successMsg');
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 6000);
  }