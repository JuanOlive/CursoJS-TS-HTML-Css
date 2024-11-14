const CONSUMO_AUTOMOVEL = 12;




function gastoCombustivel(tempoGasto, velociadeMedia) {
    const distancia = velociadeMedia * tempoGasto;
    const consumoFinal = distancia / CONSUMO_AUTOMOVEL;

    return consumoFinal.toFixed(3);
}