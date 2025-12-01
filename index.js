// 1) Quali sono i tipi primitivi principali in TypeScript?
// 1) I tipi primitivi di Typescript sono:
// - string
// - number
// - boolean
// - null
// - undefined 
// - any 
// - never 
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = "Salvatore";
var myAge = 34;
var learnTypescript = true;
// 3) Tipizza il parametro della seguente funzione:
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Salvatore") + " come stai ?");
// 4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) { return a + b; };
sum(7, 4);
//il ritorno della funzione sum dovrà essere per forza un number perchè abbiamo dato ad
// a e b come tipizzazione: number
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var iva = function (a) {
    return a + (a * 22) / 100;
};
console.log(iva(50));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatString = function (a, b) {
    return a + b;
};
console.log(concatString("ciao ", "Salvatore").length);
// 7) Cos'è un Type Union e come si scrive?
// Type Union serve a dare più tipizzazione al fine di avere una variabile modellabile o fissa
var myVariable;
myVariable = "Ciao";
myVariable = 34;
myVariable = true;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var myVariable2;
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
var giorno;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
var numbers3 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla = ["Ciao", "Clark", "Kent", 34, 3];
//ESEMPIO
var studenti = [
    { nome: "Salvatore",
        voto: 10
    }
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var cars = {
    ruote: 4,
    motore: "benzina",
    numbOfPassengers: 5,
    modelOfCars: "Audi"
};
// 18) Cosa sono i Generics in TypeScript?
// Un GENERICS possiamo vederlo come un PARAMETRO delle funzioni, sono ARGOMENTI per le interfacce
// servono per renderle più versatili
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.  
