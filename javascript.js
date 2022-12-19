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
        return diviser(number1, number2)
    }
}