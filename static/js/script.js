// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$("#navbar a").click(function (e) {
  e.preventDefault();
  var id = $(this).attr("href"); // pegando o elemento pelo href
  targetOffset = $(id).offset().top; //pegando a distância da div até o topo
  console.log(id);

  $("html, body").animate(
    {
      scrollTop: targetOffset,
    },
    600
  );
});
