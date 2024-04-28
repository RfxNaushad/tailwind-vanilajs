//Top bar sliding
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones."
];

let currentIndex = 0;
const quoteElement = document.getElementById('quote');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Display initial quote
quoteElement.textContent = quotes[currentIndex];

// Function to show next quote
function showNextQuote() {
  currentIndex = (currentIndex + 1) % quotes.length;
  quoteElement.textContent = quotes[currentIndex];
}

// Function to show previous quote
function showPrevQuote() {
  currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
  quoteElement.textContent = quotes[currentIndex];
}

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', showNextQuote);
prevBtn.addEventListener('click', showPrevQuote);

function autoSlide() {
  setInterval(showNextQuote, 2000)
}
autoSlide();


// categories section
const categories = [
    { name: "All Categories", icon: "fa-bars" },
    { name: "Cars and Motorcycles", icon: "fa-car" },
    { name: "Music and Books", icon: "fa-music" },
    { name: "Arts and Crafts", icon: "fa-paintbrush" },
    { name: "Moms and Babies", icon: "fa-baby-carriage" },
    { name: "Softwares", icon: "fa-laptop-code" },
    { name: "Home & Garden", icon: "fa-pagelines" },
    { name: "Electronics", icon: "fa-wrench" },
    { name: "Kids and Toy", icon: "fa-child" },
    { name: "Clothing and Shoes", icon: "fa-shirt" },
    { name: "Beauty and Health", icon: "fa-notes-medical" },
    { name: "Sports", icon: "fa-bowling-ball" },
    { name: "Jewellery", icon: "fa-gem" },
  ];

  const categoryListElement = document.getElementById('category-list');
  categories.forEach(category => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="#" class="flex items-center space-x-2 hover:bg-blue-200 p-2 rounded-md">
        <i class="fa-solid ${category.icon}"></i>
        <span>${category.name}</span>
      </a>
    `;
    categoryListElement.appendChild(li);
  });


// banner section
document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = [
        'images/banner1.jpg',
        'images/954.jpg',
        'images/797.jpg',
        'images/129804.jpg'
    
    ];

    let currentSlide = 0;

    function changeSlide() {
        // Change the image
        const sliderImage = document.getElementById('sliderImage');
        sliderImage.classList.remove('fade-in');
        void sliderImage.offsetWidth; // Trigger reflow to restart animation
        sliderImage.classList.add('fade-in');
        
        sliderImage.src = sliderImages[currentSlide];

        // Update indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.remove('bg-white', 'opacity-50');
                dot.classList.add('bg-black', 'opacity-100');
                dot.style.transform = 'scale(1.25)';
            } else {
                dot.classList.remove('bg-black', 'opacity-100');
                dot.classList.add('bg-white', 'opacity-50');
                dot.style.transform = 'scale(1)';
            }
        });

        currentSlide = (currentSlide + 1) % sliderImages.length;
    }

    // Set initial states
    changeSlide();

    // Change slide every 3 seconds
    setInterval(changeSlide, 3000);
});

// Brand slider
  
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carouselContainer');
    const images = [
        { path: 'images/Gondar.png', name: "Brand Name" },
        { path: 'images/Tulsi.png', name: "Brand Name" },
        { path: 'images/Group 1.png', name: "Brand Name" },
        { path: 'images/Group 8.png', name: "Brand Name" },
        // ... add more as needed
    ];

    // Add images and names to the carousel
    images.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'inline-block  px-8 text-center '; // text-center class added for alignment

        const image = document.createElement('img');
        image.src = item.path;
        image.className = 'carousel-item w-12 h-12 rounded-full bg-gray-200 items-center justify-center object-cover mx-auto';
        image.alt = 'Brand Logo';
        slide.appendChild(image);

        const brandName = document.createElement('p');
        brandName.className = 'text-xs mt-2';
        brandName.textContent = item.name; // Using the name from the image object
        slide.appendChild(brandName);

        carouselContainer.appendChild(slide);
    });

    const carouselItems = carouselContainer.innerHTML;
    carouselContainer.innerHTML += carouselItems;

    // Set up animation
    let scrollLeft = 0;
    const scrollSpeed = 1;

    function animateCarousel() {
        scrollLeft += scrollSpeed;
        if (scrollLeft >= carouselContainer.scrollWidth / 2) {
            scrollLeft = 0;
            carouselContainer.style.transition = 'none';
            carouselContainer.style.transform = `translateX(-${scrollLeft}px)`;
            carouselContainer.offsetWidth; // Trigger reflow
            carouselContainer.style.transition = 'transform 0.5s linear';
        }
        carouselContainer.style.transform = `translateX(-${scrollLeft}px)`;

        requestAnimationFrame(animateCarousel);
    }

    requestAnimationFrame(animateCarousel);
});


// shop by department

// first row
const shopImg = [
  { name: "images/shop_department/shop.png", icon: "Food" },
  { name: "images/shop_department/shop_2.png", icon: "Interior" },
  { name: "images/shop_department/shop_3.png", icon: "Art" },
  { name: "images/shop_department/shop_4.png", icon: "Plant" },
  { name: "images/shop_department/shop_5.png", icon: "Colorful" },
  { name: "images/shop_department/shop_6.png", icon: "Architecture" }
];

const shopGrid = document.getElementById('shop-grid');
shopImg.forEach(img => {
  const div = document.createElement('div');
  div.className = "flex flex-col items-center"; // Keeps your styling consistent
  div.innerHTML = `<img class="w-60 h-52" src="${img.name}" alt="${img.icon}"/>
  <p class="mt-4">${img.icon}</p>`;
  shopGrid.appendChild(div);
});

// second row
const shopImg2 = [
  { name: "images/shop_department/shop_7.png", icon: "Minimal" },
  { name: "images/shop_department/shop_8.png", icon: "Technology" },
  { name: "images/shop_department/shop_9.png", icon: "Animal" },
  { name: "images/shop_department/shop_10.png", icon: "Nature" },
  { name: "images/shop_department/shop_11.png", icon: "Texture" },
  { name: "images/shop_department/shop_13.png", icon: "Portrait" }
];

const shopGrid2 = document.getElementById('shop-grid2');
shopImg2.forEach(img => {
  const div2 = document.createElement('div');
  div2.className = "flex flex-col items-center"; // Keeps your styling consistent
  div2.innerHTML = `<img class="w-60 h-52" src="${img.name}" alt="${img.icon}"/>
  <p class="mt-4">${img.icon}</p>`;
  shopGrid2.appendChild(div2);
});


// on selling product
const shopImg3 = [
  { name: "images/on_selling/5.png", title: "Wireless Bluetooth Headset Single Ear Earplugs Ultra...", description: "Wireless Bluetooth Headset Single", price: "$8", originalPrice: "$16", discount: "-50%" },
  { name: "images/shop_department/shop_8.png", title: "Wireless Bluetooth Headset Single Ear Earplugs Ultra...", description: "Wireless Bluetooth Headset Single", price: "$8", originalPrice: "$16", discount: "-50%" },
  { name: "images/on_selling/4.png", title: "Wireless Bluetooth Headset Single Ear Earplugs Ultra...", description: "Wireless Bluetooth Headset Single", price: "$8", originalPrice: "$16", discount: "-50%" },
  { name: "images/on_selling/6.png", title: "Wireless Bluetooth Headset Single Ear Earplugs Ultra...", description: "Wireless Bluetooth Headset Single", price: "$8", originalPrice: "$16", discount: "-50%" },
  { name: "images/on_selling/3.png", title: "Wireless Bluetooth Headset Single Ear Earplugs Ultra...", description: "Wireless Bluetooth Headset Single", price: "$8", originalPrice: "$16", discount: "-50%" },
  { name: "images/shop_department/shop_13.png", title: "Wireless Bluetooth Headset Single Ear Earplugs Ultra...", description: "Wireless Bluetooth Headset Single", price: "$8", originalPrice: "$16", discount: "-50%" },
  { name: "images/on_selling/1.png", title: "Wireless Bluetooth Headset Single Ear Earplugs Ultra...", description: "Wireless Bluetooth Headset Single", price: "$8", originalPrice: "$16", discount: "-50%" },
  { name: "images/on_selling/2.png", title: "Wireless Bluetooth Headset Single Ear Earplugs Ultra...", description: "Wireless Bluetooth Headset Single", price: "$8", originalPrice: "$16", discount: "-50%" },
  { name: "images/on_selling/6.png", title: "Wireless Bluetooth Headset Single Ear Earplugs Ultra...", description: "Wireless Bluetooth Headset Single", price: "$8", originalPrice: "$16", discount: "-50%" }
];

const shopGrid3 = document.getElementById('selling-grid');

shopImg3.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.className = "bg-white overflow-hidden";
  productDiv.innerHTML = `
    <div class="flex flex-col md:flex-row">
      <!-- Image Column -->
      <div class="flex-2">
        <img class="object-cover object-center w-full h-full" src="${product.name}" alt="Product Image">
      </div>
      <!-- Content Column -->
      <div class="flex-3 p-4 content-center flex flex-col">
        <div>
          <h3 class="text-lg font-semibold">${product.title}</h3>
          <p class="text-sm text-gray-600">${product.description}</p>
        </div>
        <div class="mt-2 md:mt-0">
          <div class="flex items-baseline">
            <span class="text-lg font-bold">${product.price}</span>
            <span class="text-sm line-through ml-2">${product.originalPrice}</span>
            <span class="text-sm font-semibold ml-1">${product.discount}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  shopGrid3.appendChild(productDiv);
});


// Apple Items
const apple = [
  { name: "images/apple/0.png", icon: "Bleuets" },
  { name: "images/apple/5.png", icon: "Anneth" },
  { name: "images/apple/2.png", icon: "Aubergines" },
  { name: "images/apple/6.png", icon: "Fraises" },
  { name: "images/apple/4.png", icon: "Radis" },
  { name: "images/apple/1.png", icon: "Fèves vertes" }
];

const shopGrid4 = document.getElementById('apple');
apple.forEach(img => {
  const appleDiv = document.createElement('div');
  appleDiv.className = "flex flex-col items-center"; // Keeps your styling consistent
  appleDiv.innerHTML = `<img class="w-60" src="${img.name}" alt="${img.icon}"/>
  <p class="mt-4">${img.icon}</p>`;
  shopGrid4.appendChild(appleDiv);
});


// shop by categories
const shopCategory = [
  { name: "images/shopCat/c1.png", title: "Portrait"},
  { name: "images/shopCat/c2.png", title: "Space"},
  { name: "images/shopCat/c3.png", title: "Texture"},
  { name: "images/shopCat/c4.png", title: "Minimal"},
  { name: "images/shopCat/c5.png", title: "Food"},
  { name: "images/shopCat/c6.png", title: "Art"},
  { name: "images/shopCat/c7.png", title: "Nature"},
  { name: "images/shopCat/c8.png", title: "Colorful"},
  { name: "images/shopCat/c2.png", title: "Interior"},
  { name: "images/shopCat/c3.png", title: "Nature"},
  { name: "images/shopCat/c3.png", title: "Texture"},
  { name: "images/shopCat/c4.png", title: "Minimal"},
  { name: "images/shopCat/c5.png", title: "Food"},
  { name: "images/shopCat/c6.png", title: "Art"},
  { name: "images/shopCat/c7.png", title: "Nature"}
];

const shopCat = document.getElementById('categories-grid');

shopCategory.forEach(product => {
  const catDiv = document.createElement('div');
  catDiv.className = "bg-white overflow-hidden";
  catDiv.innerHTML = `
    <div class="flex flex-col md:flex-row">
      <div class="flex-none">
        <img class="mx-auto w-28	h-28 object-cover" src="${product.name}" alt="Product Image">
      </div>
      <div class="flex-3 p-4 content-center justify-center flex flex-col">
      <h3 class="text-lg font-semibold">${product.title}</h3>
      </div>
    </div>
  `;
  shopCat.appendChild(catDiv);
});

// swiper
const multiplier = {
  translate: .1,
  rotate: .01
}

new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 90,
  centeredSlides: true,
  loop: true,
  grabCursor: true
})

function calculateWheel() {
  const slides = document.querySelectorAll('.single')
  slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect()
      const r = window.innerWidth * .5 - (rect.x + rect.width * .5)
      let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate

      if (ty < 0) {
          ty = 0
      }
      const transformOrigin = r < 0 ? 'left top' : 'right top'
      slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`
      slide.style.transformOrigin = transformOrigin
  })
}

function raf() {
  requestAnimationFrame(raf)
  calculateWheel()
}

raf();