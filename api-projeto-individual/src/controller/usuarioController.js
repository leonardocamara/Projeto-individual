var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;


    if (nome == undefined) {
        res.status(400).send("Nome não informado :(");
    } else if (email == undefined) {
        res.status(400).send("Email não informado :(");
    } else {
        usuarioModel.cadastrar(nome, email,)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function interacao_big_bang(req, res) {
    var interacao_big = req.body.interacao_big;

   
        usuarioModel.interacao_big_bang(interacao_big)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

function interacao_buracos(req, res) {
    var interacao_buracos = req.body.interacao_buracos;

   
        usuarioModel.interacao_buracos(interacao_buracos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

function interacao_multiversos(req, res) {
    var interacao_multiversos = req.body.interacao_multiversos;

   
        usuarioModel.interacao_multiversos(interacao_multiversos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

function interacao_crunch(req, res) {
    var interacao_crunch = req.body.interacao_crunch;

   
        usuarioModel.interacao_crunch(interacao_crunch)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}
function comentar(req, res) {
    var nomeC = req.body.nomeC;
    var comentario = req.body.comentario;
    var nota = req.body.nota;

    if (nomeC == undefined) {
        res.status(400).send("Nome não informado :(");
    } else if (comentario == undefined) {
        res.status(400).send("Comentario não informado :(");
    } else if (nota == undefined) {
        res.status(400).send("Nota não informada :(");
    }else {
        usuarioModel.comentar(nomeC, comentario, nota)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o comentario! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listar,
    testar,
    interacao_big_bang,
    interacao_buracos,
    interacao_multiversos,
    interacao_crunch,
    comentar
}