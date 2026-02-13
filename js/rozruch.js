/*

*/

async function zal_podstrone(podstrona) {
  var tu_main = await fetch('./html/' + sesja.jezyk + '/' + podstrona + '_' + sesja.jezyk + '.html');
  tu_main = await tu_main.text();
  document.getElementById('tu_main').innerHTML = tu_main;
}

async function zal_menu_a() {
  var tu_menu = await fetch('./html/' + sesja.jezyk + '/menu_a_' + sesja.jezyk + '.html');
  tu_menu = await tu_menu.text();
  document.getElementById('tu_menu').innerHTML = tu_menu;
};

async function zal_menu_z() {
  var tu_menu = await fetch('./html/' + sesja.jezyk + '/menu_z_' + sesja.jezyk + '.html');
  tu_menu = await tu_menu.text();
  document.getElementById('tu_menu').innerHTML = tu_menu;
};

async function start_strony() {
  var id_url = localStorage.getItem('router');
  var tablica = id_url.match(/id(\d+)\./);
  if (tablica !== null) {
    id_url = tablica[1];
  } else {
    id_url = '';
  }
  start_sesji();
  if (sesja.czy_zalogowany) {
    await zal_menu_z();
    pokaz_saldo_eur();
    wiad();
  } else {
    await zal_menu_a();
  };
  koszyk();
  document.documentElement.setAttribute('lang', sesja.jezyk);
  document.title = document.title + ' - ' + sesja.jezyk.toUpperCase();
  zmien_kolor(sesja.uzyt.kolor);
  if (id_url.length == 8) {
    pokaz_komunikat('To pokój czatu. ID: ' + id_url);
  }
  else if (id_url.length == 6) {
    pokaz_komunikat('To jest profil użytkownika. ID: ' + id_url);
  }
  else if (id_url.length == 4) {
    pokaz_komunikat('To jest ogłoszenie. ID: ' + id_url);
  };
};