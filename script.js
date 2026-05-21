const URL_API ="http://localhost:3000/livres";
let allBooks=[];

async function fetchbooks() {
    try{
        const response =await fetch(URL_API);
        if(!response.ok) throw new Error("Error serveur");
         const books = await response.json();
         allBooks = books; 
         } catch (err) {
         console.log("Impossible de charger", "error");
  }
}
    
