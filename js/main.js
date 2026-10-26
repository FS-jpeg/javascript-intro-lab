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

let imageAr = [
  'images/view1.jpg',
  'images/view2.jpg',
  'images/view3.jpg',
  'images/view4.jpg',
  'images/view5.jpg',
  'images/view6.jpg'
];

let currentIndex = 0

let myInterval = setInterval(changeImg, 5000);

document.getElementById('myImages').setAttribute('src', imageAr[2]);
document.getElementById('myImages').addEventListener('click', changeImg);

function changeImg() {
    clearTimeout(myInterval)
    myInterval = setInterval(changeImg, 5000);
    currentIndex++;
    if (currentIndex >= imageAr.length) {
    currentIndex = 0;
    }
    document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
}