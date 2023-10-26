// function splitting(number) {
//     number = number.toString()
//     const arr = []
//     let result
//     for (let i = 0; i < arr.length; i++) {
//            arr.push(arr(i))


//     }
//     return arr;
// }

// console.log(splitting(3251));

// task 13
// function Max(...params) {
//     let num=0
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]>num) {
//             num=params[i]
//         }

//     }
//     return num;
// }

// console.log(Max(3124124,12,543,21,412,315,32,5123));

// task 14

// task 13
// function Min(...params) {
//     let num=params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]<num) {
//             num=params[i]
//         }

//     }
//     return num;
// }

// console.log(Min(3124124,12,543,21,412,315,32,5123));

// task 15 


// task 16 
// function Dividers(number) {
//     let dividenum=0
//     const arr=[]
//     for (let i = 0; i < number; i++) {
//         if (number%i===0) {
//             arr.push(i)
//         }

//     }
//     return arr;
// }
// console.log(Dividers(324));

// task 17

// function Dividers(number) {
//     let dividenum=0
//     const arr=[]
//     for (let i = 0; i < number; i++) {
//         if (number%i===0) {
//             dividenum++
//         }

//     }
//     return dividenum;
// }
// console.log(Dividers(324));

// task 18

// function Divide(number) {
//     let sum=1
//     let multiply=1
//     for (let i = 0; i < number; i++) {
//         if (number%i===0) {
//             multiply*=i
//             sum+=i
//             console.log(multiply);
//             console.log(sum);


//         }

//     }
//     return [multiply, sum];
// }
// console.log(Divide(16));

// task 20 

function FindPrimeComposite(...params) {
    let check = 0
    let prime = 0
    let composite = 0 
    for (let i = 0; i < params.length; i++) {
        for (let j = 2; j < params[i].length; j++) {
            if (number % i === 0) {
                check++
                if (check === 2) {
                    prime++
                }
                else {
                    composite++
                }
                
            }
            
        }
        
    }
    return [prime];
}
console.log(FindPrimeComposite(3,7,234,123,11,17,9));