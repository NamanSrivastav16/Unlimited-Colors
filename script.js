// Generate a random color

const randomColor = function () {
    const hexVal = '0123456789ABCDEF';
    let colorVal = '#'
    for (let i = 0; i < 6; i++) {
        colorVal += hexVal[Math.floor(Math.random() * 16)];
    }
    return colorVal;
};

let intervalID = 0;
const startChangingColor = function () {

    intervalID = setInterval(changeBgColor, 1000);

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
    console.log('clicked');
};
const stopChangingColor = function () {
    clearInterval(intervalID);
    console.log("Stop Change")
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);