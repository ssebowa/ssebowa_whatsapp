// // document.addEventListener("DOMContentLoaded", function() {
// //     const navLinks = document.querySelectorAll("header nav ul li a");

// //     navLinks.forEach(function(link) {
// //       link.addEventListener("click", function(e) {
// //         e.preventDefault();
              
// //         const targetSection = document.querySelector(link.getAttribute("href"));
// //         const offsetTop = targetSection.offsetTop;

// //         window.scrollTo({
// //           top: offsetTop,
// //           behavior: "smooth"
// //         });

// //         // Remove "active" class from all links
// //         navLinks.forEach(function(navLink) {
// //           navLink.classList.remove("active");
// //         });

// //         // Add "active" class to the clicked link
// //         link.classList.add("active");
// //       });
// //     });
// //   });

// document.addEventListener("DOMContentLoaded", function() {
//   const navLinks = document.querySelectorAll("header nav ul li a");

//   navLinks.forEach(function(link) {
//     link.addEventListener("click", function(e) {
//       e.preventDefault();

//       const targetId = link.getAttribute("href").substring(1);
//       const targetSection = document.getElementById(targetId);

//       // Verify if the target section exists
//       if (targetSection) {
//         const offsetTop = targetSection.offsetTop;

//         window.scrollTo({
//           top: offsetTop,
//           behavior: "smooth"
//         });

//         // Remove "active" class from all links
//         navLinks.forEach(function(navLink) {
//           navLink.classList.remove("active");
//         });

//         // Add "active" class to the clicked link
//         link.classList.add("active");
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("header nav ul li a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      const href = link.getAttribute("href");

      // Check if the link is pointing to a different page
      if (href.startsWith("#")) {
        e.preventDefault();

        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        // Verify if the target section exists
        if (targetSection) {
          const offsetTop = targetSection.offsetTop;

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });

          // Remove "active" class from all links
          navLinks.forEach(function(navLink) {
            navLink.classList.remove("active");
          });

          // Add "active" class to the clicked link
          link.classList.add("active");
        }
      }
    });
  });
});
