const barBtn = document.getElementById('bar-btn');
const dropdownContent = document.querySelector('.dropdown-content');


barBtn.addEventListener('click', ()=>{
    if (dropdownContent.style.display==="") {
        dropdownContent.style.display = "block";
        barBtn.classList.replace('fa-bars', 'fa-remove');
    } else {
        dropdownContent.style.display="";
        barBtn.classList.replace('fa-remove', 'fa-bars');
    }
})