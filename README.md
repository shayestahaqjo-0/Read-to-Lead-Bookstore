# 📚 Read to Lead Bookstore

A fully functional, responsive e-commerce bookstore website built for a web design final project.

## 🌐 Pages
- **index.html** — Home: hero carousel, featured deals, product grid with filter & search, editors' picks
- **about.html** — About: mission, stats table, timeline, team
- **contact.html** — Contact: validated form + info panel + map
- **checkout.html** — Cart + validated checkout form + order confirmation modal

## ✅ Features
- 14 books from JS array, rendered dynamically
- Category filter (All / Fiction / Non-Fiction / Design / Business / Biography)
- Real-time search by title or author
- Full cart: add, remove, qty +/−, totals, free shipping over $50
- Bootstrap 5: Navbar, Cards, Carousel, Modal, Grid
- Dark / Light mode (persists via localStorage)
- Language switcher: **English**, **دری (Dari)**, **پښتو (Pashto)** with RTL layout
- Form validation: contact form + checkout form (inline errors, auto-format card)
- Order confirmation modal with order summary
- Skeleton shimmer loading on products
- Scroll-to-top button, navbar scroll effect
- Accessibility: alt text, aria labels, focus states, semantic HTML
- Responsive: 375px / 768px / 1280px

## 📁 Structure
```
/read-to-lead
  /css         style.css, animations.css
  /js          translations.js, products.js, cart.js, validation.js, main.js
  /images      logo.png
  index.html   about.html   contact.html   checkout.html
  README.md
```

## 🚀 How to Run
Open `index.html` in any modern browser. No build step required.
