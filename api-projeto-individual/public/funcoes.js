
    window.onload = verificar_interacao_grafico();
    window.onload = carregarComentarios();

function verificar_interacao_grafico(idAquario) {


        fetch(`/medidas/ultimas/${idAquario}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();
                    console.log('a resposta retornou um valor, agora se chegou no gráfico ainda não sabemos');
                    plotarGrafico(resposta, idAquario);

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }
    
function plotarGrafico(resposta, idAquario) {
        console.log('iniciando plotagem do gráfico...');

        const coluna = {
            type: "bar",
            data: {
                labels: ["Big Bang", "Buracos Negros", "Multiversos", "Big Crunch"],
                datasets: [{
                    label: ["Análise conteúdo"],
                    data: [resposta[0].interacao_big, resposta[0].buracosNegros, resposta[0].multiversos, resposta[0].bigCrunch],
                    backgroundColor: ["#800000", "#003153", "#90ee90", "#d75413",],
                    color: "red",
                }
                ]
            },
            options: {
                labels: { color: "red" },
                maintainAspectRatio: false
            }

        }

        var myChartcolumn = new Chart(document.getElementById("grafico_coluna"), coluna);


    }
    
function interacao_big_bang() {
        var interacao_bigVar = 1;
        fetch("/usuarios/interacao_big_bang", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                interacao_big: interacao_bigVar,

            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("conteudo interativo");
                verificar_interacao_grafico();
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);

        });
    }
    
function interacao_buracos() {
        var interacao_buracosVar = 1;
        fetch("/usuarios/interacao_buracos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                interacao_buracos: interacao_buracosVar,

            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("conteudo interativo");
                verificar_interacao_grafico();
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);

        });
    }
    
function interacao_multiversos() {
        var interacao_multiversosVar = 1;
        fetch("/usuarios/interacao_multiversos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                interacao_multiversos: interacao_multiversosVar,

            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("conteudo interativo");
                verificar_interacao_grafico();
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);

        });
    }

function interacao_crunch() {
        var interacao_crunchVar = 1;
        fetch("/usuarios/interacao_crunch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                interacao_crunch: interacao_crunchVar,

            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log("conteudo interativo");
                verificar_interacao_grafico();
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);

        });
    }

function big_bang() {
        id_big_bang.style.display = "block";
        id_buraco_negro.style.display = "none";
        id_multiverso.style.display = "none";
        id_big_crunch.style.display = "none";
        seguinte_buraco_negro.style.display = "block";
        continuacao_big_bang.style.display = "none"
        continuacao_multiverso.style.display = "none";
        continuacao_crunch.style.display = "none";

    }
    
function buraco_negro() {
        id_buraco_negro.style.display = "block";
        id_big_bang.style.display = "none";
        id_multiverso.style.display = "none";
        id_big_crunch.style.display = "none";
        seguinte_buraco_negro.style.display = "none";
        continuacao_multiverso.style.display = "block";
        continuacao_crunch.style.display = "none";
        continuacao_big_bang.style.display = "none";
    }
    
function multiverso() {
        id_multiverso.style.display = "block";
        id_big_bang.style.display = "none";
        id_buraco_negro.style.display = "none";
        id_big_crunch.style.display = "none";
        continuacao_multiverso.style.display = "none";
        continuacao_crunch.style.display = "block";
        continuacao_big_bang.style.display = "none";
        seguinte_buraco_negro.style.display = "none";

    }
    
function Big_crunch() {
        id_big_crunch.style.display = "block";
        id_big_bang.style.display = "none";
        id_buraco_negro.style.display = "none";
        id_multiverso.style.display = "none";
        continuacao_crunch.style.display = "none";
        continuacao_big_bang.style.display = "block";
        seguinte_buraco_negro.style.display = "none";
        continuacao_multiverso.style.display = "none";
    }
    
function Cadastrando() {

        if (nome_input.value == "") {
            alert('Nome deve ser preenchido')
        } else if (email_input.value == "") {
            alert('Email deve ser preenchido')
        } else if (email_input.value.indexOf("@") == -1 || email_input.value.indexOf(".") == -1 || email_input.value.indexOf(" ") != -1) {
            alert('email incorreto')
        } else {

            var nomeVar = nome_input.value.toUpperCase();
            var emailVar = email_input.value.toLowerCase();

            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: nomeVar,
                    email: emailVar,

                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    alert("Cadastro realizado com sucesso!!");
                   
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });

            nome_input.value = "";
            email_input.value = "";

        }

    }

function Cadastrando_outro() {

if (nome_input1.value == "") {
    alert('Nome deve ser preenchido')
} else if (email_input1.value == "") {
    alert('Email deve ser preenchido')
} else if (email_input1.value.indexOf("@") == -1 || email_input1.value.indexOf(".") == -1 || email_input1.value.indexOf(" ") != -1) {
    alert('email incorreto')
} else {

    var nomeVar = nome_input1.value.toUpperCase();
    var emailVar = email_input1.value.toLowerCase();

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeVar,
            email: emailVar,

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!!");
            container_cadastro2.style.display = 'none';

            Comentar_verificando();

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    nome_input.value = "";
    email_input.value = "";

}

}

function Comentar_verificando(){

        var emailVar = id_email.value.toLowerCase();
       

        // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
        if (emailVar.value == "") {
            alert("Email não informado");
        } else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
            alert("Ops, e-mail inválido! Verifique e tente novamente.");
        } else {

        fetch("/usuarios/autenticar", {
            method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: emailVar,

                })
        }).then(function (resposta) {
            console.log("Estou no THEN do autenticar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idusuario;
                    
                    comentar();

                });

            } else {
                alert('É necessário cadastrar um email para comentar!')
                container_cadastro2.style.display = 'block';

            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    
    }
}

function comentar() {    
        if (id_comentario.value == "") {
            alert('Comentário não informado')
        } else if (id_nota.value == "") {
            alert('É necessário classificar o conteúdo')
        } else {

        var varNome = sessionStorage.EMAIL_USUARIO;
        var varComentario = id_comentario.value;
        var varNota = id_nota.value;
        var Varfkusuario = sessionStorage.ID_USUARIO;

        id_comentario.value = "";
        id_email.value = "";
        id_nota.value = "";

        fetch("/usuarios/comentar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    comentario: varComentario,
                    nota: varNota,
                    fk: Varfkusuario,


                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    window.alert("Comentário realizado com sucesso!!");
                    carregarComentarios();
                    sessionStorage.clear();
                } else {
                    throw ("Houve um erro ao tentar realizar o comentário");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });
    }
    }
    
function carregarComentarios(idComentario){
        
        fetch(`/medidas/comentarios/${idComentario}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();
                    console.log('a resposta retornou um valor, agora se carregou os comentarios vamos descobrir');
                    plotarComentarios(resposta, idComentario);
                    console.log(resposta, idComentario);

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ comentários: ${error.message}`);
            });

    }

function plotarComentarios(resposta, idComentario){
    impressao_comentario.style.display = "block"
    var contador = 0

    impressao_comentario.innerHTML = ``;
    while(contador < resposta.length){

        impressao_comentario.innerHTML += `
        <div id="comentario3" class="comentario_publicado_fixo">
        <img src="./imgs/foto-perfil.png" class="img_comentario_fixo">
            <div class="container_comentario_fixo_interno">
                <span class="texto_avaliacao_comentario_fixo"> Avaliou conteúdo como: <span>${resposta[contador].nota}</span> estrelas </span>
                <div type="text" class="nome_comentario">${resposta[contador].nome}</div>
                <div type="text" class="container_conteudo_comentario"> ${resposta[contador].texto}</div>
            </div>
            <div style="height: 120px;"></div>
        </div>
        `;
        contador++;

    }
    if(contador > 2) {
        document.getElementById('todos_os_comentarios').style.height= "500px";
    }
    if(contador > 3){
        document.getElementById('todos_os_comentarios').style.height= "650px";
    }
    if(contador > 4){
        document.getElementById('todos_os_comentarios').style.height= "700px";
    }
    if(contador > 5){
        document.getElementById('todos_os_comentarios').style.height= "850px";
    }
    if(contador > 6){
        document.getElementById('todos_os_comentarios').style.height= "900px";
    }
    if(contador > 8){
        document.getElementById('todos_os_comentarios').style.height= "950px";
    }
    if(contador > 10){
        document.getElementById('todos_os_comentarios').style.height= "1200px";
    }    


}


