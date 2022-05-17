create database site;
use site;

create table usuarios (
idUsuario int primary key auto_increment,
nomeUsuario varchar (25),
email varchar(50),
senha varchar (10),
fk_jogador int,
foreign key (fk_jogador) references jogadores(idJogador)
);

create table jogadores (
idJogador int primary key auto_increment,
nomeJogador varchar (45),
idade varchar (3),
posicao varchar (30),
dtInicio date,
golsTemp varchar (2),
assiTemp varchar (2),
numeroJogos varchar(5),
golsSofridos varchar(3)
);

create table conquistas (
fk_trofeu int,
foreign key (fk_trofeu) references trofeis(idTrofeu),
fk_jogador int,
foreign key (fk_jogador) references jogadores(idJogador),
dtConquista date
);

create table trofeis (
idTrofeu int primary key auto_increment,
nomeTitulo varchar (50)
);

select * from usuarios;
select * from jogadores;
select * from conquistas;
select * from trofeis;

#drop table jogadores;
#drop table usuarios;
#drop table conquistas;
#drop table trofeis;

insert into jogadores values (1, 'Cassio', '34', 'Goleiro', '2012-03-28', '0', '0', '585', '712');