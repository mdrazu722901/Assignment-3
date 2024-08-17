//1 1 2 3 5 8 13 21 34 55

//normal way...............................................
// var fiboSeries = [1, 1];
// for(var i = 2; i<=10; i++){
//     fiboSeries[i] = fiboSeries[i-1] + fiboSeries[i-2];
// }
// console.log(fiboSeries);

//Iterative way.............................................
// function fibonacciSeries(Number){
//     var fibonacciArray = [1, 1];
//     for(var i = 2; i <= Number; i++){
//         // fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
//         var nextFibo = fibonacciArray[i -1 ] + fibonacciArray[i-2];
//         fibonacciArray.push(nextFibo);
//      }
//      return fibonacciArray;
// }
// var result = fibonacciSeries(0);
// console.log(result);

//Recursive Way.............................................

function fibonacciRecursive(num){
    if(num == 0){
        return [0];
    }
    else if(num == 1){
        return [1,1];
        console.log("show in")
    }
    else{
        var fibo = fibonacciRecursive(num -1);
        var nextFibo = fibo[num - 1] + fibo[num - 2];
        fibo.push(nextFibo);
        return(fibo); 
    }

}
var result = fibonacciRecursive(5);
console.log(result);