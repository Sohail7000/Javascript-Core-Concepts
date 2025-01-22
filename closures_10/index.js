// function makeFunc(){
//     const name = "Sohail";
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }
// const getFunc = makeFunc();
// getFunc();

// fucntion along with it;s lexical scope is called closure

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//    return y;
// };
// var z = x();
// z();
// console.log(z);


// eg 2
function z(){
    var b =100;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y()
    };
    x();
}
z();

//Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting