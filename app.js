/* ==========================================================================
   RED CAMEL DESERT SAFARI DUBAI - INTERACTIVE JAVASCRIPT ENGINE
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. CURRENCY CONVERSION CONFIGURATION
// --------------------------------------------------------------------------
const CURRENCIES = {
  AED: { symbol: 'AED', rate: 1.0, prefix: false, label: 'Dirham' },
  USD: { symbol: '$', rate: 0.272, prefix: true, label: 'US Dollar' },
  EUR: { symbol: '€', rate: 0.251, prefix: true, label: 'Euro' },
  GBP: { symbol: '£', rate: 0.215, prefix: true, label: 'British Pound' },
  SAR: { symbol: 'SAR', rate: 1.02, prefix: false, label: 'Saudi Riyal' },
  INR: { symbol: '₹', rate: 22.8, prefix: true, label: 'Indian Rupee' }
};

let currentCurrency = 'AED';

function formatPrice(aedPrice) {
  const curr = CURRENCIES[currentCurrency];
  const converted = Math.round(aedPrice * curr.rate);
  if (curr.prefix) {
    return `${curr.symbol}${converted.toLocaleString()}`;
  }
  return `${converted.toLocaleString()} ${curr.symbol}`;
}

// --------------------------------------------------------------------------
// 2. PACKAGES DATASET (Sorted Ascending by Price)
// --------------------------------------------------------------------------
const PACKAGES = [
  {
    id: 'selfdrive-standard',
    title: 'Self-Drive Standard Pass',
    category: 'selfdrive',
    badge: 'Self-Drive',
    featured: false,
    priceAED: 35,
    img: 'assets/images/pkg_bbq_show.jpg',
    subtitle: 'Direct Camp Entry with Your Own Vehicle',
    duration: 'Camp Access (6:00 PM - 9:00 PM)',
    pickup: 'Self Drive to Camp Location',
    inclusions: [
      'Camp entrance pass for self-drive guests',
      'BBQ Buffet Dinner (Veg & Non-Veg)',
      'Live Tanoura & Fire Show performances',
      'Unlimited soft drinks & tea'
    ]
  },
  {
    id: 'selfdrive-premium',
    title: 'Self-Drive Premium Pass',
    category: 'selfdrive',
    badge: 'Self-Drive',
    featured: false,
    priceAED: 59,
    img: 'assets/images/itin_welcome.jpg',
    subtitle: 'Self-Drive Camp Entry + Priority Majlis Seating',
    duration: 'Camp Access (5:30 PM - 9:30 PM)',
    pickup: 'Self Drive to Camp Location',
    inclusions: [
      'Priority Majlis cushion seating inside camp',
      'Full 5-Star Live BBQ Buffet',
      'Camel ride & Henna painting inside camp',
      'All 3 Live Entertainment Shows'
    ]
  },
  {
    id: 'selfdrive-vip',
    title: 'Self-Drive VIP Pass',
    category: 'selfdrive',
    badge: 'Self-Drive VIP',
    featured: false,
    priceAED: 75,
    img: 'assets/images/gal_sandboarding.jpg',
    subtitle: 'Self-Drive Entry + Reserved Table & Waiter Service',
    duration: 'Camp Access (5:30 PM - 9:30 PM)',
    pickup: 'Self Drive to Camp Location',
    inclusions: [
      'VIP Reserved Table & dedicated waiter service',
      'Gourmet Live Grill & Table Buffet Service',
      'Falcon photo experience',
      'All Live Shows with front-row view'
    ]
  },
  {
    id: 'evening-standard',
    title: 'Evening Standard Desert Safari',
    category: 'evening',
    badge: 'Budget Choice',
    featured: false,
    priceAED: 79,
    img: 'assets/images/pkg_standard.jpg',
    subtitle: 'Essential Desert Safari & BBQ Dinner Pass',
    duration: '5.5 Hours (3:30 PM - 9:00 PM)',
    pickup: 'Sharing 4x4 SUV Pickup',
    inclusions: [
      '15–20 Mins Dune Bashing experience',
      'Sandboarding & Sunset photography point',
      'Standard Bedouin camp entry & carpet seating',
      'Arabic BBQ Buffet (Vegetarian & Non-Veg)',
      'Live Tanoura & Belly Dance performances',
      'Unlimited mineral water & soft drinks'
    ]
  },
  {
    id: 'evening-premium',
    title: 'Evening Premium Desert Safari',
    category: 'evening',
    badge: '★ Best Seller',
    featured: true,
    priceAED: 129,
    img: 'assets/images/hero_desert.jpg',
    subtitle: 'Full 6-Hour Lahbab Red Dune Experience & BBQ',
    duration: '6 Hours (3:00 PM - 9:30 PM)',
    pickup: 'Free 4x4 SUV Hotel Pickup & Drop',
    inclusions: [
      '25–30 Mins Lehbab Red Dune Bashing (4x4 Land Cruiser)',
      'Sandboarding from high dune crests',
      'Golden hour sunset photo stop',
      'Bedouin camp welcome with Arabic coffee & dates',
      'Camel riding & traditional Henna tattoo painting',
      '5-Star Live BBQ Buffet (Veg & Non-Veg options)',
      '3 Live Shows: Tanoura, Fire Performance & Belly Dance',
      'Unlimited soft drinks, mineral water, tea & coffee'
    ]
  },
  {
    id: 'evening-vip',
    title: 'Evening VIP Luxury Desert Safari',
    category: 'vip',
    badge: '👑 VIP Experience',
    featured: false,
    priceAED: 299,
    img: 'assets/images/pkg_vip.jpg',
    subtitle: 'VIP Reserved Table Service & Extended Dune Bashing',
    duration: '6 Hours (3:00 PM - 9:30 PM)',
    pickup: 'VIP 4x4 SUV Hotel Pickup',
    inclusions: [
      '35+ Mins Extended Thrill Dune Bashing',
      'Reserved VIP Carpeted Table with waiter service',
      'Exclusive Gourmet BBQ Buffet & Live Seafood upgrade',
      'Falconry photography experience & traditional costume',
      'Camel riding & unlimited Henna design',
      'Priority front-row stage view for all 3 Live Shows',
      'Unlimited premium mocktails, soft drinks & Arabian tea'
    ]
  },
  {
    id: 'combo-quad-safari',
    title: 'Quad Bike + Evening Safari Combo',
    category: 'combos',
    badge: '🔥 Top Thrill',
    featured: false,
    priceAED: 299,
    img: 'assets/images/pkg_quad.jpg',
    subtitle: '30-Min Open Desert Quad Biking + Complete Evening Tour',
    duration: '6.5 Hours (3:00 PM - 9:30 PM)',
    pickup: 'Free Hotel Pickup Included',
    inclusions: [
      '30 Minutes High-Power 350cc Quad Bike session',
      'Safety helmet & goggles provided with guide',
      'Red Dune Land Cruiser bashing & sandboarding',
      'Camel ride & Bedouin camp entry',
      'Full 5-Star BBQ Dinner & Live Show performances',
      'Unlimited drinks & refreshments'
    ]
  },
  {
    id: 'sunrise-safari',
    title: 'Sunrise Private Desert Safari',
    category: 'morning',
    badge: 'Golden Hour',
    featured: false,
    priceAED: 419,
    img: 'assets/images/pkg_sunrise.jpg',
    subtitle: 'Watch Sunrise Over Desert Dunes & Light Breakfast',
    duration: '3.5 Hours (5:00 AM - 8:30 AM)',
    pickup: 'Private 4x4 SUV Pick Up',
    inclusions: [
      'Early 5:00 AM hotel pickup to catch sunrise',
      'Spectacular desert dawn photo opportunities',
      'Morning dune bashing & sandboarding',
      'Bedouin style continental light breakfast & coffee'
    ]
  },
  {
    id: 'morning-short-private',
    title: 'Morning Short Safari (Private SUV)',
    category: 'morning',
    badge: 'Morning Fresh',
    featured: false,
    priceAED: 449,
    img: 'assets/images/pkg_camel_sunset.jpg',
    subtitle: 'Crisp Morning Sand Dunes & Sand Surfing',
    duration: '3 Hours (7:00 AM - 10:00 AM)',
    pickup: 'Private 4x4 SUV Pickup',
    inclusions: [
      'Cool early morning dune bashing session',
      'Sandboarding down pristine untouched slopes',
      'Camel farm visit & camel riding',
      'Fresh bottled water & juice refreshments',
      'Back at your hotel in time for brunch'
    ]
  },
  {
    id: 'evening-short-private',
    title: 'Evening Short Safari (Private SUV)',
    category: 'short',
    badge: 'Express Tour',
    featured: false,
    priceAED: 479,
    img: 'assets/images/pkg_express.jpg',
    subtitle: 'Focused Dune Bashing & Sunset without Camp Stay',
    duration: '3.5 Hours (3:30 PM - 7:00 PM)',
    pickup: 'Private 4x4 SUV (Up to 6 Passengers)',
    inclusions: [
      'Private 4x4 Land Cruiser dedicated to your group',
      '30 Mins Extreme Red Dune Bashing',
      'Sandboarding at panoramic dune summit',
      'Sunset photo session with family/friends',
      'Chilled mineral water & soft drinks',
      'Direct return to hotel before evening'
    ]
  },
  {
    id: 'vip-traditional-arabic',
    title: 'VIP Traditional Arabic Safari (Private)',
    category: 'vip',
    badge: 'Luxury Heritage',
    featured: false,
    priceAED: 999,
    img: 'assets/images/pkg_heritage.jpg',
    subtitle: 'Heritage Bedouin Experience in Private Reserve',
    duration: '6.5 Hours (3:00 PM - 9:30 PM)',
    pickup: 'Private Luxury 4x4 SUV Pickup',
    inclusions: [
      'Private Vintage / Luxury 4x4 Desert Transport',
      'Exclusive Bedouin Camp Pavilion access',
      'Interactive Arabic Cooking & Bread Making',
      'Royal Falconry show & private portrait photo',
      'Gourmet 7-Course Arabian Grill Dinner',
      'Private Shisha lounge service'
    ]
  },
  {
    id: 'private-camp-setup',
    title: 'Private Desert Camp Setup',
    category: 'vip',
    badge: 'Exclusive Oasis',
    featured: false,
    priceAED: 2599,
    img: 'assets/images/pkg_private_camp.jpg',
    subtitle: 'Entire Private Desert Camp for Groups & Events',
    duration: 'Custom Duration',
    pickup: 'Private Luxury Fleet Transport',
    inclusions: [
      'Entire desert camp venue reserved for your group',
      'Customized 5-Star Catering Menu & Chef',
      'Dedicated DJ, Sound System & Private Dancers',
      'Private dune bashing & quad bike track',
      'Ideal for corporate retreats, birthdays & anniversaries'
    ]
  }
];

// --------------------------------------------------------------------------
// 3. RENDER PACKAGES GRID
// --------------------------------------------------------------------------
function renderPackages(category = 'all') {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? PACKAGES 
    : PACKAGES.filter(p => p.category === category);

  const sorted = [...filtered].sort((a, b) => a.priceAED - b.priceAED);

  grid.innerHTML = sorted.map(pkg => `
    <div class="package-card ${pkg.featured ? 'featured' : ''}">
      ${pkg.badge ? `<div class="package-badge">${pkg.badge}</div>` : ''}
      <div class="package-img-wrapper">
        <img src="${pkg.img}" alt="${pkg.title}" class="package-img" loading="lazy">
        <div class="package-overlay"></div>
      </div>
      <div class="package-content">
        <div class="package-header">
          <h3 class="package-title">${pkg.title}</h3>
          <p class="package-subtitle">${pkg.subtitle}</p>
        </div>

        <div class="package-price-box">
          <span class="price-curr">${CURRENCIES[currentCurrency].symbol}</span>
          <span class="price-amount">${Math.round(pkg.priceAED * CURRENCIES[currentCurrency].rate).toLocaleString()}</span>
          <span class="price-label">/ person</span>
        </div>

        <ul class="package-inclusions">
          ${pkg.inclusions.slice(0, 4).map(inc => `
            <li class="package-inclusion-item">
              <span class="check-icon">✓</span>
              <span>${inc}</span>
            </li>
          `).join('')}
        </ul>

        <div class="package-actions">
          <button class="btn btn-outline-gold btn-sm" onclick="openPackageModal('${pkg.id}')">
            <span>Details</span>
          </button>
          <button class="btn btn-primary btn-sm" onclick="openBookingDrawer('${pkg.id}')">
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 4. PACKAGE DETAILS MODAL
// --------------------------------------------------------------------------
function openPackageModal(pkgId) {
  const pkg = PACKAGES.find(p => p.id === pkgId);
  if (!pkg) return;

  const modal = document.getElementById('packageDetailModal');
  const body = document.getElementById('packageModalContent');

  body.innerHTML = `
    <div style="position: relative;">
      <img src="${pkg.img}" alt="${pkg.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
      <span class="hero-badge" style="position: absolute; top: 12px; left: 12px;">${pkg.duration}</span>
    </div>
    <h2 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 8px;">${pkg.title}</h2>
    <p style="color: var(--text-secondary); margin-bottom: 20px;">${pkg.subtitle}</p>
    
    <div class="package-price-box" style="margin-bottom: 24px;">
      <span class="price-curr">${CURRENCIES[currentCurrency].symbol}</span>
      <span class="price-amount">${Math.round(pkg.priceAED * CURRENCIES[currentCurrency].rate).toLocaleString()}</span>
      <span class="price-label">per guest (${pkg.pickup})</span>
    </div>

    <h4 style="font-family: var(--font-heading); color: var(--gold-light); margin-bottom: 12px;">Complete Tour Inclusions:</h4>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px;">
      ${pkg.inclusions.map(inc => `
        <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem; color: var(--text-secondary);">
          <span style="color: var(--gold-primary); font-weight: 800;">✓</span>
          <span>${inc}</span>
        </li>
      `).join('')}
    </ul>

    <button class="btn btn-primary" style="width: 100%;" onclick="closePackageModal(); openBookingDrawer('${pkg.id}')">
      <span>Book This Tour • ${formatPrice(pkg.priceAED)}</span>
    </button>
  `;

  modal.classList.add('show');
}

function closePackageModal() {
  document.getElementById('packageDetailModal').classList.remove('show');
}

// --------------------------------------------------------------------------
// 5. BOOKING CALCULATOR & DRAWER ENGINE
// --------------------------------------------------------------------------
let bookingState = {
  packageId: 'evening-premium',
  adults: 2,
  children: 0,
  transport: 'sharing',
  quad: 'none'
};

function openBookingDrawer(pkgId = 'evening-premium') {
  bookingState.packageId = pkgId;
  const pkgSelect = document.getElementById('bookPackageSelect');
  if (pkgSelect) pkgSelect.value = pkgId;

  // Set default date to tomorrow
  const dateInput = document.getElementById('bookDate');
  if (dateInput && !dateInput.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  updateBookingCalculation();
  document.getElementById('bookingModal').classList.add('show');
  document.getElementById('bookingDrawer').classList.add('show');
}

function closeBookingDrawer() {
  document.getElementById('bookingModal').classList.remove('show');
  document.getElementById('bookingDrawer').classList.remove('show');
}

function updateCounter(type, delta) {
  if (type === 'adult') {
    bookingState.adults = Math.max(1, bookingState.adults + delta);
    document.getElementById('adultCountEl').innerText = bookingState.adults;
  } else if (type === 'child') {
    bookingState.children = Math.max(0, bookingState.children + delta);
    document.getElementById('childCountEl').innerText = bookingState.children;
  }
  updateBookingCalculation();
}

function updateBookingCalculation() {
  const pkgSelect = document.getElementById('bookPackageSelect');
  const transportSelect = document.getElementById('transportSelect');
  const quadSelect = document.getElementById('quadSelect');

  if (pkgSelect) bookingState.packageId = pkgSelect.value;
  if (transportSelect) bookingState.transport = transportSelect.value;
  if (quadSelect) bookingState.quad = quadSelect.value;

  const pkg = PACKAGES.find(p => p.id === bookingState.packageId) || PACKAGES[0];

  const adultPrice = pkg.priceAED;
  const childPrice = Math.round(pkg.priceAED * 0.75); // 25% discount for kids

  let transportExtra = 0;
  if (bookingState.transport === 'private') {
    transportExtra = 400; // Flat 400 AED flat fee for private 4x4 Land Cruiser
  }

  let quadExtraPerPerson = 0;
  if (bookingState.quad === '30m') quadExtraPerPerson = 150;
  if (bookingState.quad === '60m') quadExtraPerPerson = 250;

  const adultsTotal = bookingState.adults * adultPrice;
  const childrenTotal = bookingState.children * childPrice;
  const quadTotal = (bookingState.adults + bookingState.children) * quadExtraPerPerson;
  const grandTotalAED = adultsTotal + childrenTotal + transportExtra + quadTotal;

  // Update DOM labels
  const subAdultsEl = document.getElementById('subtotalAdults');
  const subChildEl = document.getElementById('subtotalChildren');
  const subTransEl = document.getElementById('subtotalTransport');
  const grandTotalEl = document.getElementById('grandTotalEl');

  if (subAdultsEl) subAdultsEl.innerText = `${bookingState.adults} × ${formatPrice(adultPrice)}`;
  if (subChildEl) subChildEl.innerText = `${bookingState.children} × ${formatPrice(childPrice)}`;
  if (subTransEl) subTransEl.innerText = transportExtra > 0 ? formatPrice(transportExtra) : 'Free Included';
  if (grandTotalEl) grandTotalEl.innerText = formatPrice(grandTotalAED);
}

function submitBookingToWhatsapp(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('bookName').value || 'Guest';
  const hotel = document.getElementById('bookHotel').value || 'Hotel Pickup';
  const date = document.getElementById('bookDate').value || 'Tomorrow';
  const pkg = PACKAGES.find(p => p.id === bookingState.packageId) || PACKAGES[0];

  const transportStr = bookingState.transport === 'private' ? 'Private 4x4 SUV (+400 AED)' : 'Sharing 4x4 SUV (Free)';
  const quadStr = bookingState.quad !== 'none' ? `Quad Bike (${bookingState.quad})` : 'None';

  const adultPrice = pkg.priceAED;
  const childPrice = Math.round(pkg.priceAED * 0.75);
  let transportExtra = bookingState.transport === 'private' ? 400 : 0;
  let quadExtra = bookingState.quad === '30m' ? 150 : (bookingState.quad === '60m' ? 250 : 0);
  const totalAED = (bookingState.adults * adultPrice) + (bookingState.children * childPrice) + transportExtra + ((bookingState.adults + bookingState.children) * quadExtra);

  const message = 
`🐪 *RED CAMEL DESERT SAFARI RESERVATION* 🐪
-------------------------------------------
👤 *Lead Guest:* ${name}
📅 *Date:* ${date}
📍 *Pickup Location:* ${hotel}

📦 *Selected Package:* ${pkg.title}
👥 *Adults:* ${bookingState.adults}
👶 *Children (3-11y):* ${bookingState.children}
🚗 *Transport:* ${transportStr}
🏍️ *Quad Add-on:* ${quadStr}

💰 *Estimated Total Payable on Arrival:* AED ${totalAED} (${formatPrice(totalAED)})
-------------------------------------------
Please confirm my booking availability! Thank you!`;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/971544508581?text=${encodedMsg}`;
  window.open(waUrl, '_blank');
}

// --------------------------------------------------------------------------
// 6. GALLERY LIGHTBOX & ACCORDION SEARCH
// --------------------------------------------------------------------------
function openLightbox(imgSrc, captionStr) {
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightboxCaption').innerText = captionStr;
  document.getElementById('lightboxModal').classList.add('show');
}

function closeLightbox() {
  document.getElementById('lightboxModal').classList.remove('show');
}

// --------------------------------------------------------------------------
// 7. INITIALIZATION & EVENT LISTENERS
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link based on current page URL path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Render Packages
  renderPackages('all');

  // Sticky Header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Category Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderPackages(e.target.dataset.category);
    });
  });

  // Currency Dropdown Selector
  const currencyBtn = document.getElementById('currencyBtn');
  const currencyDropdown = document.getElementById('currencyDropdown');

  if (currencyBtn && currencyDropdown) {
    currencyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currencyDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      currencyDropdown.classList.remove('show');
    });

    const currOpts = document.querySelectorAll('.currency-opt');
    currOpts.forEach(opt => {
      opt.addEventListener('click', (e) => {
        const selectedCurr = e.currentTarget.dataset.curr;
        currentCurrency = selectedCurr;
        
        document.querySelector('.curr-code').innerText = selectedCurr;
        currOpts.forEach(o => o.classList.remove('selected'));
        e.currentTarget.classList.add('selected');

        // Re-render package grid & calculation
        const activeTab = document.querySelector('.tab-btn.active');
        renderPackages(activeTab ? activeTab.dataset.category : 'all');
        updateBookingCalculation();
      });
    });
  }

  // FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // FAQ Search
  const faqInput = document.getElementById('faqSearch');
  if (faqInput) {
    faqInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      faqItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Mobile Menu Toggle
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');
  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    // Close menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  }

  // Form listeners for price recalculation
  const pkgSel = document.getElementById('bookPackageSelect');
  const transSel = document.getElementById('transportSelect');
  const quadSel = document.getElementById('quadSelect');

  if (pkgSel) pkgSel.addEventListener('change', updateBookingCalculation);
  if (transSel) transSel.addEventListener('change', updateBookingCalculation);
  if (quadSel) quadSel.addEventListener('change', updateBookingCalculation);
});
