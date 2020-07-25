
// VARIABLES
const btnOpenMovieModal = document.querySelector(".main-header button");
const backdrop = document.querySelector(".backdrop");
const movieModal =document.querySelector(".movie-modal");
const btnCancelMovie = movieModal.querySelector(".movie-content-btn button");
const btnAddMovie =  movieModal.querySelector(".movie-content-btn .btn-add");
const welcomeMessage = document.querySelector(".welcome-container");
const movieListMenu = document.querySelector(".movie-list");
const movieListContainer = document.querySelector(".movie-list-container");
const deleteMovieModal = document.querySelector(".delete-movie-modal");
const btnAbortMovie = deleteMovieModal.querySelector(".btn-abort");
const btnDeleteMenuItem = deleteMovieModal.querySelector(".btn-delete");
const MovieListArray = [];
let listItemElement = null;



// METHODS

const openMovieModal = () =>
{
 backdrop.classList.toggle("visible");
 movieModal.classList.toggle("visible");
}

const closeBackdrop = () =>
{
    backdrop.classList.toggle("visible"); 
    movieModal.classList.toggle("visible");
}

const hideWelcomeMessage = () => {
    welcomeMessage.style.display = "none";
}
const showWelcomeMessage =() =>{
    welcomeMessage.style.display ="flex";
}

const addMovieItem = (title,imageUrl,rating) =>
{
  const listItem = document.createElement("li");
  listItem.classList.add("movie-list-item");
  
    listItem.innerHTML = 
    `<div class="image-container">
      <img src=${imageUrl}>
      </div>
     
      <div class="movie-info">
     <h2>${title}</h2>
     <p class="rate"> <span> ${rating}/</span>5 stars</p>
     </div>`;

     movieListMenu.append(listItem);
   
}

const addMovie = () =>
{
   const userInputs = Array.from(document.querySelectorAll("input"));
   const movieTitle = userInputs[0].value;
   const imageUrl = userInputs[1].value;
   const rating = userInputs[2].value;
   

    if((!movieTitle || !imageUrl || !rating) || (rating <= 0 || rating >5) )
    {
        alert("Please enter valid values (rating between 1 and 5.");
        return;
    }

    const movie = 
    {
      title: movieTitle,
      image:imageUrl,
      rate:rating
    };

    MovieListArray.push(movie);
    closeBackdrop();
    hideWelcomeMessage();
    addMovieItem(movie.title,movie.image,movie.rate);
    clearUserEntry(userInputs);

  
}

const clearUserEntry = (userInputs) =>
{
  userInputs.forEach(element => {
      element.value ="";
  }); 
}

const deleteListItem = (e) =>
{
    backdrop.classList.toggle("visible");
    deleteMovieModal.classList.toggle("visible");
    listItemElement = e.target.closest("li");
}

const getListItemMenu = () =>
{
 return listItemElement;
}

const abortDeleteMovie = () =>
{
    backdrop.classList.toggle("visible");
    deleteMovieModal.classList.toggle("visible"); 
}
const deleteMenuItem = (e) =>
{
    backdrop.classList.toggle("visible");
    deleteMovieModal.classList.toggle("visible"); 
    movieListMenu.removeChild(getListItemMenu());
    showWelcomeMessage();
   
}




// EVENTS LISTENER

btnOpenMovieModal.addEventListener("click",openMovieModal);
backdrop.addEventListener("click",closeBackdrop);
btnCancelMovie.addEventListener("click",closeBackdrop);
btnAddMovie.addEventListener("click",addMovie);
movieListMenu.addEventListener("click",deleteListItem);
btnAbortMovie.addEventListener("click",abortDeleteMovie);
btnDeleteMenuItem.addEventListener("click",deleteMenuItem)