// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // 1. Logika untuk Navbar Burger
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  // 2. Logika Cover Screen & Audio
  const openBtn = document.getElementById("openInvitation");
  const coverScreen = document.getElementById("invitationCover");
  const music = document.getElementById("bgMusic");

  if (openBtn) {
    openBtn.addEventListener("click", function() {
      // Putar lagu
      music.volume = 0.4;
      music.play().catch(function(error) {
        console.log("Audio tidak dapat diputar:", error);
      });
      
      // Sembunyikan halaman cover
      coverScreen.style.opacity = "0";
      coverScreen.style.visibility = "hidden";
      
      // Buka kunci scroll pada body
      document.body.classList.remove("locked");
    });
  }
});

// 3. Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// 4. Tombol Scroll ke Atas (To Top)
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// 5. Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut(500);
});
// Hapus preloader-site dari body jika masih ada bawaan CSS
$(window).on('load', function() {
  $("body").removeClass("preloader-site");
});