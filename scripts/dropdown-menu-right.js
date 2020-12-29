function dropdown_right_Function() {
    document.getElementById("dropdown-content-right").classList.toggle("show");
}
              
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button-right')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-right");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}