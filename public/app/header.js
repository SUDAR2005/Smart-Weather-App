function myMenuFunction() {
    var i=document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className="nav-menu";
    }
    
}
function toggleSidebar() {
    var sidebar=document.querySelector('.sidebar');
    var mainContent=document.querySelector('.main-content');
    sidebar.classList.toggle('hidden');
    mainContent.classList.toggle('full-width');
    slidebar.style.color="black";
}