document.getElementById('subscribe-email').addEventListener('submit', (event) => {
    event.preventDefault()
    const email = document.getElementById('email')
    const name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const message = document.getElementById('message')
    const preferred = document.getElementById('preferred-contact')

    if(name.value === ""){
        alert("Nama tidak boleh tidak diisi")
        return
    }

    if(phone.value.length < 5){
        alert("Nomor telepon tidak boleh kurang dari 5 digit")
        return
    }

    if(email.value === ""){
        alert("Email tidak boleh tidak diisi")
        return
    }

    if(message.value.length > 2000 || message.value.length < 1){
        alert("Pesan tidak boleh lebih dari 2000 huruf dan tidak boleh kurang dari 1 huruf")
        return 
    }

    if(preferred.value === ""){
        alert("Preferred contact method tidak boleh tidak diisi")
        return 
    }

    alert("Email Subscribed")
    
    name.value = ""
    email.value = ""
    phone.value = ""
    message.value = ""
    preferred.value = ""
})