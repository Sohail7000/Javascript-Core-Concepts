// function x(){
//     for(let i =1 ; i<=5 ; i++){
//         setTimeout(function (){
//             console.log(i);
//         },i*1000); 
//     }
//     // setTimeout(function (){
//     //     console.log(i);
//     // },1000); 
//     // console.log(i);
// }
// x();

// 1,2,3 every 5 seconds


// Things learned:
// 1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.
// 2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown.
// 3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure.



// with var
function x(){
    for(var i =1 ; i<=5 ; i++){
        function close(x){
            setTimeout(function (){
                console.log(x);
            }, x * 1000); 
        }
        close(i);
    }
    console.log("Namaste Javascript")
}
x();