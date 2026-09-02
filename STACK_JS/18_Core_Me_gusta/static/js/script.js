console.log("Conexión de js exitosa...");

let likes = 0;
const contar = document.getElementById('contar');
const botonLikes = document.getElementById('Likes');

botonLikes.addEventListener('click', () => {
    likes++;
    contar.textContent = likes;
});

let likes2 = 0;
const contar2 = document.getElementById('contar2');
const botonLikes2 = document.getElementById('Likes2');

botonLikes2.addEventListener('click', () => {
    likes2++;
    contar2.textContent = likes2;
});


let likes3 = 0;
const contar3 = document.getElementById('contar3');
const botonLikes3 = document.getElementById('Likes3');

botonLikes3.addEventListener('click', () => {
    likes3++;
    contar3.textContent = likes3;
});
