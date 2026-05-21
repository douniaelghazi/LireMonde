const ULR_API="http://localhost:3000/livres";
let allbooks=[];

async function fetchbooks() {
    try{
        const response =await fetch(ULR_API);
        if(!response.ok) throw new Error("Error serveur");
         const books = await response.json();
         renderBooks(books);
         allBooks = books; 
         } catch (err) {
         console.log("Impossible de charger", "error");
  }
}
    
