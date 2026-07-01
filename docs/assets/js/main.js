/* MANGO FARM — premium export site interactions */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* sticky header */
  var header = document.querySelector('.site-header');
  var topBtn = document.querySelector('.float-top');
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle('solid', y > 40);
    if (topBtn) topBtn.classList.toggle('show', y > 600);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile menu */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open'); toggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* scroll reveal */
  var reveals = document.querySelectorAll('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* count-up stats */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var dec = (target % 1 !== 0) ? 1 : 0;
    if (reduce) { el.textContent = target.toLocaleString() + suffix; return; }
    var start = performance.now(), dur = 1600;
    function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = (dec ? val.toFixed(1) : Math.floor(val).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = (dec ? target.toFixed(1) : target.toLocaleString()) + suffix;
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var a = item.querySelector('.faq-a');
      var open = item.classList.toggle('open');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
      q.setAttribute('aria-expanded', open);
    });
  });

  /* forms: real delivery via data-endpoint (FormSubmit AJAX), else front-end demo */
  function lockForm(form) {
    var ok = form.querySelector('.form__ok');
    if (ok) ok.classList.add('show');
    form.querySelectorAll('input,select,textarea').forEach(function (f) {
      if (f.type !== 'submit') f.disabled = true;
    });
    var btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = 'Received ✓'; btn.disabled = true; }
  }
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var endpoint = form.getAttribute('data-endpoint');
      if (!endpoint) { lockForm(form); return; } // demo forms (no backend configured)

      var btn = form.querySelector('button[type="submit"]');
      var label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          if (res.ok && (res.d.success === 'true' || res.d.success === true)) {
            lockForm(form);
          } else {
            throw new Error((res.d && res.d.message) || 'send failed');
          }
        })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = label; }
          var note = form.querySelector('.form__note');
          if (note) {
            note.style.color = '#b3261e';
            note.textContent = "Sorry, we couldn't send that. Please WhatsApp us at +91 92130 22464 or email meet.dhaduk@modernsmilk.com.";
          }
        });
    });
  });

  /* current year */
  var yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();
})();
