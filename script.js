/* Static data extracted from the original React/TypeScript project. */
const MENU_ITEMS = [
  // Espresso
  {
    id: 'e1',
    name: 'Classic Caffe Latte',
    category: 'espresso',
    price: 4.8,
    description:
      'Our signature rich espresso balanced with steamed milk and a light layer of velvety microfoam.',
    image: 'latte',
    rating: 4.8,
    reviewsCount: 142,
    calories: 120,
    tags: ['Popular', 'Classic'],
    isBestSeller: true
  },
  {
    id: 'e2',
    name: 'Spiced Flat White',
    category: 'espresso',
    price: 5.2,
    description:
      'Smooth, ristretto shots of espresso infused with a delicate dash of cinnamon, combined with velvety whole milk.',
    image: 'flatwhite',
    rating: 4.9,
    reviewsCount: 96,
    calories: 140,
    tags: ['Warm', 'Barista Pick'],
    isBestSeller: false
  },
  {
    id: 'e3',
    name: 'Madagascar Vanilla Cappuccino',
    category: 'espresso',
    price: 5.5,
    description:
      'Dark, rich espresso beneath a smooth and thick layer of milk foam, sweetened with natural Madagascar vanilla caviar.',
    image: 'cappuccino',
    rating: 4.7,
    reviewsCount: 115,
    calories: 150,
    tags: ['Aromatic'],
    isNew: true
  },
  {
    id: 'e4',
    name: 'Velvet Americano',
    category: 'espresso',
    price: 3.8,
    description:
      'Espresso shots topped with hot water to produce a light layer of crema, using our premium roasted single-origin Ethiopian beans.',
    image: 'americano',
    rating: 4.6,
    reviewsCount: 88,
    calories: 5,
    tags: ['Bold', 'Low Calorie']
  },

  // Signature Brews
  {
    id: 's1',
    name: 'JMB Salted Cloud Macchiato',
    category: 'signature',
    price: 6.5,
    description:
      'An ethereal combination of rich espresso, sweet vanilla syrup, and cold milk, topped with a dense layer of salted caramel cold foam.',
    image: 'salted-cloud',
    rating: 5.0,
    reviewsCount: 340,
    calories: 250,
    tags: ['Signature', 'Cold Foam'],
    isBestSeller: true
  },
  {
    id: 's2',
    name: 'Golden Honey Oat Latte',
    category: 'signature',
    price: 6.2,
    description:
      'Creamy barista-grade oat milk steamed with raw local organic honey and poured over our signature double-shot espresso.',
    image: 'honey-oat',
    rating: 4.9,
    reviewsCount: 215,
    calories: 180,
    tags: ['Oat Milk', 'Natural Sweetener'],
    isBestSeller: true
  },
  {
    id: 's3',
    name: 'Toasted Hazelnut Shakerato',
    category: 'signature',
    price: 5.8,
    description:
      'Fresh double espresso shaken over ice with roasted hazelnut syrup and cream, served chilled and perfectly aerated.',
    image: 'shakerato',
    rating: 4.8,
    reviewsCount: 74,
    calories: 160,
    tags: ['Iced', 'Nutty'],
    isNew: true
  },

  // Frappes
  {
    id: 'f1',
    name: 'Double Chocolate Fudge Mocha Frappe',
    category: 'frappe',
    price: 6.8,
    description:
      'Rich dark Belgian cocoa and espresso blended with milk and ice, loaded with luxurious chocolate fudge drizzle and whipped cream.',
    image: 'mocha-frappe',
    rating: 4.8,
    reviewsCount: 189,
    calories: 380,
    tags: ['Sweet Tooth', 'Blended'],
    isBestSeller: true
  },
  {
    id: 'f2',
    name: 'Uji Matcha Cream Frappe',
    category: 'frappe',
    price: 6.9,
    description:
      'Authentic stone-ground Japanese Uji matcha blended with creamy vanilla base, ice, and whole milk, finished with fresh whipped cream.',
    image: 'matcha-frappe',
    rating: 4.9,
    reviewsCount: 154,
    calories: 310,
    tags: ['Matcha', 'Best Selling Tea']
  },

  // Tea & Others
  {
    id: 't1',
    name: 'Artisanal Matcha Oat Latte',
    category: 'tea-others',
    price: 5.9,
    description:
      'Pure ceremonial Uji matcha whisked to perfection and served over steamed oat milk for a rich, earthy, antioxidant-packed cup.',
    image: 'matcha-latte',
    rating: 4.9,
    reviewsCount: 202,
    calories: 130,
    tags: ['Ceremonial', 'Dairy Free'],
    isBestSeller: true
  },
  {
    id: 't2',
    name: 'Lavender Hibiscus Chilled Tea',
    category: 'tea-others',
    price: 5.0,
    description:
      'A vibrant herbal infusion of dried hibiscus flowers, lavender petals, and citrus peel, served cold over ice with a slice of fresh lemon.',
    image: 'hibiscus-tea',
    rating: 4.7,
    reviewsCount: 65,
    calories: 45,
    tags: ['Refreshing', 'Caffeine Free'],
    isNew: true
  },

  // Pastries
  {
    id: 'p1',
    name: 'French Butter Croissant',
    category: 'pastries',
    price: 4.2,
    description:
      'Classic flaky, golden pastry made with 100% French AOP butter, baked fresh in-house every morning.',
    image: 'croissant',
    rating: 4.9,
    reviewsCount: 280,
    calories: 260,
    tags: ['Fresh Daily', 'Classic'],
    isBestSeller: true
  },
  {
    id: 'p2',
    name: 'Dark Chocolate Pain au Chocolat',
    category: 'pastries',
    price: 4.5,
    description:
      'Buttery, layered laminated dough wrapping around two rich, melty bars of premium 70% Valrhona dark chocolate.',
    image: 'pain-choc',
    rating: 4.8,
    reviewsCount: 167,
    calories: 290,
    tags: ['Fresh Daily', 'Indulgent']
  },
  {
    id: 'p3',
    name: 'Wild Blueberry Scone',
    category: 'pastries',
    price: 3.9,
    description:
      'Crumbly, soft-baked buttermilk scone packed with juicy wild blueberries, served warm with clotted cream and jam.',
    image: 'scone',
    rating: 4.6,
    reviewsCount: 92,
    calories: 210,
    tags: ['Warm', 'Fruit'],
    isNew: true
  },
  {
    id: 'p4',
    name: 'Burnt Basque Cheesecake',
    category: 'pastries',
    price: 6.5,
    description:
      'Rich, caramelized crust outside with a super-creamy, custard-like center that melts beautifully in your mouth.',
    image: 'cheesecake',
    rating: 4.9,
    reviewsCount: 145,
    calories: 340,
    tags: ['Signature Dessert'],
    isBestSeller: true
  }
];

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Sophia Carter',
    role: 'Specialty Coffee Connoisseur',
    avatar: 'SC',
    rating: 5,
    comment:
      'The JMB Salted Cloud Macchiato is hands down the best signature drink I have ever had. The creaminess of the foam perfectly cuts the espresso. Simply stunning!',
    date: 'July 2, 2026'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Local Freelancer',
    avatar: 'MC',
    rating: 5,
    comment:
      'JMB Coffee has become my absolute favorite workspace. The atmosphere is warm, the baristas are extremely knowledgeable, and the French Butter Croissant is unmatched!',
    date: 'June 28, 2026'
  },
  {
    id: 't3',
    name: 'Hannah Lim',
    role: 'Food Blogger',
    avatar: 'HL',
    rating: 5,
    comment:
      'I love their Interactive Coffee Customizer on the website! Being able to build my cup before going to the shop is such an elegant touch. Highly recommend JMB Coffee.',
    date: 'June 15, 2026'
  }
];

const STORE_LOCATIONS = [
  {
    id: 'l1',
    name: 'JMB Coffee — Downtown flagship',
    address: '102 Grand Avenue, Downtown Core, Suite 400',
    hours: 'Mon - Sun: 7:00 AM - 10:00 PM',
    phone: '+1 (555) 234-5678',
    gmapsMock: 'https://maps.google.com/maps?q=downtown+cafe&t=&z=13&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'l2',
    name: 'JMB Coffee — The Roastery & Garden',
    address: '45 Orchard Boulevard, Botanical District',
    hours: 'Mon - Sun: 8:00 AM - 9:00 PM',
    phone: '+1 (555) 876-5432',
    gmapsMock: 'https://maps.google.com/maps?q=botanical+cafe&t=&z=13&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'l3',
    name: 'JMB Coffee — Financial Hub',
    address: '18 Plaza Towers, Level 1 Business Atrium',
    hours: 'Mon - Fri: 6:30 AM - 8:00 PM, Sat: 8:00 AM - 4:00 PM',
    phone: '+1 (555) 345-6789',
    gmapsMock: 'https://maps.google.com/maps?q=office+cafe&t=&z=13&ie=UTF8&iwloc=&output=embed'
  }
];

window.JMB_DATA = { MENU_ITEMS, TESTIMONIALS, STORE_LOCATIONS };

(function () {
  'use strict';
  let initialized = false;

  const { MENU_ITEMS, TESTIMONIALS, STORE_LOCATIONS } = window.JMB_DATA;
  const routes = {
    home: 'Home.html',
    menu: 'Menu.html',
    customizer: 'Customizer.html',
    about: 'About.html',
    contact: 'Contact.html'
  };

  function escapeHTML(value) {
    return String(value ?? '').replace(
      /[&<>"']/g,
      (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[ch]
    );
  }
  function routeTo(page) {
    window.location.href = routes[page] || page;
  }
  function getCoffeeImage(item) {
    if (!item || item.category === 'pastries') return null;
    const name = item.name.toLowerCase();
    const isIced =
      item.category === 'frappe' ||
      name.includes('iced') ||
      name.includes('cold') ||
      name.includes('shakerato') ||
      name.includes('cloud');
    return isIced
      ? 'assets/images/iced_coffee_1783584831760.jpg'
      : 'assets/images/specialty_coffee_1783584814461.jpg';
  }
  function stars(rating) {
    return Array.from({ length: 5 }, (_, i) => (i < Math.floor(rating) ? '★' : '☆')).join('');
  }

  function initCommon() {
    document
      .querySelectorAll('[data-route]')
      .forEach((el) => el.addEventListener('click', () => routeTo(el.dataset.route)));
    const toggle = document.getElementById('mobile-toggle');
    const panel = document.getElementById('mobile-panel');
    if (toggle && panel) {
      toggle.addEventListener('click', () => {
        panel.classList.toggle('open');
        toggle.textContent = panel.classList.contains('open') ? '×' : '☰';
      });
    }
    const form = document.getElementById('newsletter-form');
    if (form) {
      const input = document.getElementById('newsletter-email');
      const status = document.getElementById('newsletter-status');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
        status.className = valid ? 'fine-label newsletter-ok' : 'fine-label newsletter-error';
        status.style.color = valid ? 'var(--success)' : '#f87171';
        status.textContent = valid
          ? '✔ Successfully subscribed to JMB Journal!'
          : 'Please provide a valid email format.';
        if (valid) input.value = '';
      });
    }
  }

  function productVisual(item, className = 'product-image') {
    const img = getCoffeeImage(item);
    if (img)
      return `<div class="${className}"><span class="badge image-badge">${escapeHTML(item.tags[0] || 'Popular')}</span><img src="${img}" alt="${escapeHTML(item.name)}"></div>`;
    return `<div class="${className}"><span class="badge image-badge">${escapeHTML(item.tags[0] || 'Fresh')}</span><span style="font-size:4.8rem">🥐</span></div>`;
  }

  function initHome() {
    const spotlight = document.getElementById('spotlight-content');
    if (!spotlight) return;
    const bestSellers = MENU_ITEMS.filter((item) => item.isBestSeller);
    let current = 0;
    let timer;

    function renderSpotlight() {
      const item = bestSellers[current];
      spotlight.innerHTML = `
        <div class="spotlight-card">
          ${productVisual(item, 'spotlight-image')}
          <div style="display:grid;gap:1.35rem;text-align:left">
            <div class="rating-row"><span>${stars(item.rating)}</span><span style="color:#d6d3d1;margin-left:.5rem">(${item.rating} / 5.0)</span></div>
            <h3 class="heading-md">${escapeHTML(item.name)}</h3>
            <p class="text-muted">${escapeHTML(item.description)}</p>
            <div class="price-row"><div><span class="fine-label">Base Price</span><span class="big-price">$${item.price.toFixed(2)}</span></div><div style="text-align:right"><span class="fine-label">Calories</span><strong>${item.calories} kcal</strong></div></div>
            <div class="button-row"><button class="btn btn-brand" data-route="customizer">Customize & Order</button><button class="btn btn-dark" data-route="menu">View Full Menu</button></div>
          </div>
        </div>
        <div class="dots">${bestSellers.map((_, i) => `<button class="dot ${i === current ? 'active' : ''}" data-slide="${i}" aria-label="Slide ${i + 1}"></button>`).join('')}</div>`;
      spotlight
        .querySelectorAll('[data-route]')
        .forEach((btn) => btn.addEventListener('click', () => routeTo(btn.dataset.route)));
      spotlight.querySelectorAll('[data-slide]').forEach((dot) =>
        dot.addEventListener('click', () => {
          current = Number(dot.dataset.slide);
          renderSpotlight();
          restart();
        })
      );
    }
    function move(delta) {
      current = (current + delta + bestSellers.length) % bestSellers.length;
      renderSpotlight();
      restart();
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(() => {
        current = (current + 1) % bestSellers.length;
        renderSpotlight();
      }, 5000);
    }
    document.getElementById('spotlight-prev')?.addEventListener('click', () => move(-1));
    document.getElementById('spotlight-next')?.addEventListener('click', () => move(1));
    renderSpotlight();
    restart();

    const reviewsGrid = document.getElementById('reviews-grid');
    const reviewForm = document.getElementById('review-form');
    let reviewRating = 5;
    function reviewCard(review) {
      return `<article class="review-card fade-in"><div><div class="review-head"><div class="avatar-row"><div class="avatar">${escapeHTML(review.avatar)}</div><div><h4>${escapeHTML(review.name)}</h4><small>${escapeHTML(review.role)}</small></div></div><small>${escapeHTML(review.date)}</small></div><p>“${escapeHTML(review.comment)}”</p></div><div class="rating-row" style="border-top:1px solid var(--border);padding-top:1rem">${stars(review.rating)}</div></article>`;
    }
    if (reviewsGrid) reviewsGrid.innerHTML = TESTIMONIALS.map(reviewCard).join('');
    if (reviewForm) {
      reviewForm.querySelectorAll('[data-rating]').forEach((btn) =>
        btn.addEventListener('click', () => {
          reviewRating = Number(btn.dataset.rating);
          reviewForm
            .querySelectorAll('[data-rating]')
            .forEach((star) =>
              star.classList.toggle('active', Number(star.dataset.rating) <= reviewRating)
            );
        })
      );
      reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('review-name').value.trim();
        const role = document.getElementById('review-role').value.trim() || 'Valued Guest';
        const comment = document.getElementById('review-comment').value.trim();
        const status = document.getElementById('review-status');
        if (!name || !comment) {
          status.className = 'error-text';
          status.textContent = 'Please enter your name and review comment.';
          return;
        }
        const review = {
          name,
          role,
          comment,
          rating: reviewRating,
          avatar: name.slice(0, 2).toUpperCase(),
          date: new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })
        };
        reviewsGrid.insertAdjacentHTML('afterbegin', reviewCard(review));
        reviewForm.reset();
        document.getElementById('review-role').value = 'Coffee Lover';
        status.className = 'success-box';
        status.textContent = '✔ Your review was posted to the live guest feed!';
        setTimeout(() => {
          status.textContent = '';
          status.className = '';
        }, 3500);
      });
    }
  }

  function initMenu() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    const search = document.getElementById('menu-search');
    const sort = document.getElementById('menu-sort');
    const categories = [
      ['all', 'All Items'],
      ['espresso', 'Classic Espresso'],
      ['signature', 'Signature Brews'],
      ['frappe', 'Ice Blended'],
      ['tea-others', 'Tea & Others'],
      ['pastries', 'Gourmet Pastries']
    ];
    let selectedCategory = 'all';
    let searchTerm = '';
    let sortBy = 'default';

    document.getElementById('filter-row').innerHTML = categories
      .map(
        ([id, label]) =>
          `<button class="filter-btn ${id === 'all' ? 'active' : ''}" data-category="${id}">${label}</button>`
      )
      .join('');

    function filteredItems() {
      let items = MENU_ITEMS.filter((item) => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch = `${item.name} ${item.description}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      if (sortBy === 'price-low') items = items.slice().sort((a, b) => a.price - b.price);
      if (sortBy === 'price-high') items = items.slice().sort((a, b) => b.price - a.price);
      if (sortBy === 'rating') items = items.slice().sort((a, b) => b.rating - a.rating);
      return items;
    }
    function renderProducts() {
      document
        .querySelectorAll('[data-category]')
        .forEach((btn) =>
          btn.classList.toggle('active', btn.dataset.category === selectedCategory)
        );
      const items = filteredItems();
      if (!items.length) {
        grid.innerHTML =
          '<div class="empty-state"><div style="font-size:3rem">☕</div><h3 class="heading-md">No beverages found</h3><p class="text-muted">Try adjusting filters or search keywords.</p></div>';
        return;
      }
      grid.innerHTML = items
        .map(
          (item) => `<article class="product-card" id="menu-card-${item.id}">
        <div class="product-badges">${item.isBestSeller ? '<span class="badge">Best Seller</span>' : ''}${item.isNew ? '<span class="badge badge-light">New</span>' : ''}</div>
        <div>${productVisual(item)}<div style="display:flex;align-items:center;justify-content:space-between"><span class="product-category">${escapeHTML(item.category.replace('-', ' '))}</span><span class="rating-row">★ <span style="color:#d6d3d1">${item.rating}</span></span></div><h3 class="product-title">${escapeHTML(item.name)}</h3><p class="product-desc">${escapeHTML(item.description)}</p></div>
        <div class="product-footer"><div><span class="fine-label">Price</span><span class="product-price">$${item.price.toFixed(2)}</span></div><button class="btn btn-dark btn-small" data-detail="${item.id}">Select Options</button></div>
      </article>`
        )
        .join('');
      grid
        .querySelectorAll('[data-detail]')
        .forEach((btn) =>
          btn.addEventListener('click', () =>
            openMenuModal(MENU_ITEMS.find((item) => item.id === btn.dataset.detail))
          )
        );
    }
    document.getElementById('filter-row').addEventListener('click', (event) => {
      const btn = event.target.closest('[data-category]');
      if (btn) {
        selectedCategory = btn.dataset.category;
        renderProducts();
      }
    });
    search.addEventListener('input', () => {
      searchTerm = search.value;
      renderProducts();
    });
    sort.addEventListener('change', () => {
      sortBy = sort.value;
      renderProducts();
    });
    renderProducts();
  }

  function openMenuModal(item) {
    let size = 'M';
    let temp = item.category === 'frappe' ? 'iced' : 'iced';
    function price() {
      return item.price + (size === 'S' ? -0.5 : size === 'L' ? 0.8 : 0);
    }
    function render() {
      document.getElementById('menu-modal')?.remove();
      const isDrink = item.category !== 'pastries';
      const modal = document.createElement('div');
      modal.id = 'menu-modal';
      modal.className = 'modal-root';
      modal.innerHTML = `<div class="modal-backdrop"></div><div class="modal-card"><button class="modal-close" id="modal-close">×</button><div class="modal-grid">
        <div>${productVisual(item, 'modal-image')}<div class="mini-stats"><div class="mini-stat"><span class="fine-label">Calories</span><strong>${item.calories} kcal</strong></div><div class="mini-stat"><span class="fine-label">Sugar</span><strong>${item.category === 'pastries' ? '12g' : item.category === 'frappe' ? '24g' : '0g'}</strong></div><div class="mini-stat"><span class="fine-label">Rating</span><strong>★ ${item.rating}</strong></div></div></div>
        <div style="display:grid;gap:1.2rem"><div><span class="badge badge-ghost">${escapeHTML(item.category.replace('-', ' '))}</span><h2 class="heading-md" style="margin-top:.8rem">${escapeHTML(item.name)}</h2><p class="text-muted">${escapeHTML(item.description)}</p></div>
        ${isDrink ? `<div><span class="fine-label">Select Size</span><div class="option-row">${['S', 'M', 'L'].map((s) => `<button class="option-btn ${size === s ? 'active' : ''}" data-size="${s}">${s === 'S' ? 'Small' : s === 'M' ? 'Medium' : 'Large'}</button>`).join('')}</div></div>` : ''}
        ${isDrink && item.category !== 'frappe' ? `<div><span class="fine-label">Temperature</span><div class="option-row">${['hot', 'iced'].map((t) => `<button class="option-btn ${temp === t ? 'active' : ''}" data-temp="${t}">${t}</button>`).join('')}</div></div>` : ''}
        <div class="price-row"><div><span class="fine-label">Estimated Price</span><span class="big-price">$${price().toFixed(2)}</span></div></div>
        <div class="button-row">${isDrink ? '<button class="btn btn-dark" id="advanced-lab">Advanced Lab Customize</button>' : ''}<button class="btn btn-primary" id="add-order">Add to Order</button></div><div id="cart-status"></div></div>
      </div></div>`;
      document.body.appendChild(modal);
      modal.querySelector('.modal-backdrop').addEventListener('click', () => modal.remove());
      modal.querySelector('#modal-close').addEventListener('click', () => modal.remove());
      modal.querySelectorAll('[data-size]').forEach((btn) =>
        btn.addEventListener('click', () => {
          size = btn.dataset.size;
          render();
        })
      );
      modal.querySelectorAll('[data-temp]').forEach((btn) =>
        btn.addEventListener('click', () => {
          temp = btn.dataset.temp;
          render();
        })
      );
      modal.querySelector('#add-order').addEventListener('click', () => {
        modal.querySelector('#cart-status').className = 'success-box';
        modal.querySelector('#cart-status').textContent =
          '✔ Added successfully to JMB guest order!';
        setTimeout(() => modal.remove(), 1200);
      });
      modal.querySelector('#advanced-lab')?.addEventListener('click', () => {
        const preset = {
          base:
            item.category === 'tea-others' && item.name.includes('Matcha')
              ? 'matcha'
              : 'espresso-double',
          milk:
            item.tags.includes('Oat Milk') || item.tags.includes('Dairy Free') ? 'oat' : 'whole',
          sweetness: 'normal',
          temperature: temp,
          syrup: item.name.includes('Caramel')
            ? 'caramel'
            : item.name.includes('Vanilla')
              ? 'vanilla'
              : 'none',
          toppings: item.name.includes('Cloud') ? ['whipped-cream'] : []
        };
        localStorage.setItem('jmbNoTailwindPreset', JSON.stringify(preset));
        routeTo('customizer');
      });
    }
    render();
  }

  function initCustomizer() {
    const root = document.getElementById('customizer-root');
    if (!root) return;
    let state = {
      base: 'espresso-double',
      milk: 'whole',
      sweetness: 'normal',
      temperature: 'iced',
      syrup: 'none',
      toppings: []
    };
    try {
      const preset = JSON.parse(localStorage.getItem('jmbNoTailwindPreset'));
      if (preset) {
        state = { ...state, ...preset };
        localStorage.removeItem('jmbNoTailwindPreset');
      }
    } catch {
      /* ignore */
    }
    const baseOptions = [
      ['espresso-single', 'Single Espresso', '+$0.50'],
      ['espresso-double', 'Double Espresso', '+$1.00'],
      ['cold-brew', 'Nitro Cold Brew', '+$1.20'],
      ['matcha', 'Ceremonial Matcha', '+$1.50'],
      ['decaf', 'Swiss Decaf', '+$0.80']
    ];
    const milkOptions = [
      ['none', 'Black / None', '+$0.00'],
      ['whole', 'Whole Milk', '+$0.40'],
      ['oat', 'Oat Milk 🌾', '+$0.80'],
      ['almond', 'Almond Milk', '+$0.70'],
      ['coconut', 'Coconut Milk', '+$0.75']
    ];
    function calc() {
      let price = 3.5,
        calories = 5,
        caffeine = '150mg (High)',
        sugar = 0;
      if (state.base === 'espresso-single') {
        price += 0.5;
        calories += 5;
        caffeine = '75mg (Medium)';
      } else if (state.base === 'espresso-double') {
        price += 1;
        calories += 10;
      } else if (state.base === 'cold-brew') {
        price += 1.2;
        calories += 3;
        caffeine = '200mg (Very High)';
      } else if (state.base === 'matcha') {
        price += 1.5;
        calories += 25;
        caffeine = '60mg (Medium)';
      } else if (state.base === 'decaf') {
        price += 0.8;
        calories += 5;
        caffeine = '2mg (Minimal)';
      }
      if (state.milk === 'whole') {
        price += 0.4;
        calories += 110;
      } else if (state.milk === 'oat') {
        price += 0.8;
        calories += 90;
      } else if (state.milk === 'almond') {
        price += 0.7;
        calories += 45;
      } else if (state.milk === 'coconut') {
        price += 0.75;
        calories += 75;
      }
      if (state.syrup !== 'none') {
        price += 0.5;
        calories += 80;
        sugar += 19;
      }
      if (state.sweetness === 'less') {
        sugar += 5;
        calories += 20;
      } else if (state.sweetness === 'normal') {
        sugar += 10;
        calories += 40;
      } else if (state.sweetness === 'extra') {
        sugar += 20;
        calories += 80;
      }
      state.toppings.forEach((t) => {
        price += 0.4;
        if (t === 'whipped-cream') calories += 70;
        if (t === 'caramel-drizzle') {
          calories += 30;
          sugar += 7;
        }
        if (t === 'cocoa-powder' || t === 'cinnamon') calories += 5;
      });
      return { price, calories, caffeine, sugar };
    }
    function instructions() {
      const list = [];
      if (state.syrup !== 'none')
        list.push(`Pump 1 shot of gourmet ${state.syrup} syrup into the base.`);
      if (state.temperature === 'iced')
        list.push('Fill the glass 70% full with crystal ice cubes.');
      if (state.temperature === 'frappe') list.push('Add ice and base ingredients to blender.');
      if (state.base === 'espresso-single')
        list.push('Extract 1 shot of espresso (30ml) using our Ethiopian single-origin bean.');
      else if (state.base === 'espresso-double')
        list.push('Extract a rich double espresso (60ml) directly over the base.');
      else if (state.base === 'cold-brew')
        list.push('Slow pour 90ml of cold-brewed coffee concentrate.');
      else if (state.base === 'matcha')
        list.push(
          'Whisk 3g of premium ceremonial Uji matcha with 40ml of hot water until frothy, then pour.'
        );
      else list.push('Extract 2 shots of Swiss water decaffeinated espresso.');
      list.push(
        state.milk === 'none'
          ? 'Fill remaining volume with filtered pure mountain water.'
          : `Pour 150ml of ${state.temperature === 'hot' ? 'steamed and microfoamed' : 'cold organic'} ${state.milk} milk into the mixture.`
      );
      if (state.toppings.length)
        list.push(
          `Artfully garnish with: ${state.toppings.map((t) => t.replace('-', ' ')).join(', ')}.`
        );
      return list;
    }
    function layerClass() {
      if (state.base === 'matcha') return 'layer-matcha';
      if (state.base === 'cold-brew') return 'layer-cold';
      return 'layer-coffee';
    }
    function milkClass() {
      return state.milk === 'oat'
        ? 'layer-oat'
        : state.milk === 'almond'
          ? 'layer-almond'
          : state.milk === 'coconut'
            ? 'layer-coconut'
            : 'layer-milk';
    }
    function syrupClass() {
      return state.syrup === 'vanilla'
        ? 'layer-vanilla'
        : state.syrup === 'hazelnut'
          ? 'layer-hazelnut'
          : 'layer-syrup';
    }
    function render() {
      const { price, calories, caffeine, sugar } = calc();
      const milkH = state.milk === 'none' ? 0 : 45;
      const baseH = state.milk === 'none' ? 75 : 35;
      const syrupH = state.syrup === 'none' ? 0 : 12;
      const foamH = state.toppings.includes('whipped-cream') ? 15 : 8;
      document.getElementById('drink-stage').innerHTML =
        `${state.temperature === 'hot' ? '<div class="hot-steam"><span>~</span><span>~</span><span>~</span></div>' : ''}<div class="drink-cup">${state.temperature === 'iced' ? '<div class="ice-cubes"><span></span><span></span><span></span></div>' : ''}<div class="drink-layer layer-foam" style="height:${foamH}%">${state.toppings.includes('whipped-cream') ? '☁ whipped cream' : 'froth'}</div>${state.milk !== 'none' ? `<div class="drink-layer ${milkClass()}" style="height:${milkH}%">🥛 ${state.milk} milk</div>` : ''}<div class="drink-layer ${layerClass()}" style="height:${baseH}%">☕ ${state.base.replace('-', ' ')}</div>${state.syrup !== 'none' ? `<div class="drink-layer ${syrupClass()}" style="height:${syrupH}%">🍯 ${state.syrup}</div>` : ''}</div><div class="drink-handle"></div>`;
      document.getElementById('calculation-box').innerHTML =
        `<div class="total-line"><span class="fine-label">Estimated Lab Price</span><span class="total-price" id="custom-total-price">$${price.toFixed(2)}</span></div><div><span class="fine-label">Calories</span><strong>${calories} kcal</strong></div><div><span class="fine-label">Caffeine</span><strong>${caffeine}</strong></div><div><span class="fine-label">Sugar</span><strong>${sugar} g</strong></div><div><span class="fine-label">Rating</span><strong style="color:var(--brand)">★ 5.0</strong></div>`;
      document.querySelectorAll('[data-control]').forEach((btn) => {
        const key = btn.dataset.control,
          val = btn.dataset.value;
        const active = key === 'toppings' ? state.toppings.includes(val) : state[key] === val;
        btn.classList.toggle('active', active);
      });
    }
    function controls(title, cls, key, options) {
      return `<section class="control-card"><h3 class="control-title">${title}</h3><div class="choice-grid ${cls}">${options.map(([val, label, desc]) => `<button class="choice" data-control="${key}" data-value="${val}"><strong>${label}</strong><span>${desc || ''}</span></button>`).join('')}</div></section>`;
    }
    document.getElementById('controls-panel').innerHTML =
      controls('1. Choose Temperature', 'cols-3', 'temperature', [
        ['iced', 'Iced ❄', 'Chilled over cubed ice'],
        ['hot', 'Hot 🔥', 'Warm and comforting'],
        ['frappe', 'Blended 🌪', 'Creamy blended ice']
      ]) +
      controls('2. Choose Brew Base', 'cols-3', 'base', baseOptions) +
      controls('3. Premium Milk', 'cols-5', 'milk', milkOptions) +
      `<div class="form-grid">${controls('Sweetness Intensity', 'cols-2', 'sweetness', [
        ['none', 'Unsweetened', '0%'],
        ['less', 'Less Sweet', '30%'],
        ['normal', 'Normal', 'Standard'],
        ['extra', 'Extra Sweet', '120%']
      ])}${controls('Artisanal Syrup', 'cols-2', 'syrup', [
        ['none', 'No Syrup', ''],
        ['caramel', 'Salted Caramel', ''],
        ['vanilla', 'Madagascar Vanilla', ''],
        ['hazelnut', 'Toasted Hazelnut', '']
      ])}</div>` +
      controls('4. Artisanal Toppings (+$0.40 each)', 'cols-4', 'toppings', [
        ['whipped-cream', 'Whipped Cream', ''],
        ['cocoa-powder', 'Dark Cocoa Dust', ''],
        ['cinnamon', 'Warm Cinnamon', ''],
        ['caramel-drizzle', 'Caramel Drizzle', '']
      ]) +
      '<button class="btn btn-brand" id="generate-ticket">Generate Barista QR Ticket & Recipe</button>';
    document.getElementById('controls-panel').addEventListener('click', (event) => {
      const btn = event.target.closest('[data-control]');
      if (!btn) return;
      const key = btn.dataset.control,
        val = btn.dataset.value;
      if (key === 'toppings')
        state.toppings = state.toppings.includes(val)
          ? state.toppings.filter((t) => t !== val)
          : state.toppings.concat(val);
      else state[key] = val;
      render();
    });
    document.getElementById('reset-customizer').addEventListener('click', () => {
      state = {
        base: 'espresso-double',
        milk: 'whole',
        sweetness: 'normal',
        temperature: 'iced',
        syrup: 'none',
        toppings: []
      };
      render();
    });
    document.getElementById('controls-panel').addEventListener('click', (event) => {
      if (event.target.id === 'generate-ticket') showTicket();
    });
    function showTicket() {
      document.getElementById('ticket-modal')?.remove();
      const stats = calc();
      const modal = document.createElement('div');
      modal.className = 'modal-root';
      modal.id = 'ticket-modal';
      modal.innerHTML = `<div class="modal-backdrop"></div><div class="ticket"><h2>JMB Coffee</h2><p class="fine-label" style="text-align:center">BARISTA ASSEMBLY TICKET</p><div class="ticket-row"><span>BREW BASE:</span><strong>${state.base.replace('-', ' ')}</strong></div><div class="ticket-row"><span>MILK:</span><strong>${state.milk}</strong></div><div class="ticket-row"><span>SWEETNESS:</span><strong>${state.sweetness}</strong></div><div class="ticket-row"><span>TEMP:</span><strong>${state.temperature}</strong></div><div class="ticket-row"><span>SYRUP:</span><strong>${state.syrup}</strong></div><div class="ticket-steps"><strong>Barista Sequence</strong><ol>${instructions()
        .map((step) => `<li>${escapeHTML(step)}</li>`)
        .join(
          ''
        )}</ol></div><div class="ticket-row" style="font-size:1rem"><strong>TOTAL:</strong><strong>$${stats.price.toFixed(2)}</strong></div><p style="font-size:.7rem;text-align:center;color:#78716c">${stats.calories} kcal | Sugar: ${stats.sugar}g | Caffeine: ${stats.caffeine}</p><div class="barcode">${Array.from({ length: 24 }, () => `<span style="width:${Math.random() > 0.5 ? 4 : 1}px"></span>`).join('')}</div><div class="button-row" style="margin-top:1rem"><button class="btn btn-dark" id="copy-recipe">Copy Specs</button><button class="btn btn-primary" id="close-ticket">Done</button></div></div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click', async (event) => {
        if (
          event.target.classList.contains('modal-backdrop') ||
          event.target.id === 'close-ticket'
        ) {
          modal.remove();
          return;
        }
        if (event.target.id === 'copy-recipe') {
          try {
            if (navigator.clipboard) await navigator.clipboard.writeText(instructions().join('\n'));
          } catch (error) {
            /* clipboard not available */
          }
          event.target.textContent = 'Copied!';
        }
      });
    }
    render();
  }

  function initAbout() {
    const bean = document.getElementById('roast-bean');
    if (!bean) return;
    const details = {
      light: [
        'Light Roast (Cinnamon / New England)',
        '196°C - 205°C',
        'Yirgacheffe Ethiopia & Sidamo',
        'High complex acidity, bright floral jasmine, sweet citrus rind, honey tea body.',
        'Roasted just until the first crack. This preserves terroir, acids, and floral flavor molecules.'
      ],
      medium: [
        'Medium Roast (City / American)',
        '210°C - 220°C',
        'Huila Colombia & Antigua Guatemala',
        'Balanced acidity & body, hazelnut praline, caramelized brown sugar, ripe stonefruits.',
        'Roasted through the first crack but stopped before the second for sweet caramelization.'
      ],
      dark: [
        'Dark Roast (French / Italian)',
        '225°C - 245°C',
        'Sumatra Mandheling & Premium Santos',
        'Heavy velvet body, low acidity, bittersweet dark chocolate, toasted oak, smoky molasses.',
        'Roasted until the second crack with surface oils and a bold chocolate body.'
      ]
    };
    function update(level) {
      const d = details[level];
      bean.className = `bean ${level}`;
      document.getElementById('roast-title').textContent = d[0];
      document.getElementById('roast-temp').textContent = `Chamber Heat: ${d[1]}`;
      document.getElementById('roast-origin').textContent = d[2];
      document.getElementById('roast-notes').textContent = d[3];
      document.getElementById('roast-desc').textContent = d[4];
      document
        .querySelectorAll('[data-roast]')
        .forEach((btn) => btn.classList.toggle('active', btn.dataset.roast === level));
    }
    document
      .querySelectorAll('[data-roast]')
      .forEach((btn) => btn.addEventListener('click', () => update(btn.dataset.roast)));
    update('medium');
  }

  function initContact() {
    const form = document.getElementById('contact-form');
    const branchList = document.getElementById('branch-list');
    if (!form || !branchList) return;
    let selected = STORE_LOCATIONS[0];
    function setError(field, message) {
      const input = document.getElementById(field);
      input.classList.add('error');
      input.parentElement.querySelector('.error-text')?.remove();
      input.insertAdjacentHTML('afterend', `<div class="error-text">⚠ ${message}</div>`);
    }
    function clearErrors() {
      form.querySelectorAll('.error-text').forEach((el) => el.remove());
      form.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      clearErrors();
      const data = Object.fromEntries(new FormData(form).entries());
      const errors = {};
      if (!data.name || data.name.trim().length < 2)
        errors.name = 'Full name must be at least 2 characters.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || ''))
        errors.email = 'Please provide a valid email format.';
      if (!/^\+?[0-9]{8,15}$/.test(String(data.phone || '').replace(/[\s-()]/g, '')))
        errors.phone = 'Phone must contain 8 to 15 digits.';
      if (!data.message || data.message.trim().length < 10)
        errors.message = 'Please write at least 10 characters.';
      Object.entries(errors).forEach(([k, v]) => setError(k, v));
      if (Object.keys(errors).length) return;
      document.getElementById('form-panel').innerHTML =
        `<div class="contact-success"><div style="font-size:3rem;color:var(--success)">✓</div><h2 class="heading-md">Message Verified & Transmitted!</h2><p class="text-muted">Thank you, <strong style="color:white">${escapeHTML(data.name)}</strong>. Your request ticket has been cataloged.</p><div class="ticket-card-dark"><div class="ticket-row"><span>TICKET ID:</span><strong style="color:var(--brand)">#JMB-${Math.floor(Math.random() * 900000) + 100000}</strong></div><div class="ticket-row"><span>CATEGORY:</span><strong>${escapeHTML(data.subject)}</strong></div><div class="ticket-row"><span>RESPOND TIME:</span><strong>Under 2 Hours</strong></div><small>A confirmation log has been queued to: ${escapeHTML(data.email)}</small></div><button class="btn btn-dark" onclick="location.reload()">Send Another Message</button></div>`;
    });
    function renderBranches() {
      branchList.innerHTML = STORE_LOCATIONS.map(
        (loc) =>
          `<button class="branch-card ${loc.id === selected.id ? 'active' : ''}" data-branch="${loc.id}"><div style="display:flex;justify-content:space-between;gap:1rem"><h3 class="heading-md" style="font-size:1.15rem;color:${loc.id === selected.id ? 'var(--brand)' : 'var(--white)'}">${escapeHTML(loc.name)}</h3>${loc.id === selected.id ? '<span class="badge">Selected Map</span>' : ''}</div><p class="text-muted">📍 ${escapeHTML(loc.address)}</p><p class="text-muted">🕒 ${escapeHTML(loc.hours)}</p><p class="text-muted">☎ ${escapeHTML(loc.phone)}</p></button>`
      ).join('');
      branchList.querySelectorAll('[data-branch]').forEach((btn) =>
        btn.addEventListener('click', () => {
          selected = STORE_LOCATIONS.find((loc) => loc.id === btn.dataset.branch);
          updateMap();
          renderBranches();
        })
      );
    }
    function updateMap() {
      document.getElementById('map-frame').src = selected.gmapsMock;
      document.getElementById('map-frame').title = `${selected.name} Map`;
      document.getElementById('map-hud').innerHTML =
        `<div style="color:var(--brand)">📍</div><div><strong>${escapeHTML(selected.name)}</strong><small style="display:block;color:var(--muted);margin-top:.25rem">${escapeHTML(selected.address)}</small></div>`;
    }
    renderBranches();
    updateMap();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (initialized) return;
    initialized = true;
    initCommon();
    initHome();
    initMenu();
    initCustomizer();
    initAbout();
    initContact();
  });
})();


/*
  PAGE-SPECIFIC JAVASCRIPT STARTER

  Copy and rename this file with Page-Template.html, for example:
  - Menu.html
  - js/menu.js

  Shared navigation, mobile-menu and newsletter behavior stays in js/app.js.
  Put only page-specific interactions in this file.
*/
/*
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // TEAM: Add this page's JavaScript here.
});
*/