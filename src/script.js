const navParent = document.querySelector(".navbar");
navParent.classList.remove("fixed-top");

const observeNav = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navParent.classList.add("nav-custom");
      navParent.classList.add("fixed-top");
      // navParent.classList.remove("bg-transparent");
      console.log("stuff");
      return;
    }
    navParent.classList.remove("nav-custom");
    navParent.classList.remove("fixed-top");
  });
});

observeNav.observe(document.querySelector(".nav-wrapper"));

// const rightText = document.querySelector(".right-text");

// rightText.classList.remove("right-text__animation");

// // Create the observer for right text
// const observerRightText = new IntersectionObserver((entries) => {
//   //     loop over the entries
//   entries.forEach((entry) => {
//     // if the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       rightText.classList.add("right-text__animation");
//       return;
//     }

//     // We're not intersecting, remove class
//     rightText.classList.remove("right-text__animation");
//   });
// });

// // Tell the observer which elements to track
// observerRightText.observe(document.querySelector(".right-text-wrapper"));

// const leftText = document.querySelector(".left-text");
// leftText.classList.remove("left-text__animation");
// // Create observer for left text
// const observerLeftText = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       leftText.classList.add("left-text__animation");
//       return;
//     }

//     leftText.classList.remove("left-text__animation");
//   });
// });
// observerLeftText.observe(document.querySelector(".left-text-wrapper"));

// Groups of features
// const featureGroupOne = document.querySelector(".feature-group-one");
// featureGroupOne.classList.remove("feature-group-one__animation");

// const observerGroupOne = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       featureGroupOne.classList.add("feature-group-one__animation");
//       return;
//     }
//     featureGroupOne.classList.remove("feature-group-one__animation");
//   });
// });

// observerGroupOne.observe(document.querySelector(".feature-group-one__wrapper"));

// const featureGroupOneLeft = document.querySelector(".feature-group-one-left");
// featureGroupOneLeft.classList.remove("feature-group-one-left__animation");

// const observerGroupOneLeft = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       featureGroupOneLeft.classList.add("feature-group-one-left__animation");
//       return;
//     }
//     featureGroupOneLeft.classList.remove("feature-group-one-left__animation");
//   });
// });

// observerGroupOneLeft.observe(
//   document.querySelector(".feature-group-one__wrapper-left")
// );

// Group two
// const featureGroupTwo = document.querySelector(".feature-group-two");
// featureGroupTwo.classList.remove("feature-group-two__animation");
// const observerGroupTwo = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       featureGroupTwo.classList.add("feature-group-two__animation");
//       return;
//     }
//     featureGroupTwo.classList.remove("feature-group-two__animation");
//   });
// });

// observerGroupTwo.observe(document.querySelector(".feature-group-two__wrapper"));

// const featureGroupTwoLeft = document.querySelector(".feature-group-two-left");
// featureGroupTwoLeft.classList.remove("feature-group-two-left__animation");

// const observerGroupTwoLeft = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       featureGroupTwoLeft.classList.add("feature-group-two-left__animation");
//       return;
//     }
//     featureGroupTwoLeft.classList.remove("feature-group-two-left__animation");
//   });
// });

// observerGroupTwoLeft.observe(
//   document.querySelector(".feature-group-two-left__wrapper")
// );

// Group three

// const featureGroupThree = document.querySelector(".feature-group-three");
// featureGroupThree.classList.remove("feature-group-three__animation");
// const observerGroupThree = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       featureGroupThree.classList.add("feature-group-three__animation");
//       return;
//     }
//     featureGroupThree.classList.remove("feature-group-three__animation");
//   });
// });

// observerGroupThree.observe(
//   document.querySelector(".feature-group-three__wrapper")
// );

// get started

// const getStarted = document.querySelector(".start");
// getStarted.classList.remove("start-animation");
// const observerGetStarted = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       getStarted.classList.add("start-animation");
//       return;
//     }
//     getStarted.classList.remove("start-animation");
//   });
// });

// observerGetStarted.observe(document.querySelector(".start-wrapper"));

// const optionsDropdown = document.querySelector(".options-link__dropdown");
// const optionsContainer = document.querySelector(".options-link");

// optionsDropdown.addEventListener("click", (e) => {
//   optionsContainer.classList.toggle("d-none");
// });

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
