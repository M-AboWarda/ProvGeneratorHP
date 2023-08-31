/**
you can add more details
    {
    //display with questions
    img: "imgs/exemple.jpg",//add image
    quesDescription: "hello from description section",//add description
    
    //display when submit
    explanation: "the question had nothing to do with the photo",//add expanation
    }
*/

/*--
    to solve the problem
    write a new variable as a selector exemple ord instted of questions
    and xyz the same....
    
--*/
var xyz = [
    {
        question:"1+1",
        img:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
        quesDescription: "det är så enkelt.",
        answers: {
            a:"2",
            b:"5",
            c:"a och b"
        },
        correctAnswer:"a"
    },
    {
        question:"1+1",
        img:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
        quesDescription: "det är så enkelt.",
        answers: {
            a:"2",
            b:"5",
            c:"a och b"
        },
        correctAnswer:"a"
    },
    {
        question:"5*7",
        answers: {
            a:"30",
            b:"40",
            c:"35",
            d:"mellan a och c"
        },
        correctAnswer:"c"
    },
    {
        question:"5*7",
        answers: {
            a:"30",
            b:"40",
            c:"35",
            d:"mellan a och c"
        },
        correctAnswer:"c"
    },
    {
        question:"5!",
        answers: {
            a:"5^5",
            b:"5+4+3+2+1",
            c:"5*5+4*4+3*3+2*2+1*1",
            d:"5*4*3*2*1",
            e:"ingen av de"
        },
        correctAnswer:"d"
    },
    {
        question:"test",
        answers: {
            a:"vad menar du?!",
            b:"test",
            c:"motivera",
            d:"jag vet inte",
            e:"kom igen!"
        },
        correctAnswer:"b"
    },
    {
        question:"5!",
        answers: {
            a:"5^5",
            b:"5+4+3+2+1",
            c:"5*5+4*4+3*3+2*2+1*1",
            d:"5*4*3*2*1",
            e:"ingen av de"
        },
        correctAnswer:"d"
    },
    {
        question:"test",
        answers: {
            a:"vad menar du?!",
            b:"test",
            c:"motivera",
            d:"jag vet inte",
            e:"kom igen!"
        },
        correctAnswer:"b"
    },
    {
        question:"distinkt",
        answers: {
            a:"menar du 5*5",
            b:"livet är svårt",
            c:"grundligt",
            d:"lol",
            e:"OMG"
        },
        correctAnswer:"d"
    },
    {
        question:"distinkt",
        answers: {
            a:"menar du 5*5",
            b:"livet är svårt",
            c:"grundligt",
            d:"lol",
            e:"OMG"
        },
        correctAnswer:"d"
    }
];
var ord = [
    {
        question:"anspråk",
        img:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
        quesDescription: "är det en fin bild?",
        answers: {
            a:"orderee",
            b:"beslut",
            c:"krav"
        },
        correctAnswer:"c"
    },
    {
        question:"anspråk",
        answers: {
            a:"orderee",
            b:"beslut",
            c:"krav",
            d:"bevis",
            e:"ursäkt"
        },
        correctAnswer:"c"
    },
    {
        question:"varsko",
        answers: {
            a:"upptäcka",
            b:"beklaga",
            c:"förvarna",
            d:"inbilla",
            e:"bevara"
        },
        correctAnswer:"c"
    },
    {
        question:"borga for",
        answers: {
            a:"besluta",
            b:"garantera",
            c:"motivera",
            d:"bevaka",
            e:"förbereda"
        },
        correctAnswer:"b"
    },
    {
        question:"distinkt",
        answers: {
            a:"tydligt",
            b:"genast",
            c:"grundligt",
            d:"snabbt",
            e:"taktfast"
        },
        correctAnswer:"a"
    },
    {
        question:"fristad",
        answers: {
            a:"mötesplats",
            b:"tillflyktsort",
            c:"sktteparadis",
            d:"helig plats",
            e:"ingenmansland"
        },
        correctAnswer:"b"
    },
    {
        question:"glorifiera",
        answers: {
            a:"överglansa",
            b:"frälsa",
            c:"upplysa",
            d:"förhärliga",
            e:"högakta"
        },
        correctAnswer:"d"
    },
    {
        question:"racka ner på",
        answers: {
            a:"underskatta",
            b:"bryta ner",
            c:"kritisera",
            d:"baktala",
            e:"förkasta"
        },
        correctAnswer:"c"
    },
    {
        question:"fjording",
        answers: {
            a:"vagnstyp",
            b:"fjälttopp",
            c:"hästras",
            d:"gummibåt",
            e:"insjö"
        },
        correctAnswer:"c"
    },
    {
        question:"decimera",
        answers: {
            a:"dela",
            b:"minska",
            c:"tillägna",
            d:"lämna",
            e:"förgöra"
        },
        correctAnswer:"b"
    },
    {
        question:"i gemen ",
        answers: {
            a:"i synnerhet",
            b:"i vissa fall",
            c:"i sällsynta fall",
            d:"i detta fall",
            e:"i allmänhet"
        },
        correctAnswer:"e"
    },
    {
        question:"sona",
        answers: {
            a:"plågas",
            b:"hämnas",
            c:"ångra",
            d:"trösta",
            e:"gottgöra"
        },
        correctAnswer:"e"
    },
    {
        question:"perforering",
        answers: { 
            a:"rutmönster",
            b:"hålrad",
            c:"klisterremsa",
            d:"mittlinje",
            e:"pappersveck"
        },
        correctAnswer:"b"
    },
    {
        question:"stötesten",
        answers: {
            a:"risk",
            b:"tvång",
            c:"överdrift",
            d:"motsägelse",
            e:"svårighet"
        },
        correctAnswer:"e"
    },
    {
        question:"koordinera",
        answers: {
            a:"samarbeta",
            b:"sammanställa",
            c:"räkna samman",
            d:"sammanfoga",
            e:"samordna"
        },
        correctAnswer:"e"
    },
    {
        question:"relativt",
        answers: {
            a:"mestadels",
            b:"nästintill",
            c:"delvis",
            d:"förmodligen",
            e:"jämförelsevis"
        },
        correctAnswer:"e"
    },
    {
        question:"eftersatt",
        answers: {
            a:"ofördelaktig",
            b:"bedräglig",
            c:"svår",
            d:"försummad",
            e:"tilfällig"
        },
        correctAnswer:"d"
    },
    {
        question:"pudelnskärna",
        answers: {
            a:"en svårlöst gåta",
            b:"den verkliga innebörden",
            c:"en väl bevarad hemlighet",
            d:"den inre drivkraften",
            e:"en engagerande fråga"
        },
        correctAnswer:"b"
    },
    {
        question:"unison",
        answers: {
            a:"inåtvänd",
            b:"enkel",
            c:"ensidig",
            d:"enstämmig",
            e:"sällsynt"
        },
        correctAnswer:"d"
    },
    {
        question:"legislativ",
        answers: {
            a:"som rör medborgarna",
            b:"som rör maktfördelning",
            c:"som rör utbildning",
            d:"som rör tjänstesektorn",
            e:"som rör lagstiftning"
        },
        correctAnswer:"e"
    },
    {
        question:"burlesk",
        answers: {
            a:"opålitlig",
            b:"poetiskt skön",
            c:"färggrann",
            d:"grovt komisk",
            e:"ovanlig"
        },
        correctAnswer:"d"
    },
    {
        question:"nobless",
        answers: {
            a:"smyckeskrin",
            b:"påkostad bal",
            c:"social elit",
            d:"överdådig måltid",
            e:"aftonklänning"
        },
        correctAnswer:"c"
    }
];
