"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((eachModal, index) => {
  eachModal.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//
//
//
//
//
//
//
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
//
//
//
//
//
//
// -------------------
// ⭕ 1. Creating a Custom New Element: "message"
//--------------------

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent =
// //   "We use cookies for improved functionality and analytics.";

// // Creating and inserting custom HTML element to our document

// message.innerHTML =
//   "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

// const header = document.querySelector(".header");

// // 📌 Adding the above created "message" element to ".header" and then ❌ Deleting it

// header.before(message); // adding

// // ⭕⭕

// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove(); // 🤗 NEW Method
//   });

// // --------------------
// // 🎇 Setting the Styles: are set as inline-styles
// // ---------------------------

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 31 + "px";

//
//
//
//
//
//
//
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
//
//
//
//
//
//
//--------------------
// ⭕ 2. Smooth Scrolling
//--------------------

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (event) {
  // Bounding to the DOM Rectangle, which are basically the Co-Ordinates
  const section1CoOrdinates = section1.getBoundingClientRect();

  // ⭐⭐ Scrolling
  section1.scrollIntoView({ behavior: "smooth" });
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
//
//
//
//
//
//
//--------------------
// ⭕ 3. Page Navigation: Using Event Delegation
//--------------------
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//------------------------------
//📌 OUR Tasks: EVENT DELEGATION:
//--------------------------------

// --------> 1. Add Event Listener to Common Parent Element that we are interested in
//-----2. Determine What Element Originated the Event

document
  .querySelector(".nav__links")
  .addEventListener("click", function (event) {
    console.log("CONTAINER:", event.target);

    event.preventDefault();

    //⚡⚡⚡ Matching Strategy: Really Difficult to come up With: Matching the Elemets that we really interedted in

    if (event.target.classList.contains("nav__link")) {
      console.log("LINK");

      const id = event.target.getAttribute("href");
      console.log(id);

      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

//
//
//
//-------------------------------------------------------------------------
//⭐⭐ USE CASE : Advantage: We can even implement Event Delagation: Working with the ELements that are not even on the page during the RunTIME: So By the time, when the Page Loads: 🟥🟥 For Example- For the Buttons that are added DYNAMICALLY, while using the application.
//
//
//-----> Its Not Possible to attach Event handlers to the Elements that Do Not Yet Exist. But with Event Delegation, we can even Handle those Events.
//-----------------------------------------------------------------------------------
//
//
//
//
//
//
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//--------------------
// ⭕ 4. TABBED COMPONENT
//--------------------

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// Using Event Delegation

tabsContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".operations__tab");

  // Guard Clause
  if (!clicked) return; // 💫 Modern way: Less Confusing

  // Remove Active Classes

  tabs.forEach((eachTab) =>
    eachTab.classList.remove("operations__tab--active")
  );

  tabsContent.forEach((eachContent) =>
    eachContent.classList.remove("operations__content--active")
  );

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate Content Area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//------------------------------------------------------------------------------
//
//
//
//--------------------
// ⭕ 5. Animated Navigation: Menu Fading Effect
//--------------------
//
//
//
//
//
//
//
//
//
//
//
//------------------------------------
// ⭐⭐Overview: The Bind Method 🟠 creates a copy of the function, that its called on, and will set the "this" keyword in this function call, to whatever value we pass into bind.
//
//
// 🎇 Event Delegation + 🎇 Passing Argument using bind
//-----------------------------------------
//
//
//
//
//
//
//
//
//
//
//
//
//
//--------------------------
// Mouse Fade Animation: More Refactoring ✅ ✅ Version: 02
//----------------------

const navAll = document.querySelector(".nav");

// ⭕ Function

// const handleHover = function (event, opacity) { // ❌ Only 1 Real Parameter Allowed
const handleHover = function (event) {
  // console.log(this, event.currentTarget);

  // ⚡Matching Strategy
  // No ".closest", as there is NO CHILD ELEMENT, thus, we can't click accidentely on it

  if (event.target.classList.contains("nav__link")) {
    const link = event.target;
    // console.log(link);

    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((eachSibling) => {
      if (eachSibling !== link) eachSibling.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

//..........................................................
// 🟡 🟡 🟡 🟡  Passing an Argument into HANDLER FUNTION
//.........................................................

// 🟡 Passing in a "callback" function as an "Argument". Remember that it snot a real argument though. IT EXPECTS AN ARGUMENT so, we pass it using the bind setting the "this" keyword to our Opacity value, which containes our manually defined function called with our arguments. It can have ONLY ONE REAL argument, that is the "event". If we want to use other arguments, we would have to use the "this" keyword.

// It we wanted multiple values, we would have to pass an 💢 Array or an 🔴 Object, intead of one single value.

navAll.addEventListener("mouseover", handleHover.bind("0.1"));

navAll.addEventListener("mouseout", handleHover.bind("1"));

//
//------------------------------------------------------------------------------
//⭐ WorkAround for the Handler Function to have Multiple Arguments, instead of Just 1.
//----------------------------------------------------------------------------------
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//------------------------------------------------------------------------------
//
//
//
//--------------------
// ⭕ 6. Sticky Navigation: The Scroll Effect: Intersection Observer API
//--------------------
//
//
//
//
//
//
//
//
//
//
//
//// --------------------------------------------------------------------
// ⭐⭐⭐Including Responsivenes for dynamic ViewPorts
//-------------------------------------------------------------
//
//
//
//

const header = document.querySelector(".header");

// ⚡ Dynamic Calculation of the navigation bar height
const navAllHeight = navAll.getBoundingClientRect().height;

// const navAllHeight = navAll.getBoundingClientRect();
// console.log(navAllHeight);

// 💢 entries: array of threshold entries: In our Case, the first value
const stickyNav = function (entries) {
  const [eachEntry] = entries;
  // console.log(eachEntry);

  if (!eachEntry.isIntersecting) {
    navAll.classList.add("sticky");
  } else {
    navAll.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // When 0% of the Header is Visible
  rootMargin: `-${navAllHeight}px`, // "-90px" navigation height box, applied to the target element: added dynamically here // Only with "px" and Not "em" or "rem"
});

headerObserver.observe(header);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//------------------------------------------------------------------------------
//
//
//
//--------------------
// ⭕ 7. Revealing Elements on Scroll: Intersection Observer API
//--------------------
//
//
//
//
//
//
//
//
//
//

const allSections = document.querySelectorAll(".section");

// Reveal Section: Callback for API

// 💢 entries: array of threshold entries: In our Case, the first value: 0.15
const revealSection = function (entries, observer) {
  const [eachEntry] = entries;
  // console.log(eachEntry);

  // ⭐ Guard Clause
  if (!eachEntry.isIntersecting) return;

  // if (eachEntry.isIntersecting): Please follow the instructions Below

  // 🤔 Which Section to target❓ Lets find out by Observing and make reveal it.
  eachEntry.target.classList.remove("section--hidden");

  // 🎇🎇Finally, Unobserving the sections, as its not Necessary to Always Observe, if not required. 🔱 Boosts Performance
  observer.unobserve(eachEntry.target);
};

// The Logic Builder

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// The Looping

allSections.forEach(function (eachSection) {
  // console.log(eachSection);
  sectionObserver.observe(eachSection);

  // ⚡ Added Dynamically, using forEach, in case the JavaScript is Disabled by some users in browsers, and the page would be hidden for such users, if the class, "section--hidden" is coded in the HTNL itself

  //🎇 Turn OFF for SliderComponent Dev Purposes
  eachSection.classList.add("section--hidden");
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//------------------------------------------------------------------------------
//
//
//
//--------------------
// ⭕ 8. Lazy Loading Images: Performance Boosting : Intersection Observer API
//--------------------
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 4. Callback Function
const loadImage = function (entries, observer) {
  // Only 1 Entry, thus, Only 1 Threshold

  const [eachEntry] = entries;
  // console.log(eachEntry);

  // ⭐Guard Clause
  if (!eachEntry.isIntersecting) return;

  // 🟡 Main Functionality: Replace src attribute with data-src attribute
  eachEntry.target.src = eachEntry.target.dataset.src;

  //❌ Not a good Idea
  // eachEntry.target.classList.remove("lazy-img");

  // ✅ Listening to the "load" Event of Images: Just like "click" Event
  eachEntry.target.addEventListener("load", function () {
    eachEntry.target.classList.remove("lazy-img");
  });

  //🛑 Stop Observing when not in viewport

  observer.unobserve(eachEntry.target);
};

// 1. Select Targets
const imgTargets = document.querySelectorAll("img[data-src]");
// console.log(imgTargets);

// 2. Image Observer
const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  // rootMargin: "-200px",
  rootMargin: "200px", // For Early Loading
});

// 3. Attaching Observer to Each Image targets via Looping
imgTargets.forEach((eachImage) => imgObserver.observe(eachImage));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//------------------------------------------------------------------------------
//
//
//
//--------------------
// ⭕ 9. Slider Component
//--------------------
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const sliderComponent = function () {
  const slidesAll = document.querySelectorAll(".slide");

  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  const dotContainer = document.querySelector(".dots");

  let currentSlide = 0;
  const maxSlide = slidesAll.length;

  // // Scaling it down for Development Purposes
  // const slider = document.querySelector(".slider");
  // slider.style.transform = "scale(0.3) translateX(-800px)";
  // slider.style.overflow = "visible";

  //-------------------------------------
  // ⭐⭐ All Functions
  //---------------------------

  //-----------------------------------------------------------------------
  // ⭕⭕⭕ Dots Creation Function

  const createDots = function () {
    slidesAll.forEach(function (_, index) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${index}"</button>`
      );
    });
  };

  //------------------------------------------------------------------------
  // ⭕⭕⭕⭕ Activate Dots/Slide Function

  const activateSlide = function (slide) {
    // Deactivating All Before

    document
      .querySelectorAll(".dots__dot")
      .forEach((eachDot) => eachDot.classList.remove("dots__dot--active"));

    // Based on the Data Slide Attribute
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  //-------------------------------------------------------------------
  //  ⭕⭕ Slide Function

  const goToSlide = function (eachSlideNew) {
    // 💥 Most Tricky Part

    slidesAll.forEach(
      (eachSlide, index) =>
        (eachSlide.style.transform = `translateX(${
          100 * (index - eachSlideNew)
        }%)`)
    );
    // currentSlide = 0:  0%, 100%, 200%, 300% // 4 images // index: [0, 1, 2, 3]
    // currentSlide = 1: -100%, 0%, 100%, 200% // 4 images // index: [0, 1, 2, 3]
  };

  // ------------- Next Slide ⏩

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateSlide(currentSlide);
  };

  // --------------⏮ Previous Slide

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateSlide(currentSlide);
  };

  // ⭐ 0. Initialize

  const init = function () {
    // Initial State
    goToSlide(0);
    createDots();

    // Activate at initial state
    activateSlide(0);
  };

  // 📞 Initialize Sequence

  init();

  //--------------------------- ⭐ 1. Event Handlers

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  // 1.1 Handling the Keyboard Event: always attached to the whole document

  document.addEventListener("keydown", function (event) {
    // console.log(event);

    if (event.key === "ArrowLeft") prevSlide();
    // Same would be achieved using Short Circuiting
    event.key === "ArrowRight" && nextSlide();
  });

  // ⭐ Using Event Delegation: We are not going to attach One event handler to the Each Dot, but to the COMMON PARENT

  dotContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("dots__dot")) {
      // console.log("DOT");

      const { slide } = event.target.dataset; // Destructing from an Object
      // const slide = event.target.dataset.slide; // Same as Above

      // Goto the Slide that is selected
      goToSlide(slide);
      activateSlide(slide);
    }
  });
};

sliderComponent();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
