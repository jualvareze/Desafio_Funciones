let color;
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a': color = 'red'
            break;
        case 's': color = 'green'
            break;
        case 'd': color = 'blue'
            break;
    }
});

document.addEventListener('click', function (event) {
    let cuadrado = document.querySelector("#" + event.target.id).style.backgroundColor = color;
});