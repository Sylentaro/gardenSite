const searchIcon = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", () => {
    searchInput.classList.toggle('active'); // Po kliknięciu, przesuwamy element na widoczne miejsce
    searchInput.focus(); // Ustawiamy focus na elemencie <input>
});