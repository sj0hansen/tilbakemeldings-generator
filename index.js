/*
* Javascript for Tilbakemeldingsgenerator.
* Scriptet velger ut tilbakemeldingen som skal gis, og viser den som innerHTML.
*
* Sondre Johansen
* sondre.johans1@outlook.com
*
* Daniel Steffensen
*/

//Array bestående av strenger med adferder
var adferd = Array(
  "Når du velger å gjøre oppgavene dine på en innefektiv måte.",
  "Oppgavene du gjør blir til tider gjort på en mindre god måte.",
  "Til tider kan du oppleves som noe borte.",
  "Til tider oppleves du som fraværende.",
  "Du kan oppleves som negativ ved utførelsen av oppgaver som angår andre en deg selv.",
  "Under stressende situasjoner kan du oppleves som tom for ideer og noe stresset som gjør at du fryser til.",
  "Til tider kan du fryse til i situasjoner hvor du må ta valg.",
  "Når du blir ledet av andre kan følgerstilen din oppleves som noe varierende og rotete.",
  "I akutte situasjoner kan du virke usikker og fryse til.", "I relativt rolige situasjoner hvor en har god tid oppleves du til tider som stresset.",
  "Når det stilles vansklige spørsmål til deg, opplever jeg sjeldent at du har noe godt svar.",
  "Når ting går litt tregt opplever jeg deg som irritert og noe til bry."
);

//Array bestående av strenger med reaksjoner
var reaksjon = Array(
  "Dette gjør at jeg kan føle meg noe ubrukelig", 
  "Dette gjør at jeg blir ekstremt irritert", 
  "I disse situasjonene blir jeg ofte noe oppgitt og sur", 
  "Når dette skjer føler jeg at du ikke egentlig bryr deg om hva som skjer"
);

//Array bestående av strenger med konsekvenser
var konsekvens = Array(
  "som igjen fører til at laget i seg selv ofte jobber mindre effektivt.",
  "og dette fører til at jeg mister tillit til deg som leder."

);



//Funksjon som velger ut en streng fra hvert array og viser generert tilbakemelding over html knappen.
function visTekst(){

  //Her velges strenger fra arrayene
  let rAdferd = adferd[Math.floor(Math.random() * adferd.length)];

  let rReaksjon = reaksjon[Math.floor(Math.random() * reaksjon.length)];

  let rKonsekvens = konsekvens[Math.floor(Math.random() * konsekvens.length)];


  //Her settes tilbakemeldingen sammen, og vises på skjermen.
  document.getElementById("knapp").innerHTML=(rAdferd + " " + rReaksjon + " " + rKonsekvens);

}

