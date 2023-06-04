const main = document.querySelector("#main");
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";

checkout();

function checkout() {
  const seat = localStorage.getItem("seat");

  const movie = JSON.parse(localStorage.getItem("movie"));

  const { title,  original_language, vote_average, poster_path } = movie;


  main.innerHTML = `
    <div class="ticket">
    <div class="ticket-header">
      <h2>Movie Ticket</h2>
    </div>
    <div class="ticket-image">
      <img src=${IMG_PATH+poster_path} alt="Movie Poster">
    </div>
    <div class="ticket-info">

      <p class='lang'>${original_language}</p>
      <p class="title">${title}</p>
    </div>
    <div class="seat-place">
      Seat: ${seat}
    </div>
  </div>


  `;
}
