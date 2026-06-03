// Récupération des éléments HTML //
const tableBody = document.getElementById("tableBody");
const adminModal = document.getElementById("adminModal");
const openAddModal = document.getElementById("openAddModal");
const cancelBtn = document.getElementById("cancelBtn");
const bookForm = document.getElementById("bookForm");

/* ================= INPUTS ================= */

const bookId = document.getElementById("bookId");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const genreInput = document.getElementById("genre");
const descriptionInput = document.getElementById("description");
const coverInput = document.getElementById("cover");

/* ================= FETCH BOOKS ================= */

async function fetchBooks(){

    try{

        const response = await fetch("http://localhost:3000/livres");
        const books = await response.json();
        displayBooks(books);

    }

    catch(error){

        console.log(error);

    }

}

/* ================= DISPLAY BOOKS ================= */

function displayBooks(books){

    tableBody.innerHTML = "";

    books.forEach(book => {

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${book.id}</td>
            <td><img src="${book.couverture}" class="table-cover"></td>
            <td>${book.titre}</td>
            <td>${book.auteur}</td>
            <td>${book.genre}</td>
            <td>
                <div class="action-btns">
                    <button class="edit-btn"><i class="fa-solid fa-pen"></i> Modifier</button>
                    <button class="delete-btn"><i class="fa-solid fa-trash"></i> Supprimer</button>
                </div>
            </td>
        `;

        /* ================= DELETE ================= */

        const deleteBtn = tr.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => { deleteBook(book.id); });

        /* ================= EDIT ================= */

        const editBtn = tr.querySelector(".edit-btn");
        editBtn.addEventListener("click", () => { editBook(book); });

        tableBody.appendChild(tr);

    });

}

/* ================= OPEN MODAL ================= */

openAddModal.addEventListener("click", () => {
    adminModal.classList.add("show");
    document.getElementById("modalTitle").innerText = "Ajouter un livre";
});

/* ================= CLOSE MODAL ================= */

cancelBtn.addEventListener("click", () => {
    adminModal.classList.remove("show");
    resetForm();
});

/* ================= RESET FORM ================= */

function resetForm(){
    bookForm.reset();
    bookId.value = "";
}

/* ================= ADD / UPDATE ================= */

bookForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const newBook = {
        id: bookId.value ? Number(bookId.value) : Date.now(),
        titre: titleInput.value,
        auteur: authorInput.value,
        genre: genreInput.value,
        description: descriptionInput.value,
        couverture: coverInput.value,
        aLire: false
    };

    try{

        /* ================= UPDATE ================= */

        if(bookId.value){
            await fetch(`http://localhost:3000/livres/${bookId.value}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newBook)
            });
        }

        /* ================= ADD ================= */

        else{
            await fetch("http://localhost:3000/livres", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newBook)
            });
        }

        fetchBooks();
        adminModal.classList.remove("show");
        resetForm();

    }

    catch(error){
        console.log(error);
    }

});

/* ================= DELETE BOOK ================= */

async function deleteBook(id){

    try{

        const response = await fetch(`http://localhost:3000/livres/${id}`, { method: "DELETE" });

        if(!response.ok){ throw new Error("Delete failed"); }

        fetchBooks();

    }

    catch(error){
        console.log("Erreur delete :", error);
    }

}

/* ================= EDIT BOOK ================= */

function editBook(book){

    adminModal.classList.add("show");
    document.getElementById("modalTitle").innerText = "Modifier un livre";

    bookId.value = book.id;
    titleInput.value = book.titre;
    authorInput.value = book.auteur;
    genreInput.value = book.genre;
    descriptionInput.value = book.description;
    coverInput.value = book.couverture;

}

/* ================= START ================= */

fetchBooks();