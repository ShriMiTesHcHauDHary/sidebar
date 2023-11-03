let togglebtn = document.querySelector(".sidebar-toggle")
let closebtn = document.querySelector(".close-btn")
let sidebar = document.querySelector(".sidebar")


togglebtn.addEventListener("click", function(){

    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar")
    // }else{
    // }
    sidebar.classList.toggle("show-sidebar")
})

closebtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar")
})