let arreglo = [1, -1, 2, -2, 3, -5, 5, -7, 6, 10]
let positivo = 0

for(let i=0; i<arreglo.length; i++)
{
    if(arreglo[i]>0)
    {
        positivo++;
    }
}

console.log(positivo)