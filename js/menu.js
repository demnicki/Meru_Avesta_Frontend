/*

*/

function zamknij_podmenu() {
    document.getElementById('podmenu').style.display = 'none';
}

function pokaz_komunikat(kom_kontest) {
    document.getElementById('tr_podmenu').innerHTML = '<div class="komunikat"><p>' + kom_kontest + '</p></div>';
    document.getElementById('podmenu').style.display = 'block';
    setTimeout(zamknij_podmenu, 5000);
};

function pokaz_animacje() {
    document.getElementById('podmenu').style.display = 'block';
};

async function pokaz_podmenu() {
    var tr_podmenu = await fetch('./json/podmenu.json');
    tr_podmenu = await tr_podmenu.json();
    var caly_html = '';
    if (sesja.czy_zalogowany) {
        var tab_podmenu = tr_podmenu.zal.tab_podmenu;
        var tab_funk_js = tr_podmenu.zal.tab_funk_js;
    } else {
        var tab_podmenu = tr_podmenu.anon.tab_podmenu;
        var tab_funk_js = tr_podmenu.anon.tab_funk_js;
    };
    for (let i = 0; i < tab_podmenu.length; i++) {
        caly_html = caly_html + '<div class="pozycja_podmenu"><p><a href="javascript:' + tab_funk_js[i] + '">' + tab_podmenu[i] + '</a></p></div>';
    };
    document.getElementById('tr_podmenu').innerHTML = caly_html;
    document.getElementById('podmenu').style.display = 'block';
};

function pokaz_social() {
    document.getElementById('tr_social_aktyw').style.display = 'flex';
    document.getElementById('tr_social').style.display = 'none';
    setTimeout(() => {
        ukryj_social();
    }, 5000);
};

function ukryj_social() {
    document.getElementById('tr_social').style.display = 'block';
    document.getElementById('tr_social_aktyw').style.display = 'none';
};

async function init_podmenu() {
    var arg = await fetch('/Frontend/json/router.json');
    var arg_json = await arg.json();
    console.log(arg_json.tab_podmenu);
}