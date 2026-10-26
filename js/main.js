(function(){
    document.getElementById("myHeading").innerHTML = "Frasers website"
    const myBtn = document.getElementById("myTestBtn")
    myBtn.addEventListener("click", () =>{
        console.info('hi');
    });

    const buttons = document.querySelectorAll('span');

    buttons.forEach(button  => {
        button.addEventListener('click', function(ev) {
            document.body.setAttribute("class", ev.target.textContent)
        });
    });
})();