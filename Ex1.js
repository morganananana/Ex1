function calculadora(anoNascimento, paisReferencia, anoReferencia =  new Date().getFullYear()) {
    //fazer switch
    const idade = anoReferencia - anoNascimento;
    //let podeBeber = false;

    if (paisReferencia == 'Brasil' && idade >= 18) {
        //podeBeber = true;
        return true;
    }
    if (paisReferencia == 'Japao' && idade >= 19) {
        //podeBeber = true;
        return true;
    }
    if (paisReferencia == 'EUA' && idade >= 21) {
        //podeBeber = true;
        return true;
    }
    return false;
    //return podeBeber;
}
console.log(calculadora(2005, 'Brasil', 2023));
console.log(calculadora(2005, 'Japao'));
console.log(calculadora(2002, 'EUA', 2023));