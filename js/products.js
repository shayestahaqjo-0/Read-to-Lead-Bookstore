/**
 * products.js — Read to Lead Bookstore
 * Product data array and dynamic rendering
 */

const products = [
  { id:1, title:"Atomic Habits", author:"James Clear", price:14.99, originalPrice:18.99, category:"non-fiction", rating:4.8, reviews:12400, badge:"Best Seller", image:"https://covers.openlibrary.org/b/id/10527843-L.jpg", description:"Tiny changes, remarkable results. A proven framework for improving every day through the science of habit formation.", featured:true },
  { id:2, title:"The Design of Everyday Things", author:"Don Norman", price:16.99, originalPrice:22.99, category:"design", rating:4.7, reviews:8900, badge:"Award Winner", image:"https://covers.openlibrary.org/b/id/8739161-L.jpg", description:"Why some products satisfy customers while others frustrate them. A landmark work on user-centered design." },
  { id:3, title:"Thinking, Fast and Slow", author:"Daniel Kahneman", price:13.99, originalPrice:17.99, category:"non-fiction", rating:4.6, reviews:21300, badge:"Top Rated", image:"https://covers.openlibrary.org/b/id/8442812-L.jpg", description:"A landmark book exploring the two systems that drive the way we think and make choices." },
  { id:4, title:"Zero to One", author:"Peter Thiel", price:12.99, originalPrice:15.99, category:"business", rating:4.5, reviews:9800, badge:"Best Deal", image:"https://covers.openlibrary.org/b/id/8739210-L.jpg", description:"Notes on startups, or how to build the future. Peter Thiel's contrarian framework for creating truly new things." },
  { id:5, title:"1984", author:"George Orwell", price:9.99, originalPrice:12.99, category:"fiction", rating:4.9, reviews:45600, badge:"Classic", image:"https://covers.openlibrary.org/b/id/8575708-L.jpg", description:"A dystopian masterpiece — a harrowing portrait of a totalitarian society and one man's defiance." },
  { id:6, title:"Educated", author:"Tara Westover", price:15.99, originalPrice:19.99, category:"biography", rating:4.8, reviews:18700, badge:"Award Winner", image:"https://covers.openlibrary.org/b/id/9299513-L.jpg", description:"A memoir about the transformative power of education, written by a woman who never attended school as a child." },
  { id:7, title:"The Alchemist", author:"Paulo Coelho", price:11.99, originalPrice:14.99, category:"fiction", rating:4.7, reviews:38200, badge:"Best Seller", image:"https://covers.openlibrary.org/b/id/8241353-L.jpg", description:"A magical story about following your dreams. A shepherd's journey becomes a metaphor for life itself." },
  { id:8, title:"Good to Great", author:"Jim Collins", price:17.99, originalPrice:24.99, category:"business", rating:4.6, reviews:14500, badge:null, image:"https://covers.openlibrary.org/b/id/8114478-L.jpg", description:"Why some companies make the leap to greatness and others don't. Based on five years of extensive research." },
  { id:9, title:"Becoming", author:"Michelle Obama", price:18.99, originalPrice:25.99, category:"biography", rating:4.9, reviews:52400, badge:"Best Seller", image:"https://covers.openlibrary.org/b/id/9256020-L.jpg", description:"An intimate, powerful memoir by the former First Lady of the United States covering her extraordinary journey." },
  { id:10, title:"The Lean Startup", author:"Eric Ries", price:13.99, originalPrice:17.99, category:"business", rating:4.5, reviews:11200, badge:null, image:"https://covers.openlibrary.org/b/id/8228691-L.jpg", description:"How today's entrepreneurs use continuous innovation to create radically successful businesses." },
  { id:11, title:"To Kill a Mockingbird", author:"Harper Lee", price:10.99, originalPrice:13.99, category:"fiction", rating:4.8, reviews:67800, badge:"Classic", image:"https://covers.openlibrary.org/b/id/8810691-L.jpg", description:"A timeless tale of racial injustice and moral growth set in the American South during the 1930s." },
  { id:12, title:"Sprint", author:"Jake Knapp", price:14.99, originalPrice:20.99, category:"design", rating:4.4, reviews:6700, badge:"Best Deal", image:"https://covers.openlibrary.org/b/id/8739220-L.jpg", description:"How to solve big problems and test new ideas in just five days — the process used at Google Ventures." },
  { id:13, title:"Sapiens", author:"Yuval Noah Harari", price:16.99, originalPrice:21.99, category:"non-fiction", rating:4.7, reviews:34500, badge:"Top Rated", image:"https://covers.openlibrary.org/b/id/8734656-L.jpg", description:"A brief history of humankind from the Stone Age to the Silicon Age, told through a gripping narrative." },
  { id:14, title:"Steve Jobs", author:"Walter Isaacson", price:19.99, originalPrice:27.99, category:"biography", rating:4.6, reviews:28900, badge:null, image:"https://covers.openlibrary.org/b/id/7892976-L.jpg", description:"The exclusive biography of Apple's visionary co-founder, based on more than forty interviews." }
];

/* Active filter/search state */
let currentFilter = 'all';
let currentSearch = '';

/** Get translated string safely */
function t(key) {
  const lang = localStorage.getItem('rtl-lang') || 'en';
  if (typeof translations === 'undefined') return key;
  return (translations[lang] && translations[lang][key]) || translations.en[key] || key;
}

/** Render star icons */
function renderStars(rating) {
  let h = '';
  const f = Math.floor(rating), half = rating % 1 >= 0.5;
  for (let i=0;i<f;i++) h += '<i class="fas fa-star" aria-hidden="true"></i>';
  if (half) h += '<i class="fas fa-star-half-alt" aria-hidden="true"></i>';
  for (let i=0;i<(5-f-(half?1:0));i++) h += '<i class="far fa-star" aria-hidden="true"></i>';
  return h;
}

/** Format review count */
function formatReviews(n) { return n>=1000?(n/1000).toFixed(1)+'k':String(n); }

/** Open product detail modal */
function openProductModal(id) {
  const p = products.find(x=>x.id===id);
  if (!p) return;
  const m = document.getElementById('productModal');
  if (!m) return;
  m.querySelector('.modal-product-img').src = p.image;
  m.querySelector('.modal-product-img').alt = `${p.title} by ${p.author}`;
  m.querySelector('.modal-product-title').textContent = p.title;
  m.querySelector('.modal-product-author').textContent = p.author;
  m.querySelector('.modal-product-desc').textContent = p.description;
  m.querySelector('.modal-product-price').textContent = formatPrice(p.price);
  m.querySelector('.modal-product-stars').innerHTML = renderStars(p.rating);
  m.querySelector('.modal-product-reviews').textContent = `(${formatReviews(p.reviews)} ${t('reviews')})`;
  const badge = m.querySelector('.modal-product-badge');
  badge.textContent = p.badge || '';
  badge.style.display = p.badge ? 'inline-block' : 'none';
  m.querySelector('.modal-add-to-cart').onclick = () => addToCart(p.id);
  new bootstrap.Modal(m).show();
}

/** Main display function — renders product cards with shimmer then real cards */
function displayProducts(containerId='products-grid', filter=currentFilter, search=currentSearch) {
  const container = document.getElementById(containerId);
  if (!container) return;
  currentFilter = filter; currentSearch = search;

  let list = [...products];
  if (filter && filter !== 'all') list = list.filter(p=>p.category===filter);
  if (search.trim()) {
    const q = search.toLowerCase();
    list = list.filter(p=>p.title.toLowerCase().includes(q)||p.author.toLowerCase().includes(q));
  }

  // Show skeleton shimmer
  container.innerHTML = Array.from({length:Math.max(list.length,4)}).map(()=>`
    <div class="col-6 col-md-4 col-lg-3 mb-4">
      <div class="skeleton-card">
        <div class="skeleton skeleton-img"></div>
        <div class="skeleton skeleton-text mt-2"></div>
        <div class="skeleton skeleton-text short"></div>
        <div class="skeleton skeleton-text" style="width:50%"></div>
      </div>
    </div>`).join('');

  // Render after 500ms
  setTimeout(() => {
    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5 no-results">
          <i class="fas fa-search fa-3x mb-3" aria-hidden="true"></i>
          <h4>${t('noResults')}</h4>
          <p>${t('noResultsSub')}</p>
        </div>`;
      return;
    }
    container.innerHTML = list.map((p,i) => `
      <div class="col-6 col-md-4 col-lg-3 mb-4">
        <article class="product-card h-100" style="animation-delay:${i*0.06}s">
          ${p.badge?`<span class="product-badge">${p.badge}</span>`:''}
          <div class="product-img-wrapper">
            <img src="${p.image}" alt="${p.title} by ${p.author} — book cover" class="product-img" loading="lazy"
              onerror="this.src='https://placehold.co/200x280/1a1a2e/e8a045?text=${encodeURIComponent(p.title.substring(0,12))}'">
          </div>
          <div class="product-body">
            <p class="product-title" title="${p.title}">${p.title}</p>
            <p class="product-author">${p.author}</p>
            <div class="product-rating" aria-label="Rating ${p.rating} out of 5">
              <span class="stars">${renderStars(p.rating)}</span>
              <span class="review-count">(${formatReviews(p.reviews)})</span>
            </div>
            <div class="product-price-row">
              <span class="product-price">${formatPrice(p.price)}</span>
              ${p.originalPrice?`<span class="product-original-price">${formatPrice(p.originalPrice)}</span>`:''}
            </div>
            <div class="product-card-actions mt-2 d-flex gap-2">
              <button class="btn-add-cart flex-grow-1" onclick="addToCart(${p.id})"
                aria-label="${t('addToCart')}: ${p.title}">
                <i class="fas fa-cart-plus me-1" aria-hidden="true"></i>${t('addToCart')}
              </button>
              <button class="btn-details" onclick="openProductModal(${p.id})"
                aria-label="${t('viewDetails')}: ${p.title}" title="${t('viewDetails')}">
                <i class="fas fa-eye" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </article>
      </div>`).join('');
  }, 500);
}
