var database = require("../database/config");


function buscarUltimasMedidas(idAquario,) {
    instrucaoSql = `select jogadores.nomeJogador, COUNT(usuarios.fk_jogador) as 'Favorito'
    from usuarios
    inner join jogadores
    on usuarios.fk_jogador = jogadores.idJogador group by fk_jogador;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

var buscar = 1

function buscarMedidasEmTempoReal(idAquario) {

    if ( buscar <= 13) {
    
    instrucaoSql = `select jogadores.nomeJogador, COUNT(usuarios.fk_jogador) as 'Favorito'
    from usuarios
    inner join jogadores
    on usuarios.fk_jogador = jogadores.idJogador where fk_jogador = ${buscar};`;

    buscar +=1


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

   } else if (buscar >= 14) {

    instrucaoSql = `select jogadores.nomeJogador, COUNT(usuarios.fk_jogador) as 'Favorito'
    from usuarios
    inner join jogadores
    on usuarios.fk_jogador = jogadores.idJogador where fk_jogador = ${buscar};`;

     buscar = 1

   }
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}