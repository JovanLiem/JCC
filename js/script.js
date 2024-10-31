document.getElementById('hamburger-menu').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.add('open-navbar')
})

document.getElementById('close-menu').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.remove('open-navbar')
})