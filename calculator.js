const ecran = document.getElementById('ecran');
function ajouterCaractere(c) { ecran.value += c; }
function calculer() { ecran.value = eval(ecran.value); }