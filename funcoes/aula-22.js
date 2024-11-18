const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}




const aguardar = async () => {
    console.log('passou', 2 ** 2);
    const resultado = await aguardarComRetorno();
    console.log ('resultado', resultado)
    console.log('passou', 3 ** 3);
    console.log('passou', 4 ** 4);
    console.log('passou', 5 ** 5);

}   
aguardar();