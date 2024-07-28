let home=0;
let guest=0;
let homescelement=Array.from(document.getElementsByClassName('score'))[0];
let guestscelement=Array.from(document.getElementsByClassName('score'))[1];
homescelement.textContent=home;
guestscelement.textContent=guest;
function increment1home(){
    home+=1;
    homescelement.textContent=home;
}
function increment2home(){
    home+=2;
    homescelement.textContent=home;
}
function increment3home(){
    home+=3;
    homescelement.textContent=home;
}
function increment1guest(){
    guest+=1;
    guestscelement.textContent=guest;
}
function increment2guest(){
    guest+=2;
    guestscelement.textContent=guest;
}
function increment3guest(){
    guest+=3;
    guestscelement.textContent=guest;
}
function reset(){
    home=0;
    guest=0;
    homescelement.textContent=home;
    guestscelement.textContent=guest;
}