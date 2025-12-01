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
const  myName: string = "Salvatore"
const myAge: number = 34
const learnTypescript: boolean = true


// 3) Tipizza il parametro della seguente funzione:

const greet = (name: string) => { 
     return "Ciao " + name 
    }
console.log(greet("Salvatore")+ " come stai ?")
// 4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number) => {  return a + b }
sum(7, 4)
//il ritorno della funzione sum dovrà essere per forza un number perchè abbiamo dato ad
// a e b come tipizzazione: number

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const iva = (a: number):number  => {
    return a + (a * 22) / 100 
}
console.log(iva(50))


// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const concatString = (a: string, b:string) => {
    return a + b
}
console.log(concatString("ciao ","Salvatore").length)


// 7) Cos'è un Type Union e come si scrive?
// Type Union serve a dare più tipizzazione al fine di avere una variabile modellabile o fissa
let myVariable: string | number | boolean
myVariable = "Ciao"
myVariable = 34
myVariable = true


// 8) Crea una variabile che possa contenere un numero, null o undefined.
let myVariable2: number | null | undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
let giorno: "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica"


// 10) Tipizza il seguente array di numeri nei due modi possibili:

const numbers = [1, 2, 3]
const numbers2: Array<number> = [1, 2, 3]
const numbers3: number[] = [1, 2, 3]


// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const tupla: [string, string, string, number, number] = ["Ciao", "Clark", "Kent", 34, 3]


// 12) Qual è la differenza tra type e interface?
// Con una Type dichiariamo la tipizzazione della nostra eventuale variabile
// Con le Interface a differenza dei Type possiamo estenderle e modificarle successivamente
// per creare nuovi oggetti con valori e chiavi aggiuntivi



// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface NewPerson {
    firstName: string
    lastName: string
    age: number 
}


// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface user {
    email: string 
    phone?: number
}


// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
type studente = {
    nome: string
    voto: number 
}
//ESEMPIO
const studenti: studente[] = [
{nome: "Salvatore",
 voto: 10   
}
]


// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
    ruote: tnumber
    motore: string
    numbOfPassengers: number
}

interface Auto extends Veicolo {
    modelOfCars: string
}


// 17) Crea un oggetto che implementi l'interfaccia Auto.
const cars: Auto = {
    ruote: 4,
    motore: "benzina", 
    numbOfPassengers: 5,
    modelOfCars: "Audi"
}


// 18) Cosa sono i Generics in TypeScript?
// Un GENERICS possiamo vederlo come un PARAMETRO delle funzioni, sono ARGOMENTI per le interfacce
// servono per renderle più versatili

// 19) È possibile avere più tipi generici in un'interfaccia?
// Si, è possibile avere più tipi GENERICS per rendere le nostre interfacce più versatili come detto prima 



// 20) Crea un'interfaccia generica per una risposta API.
interface users<A> {
    name: string
    lastName: string
    id: string | number
    city: string
    phone: number
    cap: number 
}
