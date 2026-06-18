const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('teddy')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})