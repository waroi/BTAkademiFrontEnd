
const WordPool = [
    {
        description: "buyugun zit anlamlisi",
        word: "KUCUK"
    },
    {
        description: "Beyaz es anlamlisi ",
        word: "AK"
    },
    {
        description: "kapi ne ile acilir",
        word: "ANAHTAR"
    },
    {
        description: "Gunes Tanrisi",
        word: "RA"
    },
    {
        description: "Akim  birimi",
        word: "AMPER"
    }
];

function kelimeSec() {
    const random = Math.round(Math.random() * (WordPool.length - 1));

    return WordPool[random];
}

const generetedWord = kelimeSec();