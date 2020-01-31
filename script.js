
const modals = document.querySelector("#modals")
const product1 = document.querySelector(".product1")
const modal1 = document.querySelector("#modal1")
const exit1 = document.querySelector("#exit1")

const product2 = document.querySelector(".product2")
const modal2 = document.querySelector("#modal2")
const exit2 = document.querySelector("#exit2")

const product3 = document.querySelector(".product3")
const modal3 = document.querySelector("#modal3")
const exit3 = document.querySelector("#exit3")


product1.addEventListener ("click",  function () {
    modal1.style.display = "block"
})
product2.addEventListener ("click",  function () {
    modal2.style.display = "block"
})

product3.addEventListener ("click",  function () {
    modal3.style.display = "block"
})

exit1.addEventListener ("click",  function () {
    modal1.style.display = "none";
    console.log("clicked")
})

exit2.addEventListener ("click",  function () {
    modal2.style.display = "none";
    console.log("clicked")
})

exit3.addEventListener ("click",  function () {
    modal3.style.display = "none";
    console.log("clicked")
})
        