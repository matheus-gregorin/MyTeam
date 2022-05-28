var database = require("../database/config");

function buscarUltimasMedidas(idAquario,) {
    instrucaoSql = `select jogadores.nomeJogador, COUNT(usuarios.fk_jogador) as 'Favorito'
    from usuarios
    inner join jogadores
    on usuarios.fk_jogador = jogadores.idJogador WHERE FK_JOGADOR = ${idAquario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `select jogadores.nomeJogador, COUNT(usuarios.fk_jogador) as 'Favorito'
    from usuarios
    inner join jogadores
    on usuarios.fk_jogador = jogadores.idJogador WHERE FK_JOGADOR = ${idAquario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}