function ifeven(mass){
    let even = 0;
    let uneven = 0;
    let zeroes = 0;
    for(let i = 0; i < mass.length; i++){
        let j = +mass[i];
        if (!Number.isNaN(j)){
            if(j === 0){
                zeroes += 1;} 
            else if((j % 2) === 0){
                even += 1;} 
            else{
                uneven += 1;}
        }
    }
    return(`В массиве ${even} четных, ${uneven} нечетных и ${zeroes} нулевых значений.`)
}