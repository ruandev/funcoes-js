function fazerCafe() {
    console.log("Ferver água")
    console.log("Adicionar o café")
    console.log("Servir o café")
}

/** 
fazerCafe()
fazerCafe()
fazerCafe()
*/
function fazerCafeConformePedido(adicional) {
    console.log("Ferver água")
    console.log("Adicionar o café")
    console.log("Adicionar " + adicional)
    console.log("Servir o café")
}
/** 
fazerCafeConformePedido("leite")
fazerCafeConformePedido("baunilha")
*/
function fazerCafeECalcularOValor(adicional) {
    let valorDoCafe = 5

    if (adicional == "baunilha") {
        valorDoCafe = valorDoCafe + 1.50
    }

    fazerCafeConformePedido(adicional)
    return valorDoCafe
}

console.log(`O valor do café com leite é de R$ ${fazerCafeECalcularOValor("leite")}`)
console.log(`O valor do café com baunilha é de R$ ${fazerCafeECalcularOValor("baunilha")}`)
