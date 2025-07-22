// Add JavaScript functionality as we build

// Define global booking overlay functions for accessibility throughout the code
// let bookingOverlayElement = null; // Removed

// function openBookingOverlay() { // Removed
// if (!bookingOverlayElement) {
// bookingOverlayElement = document.getElementById("booking-overlay");
// if (!bookingOverlayElement) {
// console.error("Booking overlay element not found");
// return;
// }
// }
//
// bookingOverlayElement.classList.add("visible");
// document.body.style.overflow = "hidden";
//
// // Initialize Cal.com inline embed
// if (typeof Cal !== "undefined") {
// Cal("inline", {
// elementOrSelector: "#my-cal-inline",
// calLink: "rick/get-rick-rolled", // Change this to your actual Cal.com link
// config: {
// theme: "light",
// },
// });
// } else {
// console.error("Cal.com script not loaded");
// }
// }

// function closeBookingOverlay() { // Removed
// if (!bookingOverlayElement) {
// bookingOverlayElement = document.getElementById("booking-overlay");
// }
//
// if (bookingOverlayElement) {
// bookingOverlayElement.classList.remove("visible");
// document.body.style.overflow = "";
// }
// }

document.addEventListener("DOMContentLoaded", () => {
  console.log("BROT Auto Detailing site loaded.");

  // Initialize booking overlay reference
  // bookingOverlayElement = document.getElementById("booking-overlay"); // Removed

  // Setup booking buttons
  const bookNowButtons = document.querySelectorAll(".btn-primary, .cta-button, .btn-nav-book");
  bookNowButtons.forEach((button) => {
    // If the button is inside a .service-card, it's handled by an inline onclick calling handleBooking.
    // Otherwise, attach the scroll-to-services behavior.
    if (!button.closest(".service-card")) {
      button.addEventListener("click", () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });

  // Setup 'Watch Before & After' button to scroll to before-after section
  const watchBeforeAfterBtn = document.querySelector(".hero-buttons .btn-secondary");
  if (watchBeforeAfterBtn) {
    watchBeforeAfterBtn.addEventListener("click", () => {
      const beforeAfterSection = document.getElementById("before-after");
      if (beforeAfterSection) {
        beforeAfterSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Close overlay if clicking outside the form container
  // if (bookingOverlayElement) { // Removed
  // bookingOverlayElement.addEventListener("click", (event) => {
  // if (event.target === bookingOverlayElement) {
  // closeBookingOverlay();
  // }
  // });
  // }

  // Initialize functions here
  setupVehicleToggle();

  // Setup mobile menu
  setupMobileMenu();

  // Setup login button
  setupLoginButton();

  // Setup Cal.com button (basic placeholder)
  // const calComButton = document.getElementById("cal-com-button"); // Removed
  // if (calComButton) { // Removed
  // calComButton.addEventListener("click", () => { // Removed
  // // Integrate with Cal.com API/widget here
  // alert("Redirecting to Cal.com for booking and payment...");
  // // Example: Collect form data and pass to Cal.com
  // const formData = new FormData(document.getElementById("booking-form"));
  // // Process formData and integrate...
  // console.log("Booking details:", Object.fromEntries(formData.entries()));
  // console.log("Total:", document.getElementById("estimated-total").textContent);
  // // In a real scenario, you'd use the Cal.com API or embedded widget.
  // }); // Removed
  // } // Removed

  // --- Initialize Interactive Elements ---
  setupBeforeAfterSlider();
  setupScrollToTop();
  setupSectionNavigation();
  setupSectionTransitions();
  setupCTAButtons();
  // setupFormStepIndicator(); // This function was removed
  setupViewCounter();
  setupNavbarScroll();
  setupServiceAreaMap();
  setupTestimonials();

  // Rough Notation Utility
  const roughNotation = {
    // Store all annotations for later use
    annotations: {},

    // Create an annotation without showing it
    create: function (elementSelector, options = {}) {
      // Default options
      const defaultOptions = {
        type: "underline",
        color: "var(--secondary-color)",
        animationDuration: 800,
        padding: 5,
        multiline: true,
      };

      // Merge options
      const finalOptions = { ...defaultOptions, ...options };

      // Find the element
      const element = document.querySelector(elementSelector);
      if (!element) {
        console.warn(`Element not found: ${elementSelector}`);
        return null;
      }

      // Create the annotation
      const annotation = RoughNotation.annotate(element, finalOptions);

      // Store it for later use
      const id = options.id || elementSelector;
      this.annotations[id] = annotation;

      return annotation;
    },

    // Show a specific annotation by id or selector
    show: function (id) {
      const annotation = this.annotations[id];
      if (annotation) {
        annotation.show();
        return true;
      }
      console.warn(`Annotation not found: ${id}`);
      return false;
    },

    // Hide a specific annotation by id or selector
    hide: function (id) {
      const annotation = this.annotations[id];
      if (annotation) {
        annotation.hide();
        return true;
      }
      console.warn(`Annotation not found: ${id}`);
      return false;
    },

    // Initialize annotations for common elements but don't show them yet
    init: function () {
      console.log("Rough Notation initialized and ready to use");

      // You can pre-create annotations here for later use
      // Example (commented out):
      // this.create('.brand-tagline', { type: 'underline', color: 'var(--secondary-color)' });
      // this.create('.hero-content h1', { type: 'highlight', color: 'rgba(0, 85, 164, 0.3)' });
    },
  };

  // Initialize Rough Notation when DOM is fully loaded
  roughNotation.init();

  // Handle expandable content in About Us section
  setupReadMoreToggle(); // Initialize read more toggle functionality

  // --- Booking Overlay Logic --- // Section can be removed or repurposed
  // let currentStep = 1; // Removed

  // function showStep(stepNumber) { // Removed
  // document.querySelectorAll(".form-step").forEach((step) => {
  // step.style.display = "none";
  // });
  // const nextStepElement = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
  // if (nextStepElement) {
  // nextStepElement.style.display = "block";
  // currentStep = stepNumber;
  // if (stepNumber === 3) {
  // populateBookingSummary(); // Populate summary when reaching step 3
  // }
  //
  // // Update step indicator
  // updateStepIndicator(stepNumber);
  // }
  // }

  // function updateStepIndicator(currentStep) { // Removed
  // // Update step indicator dots
  // document.querySelectorAll(".step-dot").forEach((dot, index) => {
  // const stepNum = index + 1;
  // dot.classList.remove("active", "completed");
  //
  // if (stepNum === currentStep) {
  // dot.classList.add("active");
  // } else if (stepNum < currentStep) {
  // dot.classList.add("completed");
  // }
  // });
  // }

  // function setupFormStepIndicator() { // Removed
  // // Make step dots clickable if previous steps are completed
  // document.querySelectorAll(".step-dot").forEach((dot) => {
  // dot.addEventListener("click", function () {
  // const clickedStep = parseInt(this.dataset.step);
  //
  // // Only allow clicking on completed steps or the next available step
  // if (clickedStep <= currentStep) {
  // showStep(clickedStep);
  // }
  // });
  // });
  // }

  // function nextStep(current) { // Removed
  // // Add validation logic here if needed
  // showStep(current + 1);
  // }

  // function prevStep(current) { // Removed
  // showStep(current - 1);
  // }

  // function populateBookingStep2() { // Removed
  // const selectedVehicleType = document.querySelector('input[name="vehicle-type"]:checked').value;
  // const vehicleTypeText = document.querySelector(`label input[value="${selectedVehicleType}"]`).parentElement.textContent.trim();
  // document.getElementById("selected-vehicle-type").textContent = vehicleTypeText;
  //
  // // Populate Service Selection (using current prices)
  // const serviceSelectionDiv = document.getElementById("service-selection");
  // serviceSelectionDiv.innerHTML = "<h4>Select Base Service:</h4>"; // Clear previous
  // Object.keys(prices[selectedVehicleType]).forEach((serviceKey) => {
  // const price = prices[selectedVehicleType][serviceKey];
  // const label = document.createElement("label");
  // const input = document.createElement("input");
  // input.type = "radio";
  // input.name = "base-service";
  // input.value = serviceKey;
  // input.dataset.price = price;
  // input.onchange = calculateTotal; // Recalculate total on change
  // label.appendChild(input);
  // label.appendChild(document.createTextNode(` ${serviceKey.charAt(0).toUpperCase() + serviceKey.slice(1)} Detail - $${price}`));
  // serviceSelectionDiv.appendChild(label);
  // });
  //
  // // Populate Addon Selection (using addons from main page)
  // const addonSelectionDiv = document.getElementById("addon-selection");
  // addonSelectionDiv.innerHTML = "<h4>Add-ons:</h4>"; // Clear previous
  // document.querySelectorAll("#extra-services .addon-item").forEach((item) => {
  // const originalInput = item.querySelector('input[type="checkbox"]');
  // const labelText = item.querySelector("span").textContent;
  // const smallText = item.querySelector("small")?.textContent;
  //
  // const label = document.createElement("label");
  // const input = document.createElement("input");
  // input.type = "checkbox";
  // input.name = "addon";
  // input.value = originalInput.dataset.addon;
  // input.checked = originalInput.checked; // Reflect selection from main page
  // input.onchange = calculateTotal; // Recalculate total on change
  //
  // // Handle pricing (simple fixed price or vehicle-dependent)
  // if (originalInput.dataset.price) {
  // input.dataset.price = originalInput.dataset.price;
  // } else if (originalInput.dataset.priceSedan && originalInput.dataset.priceLarge) {
  // // Choose price based on selected vehicle type
  // if (selectedVehicleType === "sedan") {
  // input.dataset.price = originalInput.dataset.priceSedan;
  // } else {
  // // Assume large/oversized use the larger price for simplicity
  // input.dataset.price = originalInput.dataset.priceLarge;
  // }
  // } // Add logic for quote-based addons if needed (maybe just display text)
  //
  // label.appendChild(input);
  // label.appendChild(document.createTextNode(` ${labelText}`));
  // if (input.dataset.price) {
  // label.appendChild(document.createTextNode(` (+$${input.dataset.price})`));
  // }
  // if (smallText) {
  // const smallEl = document.createElement("small");
  // smallEl.textContent = ` (${smallText})`;
  // smallEl.style.marginLeft = "5px";
  // label.appendChild(smallEl);
  // }
  // addonSelectionDiv.appendChild(label);
  // });
  //
  // calculateTotal(); // Initial calculation
  // }

  // function calculateTotal() { // Removed
  // let total = 0;
  // const selectedBaseService = document.querySelector('input[name="base-service"]:checked');
  // const selectedAddons = document.querySelectorAll('#addon-selection input[name="addon"]:checked');
  //
  // if (selectedBaseService && selectedBaseService.dataset.price) {
  // total += parseFloat(selectedBaseService.dataset.price);
  // }
  //
  // selectedAddons.forEach((addon) => {
  // if (addon.dataset.price) {
  // total += parseFloat(addon.dataset.price);
  // }
  // });
  //
  // document.getElementById("estimated-total").textContent = `$${total.toFixed(2)}`;
  // }

  // function populateBookingSummary() { // Removed
  // const summaryDiv = document.getElementById("booking-summary");
  // const formData = new FormData(document.getElementById("booking-form"));
  // const selectedVehicleType = document.getElementById("selected-vehicle-type").textContent;
  // const selectedBaseService = document.querySelector('input[name="base-service"]:checked');
  // const selectedAddons = document.querySelectorAll('#addon-selection input[name="addon"]:checked');
  // const total = document.getElementById("estimated-total").textContent;
  //
  // let summaryHTML = `
  // <p><strong>Name:</strong> ${formData.get("full-name")}</p>
  // <p><strong>Email:</strong> ${formData.get("email")}</p>
  // <p><strong>Phone:</strong> ${formData.get("phone")}</p>
  // <p><strong>Address:</strong> ${formData.get("address")}</p>
  // <p><strong>Vehicle:</strong> ${formData.get("vehicle")}</p>
  // <p><strong>Notes:</strong> ${formData.get("notes") || "N/A"}</p>
  // <hr>
  // <p><strong>Vehicle Type:</strong> ${selectedVehicleType}</p>
  // `;
  //
  // if (selectedBaseService) {
  // const serviceName = selectedBaseService.value.charAt(0).toUpperCase() + selectedBaseService.value.slice(1);
  // summaryHTML += `<p><strong>Base Service:</strong> ${serviceName} Detail ($${selectedBaseService.dataset.price})</p>`;
  // }
  //
  // if (selectedAddons.length > 0) {
  // summaryHTML += `<p><strong>Add-ons:</strong></p><ul>`;
  // selectedAddons.forEach((addon) => {
  // const addonLabel = addon.parentElement.textContent.split("(+$")[0].trim();
  // const priceText = addon.dataset.price ? ` ($+${addon.dataset.price})` : "";
  // summaryHTML += `<li>${addonLabel}${priceText}</li>`;
  // });
  // summaryHTML += `</ul>`;
  // }
  //
  // summaryHTML += `<hr><p><strong>Estimated Total:</strong> ${total}</p>`;
  // summaryHTML += `<p><strong>Deposit Due:</strong> $20</p>`;
  //
  // summaryDiv.innerHTML = summaryHTML;
  // }

  // --- Before/After Slider Logic ---
  function setupBeforeAfterSlider() {
    const container = document.querySelector(".before-after-wrapper");
    if (!container) return;

    const slider = container.querySelector(".slider-handle");
    const afterImage = container.querySelector(".after-image");
    const sliderLine = container.querySelector(".slider-line");

    let isDragging = false;

    // Function to update slider position and image clip-path
    function updateSliderPosition(clientX) {
      // Calculate position relative to container
      const containerRect = container.getBoundingClientRect();
      const x = clientX - containerRect.left;
      const containerWidth = containerRect.width;

      // Make sure slider stays within container boundaries
      const percentage = Math.max(0, Math.min(100, (x / containerWidth) * 100));

      // Update slider and line position
      slider.style.left = `${percentage}%`;
      if (sliderLine) {
        sliderLine.style.left = `${percentage}%`;
      }

      // Update clip-path of after image
      afterImage.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    }

    // Event listeners for mouse interaction
    slider.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDragging = true;
      slider.style.cursor = "grabbing";
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        slider.style.cursor = "grab";
      }
    });

    window.addEventListener("mousemove", (e) => {
      if (isDragging) {
        updateSliderPosition(e.clientX);
      }
    });

    // Event listeners for touch interaction
    slider.addEventListener("touchstart", (e) => {
      isDragging = true;
    });

    window.addEventListener("touchend", () => {
      isDragging = false;
    });

    window.addEventListener("touchmove", (e) => {
      if (isDragging) {
        updateSliderPosition(e.touches[0].clientX);
      }
    });

    // Initial setup
    updateSliderPosition(container.getBoundingClientRect().left + container.getBoundingClientRect().width / 2);
  }

  // --- Scroll To Top Button ---
  function setupScrollToTop() {
    const scrollBtn = document.querySelector(".scroll-to-top");

    if (!scrollBtn) return;

    // Show button when scrolling down
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    });

    // Scroll to top when clicked
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- Section Navigation ---
  function setupSectionNavigation() {
    const navPills = document.querySelectorAll(".nav-pill");
    const heroSection = document.getElementById("hero");
    const sections = [heroSection, document.getElementById("services"), document.getElementById("extra-services"), document.getElementById("service-area"), document.getElementById("before-after"), document.getElementById("reviews"), document.getElementById("about"), document.querySelector(".footer")];

    // Update active pill on scroll
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY + 200;

      // Special case for hero section - active when at the top
      if (scrollPosition < sections[1].offsetTop) {
        navPills[0].classList.add("active");
      } else {
        navPills[0].classList.remove("active");
      }

      // Handle all other sections
      for (let i = 1; i < sections.length; i++) {
        const section = sections[i];
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          navPills[i].classList.add("active");
        } else {
          navPills[i].classList.remove("active");
        }
      }

      // Special case for footer - activate at bottom of page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        // Remove active class from all other pills
        navPills.forEach((pill, idx) => {
          if (idx !== navPills.length - 1) {
            pill.classList.remove("active");
          }
        });
        // Add active class to the last pill (footer)
        navPills[navPills.length - 1].classList.add("active");
      }
    });

    // Scroll to section when clicked
    navPills.forEach((pill, index) => {
      pill.addEventListener("click", () => {
        if (sections[index]) {
          window.scrollTo({
            top: index === 0 ? 0 : sections[index].offsetTop - 100,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // --- Section Transitions ---
  function setupSectionTransitions() {
    // Add fade-in class to all sections initially
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("fade-in");
    });

    // Create intersection observer to animate sections when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    ); // Trigger when 10% of the section is visible

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  // --- CTA Buttons ---
  function setupCTAButtons() {
    const ctaButton = document.querySelector(".cta-button"); // This refers to .action-btn

    if (ctaButton) {
      // The behavior for this button is now handled by the general .cta-button selector
      // in the DOMContentLoaded listener, which will scroll to services.
      // No separate alert or Cal.com logic needed here anymore.
      // console.log("CTA button event listener in setupCTAButtons is now managed by general handler.");
    }
  }

  // --- Testimonial Carousel Logic (Placeholder) ---
  // function setupTestimonialCarousel() {
  //     // Implementation using a library (like Swiper.js) or custom JS
  //     console.log('Setup testimonial carousel...');
  // }

  // --- View Counter Animation ---
  function setupViewCounter() {
    const viewCount = document.getElementById("view-count");
    if (!viewCount) return;

    const targetCount = 55000000; // 55 million
    const duration = 2500; // Animation duration in milliseconds (increased slightly)

    const formatNumber = (num) => {
      const number = Math.floor(num);
      if (number >= 1000000) {
        // Use toLocaleString for commas and keep one decimal for millions
        return (number / 1000000).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "M";
      } else if (number >= 1000) {
        // Use toLocaleString for thousands
        return Math.floor(number / 1000).toLocaleString() + "K";
      }
      return number.toLocaleString(); // Format smaller numbers with commas
    };

    let startTime = null;

    // Easing function (ease-out cubic)
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateCount = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't exceed 1
      const easedProgress = easeOutCubic(progress);
      const currentCount = easedProgress * targetCount;

      viewCount.textContent = formatNumber(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount); // Continue animation
      } else {
        viewCount.textContent = formatNumber(targetCount); // Ensure final value is exact
      }
    };

    // Start counting when the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the animation using requestAnimationFrame
            startTime = null; // Reset start time each time it becomes visible
            requestAnimationFrame(animateCount);
            observer.disconnect(); // Animate only once
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% is visible
    );

    observer.observe(viewCount);
  }

  // --- Navbar Scroll Effect ---
  function setupNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // --- Mobile Menu ---
  function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (!mobileMenuToggle || !mobileMenu) return;

    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });

    // Add the same event listener to mobile menu buttons
    const mobileButtons = mobileMenu.querySelectorAll("button");
    mobileButtons.forEach((button) => {
      if (button.classList.contains("btn-nav-book")) {
        button.addEventListener("click", () => {
          const servicesSection = document.getElementById("services");
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
          }
          mobileMenuToggle.classList.remove("active");
          mobileMenu.classList.remove("active");
        });
      }
    });
  }

  // --- Service Area Map ---
  function setupServiceAreaMap() {
    const mapContainer = document.getElementById("panzoom-container");
    const mapImage = document.getElementById("map-image");
    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");
    const resetBtn = document.getElementById("reset-view");

    if (!mapContainer || !mapImage) return;

    // Prevent default browser image drag behavior
    mapImage.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });

    // Initial state
    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    const MIN_SCALE = 1;
    const MAX_SCALE = 4;
    const ZOOM_STEP = 0.5;

    // Apply transform to image
    function applyTransform() {
      mapImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    // Constrain panning to ensure image doesn't go beyond edges when zoomed in
    function constrainPan() {
      const containerRect = mapContainer.getBoundingClientRect();

      // Get current image dimensions
      const imageRect = mapImage.getBoundingClientRect();

      // Calculate boundaries - how much the image can move in each direction
      const maxX = Math.max(0, (imageRect.width - containerRect.width) / 2);
      const maxY = Math.max(0, (imageRect.height - containerRect.height) / 2);

      // Only apply constraints when zoomed in
      if (scale > 1) {
        // Constrain horizontal movement
        if (maxX > 0) {
          translateX = Math.max(-maxX, Math.min(maxX, translateX));
        } else {
          translateX = 0; // Center horizontally if image is narrower than container
        }

        // Constrain vertical movement
        if (maxY > 0) {
          translateY = Math.max(-maxY, Math.min(maxY, translateY));
        } else {
          translateY = 0; // Center vertically if image is shorter than container
        }
      } else {
        // When at original scale, center the image
        translateX = 0;
        translateY = 0;
      }
    }

    // Zoom functionality
    function zoom(direction) {
      const oldScale = scale;

      // Adjust scale based on direction
      if (direction === "in") {
        scale = Math.min(MAX_SCALE, scale + ZOOM_STEP);
      } else if (direction === "out") {
        scale = Math.max(MIN_SCALE, scale - ZOOM_STEP);
      } else if (direction === "reset") {
        scale = 1;
        translateX = 0;
        translateY = 0;
        applyTransform();
        return;
      }

      // If scale changed
      if (oldScale !== scale) {
        // Apply constraints before rendering
        constrainPan();
        applyTransform();
      }
    }

    // Event listeners for mouse/touch interaction
    mapContainer.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      mapContainer.style.cursor = "grabbing";
    });

    mapContainer.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 1) {
          isDragging = true;
          startX = e.touches[0].clientX - translateX;
          startY = e.touches[0].clientY - translateY;
        }
      },
      { passive: true }
    );

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      constrainPan();
      applyTransform();
    });

    window.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        constrainPan();
        applyTransform();
        e.preventDefault(); // Prevent page scroll while dragging
      },
      { passive: false }
    );

    window.addEventListener("mouseup", () => {
      isDragging = false;
      mapContainer.style.cursor = "grab";
    });

    window.addEventListener("touchend", () => {
      isDragging = false;
    });

    // Zoom controls
    if (zoomInBtn) {
      zoomInBtn.addEventListener("click", () => zoom("in"));
    }

    if (zoomOutBtn) {
      zoomOutBtn.addEventListener("click", () => zoom("out"));
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => zoom("reset"));
    }

    // Add mousewheel zoom
    mapContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        zoom("in");
      } else {
        zoom("out");
      }
    });

    // Pinch zoom for mobile
    let initialDistance = 0;
    let initialScale = 1;

    mapContainer.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 2) {
          initialDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
          initialScale = scale;
        }
      },
      { passive: true }
    );

    mapContainer.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length === 2) {
          const currentDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);

          const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, initialScale * (currentDistance / initialDistance)));

          if (newScale !== scale) {
            scale = newScale;
            constrainPan();
            applyTransform();
          }

          e.preventDefault(); // Prevent page pinch zoom
        }
      },
      { passive: false }
    );

    // Initialize with default state
    applyTransform();
  }

  // Fix smooth transition for CTA Button
  document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".action-btn");
    if (ctaButton) {
      // Apply smooth transition styles
      ctaButton.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";

      // Create after element with transition
      const style = document.createElement("style");
      style.innerHTML = `
        .action-btn::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          top: 0;
          left: -100%;
          transform: skewX(-15deg);
          transition: left 0.8s ease;
        }
        .action-btn:hover::after {
          left: 100%;
        }
      `;
      document.head.appendChild(style);
    }
  });

  // Handle expandable content in About Us section
  function setupReadMoreToggle() {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const expandableContent = document.querySelector(".expandable-content");

    if (!readMoreBtn || !expandableContent) return;

    readMoreBtn.addEventListener("click", function () {
      const isExpanded = expandableContent.classList.contains("expanded");

      if (isExpanded) {
        // Collapse
        expandableContent.classList.remove("expanded");
        readMoreBtn.textContent = "Read More";

        // Scroll back to the top of the section after collapsing
        setTimeout(() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Expand
        expandableContent.classList.add("expanded");
        readMoreBtn.textContent = "Read Less";
      }
    });
  }

  // --- Testimonials Carousel ---
  function setupTestimonials() {
    const testimonials = document.querySelectorAll(".testimonial");
    const nextBtn = document.querySelector(".next-testimonial");
    const prevBtn = document.querySelector(".prev-testimonial");
    const dots = document.querySelectorAll(".testimonial-dot");

    if (!testimonials.length || !nextBtn || !prevBtn) return;

    let currentIndex = 0;
    let isAnimating = false;
    let touchStartX = 0;
    let touchEndX = 0;
    const testimonialContainer = document.querySelector(".testimonials-container");

    // Initialize with first testimonial active
    updateTestimonials();

    // Event listeners for controls
    nextBtn.addEventListener("click", () => {
      if (isAnimating) return;
      goToNextTestimonial();
    });

    prevBtn.addEventListener("click", () => {
      if (isAnimating) return;
      goToPrevTestimonial();
    });

    // Dot navigation
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        if (isAnimating) return;
        const index = parseInt(dot.getAttribute("data-index"));
        if (index !== currentIndex) {
          goToTestimonial(index);
        }
      });
    });

    // Touch events for mobile swipe
    if (testimonialContainer) {
      testimonialContainer.addEventListener("touchstart", handleTouchStart, { passive: true });
      testimonialContainer.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    // Auto-advance every 6 seconds
    let interval = setInterval(goToNextTestimonial, 6000);

    // Pause auto-advance on hover
    testimonialContainer?.addEventListener("mouseenter", () => {
      clearInterval(interval);
    });

    testimonialContainer?.addEventListener("mouseleave", () => {
      interval = setInterval(goToNextTestimonial, 6000);
    });

    function handleTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }

    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX + swipeThreshold < touchStartX) {
        // Swipe left - next
        goToNextTestimonial();
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous
        goToPrevTestimonial();
      }
    }

    function goToNextTestimonial() {
      goToTestimonial((currentIndex + 1) % testimonials.length);
    }

    function goToPrevTestimonial() {
      goToTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);
    }

    function goToTestimonial(index) {
      if (isAnimating || index === currentIndex) return;

      isAnimating = true;

      // Determine direction
      const direction = index > currentIndex ? "next" : "prev";

      // Remove active class from current testimonial
      testimonials[currentIndex].classList.remove("active");

      // Add prev/next class based on direction
      if (direction === "next") {
        testimonials[currentIndex].classList.add("prev");
      } else {
        testimonials[currentIndex].classList.remove("prev");
      }

      // Update the active dot
      dots[currentIndex].classList.remove("active");
      dots[index].classList.add("active");

      // Update current index
      currentIndex = index;

      // Make new testimonial active
      testimonials[currentIndex].classList.add("active");

      // Reset animation lock after transition completes
      setTimeout(() => {
        updateTestimonials();
        isAnimating = false;
      }, 600);
    }

    function updateTestimonials() {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active", "prev");
        if (i === currentIndex) {
          testimonial.classList.add("active");
        } else if (i === (currentIndex - 1 + testimonials.length) % testimonials.length) {
          testimonial.classList.add("prev");
        }
      });
    }
  }

  // --- Login Button ---
  function setupLoginButton() {
    const loginButtons = document.querySelectorAll(".btn-nav-login");

    loginButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Navigate to login page instead of directly to dashboard
        window.location.href = "login.html";
      });
    });
  }
});

const calEventMap = {
  "sedan-interior": "brotdetailing/the-interior-package-for-coupes-sedans-mid-sized-suvs",
  "sedan-exterior": "brotdetailing/the-exterior-package-for-coupes-sedans-mid-sized-suvs",
  "sedan-complete": "brotdetailing/deluxe-copy",
  "sedan-maintenance": "brotdetailing/maintenance-customers-only",

  "large-interior": "brotdetailing/the-interior-package-for-large-sized-suvs-trucks",
  "large-exterior": "brotdetailing/the-exterior-package-for-coupes-sedans-mid-sized-suvs", // Note: Original map had same link as sedan-exterior for large-exterior. Assuming this is intentional.
  "large-complete": "brotdetailing/the-deluxe-package-for-large-sized-suvs-trucks",
  "large-maintenance": "brotdetailing/maintenance-customers-only",

  "oversized-interior": "brotdetailing/the-interior-package-for-oversized-vehicles-other",
  "oversized-exterior": "brotdetailing/the-exterior-package-for-oversized-vehicles-other",
  "oversized-complete": "brotdetailing/the-deluxe-package-for-oversized-vehicles-other",
  "oversized-maintenance": "brotdetailing/maintenance-customers-only",
};

const prices = {
  sedan: {
    interior: 95,
    exterior: 75,
    complete: 150,
    maintenance: 99,
  },
  large: {
    interior: 115,
    exterior: 95,
    complete: 200,
    maintenance: 99,
  },
  oversized: {
    interior: 135,
    exterior: 105,
    complete: 225,
    maintenance: 99,
  },
};

function updatePrices(vehicleType) {
  // Get all price elements and their current numeric values
  const priceElements = [
    { element: document.getElementById("price-interior"), key: "interior" },
    { element: document.getElementById("price-exterior"), key: "exterior" },
    { element: document.getElementById("price-complete"), key: "complete" },
    { element: document.getElementById("price-maintenance"), key: "maintenance" },
  ];

  // For each price element, animate the number change
  priceElements.forEach((item) => {
    if (!item.element) return; // Skip if element doesn't exist

    const currentValue = parseInt(item.element.textContent.replace("$", ""));
    const targetValue = prices[vehicleType][item.key];

    // Only animate if values are different
    if (currentValue !== targetValue) {
      animateNumber(item.element, currentValue, targetValue, 500);
    }
  });
}

// Function to animate a number changing from start to end
function animateNumber(element, start, end, duration) {
  const startTime = performance.now();
  const change = end - start;

  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      // Calculate current value using easing function
      const progress = elapsedTime / duration;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      const currentValue = Math.round(start + change * easedProgress);

      // Update the element text
      element.textContent = `$${currentValue}`;

      // Continue animation
      requestAnimationFrame(updateNumber);
    } else {
      // Ensure we end at exactly the target value
      element.textContent = `$${end}`;
    }
  }

  // Start the animation
  requestAnimationFrame(updateNumber);
}

function setupVehicleToggle() {
  const toggles = document.querySelectorAll('input[name="vehicle-type"]');
  toggles.forEach((toggle) => {
    toggle.addEventListener("change", (event) => {
      updatePrices(event.target.value);
    });
  });

  // Initial price update based on default selection
  const initialType = document.querySelector('input[name="vehicle-type"]:checked').value;
  updatePrices(initialType);
}

function handleBooking(service) {
  const popup = document.getElementById("booking-popup");
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("booking-popup").style.display = "none";
}
