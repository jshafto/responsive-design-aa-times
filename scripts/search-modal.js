window.addEventListener("DOMContentLoaded", event => {

let searchButton = document.querySelector(".fa-search")

searchButton.addEventListener("click", event => {
    let searchDiv = document.querySelector(".masthead__search")

    searchDiv.classList.toggle("masthead__search--hidden")
})

})
