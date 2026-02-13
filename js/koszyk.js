/*

*/

var produkt = { id_prod: 1, ilosc: 1 };

function koszyk() {
    var link = '<a href="javascript:pokaz_podmenu()">';
    if (sesja.tr_koszyka.length > 0) {
        var suma = 0;
        for (let i = 0; i < sesja.tr_koszyka.length; i++) {
            suma = suma + sesja.tr_koszyka[i].ilosc;
        }
        document.getElementById('il_prod').innerHTML = link + suma + '</a>';
    } else {
        document.getElementById('il_prod').innerHTML = link + '0' + '</a>';
    };
};

function dodaj_produkt(id_prod) {
    var czy_nowy = true;
    for (let i = 0; i < sesja.tr_koszyka.length; i++) {
        if (sesja.tr_koszyka[i].id_prod == id_prod) {
            czy_nowy = false;
            sesja.tr_koszyka[i].ilosc += 1;
            break;
        };
    };
    if (czy_nowy) {
        produkt.id_prod = id_prod;
        sesja.tr_koszyka.push(produkt);
    }
    localStorage.setItem('sesja', JSON.stringify(sesja));
    koszyk();
};