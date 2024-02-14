let billetter = [];
function nyBestilling(){ //legge til inputs som variabler
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnummer = document.getElementById("telefonnummer").value;
    const epost = document.getElementById("epost").value;

    //Validering av input. kall på metoder
    let erRiktig = true;
    if (!sjekkFilm(film)) {
        visError("errorFilm", "Du må velge en film");
        erRiktig = false;
    }
    else {
        skjulError("errorFilm")
    }
    if (!sjekkAntall(antall)) {
        visError("errorAntall", "Velg antall billetter");
        erRiktig = false;
    }
    else {
        skjulError("errorAntall")
    }
    if (!sjekkFornavn(fornavn)) {
        visError("errorFornavn", "Skriv inn fornavn");
        erRiktig = false;
    }
    else {
        skjulError("errorFornavn")
    }
    if (!sjekkEtternavn(etternavn)) {
        visError("errorEtternavn", "Skriv inn etternavn");
        erRiktig = false;
    }
    else {
        skjulError("errorEtternavn")
    }
    if (!sjekkTelefonnummer(telefonnummer)) {
        visError("errorTelefonnummer", "Skriv inn gyldig telefonnummer");
        erRiktig = false;
    }
    else {
        skjulError("errorTelefonnummer")
    }
    if (!sjekkEpost(epost)) {
        visError("errorEpost", "Skriv inn gyldig epost");
        erRiktig = false;
    }
    else {
        skjulError("errorEpost")
    }

    const billett = { //sammensette input
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnummer: telefonnummer,
        epost: epost,
    };

    if (erRiktig === true) { //push input til array hvis input er gyldig
        billetter.push(billett);
        resetInput();//kaller på metoden
    }

    

    /*nullstiller inputboksene "manuelt"
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnummer").value = "";
    document.getElementById("epost").value = "";*/

    console.log("Ny bestilling registrert");

    visBilletter();
}
function resetInput(){ //nullstiller inputbokser av verdiene tall og tekst
    const input = document.querySelectorAll('input[type="number"], input[type="text"]');
    input.forEach(function (input) {
        input.value = "";
    });
}
function visBilletter() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>E-post</th>" +
        "</tr>";
    for (let b of billetter) {
        ut += "<tr>";
        ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnummer + "</td><td>" + b.epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("mineBilletter").innerHTML=ut;
}

//valideringer
function sjekkFilm(film) { //denne fikk jeg ikke til å dukke opp da "label" velg film her er "valgt"
    let valgtFilm = film.value;
    return film !== "";
}
function sjekkAntall(antall) {
    return Number.isInteger(Number(antall)) && Number(antall) > 0;
}
function sjekkFornavn(fornavn) {
    return fornavn.trim() !== "";
}
function sjekkEtternavn(etternavn) {
    return etternavn.trim() !== "";
}
function sjekkTelefonnummer(telefonnummer) {
    return Number.isInteger(Number(telefonnummer)) && telefonnummer.toString().length === 8;
}
function sjekkEpost(epost) {
    let eposttegn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //tatt fra chatGPT
    return eposttegn.test(epost);
}

//Error
function visError(elementId, message) { //viser error ved feil input
    let errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function skjulError(elementId) { //skjuler error ved riktig input
    let errorElement = document.getElementById(elementId);
    errorElement.textContent = "";
    errorElement.style.display = "none";
}

function slettAlle(){ //tømmer array
    billetter = [];
    console.log("Alle billetter er slettet");
    document.getElementById("mineBilletter").innerHTML=""; //sletter alle gamle billetter også fra siden
}
