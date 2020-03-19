const div = document.querySelector('div')
let scaleValue = 1;
let scaleValue2 = 81;

window.addEventListener('scroll', function () {
    // console.log('działa');
    if (scaleValue < 81) {
        div.style.transform = `scale(${scaleValue})`;
        div.style.backgroundColor = "black";
        scaleValue++;
    } else if (scaleValue2 > 0) {
        div.style.transform = `scale(${scaleValue2})`;
        scaleValue2--;
        div.style.backgroundColor = "grey";
    } else {
        scaleValue = 1;
        scaleValue2 = 81;
    }

})