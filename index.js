
//Evento para gestionar el formulario de login
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    console.log(email, password)
})

//Evento para gestionar los productos seleccionados
document.querySelectorAll("#product-container .btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        e.preventDefault()
        const product_name = e.target.previousElementSibling.previousElementSibling.innerHTML
        dataLayer.push({
            "event": "click_product_" + product_name
        })
    })

})