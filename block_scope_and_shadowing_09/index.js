// let b =100;
// function x(){
//     var a =10;
//     let b = 20;
//     const c = 30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// x();
// console.log(b);


// illegal shadowing
// let d =10;
// {
//     var d = 20;
// }

// // this is legal
// var e = 20;
// {
//     let e = 30;
// }

// let and const are block scoped


const a = 10;
{
    const a = 20;
    {
        const a = 30;
        console.log(a);
    }
}



// Notes
// Things learned:
// 1. Code inside curly bracket is called block.
// 2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
// 3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
// 4. Shadowing of variables using var, let and const.
// 5. The shadow should not cross the scope of original otherwise it will give error.
// 6. shadowing let with var is illegal shadowing and gives error.
// 7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.