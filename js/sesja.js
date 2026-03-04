/*

*/

var sesja = {
    jezyk: '', token: 'fhtU63', id_promo: 0, czy_zalogowany: false,
    uzyt: { id_uzyt: 0, dl_hasla: null, tlo: null, kolor: null, saldo_eur: 0.01, status: '', tr_wiad_n: [], tr_wiad_st: [] },
    tr_koszyka: []
};

function ust_jezyk() {
    var jezyki = ['pl', 'en', 'de', 'ru'];
    for (let i = 0; i < jezyki.length; i++) {
        if (navigator.language == jezyki[i]) {
            sesja.jezyk = navigator.language;
        };
    };
};

async function start_sesji() {
    if (localStorage.getItem('sesja') !== null) {
        sesja = JSON.parse(localStorage.getItem('sesja'));
        if (sesja.czy_zalogowany) {
            await zal_menu_z();
            pokaz_saldo_eur();
            wiad();
        } else {
            await zal_menu_a();
        };
        if (!isNaN(sesja.uzyt.tlo) && !isNaN(sesja.uzyt.kolor)) {
            zmien_kolor(sesja.uzyt.kolor);
            zmien_tlo(sesja.uzyt.tlo);
        };
        zal_podstrone('manifest');
    } else {
        ust_jezyk();
        localStorage.setItem('sesja', JSON.stringify(sesja));
        zal_podstrone('tlo');
    };
};

function rejestr_etap1() {
    zal_podstrone('rejestr1');
};

function rejestr_etap2() {
    zal_podstrone('rejestr2');
};

function rejestr_etap3() {
    if (wal_form()) {
        zal_podstrone('rejestr3');
    };
};

/*
Rozpoczęcie sesji - nowe logowanie.
*/

function log_etap1() {
    zal_podstrone('login1');
};

async function log_etap2() {
    if (log_wal_id()) {
        var json_hasla = await fetch('./json/haslo.json');
        json_hasla = await json_hasla.json();
        if (json_hasla.czy_jest) {
            sesja.uzyt.dl_hasla = json_hasla.haslo.dl_hasla;
            if (json_hasla.haslo.il_prob > 1) {
                await zal_podstrone('login2');
                log_gen_blok_hasla();
            } else if (json_hasla.haslo.il_prob > 0) {
                await zal_podstrone('login3');
            } else {
                pokaz_komunikat('Wyczerpano ilość prób podania błednęgo hasła. Napisz do administratora serwisu.');
            };

        } else {
            pokaz_komunikat('Nie znaleziono wskzanego numeru ID.');
        };

    };
};

async function log_etap3() {
    if (log_wal_id()) {
        await zal_podstrone('login2');
        log_gen_blok_hasla();
    };
};

async function log_etap4() {
    if (log_wal_id()) {
        await zal_podstrone('login3');
        log_wal_haslo();
    };
};