const toggleBtn=document.querySelector(".togglebtn");
const sidebar=document.querySelector(".side-bars");
const closeBtn=document.querySelector(".close-btn");


toggleBtn.addEventListener("click", function () {
    // if (sidebar.classList.contains("show-sidebar")) {
    //   sidebar.classList.remove("show-sidebar");
    // } else {
    //   sidebar.classList.add("show-sidebar");
    // }
    sidebar.classList.toggle("side-bars");
  });
  
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });

