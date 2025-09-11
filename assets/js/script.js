document.addEventListener("DOMContentLoaded", function () {
  // =================================================================
  // SECTION 1: STICKY HEADER & MOBILE MENU (Your existing code)
  // =================================================================
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (header) {
    // Sticky header functionality
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });
  }

  if (menuBtn && closeBtn && mobileMenu) {
    // Mobile menu toggle functionality
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  }

  // =================================================================
  // SECTION 2: "OUR SERVICES" CAROUSEL (Your existing code, now safely scoped)
  // =================================================================
  const servicesCarousel = document.getElementById("carousel-track");
  if (servicesCarousel) {
    const servicesTrack = document.getElementById("carousel-track");
    const servicesPrevBtn = document.getElementById("prev-btn");
    const servicesNextBtn = document.getElementById("next-btn");
    const servicesIndicatorContainer = document.getElementById(
      "indicator-container"
    );
    const servicesDots = Array.from(servicesIndicatorContainer.children);

    let servicesCurrentIndex = 0;
    const totalServicesSlides = servicesTrack.children.length;

    function updateServicesCarousel() {
      const isDesktop = window.innerWidth >= 1024;
      const slidesPerPage = isDesktop ? 3 : 1;
      const totalPages = Math.ceil(totalServicesSlides / slidesPerPage);
      const offset = -servicesCurrentIndex * 100;
      servicesTrack.style.transform = `translateX(${offset}%)`;

      if (isDesktop) {
        servicesDots.forEach((dot, index) => {
          dot.classList.toggle("bg-brand-gold", index === servicesCurrentIndex);
          dot.classList.toggle("bg-gray-200", index !== servicesCurrentIndex);
        });
      }

      if (!isDesktop) {
        servicesPrevBtn.style.display =
          servicesCurrentIndex === 0 ? "none" : "block";
        servicesNextBtn.style.display =
          servicesCurrentIndex === totalPages - 1 ? "none" : "block";
      }
    }

    servicesNextBtn.addEventListener("click", () => {
      const slidesPerPage = window.innerWidth >= 1024 ? 3 : 1;
      const totalPages = Math.ceil(totalServicesSlides / slidesPerPage);
      if (servicesCurrentIndex < totalPages - 1) {
        servicesCurrentIndex++;
        updateServicesCarousel();
      }
    });

    servicesPrevBtn.addEventListener("click", () => {
      if (servicesCurrentIndex > 0) {
        servicesCurrentIndex--;
        updateServicesCarousel();
      }
    });

    servicesIndicatorContainer.addEventListener("click", (e) => {
      const targetDot = e.target.closest("button");
      if (!targetDot) return;
      const targetIndex = parseInt(targetDot.dataset.page);
      servicesCurrentIndex = targetIndex;
      updateServicesCarousel();
    });

    // Add this specific resize handler to the global resize listener later
    window.addEventListener("resize", () => {
      servicesCurrentIndex = 0;
      updateServicesCarousel();
    });

    // Initial setup
    updateServicesCarousel();
  }

  // =================================================================
  // SECTION 4: REDESIGNED CAR FLEET (with Filters & Grid)
  // =================================================================
  const carFleetGridSection = document.getElementById("car-fleet-grid");
  if (carFleetGridSection) {
    const carGridData = [
      {
        name: "Bentley Bentayga",
        price: 4000,
        category: "suv",
        image:
          "https://images.pexels.com/photos/15942431/pexels-photo-15942431/free-photo-of-a-silver-bentley-parked-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specs: {
          seats: 5,
          transmission: "Auto",
          fuel: "Petrol",
          airbags: 8,
          age: 25,
        },
      },
      {
        name: "Ferrari 296 GTB",
        price: 8200,
        category: "sports",
        image:
          "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specs: {
          seats: 2,
          transmission: "Auto",
          fuel: "Petrol",
          airbags: 4,
          age: 25,
        },
      },
      {
        name: "Mercedes S-Class",
        price: 4500,
        category: "sedan",
        image:
          "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specs: {
          seats: 5,
          transmission: "Auto",
          fuel: "Diesel",
          airbags: 10,
          age: 25,
        },
      },
      {
        name: "Aston Martin DBX",
        price: 6500,
        category: "suv",
        image:
          "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specs: {
          seats: 5,
          transmission: "Auto",
          fuel: "Petrol",
          airbags: 8,
          age: 25,
        },
      },
      {
        name: "Bugatti Mistral W16",
        price: 8000,
        category: "sports",
        image:
          "https://images.pexels.com/photos/17096537/pexels-photo-17096537/free-photo-of-bugatti-mistral-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specs: {
          seats: 2,
          transmission: "Auto",
          fuel: "Petrol",
          airbags: 2,
          age: 25,
        },
      },
      {
        name: "Rolls Royce Ghost",
        price: 4000,
        category: "sedan",
        image:
          "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specs: {
          seats: 5,
          transmission: "Auto",
          fuel: "Petrol",
          airbags: 12,
          age: 30,
        },
      },
      {
        name: "Tesla Model S Plaid",
        price: 2500,
        category: "sedan",
        image:
          "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specs: {
          seats: 5,
          transmission: "Auto",
          fuel: "EV",
          airbags: 8,
          age: 25,
        },
      },
      {
        name: "Porsche 911 GT3",
        price: 3800,
        category: "sports",
        image:
          "https://images.pexels.com/photos/16334698/pexels-photo-16334698/free-photo-of-porsche-911-gt3-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        specs: {
          seats: 2,
          transmission: "Manual",
          fuel: "Petrol",
          airbags: 4,
          age: 25,
        },
      },
    ];

    const gridContainer = document.getElementById("fleet-grid-container");
    const filterContainer = document.getElementById("fleet-filters");
    const loadMoreBtn = document.getElementById("load-more-btn");

    const carsToShowInitially = 6;
    let currentlyVisible = 0;

    function createCarCard(car) {
      // Create a card element and hide it by default
      const card = document.createElement("div");
      card.className =
        "car-card group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hidden";
      card.dataset.category = car.category;

      card.innerHTML = `
            <div class="relative overflow-hidden">
              <img src="${car.image}" alt="${car.name}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" class="bg-yellow-500 text-black text-xs py-3 px-8 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">Details</a>
            </div>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg tracking-tight font-semibold text-brand-dark">${car.name}</h3>
                <div class="text-right flex-shrink-0 ml-4">
                    <p class="text-lg tracking-tight font-semibold text-brand-gold">₹${car.price}</p>
                    <p class="text-sm text-gray-500 -mt-1">/day</p>
                </div>
            </div>
            <!-- New Specs Section with Redesigned Icons -->
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 border-t pt-4">
                
                <span title="Seats" class="flex items-center text-xs gap-1.5">
                    <!-- SEAT SVG -->
                    <svg class="w-5 h-5 text-brand-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 18.5v-6.5c0-1.103.897-2 2-2h5V5c0-1.103-.897-2-2-2H6C4.346 3 3 4.346 3 6v4.288c-1.724.453-3 2.01-3 3.923v4.289h1c0 .827.673 1.5 1.5 1.5S4 19.327 4 18.5zM15 10h5c1.103 0 2 .897 2 2v6.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5V18h-1v.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5V12c0-1.103.897-2 2-2zM6 5h3v5H6c-1.103 0-2-.897-2-2s.897-3 2-3z"></path>
                    </svg> ${car.specs.seats} seats
                </span>

                <span title="Transmission" class="flex items-center gap-1.5">
                    <!-- GEAR SVG -->
                    <svg class="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                    </svg> ${car.specs.transmission}
                </span>

                <span title="Fuel Type" class="flex items-center gap-1.5">
                    <!-- FUEL PUMP SVG -->
                    <svg class="w-5 h-5 text-brand-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M16 5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5zM5 16.235V8a1 1 0 0 1 1-1h1V5H6a3 3 0 0 0-3 3v8.235a3.5 3.5 0 0 0 1.94 3.111l.245.138A1 1 0 0 0 6 21v-1.13a1 1 0 0 0-.447-.832L5 18.618V17a1 1 0 0 1 1-1h1v-.235a3.5 3.5 0 0 0-2-3.318zM18 7h-1v2h1a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1v2h1a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3z"></path>
                    </svg> ${car.specs.fuel}
                </span>

                <span title="Airbags" class="flex items-center gap-1.5">
                    <!-- BAG SVG -->
                    <svg class="w-5 h-5 text-brand-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.5 6h-3.87l-1.1-2.19A1.5 1.5 0 0 0 13.13 3H10.87a1.5 1.5 0 0 0-1.4  .81L8.37 6H4.5A1.5 1.5 0 0 0 3 7.5v12A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 19.5 6zM15 13.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                    </svg> ${car.specs.airbags}
                </span>
            </div>
        </div>
        `;
      return card;
    }

    // Populate the grid with all cards (initially hidden)
    carGridData.forEach((car) => {
      gridContainer.appendChild(createCarCard(car));
    });

    const allCarCards = Array.from(gridContainer.children);

    function showInitialCars() {
      allCarCards
        .slice(0, carsToShowInitially)
        .forEach((card) => card.classList.remove("hidden"));
      currentlyVisible = carsToShowInitially;
      checkLoadMoreButton();
    }

    function checkLoadMoreButton() {
      if (
        currentlyVisible >=
        allCarCards.filter((c) => !c.classList.contains("filtered-out")).length
      ) {
        loadMoreBtn.parentElement.style.display = "none";
      } else {
        loadMoreBtn.parentElement.style.display = "block";
      }
    }

    // Filter logic
    filterContainer.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;

      const filterValue = e.target.dataset.filter;

      // Update active button style
      filterContainer.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.remove("bg-brand-dark", "text-white");
        btn.classList.add("bg-gray-100", "text-brand-dark");
      });
      e.target.classList.add("bg-brand-dark", "text-white");
      e.target.classList.remove("bg-gray-100");

      // Show/hide cards based on filter
      allCarCards.forEach((card) => {
        const cardCategory = card.dataset.category;
        card.classList.add("hidden", "filtered-out"); // Hide and mark all cards
        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("filtered-out");
        }
      });

      // Show the initial set of the filtered cards
      const filteredCards = allCarCards.filter(
        (c) => !c.classList.contains("filtered-out")
      );
      filteredCards
        .slice(0, carsToShowInitially)
        .forEach((card) => card.classList.remove("hidden"));
      currentlyVisible = Math.min(carsToShowInitially, filteredCards.length);

      checkLoadMoreButton();
    });

    // Load more logic
    loadMoreBtn.addEventListener("click", () => {
      const hiddenFilteredCards = allCarCards.filter(
        (c) =>
          !c.classList.contains("filtered-out") &&
          c.classList.contains("hidden")
      );
      const nextToShow = hiddenFilteredCards.slice(0, 3); // Load 3 more at a time

      nextToShow.forEach((card) => card.classList.remove("hidden"));
      currentlyVisible += nextToShow.length;

      checkLoadMoreButton();
    });

    // Initial load
    showInitialCars();

    // =================================================================
    // SECTION 5: RENTAL CAR TYPES CAROUSEL (Fully Corrected Script)
    // =================================================================
    const carTypesSection = document.getElementById("car-types-section");
    if (carTypesSection) {
      const carTypesData = [
        {
          title: "Luxury Cars",
          image:
            "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Sport Cars",
          image:
            "https://images.pexels.com/photos/17096537/pexels-photo-17096537/free-photo-of-bugatti-mistral-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "SUV",
          image:
            "https://images.pexels.com/photos/15942431/pexels-photo-15942431/free-photo-of-a-silver-bentley-parked-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Sedans",
          image:
            "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Convertibles",
          image:
            "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Electric",
          image:
            "https://images.pexels.com/photos/9735310/pexels-photo-9735310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ];

      const track = document.getElementById("types-carousel-track");
      const indicatorContainer = document.getElementById(
        "types-indicator-container"
      );
      const prevBtn = document.getElementById("types-prev-btn");
      const nextBtn = document.getElementById("types-next-btn");

      // Use a single index for the current *slide* for consistency
      let currentSlideIndex = 0;

      // Populate the carousel track
      carTypesData.forEach((category) => {
        const slide = document.createElement("div");
        // The width classes here are what control the number of visible slides
        slide.className = "slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4";
        slide.innerHTML = `
            <a
              href="#"
              class="group relative block rounded-3xl overflow-hidden shadow-lg h-96"
            >
              <img
                src="${category.image}"
                alt="${category.title}"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="relative h-full flex flex-col justify-between p-6">
                <h3 class="text-center text-white text-2xl font-bold">${category.title}</h3>
                <div
                  class="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-gold transition-colors duration-300"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 17L17 7M17 12L17 7L12 7"
                    />
                  </svg>
                </div>
              </div> </a
            >`;

        track.appendChild(slide);
      });

      const allSlides = Array.from(track.children);
      const totalSlides = allSlides.length;

      function updateCarouselState() {
        const slidesPerPage =
          window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        const totalPages = Math.ceil(totalSlides / slidesPerPage);

        // Calculate the carousel's new position
        const slideWidthPercentage = 100 / slidesPerPage;
        const offset = -currentSlideIndex * slideWidthPercentage;
        track.style.transform = `translateX(${offset}%)`;

        // Update dot indicators for desktop
        indicatorContainer.innerHTML = "";
        if (window.innerWidth >= 1024) {
          for (let i = 0; i < totalPages; i++) {
            const button = document.createElement("button");
            button.className = `indicator-dot w-3 h-3 rounded-full transition-colors ${
              i * slidesPerPage === currentSlideIndex
                ? "bg-brand-gold"
                : "bg-gray-200"
            }`;
            button.dataset.index = i * slidesPerPage;
            indicatorContainer.appendChild(button);
          }
        }

        // Update arrow visibility for mobile/tablet
        if (window.innerWidth < 1024) {
          prevBtn.style.display = currentSlideIndex === 0 ? "none" : "flex";
          nextBtn.style.display =
            currentSlideIndex >= totalSlides - slidesPerPage ? "none" : "flex";
        }
      }

      // Event Listeners
      nextBtn.addEventListener("click", () => {
        const slidesPerPage = window.innerWidth >= 768 ? 2 : 1;
        if (currentSlideIndex < totalSlides - slidesPerPage) {
          currentSlideIndex++;
          updateCarouselState();
        }
      });

      prevBtn.addEventListener("click", () => {
        if (currentSlideIndex > 0) {
          currentSlideIndex--;
          updateCarouselState();
        }
      });

      indicatorContainer.addEventListener("click", (e) => {
        const targetDot = e.target.closest("button");
        if (!targetDot) return;
        currentSlideIndex = parseInt(targetDot.dataset.index);
        updateCarouselState();
      });

      window.addEventListener("resize", () => {
        currentSlideIndex = 0; // Reset position on resize
        updateCarouselState();
      });

      // Initial Setup
      updateCarouselState();
    }
  }

  // =================================================================
  // SCRIPT: IMAGE GALLERY V2 (with Lightbox Modal)
  // =================================================================
  const galleryV2 = document.getElementById("gallery-v2");
  if (galleryV2) {
    // --- Your gallery images go here ---
    const galleryImages = [
      "https://images.pexels.com/photos/15942431/pexels-photo-15942431/free-photo-of-a-silver-bentley-parked-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3764923/pexels-photo-3764923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/17096537/pexels-photo-17096537/free-photo-of-bugatti-mistral-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // Add as many image URLs as you like
    ];

    const thumbnailGrid = document.getElementById("thumbnail-grid");
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCloseBtn = document.getElementById("lightbox-close");
    const lightboxPrevBtn = document.getElementById("lightbox-prev");
    const lightboxNextBtn = document.getElementById("lightbox-next");

    let currentIndex = 0;

    // 1. Populate the thumbnail grid
    galleryImages.forEach((src, index) => {
      const thumbContainer = document.createElement("button");
      thumbContainer.className =
        "group block rounded-3xl overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-gold/50";
      thumbContainer.dataset.index = index;

      thumbContainer.innerHTML = `
            <img src="${src}" alt="Car gallery image ${
        index + 1
      }" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110">
        `;
      thumbnailGrid.appendChild(thumbContainer);

      // 2. Add click listener to open the lightbox
      thumbContainer.addEventListener("click", () => {
        currentIndex = index;
        updateLightboxImage();
        lightboxModal.classList.remove("hidden");
        lightboxModal.classList.add("flex");
        document.body.style.overflow = "hidden";
      });
    });

    function updateLightboxImage() {
      lightboxImage.src = galleryImages[currentIndex];
    }

    function showNextImage() {
      currentIndex = (currentIndex + 1) % galleryImages.length; // Loop to the start
      updateLightboxImage();
    }

    function showPrevImage() {
      currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Loop to the end
      updateLightboxImage();
    }

    function closeLightbox() {
      lightboxModal.classList.add("hidden");
      lightboxModal.classList.remove("flex");
      document.body.style.overflow = "";
    }

    // 3. Add event listeners for modal controls
    lightboxNextBtn.addEventListener("click", showNextImage);
    lightboxPrevBtn.addEventListener("click", showPrevImage);
    lightboxCloseBtn.addEventListener("click", closeLightbox);
    lightboxModal.addEventListener("click", (e) => {
      // Close modal if the backdrop (not the image or buttons) is clicked
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!lightboxModal.classList.contains("hidden")) {
        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "ArrowLeft") showPrevImage();
        if (e.key === "Escape") closeLightbox();
      }
    });
  }
  // =================================================================
  // SCRIPT: ACCORDION FOR RENTAL CONDITIONS
  // =================================================================
  const accordionContainer = document.getElementById("accordion-container");
  if (accordionContainer) {
    const accordionHeaders =
      accordionContainer.querySelectorAll(".accordion-header");

    // Function to close all items
    const closeAllItems = () => {
      accordionHeaders.forEach((header) => {
        const content = header.nextElementSibling;
        const icon = header.querySelector(".accordion-icon");

        // Style as inactive
        header.classList.remove("bg-brand-gold", "text-black");
        header.classList.add("bg-gray-100");
        header
          .querySelector("span:first-child")
          .classList.add("text-brand-dark");
        header
          .querySelector("span:first-child span")
          .classList.add("text-brand-gold");
        header
          .querySelector("span:first-child span")
          .classList.remove("text-black/50");
        icon.classList.add("-rotate-90", "text-brand-gold");

        // Collapse content
        content.style.maxHeight = null;
      });
    };

    accordionHeaders.forEach((header) => {
      // Set initial state for the first active item
      // if (header.classList.contains("bg-brand-gold")) {
      //   const content = header.nextElementSibling;
      //   content.style.maxHeight = content.scrollHeight + "px";
      // }

      header.addEventListener("click", () => {
        const item = header.parentElement;
        const content = header.nextElementSibling;
        const icon = header.querySelector(".accordion-icon");
        const isCurrentlyOpen = content.style.maxHeight;

        // First, close all other items
        closeAllItems();

        // If the clicked item was NOT already open, then open it
        if (!isCurrentlyOpen) {
          // Style as active
          header.classList.add("bg-brand-gold", "text-black");
          header.classList.remove("bg-gray-100");
          header
            .querySelector("span:first-child")
            .classList.remove("text-brand-dark");
          header
            .querySelector("span:first-child span")
            .classList.remove("text-brand-gold");
          header
            .querySelector("span:first-child span")
            .classList.add("text-black/50");
          icon.classList.remove("-rotate-90", "text-brand-gold");

          // Expand content
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  }
});
