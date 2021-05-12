// Snack2

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 

const squadre = [
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "Parma",
        punti: 0,
        falli: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "Lazio",
        punti: 0,
        falli: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
];

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console:

const nomeFalli = [];

for (let i = 0; i < squadre.length; i++) {

    let messaggio = document.getElementById("falli_subiti");
    
    squadre[i]["punti"] = Math.floor((Math.random() * 50) + 1);
    squadre[i]["falli"] = Math.floor((Math.random() * 50) + 1);

    let {nome, falli} = squadre[i];
    nomeFalli.push({nome, falli});

    messaggio.innerHTML += `<li> Squadra: <strong> ${nome} </strong> <br> Falli subiti: <strong> ${falli} </strong> </li>`;
}

console.log(nomeFalli);

