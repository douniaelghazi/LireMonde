const URL_API = "http://localhost:3000/livres";

let allBooks = [];
let favoris = JSON.parse(localStorage.getItem("favoris")) || [];
let selectedBook = null;

// ================= FETCH BOOKS =================
async function fetchBooks() {
  try {
    const res = await fetch(URL_API);

    if (!res.ok) {
      throw new Error("Erreur serveur");
    }

    const books = await res.json();
    allBooks = books;
    renderBooks(allBooks);

  } catch (error) {
    console.log("Erreur :", error.message);
  }
}

fetchBooks();
renderFavoris();

// ================= RENDER BOOKS =================
function renderBooks(books) {
  const container = document.getElementById("book-container");

  container.innerHTML = "";

  books.forEach(book => {
    container.innerHTML += `
      <div class="card">
          <img src="${book.couverture}" alt="${book.titre}">
          <h3>${book.titre}</h3>
          <p>${book.auteur}</p>
          <span class="genre">${book.genre}</span>

          <div class="card-buttons">
              <button class="details-btn" data-id="${book.id}">
                Détails
              </button>
          </div>
      </div>
    `;
  });
}

// ================= CLICK EVENTS =================
document.getElementById("book-container")
.addEventListener("click", function (e) {
  if (e.target.classList.contains("details-btn")) {
    const id = e.target.dataset.id;
    const book = allBooks.find(book => book.id == id);
    openModal(book);
  }

});

// ================= MODAL =================
function openModal(book) {
  selectedBook = book;
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = book.couverture;
  document.getElementById("modal-titre").textContent = book.titre;
  document.getElementById("modal-genre").textContent = "Genre : " + book.genre;
  document.getElementById("modal-description").textContent = book.description;

}

// ================= ADD FAVORIS =================
document.getElementById("add-fav")
.addEventListener("click", () => {

  const exists = favoris.find(f => f.id == selectedBook.id);
  if (exists) {
    alert("Livre déjà ajouté ❤️");
    return;
  }

  favoris.push(selectedBook);
  localStorage.setItem( "favoris", JSON.stringify(favoris) );

  renderFavoris();
  document.getElementById("modal").style.display = "none";

});

// ================= CLOSE MODAL =================
document.getElementById("close").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

// ================= FILTER =================
function filterBooks(category) {

  if (category === "Tous") {
    renderBooks(allBooks);
    return;
  }

  const filtered = allBooks.filter(book =>
    book.genre.toLowerCase() === category.toLowerCase()
  );

  renderBooks(filtered);

}

// ================= SEARCH =================
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", searchBooks);
function searchBooks() {
  const value = searchInput.value.toLowerCase();
  const filtered = allBooks.filter(book =>
    book.titre.toLowerCase().includes(value)
  );

  renderBooks(filtered);

}

// ================= FAVORIS =================
function renderFavoris() {
  const favContainer = document.getElementById("book-grid-fav");
  favContainer.innerHTML = "";
  favoris.forEach(book => {

    favContainer.innerHTML += `
      <div class="card">
          <img src="${book.couverture}" alt="${book.titre}">
          <h3>${book.titre}</h3>
          <p>${book.auteur}</p>

          <button class="remove-fav" data-id="${book.id}"> Retirer ❌ </button>
      </div>
    `;
  });
}

// ================= REMOVE FAVORIS =================
document.getElementById("book-grid-fav")
.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-fav")) {
    const id = e.target.dataset.id;
    favoris = favoris.filter(
      book => book.id != id
    );
    localStorage.setItem("favoris",JSON.stringify(favoris));

    renderFavoris();
  }

});







function creatparagraphe(){
  const p=document.createElement("div")
  p.textContent="hello world";
  document.body.appendChild(p);
}
creatparagraphe();