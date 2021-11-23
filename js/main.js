
//this is your active radio button
var currentActive = null;

window.onload = ()=>{
    var selector = document.querySelector('#wrapper');
    var radioClasses = selector.querySelectorAll(".radioHolder .rad")

    radioClasses.forEach(element => {
        element.addEventListener('click', ()=>{
            if(!element.classList.contains("active")) {
                removeActives();
                element.classList.add("active");
                currentActive = element;
            }
        })
    });

    function removeActives() {
        radioClasses.forEach(element => {
            element.classList.remove("active");
        });
    }
}

