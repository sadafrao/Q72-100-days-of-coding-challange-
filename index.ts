// Q72
//Demonistrate block scope
{
    let blocklet = "visible inside the block";
    const blockconst = "visible inside the block";
    console.log(blocklet);
    console.log(blockconst);
}
try{
    console.log(blocklet);{
        
    }
    console.log(blockconst);
}
