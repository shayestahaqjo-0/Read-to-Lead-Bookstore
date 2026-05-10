/**
 * main.js — Read to Lead Bookstore
 * Dark mode, language switcher, category filter, search, scroll, checkout
 */

/* ===== UPDATE STATIC HTML PRICES ===== */
/**
 * Re-renders all elements with class "static-price" and data-usd attribute
 * so hero, deal, and highlight prices respect the chosen currency.
 */
function updateStaticPrices() {
  if (typeof formatPrice !== 'function') return;
  document.querySelectorAll('.static-price[data-usd]').forEach(el => {
    el.textContent = formatPrice(parseFloat(el.dataset.usd));
  });
}

/* ===== DARK MODE ===== */

function initDarkMode() {
  const saved = localStorage.getItem('dark-mode');
  if (saved === 'true') { document.body.classList.add('dark-mode'); updateDarkIcons(true); }
}

function toggleDarkMode() {
  const dark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', dark);
  updateDarkIcons(dark);
}

function updateDarkIcons(isDark) {
  // All moon/sun icons
  document.querySelectorAll('.dark-mode-icon').forEach(i => {
    i.className = `fas ${isDark?'fa-sun':'fa-moon'} dark-mode-icon`;
  });
  // All dark mode labels
  document.querySelectorAll('[data-i18n="navDarkMode"],[data-i18n="navLightMode"]').forEach(el => {
    el.setAttribute('data-i18n', isDark ? 'navLightMode' : 'navDarkMode');
    const lang = localStorage.getItem('rtl-lang')||'en';
    if (typeof translations !== 'undefined') {
      el.textContent = translations[lang][isDark?'navLightMode':'navDarkMode'] || (isDark?'Light Mode':'Dark Mode');
    }
  });
}

/* ===== NAVBAR SCROLL ===== */

function initNavbarScroll() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50), {passive:true});
}

/* ===== SCROLL TO TOP ===== */

function initScrollToTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.style.display = window.scrollY>300?'flex':'none', {passive:true});
  btn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
}

/* ===== LANGUAGE SWITCHER ===== */

function initLanguage() {
  const saved = localStorage.getItem('rtl-lang') || 'en';
  document.querySelectorAll('.lang-select').forEach(sel => { sel.value = saved; });
  if (typeof applyTranslations === 'function') applyTranslations(saved);
}

function onLangChange(val) {
  if (typeof applyTranslations === 'function') applyTranslations(val);
  // Re-render products to update button text
  if (document.getElementById('products-grid')) displayProducts('products-grid');
  if (document.getElementById('cart-items-container')) renderCart();
}

/* ===== CATEGORY FILTER ===== */

function initCategoryFilter() {
  const filterBtns = document.querySelectorAll('.filter-tab');
  const searchInput = document.getElementById('product-search');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active'); btn.setAttribute('aria-selected','true');
      displayProducts('products-grid', btn.dataset.filter, currentSearch);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('keyup', () => {
      displayProducts('products-grid', currentFilter, searchInput.value);
    });
    searchInput.addEventListener('search', () => {
      displayProducts('products-grid', currentFilter, searchInput.value);
    });
  }
}

/* ===== HERO BUTTONS ===== */

function initHeroButtons() {
  const addBtn = document.getElementById('hero-add-to-cart');
  if (addBtn) addBtn.addEventListener('click', () => addToCart(1));
  const buyBtn = document.getElementById('hero-buy-now');
  if (buyBtn) buyBtn.addEventListener('click', () => { addToCart(1); window.location.href='checkout.html'; });
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.addToCart)));
  });
}

/* ===== CHECKOUT TABS ===== */

function initCheckoutTabs() {
  const proceedBtn = document.getElementById('proceed-to-checkout');
  const cartSection = document.getElementById('cart-section');
  const checkoutSection = document.getElementById('checkout-section');
  const backBtn = document.getElementById('back-to-cart');
  if (!proceedBtn) return;

  proceedBtn.addEventListener('click', () => {
    if (cart.length===0) return;
    cartSection.style.display='none';
    checkoutSection.style.display='block';
    window.scrollTo({top:0,behavior:'smooth'});
  });
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      checkoutSection.style.display='none';
      cartSection.style.display='block';
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }
}

/* ===== CHECKOUT FORM SUCCESS ===== */

function initCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  initFormValidation('checkout-form','place-order-btn');

  window.onFormSuccess = function(formId) {
    if (formId !== 'checkout-form') return;
    showOrderModal();
  };
}

function showOrderModal() {
  const rows = cart.map(item =>
    `<tr><td>${item.title}</td><td>${item.quantity}</td><td>${formatPrice(item.price*item.quantity)}</td></tr>`
  ).join('');
  const subtotal = getCartTotal();
  const shipping = subtotal>=50?0:4.99;
  const tax = (subtotal*0.08).toFixed(2);
  const grand = (subtotal+shipping+parseFloat(tax)).toFixed(2);

  const body = document.getElementById('order-modal-body');
  if (body) {
    body.innerHTML = `
      <div class="text-center mb-3" style="font-size:3rem">🎉</div>
      <h5 class="text-center mb-1">${t('orderConfirmed')}</h5>
      <p class="text-center text-muted">${t('orderNumber')}RTL-${Math.floor(Math.random()*90000+10000)}</p>
      <table class="table table-sm mt-3">
        <thead><tr><th>${t('orderBook')}</th><th>${t('orderQty')}</th><th>${t('orderPrice')}</th></tr></thead>
        <tbody>${rows}</tbody>
        <tfoot>
          <tr><td colspan="2"><strong>${t('cartShipping')}</strong></td><td>${shipping===0?'FREE':formatPrice(shipping)}</td></tr>
          <tr><td colspan="2"><strong>${t('cartTax')}</strong></td><td>${formatPrice(parseFloat(tax))}</td></tr>
          <tr class="table-active"><td colspan="2"><strong>${t('cartTotal')}</strong></td><td><strong>${formatPrice(parseFloat(grand))}</strong></td></tr>
        </tfoot>
      </table>
      <p class="text-center mt-3 small">${t('orderThankYou')}</p>`;
  }

  const modalEl = document.getElementById('orderModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
    modalEl.addEventListener('hidden.bs.modal', () => {
      cart = []; _saveCart(); updateCartBadge(); window.location.href='index.html';
    }, {once:true});
  }
}

/* ===== INTERSECTION OBSERVER for scroll animations ===== */

function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, {threshold:0.1});
  document.querySelectorAll('.section-animate').forEach(el => obs.observe(el));
}

/* ===== SAME AS BILLING ===== */

function initSameAsBilling() {
  const chk = document.getElementById('same-as-billing');
  if (!chk) return;
  chk.addEventListener('change', () => {
    document.querySelectorAll('.billing-only').forEach(el => {
      el.style.display = chk.checked ? 'none' : 'block';
    });
  });
}

/* ===== SEARCH OVERLAY ===== */

function initSearchOverlay() {
  const toggle = document.querySelector('.search-toggle');
  const overlay = document.getElementById('search-overlay');
  const close = document.querySelector('.search-overlay-close');
  if (!toggle||!overlay) return;
  toggle.addEventListener('click', () => { overlay.classList.add('active'); overlay.querySelector('input')?.focus(); });
  if (close) close.addEventListener('click', () => overlay.classList.remove('active'));
  document.addEventListener('keydown', e => { if (e.key==='Escape') overlay?.classList.remove('active'); });
}

/* ===== INIT ALL ===== */

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initNavbarScroll();
  initScrollToTop();
  initLanguage();
  initScrollAnimations();
  initSearchOverlay();
  initHeroButtons();

  // Dark mode buttons
  document.querySelectorAll('.dark-mode-toggle').forEach(btn => {
    btn.addEventListener('click', toggleDarkMode);
  });

  // Language select dropdowns
  document.querySelectorAll('.lang-select').forEach(sel => {
    sel.addEventListener('change', () => onLangChange(sel.value));
  });

  // Currency selector
  const currencyMap = { '$ USD': 'USD', 'AFN ؋': 'AFN', '€ EUR': 'EUR' };
  const currencySel = document.getElementById('currency-select');
  if (currencySel) {
    // Restore saved currency
    const savedCur = localStorage.getItem('rtl-currency') || 'USD';
    // Find matching option text
    Array.from(currencySel.options).forEach(opt => {
      const code = currencyMap[opt.text.trim()] || opt.value;
      if (code === savedCur) currencySel.value = opt.value;
    });
    currencySel.addEventListener('change', () => {
      const code = currencyMap[currencySel.options[currencySel.selectedIndex].text.trim()] || 'USD';
      localStorage.setItem('rtl-currency', code);
      // Re-render everything that shows prices
      updateStaticPrices();
      if (document.getElementById('products-grid')) displayProducts('products-grid');
      if (document.getElementById('cart-items-container')) renderCart();
    });
  }

  // Update any static HTML prices to match saved currency
  updateStaticPrices();

  // Homepage
  if (document.getElementById('products-grid')) {
    displayProducts('products-grid');
    initCategoryFilter();
  }

  // Checkout
  if (document.getElementById('cart-section')) {
    renderCart();
    initCheckoutTabs();
    initCheckoutForm();
    initSameAsBilling();
  }

  // Contact
  if (document.getElementById('contact-form')) {
    initContactForm();
  }
});
