function soma(a,b){
    return a+b
}

function subtr(a,b){
    return a-b
}

function div(a,b){
    return a/b
}

function multi(a,b){
    return a*b
}

function decisao(resp, pri, seg){
    if(resp == 1){
        resultado = soma(pri,seg)
        document.write("<p> A soma é "+ resultado)
    }

    if(resp == 2){
        resultado = subtr(pri,seg)
        document.write("<p> A subritação é "+ resultado)
    }
    
    if(resp == 3){
        resultado = div(pri,seg)
        document.write("<p> A divisão é "+ resultado)  
    }

    if(resp == 4){
        resultado = multi(pri,seg)
        document.write("<p> A multiplicação é "+ resultado)
    }

}