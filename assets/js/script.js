document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Sticky header functionality
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  // Mobile menu toggle functionality
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });

  const track = document.getElementById("carousel-track");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const indicatorContainer = document.getElementById("indicator-container");
  const dots = Array.from(indicatorContainer.children);

  let currentIndex = 0;
  const totalSlides = track.children.length;

  function updateCarousel() {
    // Determine how many slides to show at once based on screen size
    const isDesktop = window.innerWidth >= 1024;
    const slidesPerPage = isDesktop ? 3 : 1;
    const totalPages = Math.ceil(totalSlides / slidesPerPage);

    // --- BUG FIX IS HERE ---
    // The offset calculation now correctly moves the track by a full page width.
    // On desktop, a "page" is 3 slides (100% of the viewport).
    // On mobile, a "page" is 1 slide (100% of the viewport).
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Update indicator dots for desktop view
    if (isDesktop) {
      dots.forEach((dot, index) => {
        dot.classList.toggle("bg-brand-gold", index === currentIndex);
        dot.classList.toggle("bg-gray-200", index !== currentIndex);
      });
    }

    // Hide/Show mobile navigation buttons if at start/end
    if (!isDesktop) {
      prevBtn.style.display = currentIndex === 0 ? "none" : "block";
      nextBtn.style.display =
        currentIndex === totalPages - 1 ? "none" : "block";
    }
  }

  // --- LOGIC FOR BUTTONS AND DOTS ---
  // Event Listeners for Mobile/Tablet Arrows
  nextBtn.addEventListener("click", () => {
    const slidesPerPage = window.innerWidth >= 1024 ? 3 : 1;
    const totalPages = Math.ceil(totalSlides / slidesPerPage);
    if (currentIndex < totalPages - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Event Listeners for Desktop Dots
  indicatorContainer.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");
    if (!targetDot) return;

    const targetIndex = parseInt(targetDot.dataset.page);
    currentIndex = targetIndex;
    updateCarousel();
  });

  // Reset and update carousel on window resize
  window.addEventListener("resize", () => {
    currentIndex = 0; // Reset to the first page on resize
    updateCarousel();
  });

  // Initial setup
  updateCarousel();
});
