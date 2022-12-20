/*ajouter */
function add(number1, number2){
    return number1 + number2
}
/*soustraire */
function remove(number1, number2){
    return number1 - number2
}
/*multiplier */
function multiplication(number1, number2){
    return number1 * number2
}
/*diviser */
function diviser(number1, number2){
    return number1/number2
}
/*fonction qui s'adapte */
function operate(number1, number2, operateur){
    if (operateur=="+"){
        return add(number1, number2)
    }
    if (operateur=="-"){
        return remove(number1, number2)
    }
    if (operateur=="*"){
        return multiplication(number1, number2)
    }
    if (operateur=="/"){
        if (number1 == number2 == 0){return "Are you serious ?"
    }else{
        return diviser(number1, number2)}
    }
}
/*change the content of the containershow */
const containershow = document.querySelector("#afficher")
function changeshow(number1="", action="", number2="", resultat=""){
    if (resultat.length === 0){
        containershow.textContent = `${number1} ${action} ${number2}`
    }else{containershow.textContent = `${resultat}${action}`}
}
/*get the entry of the button */
/*zero the value */
let show = "";
let nb1 = "";
let nb2 = "";
let operateur = "";
let resultat ;
/*one the number */
const nine = document.querySelector("#nine")
const height = document.querySelector("#height")
const seven = document.querySelector("#seven")
const six = document.querySelector("#six")
const five = document.querySelector("#five")
const four = document.querySelector("#four")
const three = document.querySelector("#three")
const two = document.querySelector("#two")
const one = document.querySelector("#one")
const zero = document.querySelector("#zero")
/*two the operator */
const plus = document.querySelector("#plus")
const moin = document.querySelector("#moin")
const divise = document.querySelector("#divise")
const multiplie = document.querySelector("#multiplie")
const egal = document.querySelector("#egal")
const point = document.querySelector("#point")
/*three add even listener */
nine.addEventListener('click', () =>{
    show = `${show}9`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
height.addEventListener('click', () =>{
    show = `${show}8`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
seven.addEventListener('click', () =>{
    show = `${show}7`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
six.addEventListener('click', () =>{
    show = `${show}6`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
five.addEventListener('click', () =>{
    show = `${show}5`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
four.addEventListener('click', () =>{
    show = `${show}4`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
three.addEventListener('click', () =>{
    show = `${show}3`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
two.addEventListener('click', () =>{
    show = `${show}2`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
one.addEventListener('click', () =>{
    show = `${show}1`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
zero.addEventListener('click', () =>{
    show = `${show}0`
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
point.addEventListener('click', () =>{
    if (!show.includes(".")){
        show = `${show}.`
        changeshow(show)
    }
    if(nb1===""){
        changeshow(show, operateur)
    }else{changeshow(nb1, operateur, show)}
})
plus.addEventListener('click', () =>{
    if(operateur==""){
        operateur = "+";
        nb1 = show
        show = ""
        changeshow(nb1, operateur);
    }else{
        changeshow("","","+",operate(Number(nb1), Number(show), operateur))
        nb1 = `${operate(Number(nb1), Number(show), operateur)}`
        show = ""
        operateur = "+"
    }
})
moin.addEventListener('click', () =>{
    if(operateur==""){
        operateur = "-";
        nb1 = show
        show = ""
        changeshow(nb1, operateur);
    }else {
        changeshow("","","-",operate(Number(nb1), Number(show), operateur))
        nb1 = `${operate(Number(nb1), Number(show), operateur)}`
        show = ""
        operateur = "-"
    }
})
divise.addEventListener('click', () =>{
    if(operateur==""){
        operateur = "/";
        nb1 = show
        show = ""
        changeshow(nb1, operateur);
    }else{
        changeshow("","","/",operate(Number(nb1), Number(show), operateur))
        nb1 = `${operate(Number(nb1), Number(show), operateur)}`
        show = ""
        operateur = "/"
    }
})
multiplie.addEventListener('click', () =>{
    if(operateur==""){
        operateur = "*";
        nb1 = show
        show = ""
        changeshow(nb1, operateur);
    }else{
        changeshow("","","*",operate(Number(nb1), Number(show), operateur))
        nb1 = `${operate(Number(nb1), Number(show), operateur)}`
        show = ""
        operateur = "*"
    }
})
egal.addEventListener('click', ()=>{
    if (operateur=="" ){
        return
    }else if (!operateur=="" && show==""){
        return
    }else if (!operateur=="" && !show==""){
        changeshow("","","",operate(Number(nb1), Number(show), operateur))
        show = `${operate(Number(nb1), Number(show), operateur)}`
        nb1 = ""
        operateur = ""
    }
})

/*delete and remove */
const deleted = document.querySelector("#delete")
const removed = document.querySelector("#remove")
deleted.addEventListener('click', () =>{
    nb1 = ""
    operateur = ""
    show = ""
    changeshow("","","","")
})
removed.addEventListener('click', () =>{
    show  = show.substring(0,show.length-1)
    if (operateur == ""){
        changeshow(show)
    }else{changeshow(nb1, operateur, show)}
})