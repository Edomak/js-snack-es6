// Snack 1

// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 

const biciCorsaLista = [
    {
        nome: "TrekEmonda",
        peso: 8
    },
    {
        nome: "Tarmac",
        peso: 7
    },
    {
        nome: "GiantTcr",
        peso: 9
    },
    {
        nome: "Orbea",
        peso: 6
    },
    {
        nome: "Marin",
        peso: 10
    }
];

// Stampare a schermo la bici con peso minore:

let biciSuperLeggera = biciCorsaLista[0];

for (let i = 0; i < biciCorsaLista.length; i++) {

    let bici = biciCorsaLista[i];
    
    if (bici["peso"] < biciSuperLeggera["peso"]) {
        biciSuperLeggera = bici;
    }
}

console.log("La bici più leggera è: ", biciSuperLeggera);

// ---------------- ES-6 ---------------------
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal:

let messaggio = document.getElementById("bici_leggera");

let {nome, peso} = biciSuperLeggera;

messaggio.innerHTML = `La bici da corsa più leggera è:
${nome}, del peso di soli ${peso} kg`;

