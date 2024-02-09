const navToggle = document.querySelector(".sidebar-toggle")
const closeToggle = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")


navToggle.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar")
} )

closeToggle.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar")
})