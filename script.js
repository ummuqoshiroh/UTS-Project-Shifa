
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "0.3s";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Menutup modal jika klik di luar modal
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

        document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua link di dalam navbar
    let links = document.querySelectorAll("nav ul li a");

    // Dapatkan nama halaman dari URL
    let currentPage = window.location.pathname.split("/").pop();

    // Loop melalui setiap link dan tambahkan class active jika sesuai
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
  });

