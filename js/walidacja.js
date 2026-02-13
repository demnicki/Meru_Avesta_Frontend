/*
Zestaw funkcji walidacji danych w całym portalu.

Drugi etap rejestracji - Wpisanie podstawowych danych.
*/
function wal_id() {
    var id_p2 = document.getElementById("p2").value;
    if (id_p2.length == 6 && /^\d{6}$/.test(id_p2)) {
        document.getElementById("tekst_kom").innerText = "Adres URL do Twojego profilu będzie następujący: https://[domena]/" + id_p2;
        return true;
    } else {
        document.getElementById("p2").className = "pola_tekst pole_bledne";
        pokaz_komunikat("Niepoprawny numer ID! Twoje ID musi składać się z 6 cyfr.");
        return false;
    }
};

function wal_hasla() {
    var p3 = document.getElementById("p3").value;
    var p4 = document.getElementById("p4").value;
    if (p3 !== p4) {
        document.getElementById("p3").className = "pola_tekst pole_bledne";
        document.getElementById("p4").className = "pola_tekst pole_bledne";
        pokaz_komunikat("Hasła nie są takie same!");
        return false;
    };
    if (p3.length < 15) {
        document.getElementById("p3").className = "pola_tekst pole_bledne";
        document.getElementById("p4").className = "pola_tekst pole_bledne";
        pokaz_komunikat("Hasło ma mniej niż 15 znaków!");
        return false;
    };
    return true;
};

function wal_maila() {
    var mail = document.getElementById("p6").value;
    if (mail.length > 1 && mail.includes('@') && mail.includes('.')) {
        return true;
    }
    else {
        document.getElementById("p6").className = "pola_tekst pole_bledne";
        pokaz_komunikat("Niepoprawny adres e-mail!");
        return false;
    };
};

function wal_pseudo() {
    var pseudo = document.getElementById("p7").value;
    if (pseudo.length >= 3) {
        return true;
    } else {
        document.getElementById("p7").className = "pola_tekst pole_bledne";
        pokaz_komunikat("Twój pseudonim musi mieć minumum trzy znaki!");
        return false;
    };
};

function wal_jezyk() {
    var jezyki = ['pl', 'en', 'de', 'ru'];
    var jezyk_p6 = document.getElementById("p5").value;
    for (let i = 0; i < jezyki.length; i++) {
        if (jezyk_p6 == jezyki[i]) {
            return true;
        };

    };
    document.getElementById("p5").className = "pola_tekst pole_bledne";
    pokaz_komunikat("Wybierz swój preferowany język!");
    return false;
};

function wal_form() {
    if (
        wal_id() &&
        wal_hasla() &&
        wal_jezyk() &&
        wal_pseudo()
    ) {
        return true;
    } else {
        pokaz_komunikat("Sprawdź poprawność danych w całym formularzu!");
        return false;
    };

};

/*
Trzeci etap rejestracji - Wybranie avatara.
*/

function wyb_dom_avatara(nr) {
    document.getElementById("wyb_avatar").innerHTML = document.getElementById("wybrany_avatar").innerHTML;
    document.getElementById("av_obraz").setAttribute("src", "/Frontend/pics/avatary/" + nr + ".png");
};

function zal_avatar() {
    var plik_avatara = document.getElementById('nowy_avatar').files[0];
    var avatar = URL.createObjectURL(plik_avatara);
    document.getElementById("wyb_avatar").innerHTML = document.getElementById("wybrany_avatar").innerHTML;
    document.getElementById("av_obraz").setAttribute("src", avatar);
};
/*
Walidacja podczas logowania użytkownika.
*/
function log_wal_id() {
    var nr_id = document.getElementById("id").value;
    if (nr_id.length == 6 && /^\d{6}$/.test(nr_id)) {
        return true;
    } else {
        document.getElementById("id").className = "pola_tekst pole_bledne";
        pokaz_komunikat("Niepoprawny numer ID! Twoje ID musi składać się z 6 cyfr.");
        return false;
    };
};

function log_gen_blok_hasla() {
    var blok_hasla = '';
    for (let i = 1; i <= sesja.uzyt.dl_hasla; i++) {
        if (Math.random() >= 0.5) {
            var kolejne_pole = i + 1
            blok_hasla = blok_hasla + '<div class="pozycja_hasla"><input class="pola_hasla" type="password" id="p' + i + '" oninput="log_przeskok_kursora(' + kolejne_pole + ')" maxlength="1"><p>' + i + '</p></div>';
        } else {
            blok_hasla = blok_hasla + '<div class="pozycja_hasla"><input class="pola_hasla pole_nieaktywne" type="password" readonly><p>X</p></div>';
        };

    }
    document.getElementById("haslo").innerHTML = blok_hasla;
};

function log_przeskok_kursora(nr_p) {
    document.getElementById("p" + nr_p).focus();
}