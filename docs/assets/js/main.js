/* MANGO FARM — interactions */
(function () {
  // Mobile nav toggle
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      nav.classList.toggle('open');
      var exp = burger.classList.contains('open');
      burger.setAttribute('aria-expanded', exp);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth <= 900) {
        burger.classList.remove('open');
        nav.classList.remove('open');
      }
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var ans = item.querySelector('.faq-a');
      var open = item.classList.toggle('open');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : 0;
      q.setAttribute('aria-expanded', open);
    });
  });

  // FAQ tabs
  document.querySelectorAll('.faq-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-tab');
      document.querySelectorAll('.faq-tab').forEach(function (t) { t.classList.remove('active'); });
      document.querySelectorAll('.faq-panel').forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  // FAQ search filter
  var search = document.querySelector('.faq-search input');
  if (search) {
    search.addEventListener('input', function () {
      var term = search.value.toLowerCase().trim();
      document.querySelectorAll('.faq-panel.active .faq-item').forEach(function (item) {
        var txt = item.textContent.toLowerCase();
        item.style.display = txt.indexOf(term) > -1 ? '' : 'none';
      });
    });
  }

  // Contact form (front-end only)
  document.querySelectorAll('form[data-mf-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var thanks = form.querySelector('.form__thanks');
      if (thanks) thanks.classList.add('show');
      form.reset();
    });
  });
})();
