// Evens and Odds - Create a function that accepts an array. Every time that array has three odd
// values in a row, print "That's odd!". Every time the array has three evens in a row, print 
// "Even more so!".

function evenOdds(arr) {
    var countEven = 0;
    var countOdd = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 == 0) {
            countOdd=0;
            countEven += 1;
            if (countEven == 3) {
                console.log('Even more so!');
                countEven -= 1;
            }
        }
        else if (arr[i] % 2 != 0) {
            countEven=0;
            countOdd += 1;
            if (countOdd == 3) {
                console.log("That's odd!");
                countOdd -= 1;
            }
        }
    }
}


evenOdds([22, 3, 3, 3, 4, 4, 4, 6, 6, 6, 3]);

// given an array, return the array with values reversed

// declare a function, accept an array
    // for loop; loop through the array
        // commence the value swap!
        // store a val in temp
        // reassign what was stored in temp
        // vise verse
    // return array

    function reverseArr(arr){
        for(let i=0; i<arr.length/2; i++){
            var temp = arr[i]
            arr[i]=arr[arr.length-1-i]
            arr[arr.length-1-i]=temp
        }
        return arr
    }
    
    console.log(reverseArr([1,2,3,4,5,6,7,8,9]))

// Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins.

// declaring a function, accepting an integer (cents)
// declare some variables for storage
// while loop
    // if greater than 100
        // add a dollar, subtract 100
    // else if greater than 50
        // add a half-dollar, subtract 50
    // else if greater than 25
        // add a quarter, subtract 25
    //...dimes, nickels, pennies
// return those variables

function coinChange(cents){
    var coins={
    dollar:0,
    halfDollar:0,
    quarter:0,
    dime:0,
    nickel:0,
    penny:0,
    }
    while(cents>0){
        if(cents>=100){
            coins.dollar++
            cents-=100
        }
        else if(cents>=50){
            coins.halfDollar++
            cents-=50
        }
        else if(cents>=25){
            coins.quarter++
            cents-=25
        }
        else if(cents>=10){
            coins.dime++
            cents-=10
        }
        else if(cents>=5){
            coins.nickel++
            cents-=5
        } else {
            coins.penny++
            cents-=1
        }
    }
    return coins
}

// var coin_result = coinChange(10223)

// for...in loop

// for (coin in coin_result){
//     if(coin_result[coin]>0){
//         console.log(`${coin} ${coin_result[coin]}`)
//     }
// }
