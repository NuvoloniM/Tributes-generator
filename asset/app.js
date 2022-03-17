let cognomi = ["Arpa","Ayadi","Bellucci","Biga","Borriello","Calia","Carbone","Carluccio","De Stefano","Di Benedetto","Di Pietro","Fergag","Fonzi","Magni","Maiorchini","Melotti","Moccia","Nifosi","Nocilla","Nuvoloni","Pavone","Pintaldi","Piva","Pontillo","Rosellini","Saputo","Spadaro","Sprinceana","Toselli","Wachnicki","Zaino","Natoli"]
let nomi = ["Modestino", "Abdelhamid" ,"Andrea","Alberto","Vincenzo","Gerardo" ,"Luca","Tancredi","Valentino","Ludovica","Davide","Nizar","Alessandro","Gabriele" ,"Stefano","Angelo","Caterina","Sergio","Clara","Matteo","Simone" ,"Noemi","Roberto","Andrea","Andrea","Simone" ,"Samuele" ,"Vera","Ivan","Michael","Simone Luca","Francesco"];


let list = [];

let i = 0;

while (i < nomi.length) {
    let listNomi = nomi[i] + " " + cognomi[i];
    list.push(listNomi);
    i++;
}

let btn = document.getElementById('btn');
let tributo = document.getElementById('tributo');
let img = document.getElementById('img');
let reset = document.getElementById('btn_reset');

btn.addEventListener("click", select);
btn.addEventListener("click", show);
reset.addEventListener("click",reload);

function select() {
    let random = Math.floor(Math.random() * list.length);
    let unluky = list[random]; 
    tributo.innerHTML = `Il tributo per il distretto 58 è ${unluky}`;
}

function show() {
    img.className = "d-block";
    reset.className += "d-block";
}

function reload() {
    window.location.reload();
}
