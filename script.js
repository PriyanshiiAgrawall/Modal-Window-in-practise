const showModalBtn = document.querySelectorAll(".show-modal")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".close-modal")
const showModalFun = function () {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")

}
const closeModalFun = function () {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")

}
for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener("click", showModalFun)
}
overlay.addEventListener("click", closeModalFun)
closeModalBtn.addEventListener("click", closeModalFun)
document.addEventListener("keydown", function (e) {
    console.log(e);
    console.log(e.key);
    if (e.key === "Enter" && !modal.classList.contains("hidden")) {
        closeModalFun()
    }
})


console.log(showModalBtn);