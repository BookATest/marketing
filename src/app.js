/* Import jump.js http://callmecavs.com/jump.js/ */
import jump from "jump.js";

/* Scroll down to first section */
document
  .getElementsByClassName("bat-hero__scroll-inner")[0]
  .addEventListener("click", function() {
    jump(".bat-content-block", { a11y: true });
  });
