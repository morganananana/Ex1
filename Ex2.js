function desconto(valorCompra, convenio, cartaoLoja) {
    let desc = 0;
    if (cartaoLoja && convenio) {
        desc = valorCompra * 0.15;
        if (desc > 100) {
            desc = 100;
        }
    }
    if (convenio || cartaoLoja) {
        desc = valorCompra * 0.10;
        if (desc > 100) {
            desc = 100;
        }

    }

    return valorCompra - desc;
}
console.log(desconto(200, false, true));
console.log(desconto(200, true, true));
console.log(desconto(200, true, false));
console.log(desconto(200, false, false));