var adferd = Array(
  "Når du velger å gjøre oppgavene dine på en innefektiv måte.",
  "Oppgavene du gjør blir til tider gjort på en mindre god måte.",
  "Til tider kan du oppleves som noe borte.",
  "Til tider oppleves du som fraværende.",
  "Du kan oppleves som negativ ved utførelsen av oppgaver som angår andre en deg selv.",
  "Under stressende situasjoner kan du oppleves som tom for ideer og noe stresset som gjør at du fryser til.",
  "Til tider kan du fryse til i situasjoner hvor du må ta valg.",
  "Når du blir ledet av andre kan følgerstilen din oppleves som noe varierende og rotete.",
  "I akutte situasjoner kan du virke usikker og fryse til.", "I relativt rolige situasjoner hvor en har god tid oppleves du til tider som stresset."
);

var reaksjon = Array(
  "Dette gjør at jeg kan føle meg noe ubrukelig", 
  "Dette gjør at jeg blir ekstremt irritert", 
  "I disse situasjonene blir jeg ofte noe oppgitt og sur", 
  "Når dette skjer føler jeg at du ikke egentlig bryr deg om hva som skjer"
);

var konsekvens = Array(


);

function visTekst(){

  let rAdferd = adferd[Math.floor(Math.random() * adferd.length)];

  let rReaksjon = reaksjon[Math.floor(Math.random() * reaksjon.length)];

  let rKonsekvens = konsekvens[Math.floor(Math.random() * reaksjon.length)];

  document.getElementById("knapp").innerHTML=(rAdferd + " " + rReaksjon);

}

