/**
 * cart.js — Read to Lead Bookstore
 * Cart: add, remove, update quantity, render, badge
 * Cart is persisted in localStorage so it survives page navigation.
 */

// ── Persistence helpers ──────────────────────────────────────
function _loadCart() {
  try {
    const raw = localStorage.getItem('rtl-cart');
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}
function _saveCart() {
  try { localStorage.setItem('rtl-cart', JSON.stringify(cart)); } catch(e) {}
}

// Initialise from storage immediately
let cart = _loadCart();

/** Find product by ID */
function findProduct(id) {
  return (typeof products !== 'undefined') ? products.find(p=>p.id===id)||null : null;
}

/** Add to cart or increment quantity */
function addToCart(productId) {
  const p = findProduct(productId);
  if (!p) return;
  const existing = cart.find(i=>i.id===productId);
  if (existing) { existing.quantity++; }
  else { cart.push({id:p.id,title:p.title,author:p.author,price:p.price,image:p.image,quantity:1}); }
  _saveCart();
  updateCartBadge();
  showCartToast(p.title);
  const btn = document.querySelector('.cart-icon-btn');
  if (btn) { btn.classList.add('cart-pulse'); setTimeout(()=>btn.classList.remove('cart-pulse'),400); }
  if (document.getElementById('cart-items-container')) renderCart();
}

/** Remove item from cart */
function removeFromCart(id) {
  cart = cart.filter(i=>i.id!==id);
  _saveCart();
  updateCartBadge();
  if (document.getElementById('cart-items-container')) renderCart();
}

/** Update item quantity */
function updateQuantity(id, delta) {
  const item = cart.find(i=>i.id===id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) { removeFromCart(id); return; }
  _saveCart();
  updateCartBadge();
  if (document.getElementById('cart-items-container')) renderCart();
}

/** Total price in USD */
function getCartTotal() { return parseFloat(cart.reduce((s,i)=>s+i.price*i.quantity,0).toFixed(2)); }

/** Total item count */
function getCartCount() { return cart.reduce((s,i)=>s+i.quantity,0); }

// Currency system
const CURRENCIES = {
  USD: { symbol: "$", rate: 1,    suffix: false },
  AFN: { symbol: "؋",  rate: 70.5, suffix: true  },
  EUR: { symbol: "€",  rate: 0.92, suffix: false },
};
function _getCurrentCurrency() {
  return localStorage.getItem("rtl-currency") || "USD";
}
/** Format a USD price into selected currency */
function formatPrice(usdAmount) {
  const code = _getCurrentCurrency();
  const cur = CURRENCIES[code] || CURRENCIES["USD"];
  const converted = usdAmount * cur.rate;
  const formatted = cur.suffix ? Math.round(converted).toLocaleString() : converted.toFixed(2);
  return cur.suffix ? (formatted + " " + cur.symbol) : (cur.symbol + formatted);
}

/** Update badge counters on all pages */
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(b=>{
    b.textContent = count;
    b.style.display = count>0?'flex':'none';
  });
}

/** Show toast notification */
function showCartToast(title) {
  const old = document.getElementById('cart-toast');
  if (old) old.remove();
  const toast = document.createElement('div');
  toast.id='cart-toast'; toast.className='cart-toast';
  toast.innerHTML=`<i class="fas fa-check-circle me-2" aria-hidden="true"></i><span><strong>${title}</strong> added!</span>`;
  document.body.appendChild(toast);
  setTimeout(()=>toast.classList.add('show'),10);
  setTimeout(()=>{ toast.classList.remove('show'); setTimeout(()=>toast.remove(),400); },2500);
}

/** Render cart items on checkout page */
function renderCart() {
  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const cartContent = document.getElementById('cart-content');
  const summarySection = document.getElementById('order-summary');
  if (!container) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display='block';
    if (cartContent) cartContent.style.display='none';
    if (summarySection) summarySection.style.display='none';
    return;
  }
  if (emptyState) emptyState.style.display='none';
  if (cartContent) cartContent.style.display='block';
  if (summarySection) summarySection.style.display='block';

  const removeLabel = (typeof t==='function') ? t('removeItem') : 'Remove';

  container.innerHTML = cart.map(item=>`
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.title} book cover"
          onerror="this.src='https://placehold.co/70x100/1a1a2e/e8a045?text=Book'">
      </div>
      <div class="cart-item-info">
        <p class="cart-item-title">${item.title}</p>
        <p class="cart-item-author">${item.author}</p>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      <div class="cart-item-controls">
        <div class="qty-control">
          <button class="qty-btn" onclick="updateQuantity(${item.id},-1)" aria-label="Decrease quantity of ${item.title}">
            <i class="fas fa-minus" aria-hidden="true"></i>
          </button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id},1)" aria-label="Increase quantity of ${item.title}">
            <i class="fas fa-plus" aria-hidden="true"></i>
          </button>
        </div>
        <p class="cart-item-total">${formatPrice(item.price*item.quantity)}</p>
        <button class="cart-remove-btn" onclick="removeFromCart(${item.id})" aria-label="Remove ${item.title}">
          <i class="fas fa-times" aria-hidden="true"></i> <span class="d-none d-md-inline">${removeLabel}</span>
        </button>
      </div>
    </div>`).join('');

  updateOrderSummary();
}

/** Update order summary totals */
function updateOrderSummary() {
  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const tax = parseFloat((subtotal*0.08).toFixed(2));
  const total = parseFloat((subtotal+shipping+tax).toFixed(2));
  const set = (id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };
  set('summary-subtotal', formatPrice(subtotal));
  set('summary-shipping', shipping===0?'FREE':formatPrice(shipping));
  set('summary-tax', formatPrice(tax));
  set('summary-total', formatPrice(total));
  const note = document.getElementById('shipping-note');
  if (note) {
    note.textContent = subtotal>=50
      ? (typeof t==='function'?t('cartFreeShipping'):'🎉 Free shipping!')
      : `Add ${formatPrice(50-subtotal)} ${(typeof t==='function'?t('cartShippingNote'):'more for free shipping')}`;
  }
}
