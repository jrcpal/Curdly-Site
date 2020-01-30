
const modal = document.querySelector("#modal")
const modalContent = document.querySelector("#modal-content")

const exit = document.querySelector("#exit")
const screen = document.querySelector("#screen")

document.addEventListener ("click", async function (e) {
    const element = e.target.parentElement
        modal.style.display = "block"
        screen.style.display = "block"
        const movieId = element.id
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`)
        const movie = response.data 
        modalContent.innerHTML =
        `<h3>${movie.Title} - ${movie.Year}</h3>
        <p>Directed by: ${movie.Director}</p>
        <p>Starring: ${movie.Actors}</p>
        <p><i>${movie.Plot}</i></p>
        <button id=${movie.imdbID} class="favorite">Add Favorite</button>`}

        exit.addEventListener("click", function () {
            modal.style.display = "none"
            screen.style.display = "none"
        })
        
        screen.addEventListener("click", function () {
            modal.style.display = "none"
            screen.style.display = "none"
        })