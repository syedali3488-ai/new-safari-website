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
// 2. PACKAGES DATASET (Enriched Inclusions & Sorted Ascending by Price)
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
      'Direct entry pass to desert camp in your own vehicle (Sedan or 4x4 accessible)',
      'Free designated desert camp parking area with security',
      'Traditional Arabic welcome with dates & hot Gahwa (Arabic coffee)',
      '5-Star Bedouin BBQ Buffet Dinner (Separate Veg & Non-Veg sections)',
      'Unlimited soft drinks, chilled mineral water, tea & instant coffee',
      'Live Stage Performances: Tanoura Dance & Thrilling Fire Show',
      'Open access to central carpeted seating area & Bedouin lounge',
      'Traditional Henna hand tattoo painting station',
      'Sunset viewing point access over the desert dunes',
      'On-site camp washroom & prayer room facilities'
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
      'Direct entry pass to premium desert camp in your own vehicle',
      'Reserved designated parking close to main camp entrance',
      'Priority Majlis cushion seating section with prime stage views',
      'Welcome Arabic Gahwa coffee, dates & fresh mint lemonade',
      'Full 5-Star Live Grill BBQ Buffet (Kebabs, Chicken Tikka, Hummus, Biryani & Sweets)',
      'Unlimited soft drinks, chilled mineral water, Arabic tea & coffee',
      'Live Stage Shows: Tanoura Dance, Belly Dance & Fire Show',
      'Complimentary short Camel Ride session inside camp perimeter',
      'Complimentary Henna tattoo painting for adults & children',
      'Traditional Arabic costume photography station (Kandura & Abaya)',
      'Open access to desert sandboarding slopes near camp'
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
      'Direct VIP entry pass with reserved priority parking',
      'Reserved VIP Elevated Carpeted Table with dedicated personal waiter service',
      'Exclusive VIP Live Grill & Gourmet Buffet served directly at your table',
      'Royal Falconry photo opportunity (Hold live falcon with traditional glove)',
      'Unlimited premium mocktails, soft drinks, Arabic tea & fresh juices',
      'Priority front-row table seating for all 3 Live Stage Shows (Tanoura, Fire, Belly Dance)',
      'Dedicated VIP Shisha table service (Multiple flavors available)',
      'Unlimited Camel Rides & Henna body art',
      'Traditional Arabic dress photo session',
      'Luxury carpeted Majlis lounge access with private washroom facilities'
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
      'Door-to-door hotel pickup & drop-off in a climate-controlled 4x4 SUV',
      '15–20 Minutes Lahbab Red Dune Bashing experience with certified driver',
      'Sandboarding thrill session down high red dune crests',
      'Golden hour desert sunset photography stop',
      'Bedouin camp welcome with dates & hot Arabic tea/coffee',
      'Delicious 5-Star BBQ Buffet Dinner (Halal Veg & Non-Veg options)',
      'Unlimited mineral water & soft drinks throughout the evening',
      'Live Stage Entertainment: Tanoura Dancer & Belly Dance show',
      'Traditional Henna hand painting & camel ride experience',
      'Fully insured Toyota Land Cruiser 4x4 with safety roll bars'
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
      'Door-to-door hotel & residence pickup/drop-off in Toyota Land Cruiser 4x4',
      '25–30 Minutes Thrilling Lehbab High Red Dune Bashing',
      'Sandboarding equipment & guided sand surfing on 50ft red dunes',
      'Panoramic 360° golden hour sunset photo stop on top of dune ridge',
      'Bedouin camp welcome with Arabic Gahwa, dates & fresh welcome drinks',
      'Priority Majlis cushion seating with optimal stage view',
      '5-Star Live Grill BBQ Buffet Feast (Grilled Kebabs, Shish Taouk, Biryani, Salads & Arabian Sweets)',
      'Unlimited soft drinks, mineral water, Arabic coffee & Karak tea',
      'Full 3 Live Stage Performances: Tanoura Spinner, Fire Breath Show & Belly Dance',
      'Unlimited Camel Rides & traditional Henna tattoo art',
      'Arabic costume photography session & souvenir photo point',
      'Comprehensive passenger insurance & DET certified professional driver'
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
      'VIP Door-to-Door Pickup in Luxury 4x4 SUV (Toyota Land Cruiser / Nissan Patrol)',
      '35+ Minutes Extended Thrill Red Dune Bashing across deep desert routes',
      'Reserved VIP Elevated Carpeted Table with dedicated personal waiter',
      'Gourmet 5-Star Live Grill & Seafood Upgrade served directly to your VIP table',
      'Royal Falconry experience (Photos holding live trained desert falcon)',
      'Unlimited premium mocktails, fresh juices, soft drinks, tea & coffee',
      'Dedicated VIP Shisha table service with customized tobacco flavors',
      'Priority front-row stage view for all Live Shows (Tanoura, Fire, Belly Dance)',
      'Extended Camel Rides & unlimited elaborate Henna tattoo art',
      'Arabic traditional royal costume photo session',
      'Luxury private VIP washrooms & air-conditioned lounge access'
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
      'Door-to-door hotel pickup & drop-off in 4x4 Toyota Land Cruiser',
      '30 Minutes High-Power 350cc Quad Biking session in dedicated desert arena',
      'Full safety gear provided: Helmets, goggles, safety briefs & professional instructor',
      '25–30 Minutes Lahbab Red Dune Bashing in 4x4 Land Cruiser',
      'Sandboarding down steep sand dunes with photo assistance',
      'Sunset photo stop at high red dune vantage point',
      'Bedouin camp entry with Arabic coffee, tea & dates welcome',
      '5-Star BBQ Buffet Dinner with live grill counters',
      'Unlimited soft drinks, mineral water & tea',
      '3 Live Shows: Tanoura Dance, Fire Performance & Belly Dance',
      'Camel ride & Henna tattoo painting experience'
    ]
  },
  {
    id: 'birthday-celebration',
    title: 'Birthday Celebration Desert Safari',
    category: 'birthday',
    badge: '🎉 Special Event',
    featured: false,
    priceAED: 349,
    img: 'assets/images/vip_camp.jpg',
    subtitle: 'Customized Birthday Camp Setup, Fresh Cake & VIP Service',
    duration: '6 Hours (3:00 PM - 9:30 PM)',
    pickup: 'Free 4x4 SUV Hotel Pickup & Drop',
    inclusions: [
      'Special customized Birthday decor & balloon setup at your reserved camp space',
      'Complimentary fresh Birthday Cake (1kg) with sparkler candle ceremony',
      'Personalized Birthday shout-out & song announcement on main stage',
      'Door-to-door hotel pickup & drop-off in climate-controlled Toyota Land Cruiser 4x4',
      '25–30 Minutes Thrilling Lehbab High Red Dune Bashing',
      'Sandboarding gear & dune surfing action on steep red dune slopes',
      'Golden hour sunset photo stop on dune crest with family & friends',
      'Reserved VIP Table seating with dedicated personal waiter service',
      '5-Star Live Grill BBQ Buffet (Grilled Kebabs, Chicken Tikka, Seafood & Sweets)',
      'Unlimited soft drinks, chilled mineral water, mocktails & Arabic tea/coffee',
      'Full 3 Live Stage Performances: Tanoura Spinner, Fire Show & Belly Dance',
      'Royal Falconry photo experience, camel rides & traditional Henna tattoo art'
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
      'Early morning 5:00 AM hotel pickup in Private 4x4 Toyota Land Cruiser',
      'Scenic sunrise viewing stop as dawn breaks over untouched desert dunes',
      'Professional sunrise photo shoot assistance on high dune crests',
      '25–30 Minutes Crisp morning red dune bashing session',
      'Sandboarding on untouched, pristine sand slopes',
      'Visit to authentic camel farm for camel feeding & photo opportunities',
      'Morning camel riding experience',
      'Bedouin-style continental light breakfast (Fresh pastries, fruits, juices, tea & coffee)',
      'Chilled bottled mineral water & fresh juices throughout',
      'Private vehicle reserved exclusively for your family/group (up to 6 guests)'
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
      'Dedicated Private 4x4 Toyota Land Cruiser exclusively for your group (Up to 6 Pax)',
      'Door-to-door hotel pickup & drop-off (Flexible pickup time: 7:00 AM - 9:00 AM)',
      '30–35 Minutes Extreme Morning Red Dune Bashing with certified desert master',
      'High-dune sandboarding & sand surfing action',
      'Stop at high dune summit for 360° panoramic desert photography',
      'Visit to traditional desert camel farm & camel ride experience',
      'Unlimited chilled bottled water, juices, and soft drinks',
      'Return drop-off back to your hotel in time for lunch/brunch'
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
      'Private 4x4 Toyota Land Cruiser reserved exclusively for your group (Up to 6 Guests)',
      'Hotel pickup at 3:30 PM & direct express return by 7:00 PM',
      '35 Minutes Intense Red Dune Bashing across Lehbab’s highest dunes',
      'Sunset viewing & dedicated photo session at golden hour dune peak',
      'Sandboarding down 60ft sand slopes with photo assistance',
      'Desert wildlife spotting opportunities (Arabian Gazelles & Falcons)',
      'Refreshments on board: Chilled mineral water, juices & soft drinks',
      'Ideal for travelers short on time or preferring to skip evening camp shows'
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
      'Door-to-door hotel transport in Private Luxury 4x4 (Land Cruiser / Nissan Patrol)',
      'Private Heritage Desert Reserve access with vintage/luxury 4x4 dune drive',
      'Exclusive Private Bedouin Pavilion setup with dedicated Majlis seating',
      'Interactive Arabic Cooking Demonstration (Fresh Saj bread making & Luqaimat)',
      'Royal Falconry Show & personal photo shoot with trained hunting falcons',
      'Gourmet 7-Course Royal Arabian Grill Feast (Lamb chops, prawns, kebabs, mezze)',
      'Private Shisha Butler service at your pavilion',
      'Live Private Cultural Performances (Traditional Oud musician & Tanoura artist)',
      'Sunset camel caravan trek with sunset champagne/mocktail toast',
      'Premium dates, Arabic Gahwa, unlimited beverages & luxury desserts'
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
      'Exclusive reservation of entire private desert camp venue for your event/group',
      'Luxury private fleet 4x4 transport for all guests (up to 15 guests included)',
      'Private red dune bashing convoy & dedicated open quad bike arena',
      'Customized 5-Star Gourmet Catering (International BBQ, Seafood, Vegan & Live Cooking)',
      'Dedicated DJ, Sound System, Stage Lighting & Live Performers (Fire, Tanoura, Belly Dancers)',
      'Private Shisha Lounge with personal servers & flavor station',
      'Unlimited camel rides, falconry photo station, sandboarding & Henna artists',
      'Customized branding, bonfire setup, stargazing telescope & luxury pavilion seating',
      'Dedicated event coordinator & private security team on site'
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
          ${pkg.inclusions.slice(0, 6).map(inc => `
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

  // Category Tabs (Packages)
  const tabBtns = document.querySelectorAll('.tab-btn:not(.gallery-tab)');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderPackages(e.target.dataset.category);
    });
  });

  // Gallery Filter Tabs
  const galTabBtns = document.querySelectorAll('.gallery-tab');
  const galItems = document.querySelectorAll('.gallery-item');
  if (galTabBtns.length > 0 && galItems.length > 0) {
    galTabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        galTabBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.dataset.gcat;
        galItems.forEach(item => {
          if (cat === 'all' || item.dataset.gcat === cat) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

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
