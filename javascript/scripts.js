function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function hidePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body;

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");

    if (mobileNav.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });

  const navLinks = document.querySelectorAll(".mobile-nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      mobileNav.classList.remove("active");
      body.style.overflow = "";
    });
  });
});


const modal = document.getElementById("lectureModal");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("lectureForm");

const openBtns = document.querySelectorAll(".form-open-btn");

openBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.");
    modal.style.display = "none";
    form.reset();
});