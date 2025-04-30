const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const closeBtn = document.querySelector(".close");
const toggleMenu = document.querySelector(".hamburger-icon");
const prevButtonMobile = document.querySelector(".prev-prev-btn");
const nextButtonMobile = document.querySelector(".next-next-btn");
const mobileImage = document.getElementById("main-image");

const mainImage = document.getElementById("main-image");
// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");
// const prevBtn = document.getElementById("prev-btn");
// const nextBtn = document.getElementById("next-btn");
const mainImageContainer = document.getElementById("main-image-container");

const imagePaths = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

let currentImageIndex = 0;

// Toggle menu

toggleMenu.addEventListener("click", () => {
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("show");
});

// Change image function for both main display and lightbox
function changeImage(
  imagePath,
  thumbnailElement,
  isMainImage = true,
  isLightBox = false
) {
  // Update current index based on clicked thumbnail
  currentImageIndex = parseInt(thumbnailElement.getAttribute("data-index"));

  // Update image source
  if (isMainImage) {
    mainImage.src = imagePath;

    // Update active thumbnail in main view
    const mainThumbnails = document.querySelectorAll(
      "#main-thumbnails .thumbnail_pic"
    );
    mainThumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnailElement.classList.add("active");
  }

  if (isLightBox) {
    lightboxImg.src = imagePath;

    // Update active thumbnail in lightbox
    const lightboxThumbnails = document.querySelectorAll(
      "#lightbox-thumbnails .thumbnail_pic"
    );
    lightboxThumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnailElement.classList.add("active");
  }
}

mainImageContainer.addEventListener("click", () => {
  if (window.innerWidth >= 768) {
    // Check if the screen width is 768px or larger
    lightbox.classList.add("open");
    lightboxImg.src = mainImage.src;

    // Synchronize active thumbnail in lightbox with main view
    const lightboxThumbnails = document.querySelectorAll(
      "#lightbox-thumbnails .thumbnail_pic"
    );
    lightboxThumbnails.forEach((thumb) => thumb.classList.remove("active"));
    lightboxThumbnails[currentImageIndex].classList.add("active");
  }
});

prevBtn.addEventListener("click", () => {
  currentImageIndex =
    (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
  lightboxImg.src = imagePaths[currentImageIndex];

  // Update active thumbnail
  const lightboxThumbnails = document.querySelectorAll(
    "#lightbox-thumbnails .thumbnail_pic"
  );
  lightboxThumbnails.forEach((thumb) => thumb.classList.remove("active"));
  lightboxThumbnails[currentImageIndex].classList.add("active");
});
//for mobile //
prevButtonMobile.addEventListener("click", () => {
  currentImageIndex =
    (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
  mobileImage.src = imagePaths[currentImageIndex];
});

// Next button
nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  lightboxImg.src = imagePaths[currentImageIndex];

  // Update active thumbnail
  const lightboxThumbnails = document.querySelectorAll(
    "#lightbox-thumbnails .thumbnail_pic"
  );
  lightboxThumbnails.forEach((thumb) => thumb.classList.remove("active"));
  lightboxThumbnails[currentImageIndex].classList.add("active");
});

  nextButtonMobile.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    mobileImage.src = imagePaths[currentImageIndex];
  });

// Close lightbox
closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("open");
});

// Close lightbox when clicking outside
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("open");
  }
});

// let currentIndex = 0;
// // console.log(currentIndex);
// const imageSources = [
//   "images/image-product-1.jpg",
//   "images/image-product-2.jpg",
//   "images/image-product-3.jpg",
//   "images/image-product-4.jpg",
// ];

// Function to open the lightbox with a specific image
function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}
// Quantity Selector
const minusBtn = document.querySelector(".minus-button");
const plusBtn = document.querySelector(".plus-button");
const quantityDisplay = document.querySelector(".quantity-display");
let quantity = 0;

plusBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

minusBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

// Cart Button Click Effect
const cartButton = document.querySelector(".cart-button");
cartButton.addEventListener("click", () => {
  // alert(`Added ${quantity} item(s) to cart!`);
  document.querySelector(".cart-icon .quantity").textContent = quantity;
  //  quantity = 0;
  quantityDisplay.textContent = quantity;
});
