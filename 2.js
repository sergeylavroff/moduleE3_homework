//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
//Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

let number = prompt("Введите число от 0 до 1000.")

function checkSimpleNumber(number){
    number = +number
    if (number > 1000){
        return("Данные не верны!")
    }
    else if(Number.isNaN(number)){
        return("Данные не верны!")
    }
    switch(number){
        case 0:
            return("Ноль не является простым числом.");
            break
        case 1:
            return("Единица не простое число.");
            break
        default:
            for(let i = 2; i < number; i++){
                if(number%i===0){
                    return(`Число ${number} не является простым.`)
                }
            }
            return(`Число ${number} простое!`)
    }
}

alert(checkSimpleNumber(number))