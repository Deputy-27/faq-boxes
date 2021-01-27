const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
  /*     const tgl = toggle.parentNode
        tgl.classList.toggle('active')*/
        toggle.parentNode.classList.toggle('active')
    })
})