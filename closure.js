function doMath()
{
    var a=5;
    var b=5;
    function multiply()
    {
        return a*b;
    }
    return multiply;
}

var res=doMath();
console.log("The result is : "+res());
