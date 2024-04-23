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
