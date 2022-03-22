database(`CREATE TABLE IF NOT EXISTS RESPONSAVEL (
    CODIGO INTEGER AUTO INCREMENT PRIMARY KEY,
    CPF CHAR(11) NOT NULL,
    NOME_COMPLETO VARCHAR(100) NOT NULL, 
    TELEFONE CHAR(11) NOT NULL
    )`).then(result => {

    console.log('TABELA RESPONSAVEL CRIADA COM SUCESSO!');
}).catch(erro => {
    console.log('TABELA COM ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS ENDERECO (
        CODIGO INTEGER AUTO INCREMENT PRIMARY KEY,
        PAIS VARCHAR(45) NOT NULL,
        ESTADO VARCHAR(45) NOT NULL,
        CIDADE VARCHAR(60) NOT NULL,
        BAIRRO VARCHAR(60) NOT NULL,
        RUA VARCHAR(60) NOT NULL,
        NUMERO INTEGER
        )`).then(result => {

    console.log('TABELA ENDERECO CRIADA COM SUCESSO!');
}).catch(erro => {
    console.log('TABELA COM ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS LOGIN( 
        EMAIL VARCHAR(100) NOT NULL PRIMARY KEY,
        SENHA VARCHAR(50) NOT NULL
        )`).then(result => {

    console.log('TABELA LOGIN CRIADA COM SUCESSO!');
}).catch(erro => {
    console.log('TABELA COM ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS EMPRESA (
        CNPJ CHAR(14) PRIMARY KEY,
        RAZAO_SOCIAL VARCHAR(100) ,
        EMAIL VARCHAR(100) NOT NULL,
        TELEFONE CHAR(11) ,
        CODIGO_RESPONSAVEL INTEGER,
        CODIGO_ENDERECO INTEGER,
        SENHA VARCHAR(20) NOT NULL
        )`).then(result => {

    console.log('TABELA EMPRESA CRIADA COM SUCESSO!');
}).catch(erro => {
    console.log('TABELA COM ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS GASTOS (
        CODIGO INTEGER AUTO INCREMENT PRIMARY KEY,
        NF VARCHAR(20) NOT NULL,
        VALOR DOUBLE NOT NULL,
        DATA CHAR(8) NOT NULL,
        CODIGO_EMPRESA INTEGER NOT NULL
        )`).then(result => {

    console.log('TABELA GASTOS CRIADA COM SUCESSO!');
}).catch(erro => {
    console.log('TABELA COM ERRO!');
});