//? kendini tekrarlayan formüller....
const fibo = (n) => {
if (n<=0) {
    return 0
}else if(n===1||n===2){
    return 1
}else{
    return fibo(n - 1) + fibo(n - 2)
}

}
    const n = +prompt("Please enter n:")
    
    if (n <= 0){
        console.log("n should be bigger than zero")
    
    
    } else {console.log(`FIBONACCI(${n}) = ${fibo(n)}`)
    }
    


    
        