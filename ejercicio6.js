let array = [25, 30, 28, 32, 29, 27]
let numMayor=0

for(let i=0;i< array.length;i++)
{
    if(numMayor<array[i])
    {
        numMayor=array[i]
    }
}

console.log(numMayor)