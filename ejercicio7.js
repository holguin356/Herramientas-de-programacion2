let cadena = "Ada LovElace"
let cadenaNueva = cadena.split("")
for (let i=0; i < cadenaNueva.length; i++)
{
    let letra=cadenaNueva[i];
    if(letra===cadenaNueva[i].toLowerCase())
    {
        letra=cadenaNueva[i].toUpperCase()
        cadenaNueva[i]=letra
        console.log(letra)
    } else 
    {
        letra=cadenaNueva[i].toLowerCase()
        cadenaNueva[i]=letra
        console.log(letra)
    }
}
console.log(cadena)
console.log(cadenaNueva)
