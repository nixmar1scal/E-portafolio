// template_k0nwtvr
// service_neuehwh
// SVdoA2Rgvf0O6W8v0

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.model__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
      .sendForm(
        'service_neuehwh',
        'template_k0nwtvr',
        event.target,
        'SVdoA2Rgvf0O6W8v0'
      ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
      }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on nicolas8mk8@email.com"
        )
      })
}

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}