let arregloNumeros = [51,10,50,-1,3,24]
let numMayor=0

for(let i=0;i< arregloNumeros.length;i++)
{
    if(numMayor<arregloNumeros[i])
    {
        numMayor=arregloNumeros[i]
    }
}

console.log(numMayor)