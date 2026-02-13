/*

*/

function zmien_kolor(nr) {
    document.documentElement.style.setProperty('--kolor_tekstu_przycisk', 'white');
    switch (nr) {
        case 1:
            sesja.uzyt.kolor = 1;
            document.documentElement.style.setProperty('--kolor_przez', 'rgba(0, 0, 0, 0.2)');
            document.documentElement.style.setProperty('--kolor_tla_przycisk', 'black');

            break;
        case 2:
            sesja.uzyt.kolor = 2;
            document.documentElement.style.setProperty('--kolor_przez', 'rgba(255, 0, 0, 0.2)');
            document.documentElement.style.setProperty('--kolor_tla_przycisk', 'red');
            break;
        case 3:
            sesja.uzyt.kolor = 3;
            document.documentElement.style.setProperty('--kolor_przez', 'rgba(0, 0, 255, 0.2)');
            document.documentElement.style.setProperty('--kolor_tla_przycisk', 'blue');
            break;
        case 4:
            sesja.uzyt.kolor = 4;
            document.documentElement.style.setProperty('--kolor_przez', 'rgba(0, 128, 0, 0.2)');
            document.documentElement.style.setProperty('--kolor_tla_przycisk', 'green');
            break;
        case 5:
            sesja.uzyt.kolor = 5;
            document.documentElement.style.setProperty('--kolor_przez', 'rgba(255, 255, 0, 0.2)');
            document.documentElement.style.setProperty('--kolor_tla_przycisk', 'yellow');
            break;
        case 6:
            sesja.uzyt.kolor = 6;
            document.documentElement.style.setProperty('--kolor_przez', 'rgba(255, 255, 255, 0.2)');
            document.documentElement.style.setProperty('--kolor_tla_przycisk', 'white');
            document.documentElement.style.setProperty('--kolor_tekstu_przycisk', 'black');
            break;
    };
    localStorage.setItem('sesja', JSON.stringify(sesja));
};

function zmien_tlo(nr) {
    document.querySelector(".tlo").style.backgroundImage = 'url("/pics/tla/tlo_' + nr + '.jpg")';
    switch (nr) {
        case 1:
            zmien_kolor(6);
            break;
        case 2:
            zmien_kolor(5);
            break;
        case 3:
            zmien_kolor(3);
            break;
        case 4:
            zmien_kolor(4);
            break;
        case 5:
            zmien_kolor(nr);
            break;
        case 6:
            zmien_kolor(nr);
            break;
    };

};


async function galeria(url_img) {
    document.getElementById("galeria").style.display = "block";
};

function zamknij_galerie() {
    document.getElementById("galeria").style.display = "none";
}

