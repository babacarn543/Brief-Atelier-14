document.getElementById("user").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let Email = document.getElementById("mail");

if (!name.value) {
    erreur = "Veuillez saisir un nom";
}
if (!Email.value) {
    erreur = "Veuillez saisir un email";
}
if (!number.value) {
    erreur = "Veuillez saisir un numéro de téléphone";
}
if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
} else{
    alert("Demande envoyée! Un créneau vous sera envoyé par email. A bientôt dans votre espace auto!");
}

});
