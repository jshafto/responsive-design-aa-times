
window.addEventListener('DOMContentLoaded', event => {
    let cog = document.querySelector('.fa-cog');
    cog.addEventListener('click', event => {
        event.stopPropagation();

        // get the element that has the class 'pref'
        let pref = document.querySelector('.pref');
        console.log(pref)
        // remove the class 'pref--hidden' from that element
        pref.classList.remove('pref--hidden')
        document.addEventListener('click', event => {
            pref.classList.add('pref--hidden');
        })

    })
})
