function par_impar (numero){
    if(numero % 2 === 0){
        return "Es par";
    }
    else{
        return"Es impar"
    }
}
const num = 8
console.log(num + " " + par_impar(num))
    