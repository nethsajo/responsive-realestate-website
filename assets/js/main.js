///////////////////////////////////////////////////////////
/* Set current year */
const copyrightYear = document.querySelector(".footer__year");
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
/* Make mobile navigation work */
const header_mobileNav = document.querySelector(".header__mobile-nav");
const header = document.querySelector(".header");

header_mobileNav.addEventListener("click", function () {
  header.classList.toggle("navigation__open");
});
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

/* Smooth scrolling animation */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({
        behavior: "smooth",
      });
    }

    //Close mobile navigation
    if (link.classList.contains("navigation__link")) {
      header.classList.toggle("navigation__open");
    }
  });
});

///////////////////////////////////////////////////////////

/* Sticky Navigation */
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
///////////////////////////////////////////////////////////
