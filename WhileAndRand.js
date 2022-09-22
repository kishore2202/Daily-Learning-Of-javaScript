//Example for while loop and for rand
let t=Math.floor(Math.random()*10);
let g=Math.floor(Math.random()*10);
while(t!==g)
{
    g=Math.floor(Math.random()*10);
}
console.log('Total',t,'Guess',g);
