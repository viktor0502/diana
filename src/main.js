var $ = require("jquery");
require("jquery.marquee");

$('.marquee').marquee({
	duration: 8000,
	gap: 50,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true
});

function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".element-animation");

  for (let elm of elements) {
    observer.observe(elm);
  }

  function smoothScrolling(linkSelector) {
    const anchors = document.querySelectorAll("." + linkSelector);
    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }
  smoothScrolling('scroll')

  

  