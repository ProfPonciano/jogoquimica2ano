/* =========================================================
   O Reino do Equilíbrio
   CINÉTICA + EQUILÍBRIO
   15 regiões × 3 desafios = 45 desafios

   IMPORTANTE:
   As coordenadas do mapa original NÃO foram alteradas.
   ========================================================= */


/* =========================================================
   ELEMENTOS DA INTERFACE
   ========================================================= */

const telaInicial = document.querySelector("#telaInicial");
const telaJogo = document.querySelector("#telaJogo");
const telaUltimaChance = document.querySelector("#telaUltimaChance");
const telaDerrota = document.querySelector("#telaDerrota");
const telaPortal = document.querySelector("#telaPortal");
const telaFinal = document.querySelector("#telaFinal");

const botaoIniciar = document.querySelector("#botaoIniciar");
const botaoConfirmar = document.querySelector("#botaoConfirmar");
const botaoContinuar = document.querySelector("#botaoContinuar");
const botaoRecuperacao = document.querySelector("#botaoRecuperacao");
const botaoAbrirPortal = document.querySelector("#botaoAbrirPortal");
const botaoReiniciar = document.querySelector("#botaoReiniciar");

const jogador = document.querySelector("#jogador");
const entropia = document.querySelector("#entropia");
const efeitoVisual = document.querySelector("#efeitoVisual");

const localAtual = document.querySelector("#localAtual");
const textoNarrativa = document.querySelector("#textoNarrativa");

const tituloNivel = document.querySelector("#tituloNivel");
const pergunta = document.querySelector("#pergunta");
const alternativas = document.querySelector("#alternativas");

const cardDesafio = document.querySelector("#cardDesafio");

const resultadoTitulo = document.querySelector("#resultadoTitulo");
const resultadoTexto = document.querySelector("#resultadoTexto");
const fragmentoEncontrado = document.querySelector("#fragmentoEncontrado");

const fragmentosElemento = document.querySelector("#fragmentos");

const indicadorDificuldade =
    document.querySelector("#indicadorDificuldade");

const perguntaRecuperacao =
    document.querySelector("#perguntaRecuperacao");

const alternativasRecuperacao =
    document.querySelector("#alternativasRecuperacao");

const campoSenha =
    document.querySelector("#campoSenha");

const senhaReferencia =
    document.querySelector("#senhaReferencia");

const comparacaoSenha =
    document.querySelector("#comparacaoSenha");

const mensagemPortal =
    document.querySelector("#mensagemPortal");

const tituloFinal =
    document.querySelector("#tituloFinal");

const textoFinal =
    document.querySelector("#textoFinal");

const estatisticasFinais =
    document.querySelector("#estatisticasFinais");

const marcadores =
    document.querySelectorAll(".marcador");

const vidasElemento =
    document.querySelectorAll(".vida");

const falaEntropia =
    document.querySelector("#falaEntropia");


/* =========================================================
   VARIÁVEIS DO JOGO
   ========================================================= */

let nivelAtual = 0;

let desafioAtual = 0;

let escolhaAtual = null;

let escolhaRecuperacao = null;

let estabilidade = 3;

let acertos = 0;

let tentativas = 0;

let selos = [];


/* =========================================================
   COORDENADAS ORIGINAIS DO MAPA
   NÃO ALTERAR
   ========================================================= */

const posicoesMapa = [

    { left: "24.2%", top: "11.8%" },

    { left: "41.8%", top: "10.9%" },

    { left: "59.6%", top: "10.7%" },

    { left: "79.5%", top: "17%" },

    { left: "17.3%", top: "38%" },

    { left: "30.1%", top: "35.6%" },

    { left: "38.7%", top: "42.7%" },

    { left: "54%", top: "38.5%" },

    { left: "74.2%", top: "44%" },

    { left: "21.3%", top: "60.4%" },

    { left: "46.1%", top: "61.2%" },

    { left: "63.6%", top: "63.8%" },

    { left: "20.2%", top: "86.1%" },

    { left: "39.3%", top: "86%" },

    { left: "65.1%", top: "87.6%" }

];


/* =========================================================
   BANCO DE QUESTÕES
   15 REGIÕES
   45 DESAFIOS
   ========================================================= */

const niveis = [

    /* =====================================================
       1 — RAPIDEZ DAS REAÇÕES
       ===================================================== */

    {
        local: "Vale das Transformações",

        narrativa:
            "Entropia espalhou desordem pela Forja. No primeiro vale, as reações ficaram lentas. Para avançar, você precisa reconhecer os fatores que influenciam a rapidez das reações.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Qual fator, em geral, aumenta a rapidez de uma reação química?",

                alternativas: [
                    "Diminuir a temperatura",
                    "Aumentar a temperatura",
                    "Retirar os reagentes"
                ],

                correta: 1,

                explicacao:
                    "O aumento da temperatura aumenta a energia cinética das partículas e tende a aumentar a frequência de colisões eficazes."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Uma pastilha efervescente triturada reage mais rapidamente com água do que uma pastilha inteira. Qual fator explica esse comportamento?",

                alternativas: [
                    "Maior superfície de contato",
                    "Menor contato com a água",
                    "Menor quantidade de partículas"
                ],

                correta: 0,

                explicacao:
                    "Ao triturar a pastilha, aumenta-se a superfície de contato, favorecendo as colisões entre os reagentes."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Ao aumentar a concentração de um reagente, mantendo as demais condições constantes, o que tende a acontecer com a rapidez da reação?",

                alternativas: [
                    "Aumentar, pois pode haver mais colisões entre as partículas",
                    "Diminuir obrigatoriamente",
                    "A concentração não pode influenciar a rapidez"
                ],

                correta: 0,

                explicacao:
                    "Maior concentração significa mais partículas por volume e pode aumentar a frequência de colisões entre os reagentes."
            }

        ],

        fragmento: "V"
    },


    /* =====================================================
       2 — TEORIA DAS COLISÕES
       ===================================================== */

    {
        local: "Campo das Colisões",

        narrativa:
            "Partículas cruzam o campo em todas as direções. Porém, somente algumas colisões conseguem produzir transformações químicas.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Segundo a teoria das colisões, para que uma colisão seja eficaz é necessário que:",

                alternativas: [
                    "As partículas tenham energia suficiente e orientação adequada",
                    "As partículas estejam sempre no estado sólido",
                    "Qualquer colisão produza produtos"
                ],

                correta: 0,

                explicacao:
                    "Uma colisão eficaz precisa apresentar energia suficiente para superar a barreira de ativação e orientação adequada."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Quando a temperatura diminui, por que muitas reações ficam mais lentas?",

                alternativas: [
                    "Porque todas as partículas deixam de se movimentar",
                    "Porque diminui a quantidade de partículas com energia suficiente para superar a Ea",
                    "Porque a massa dos reagentes aumenta"
                ],

                correta: 1,

                explicacao:
                    "Com menor temperatura, a energia cinética média diminui e menos partículas conseguem superar a energia de ativação."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Por que nem toda colisão entre partículas reagentes produz produtos?",

                alternativas: [
                    "Porque partículas nunca conseguem se aproximar",
                    "Porque a colisão precisa apresentar energia e orientação adequadas",
                    "Porque somente gases podem sofrer colisões eficazes"
                ],

                correta: 1,

                explicacao:
                    "Somente colisões com energia suficiente e orientação favorável podem resultar na transformação química."
            }

        ],

        fragmento: "C"
    },


    /* =====================================================
       3 — ENERGIA DE ATIVAÇÃO
       ===================================================== */

    {
        local: "Montanha da Ativação",

        narrativa:
            "Uma enorme barreira energética bloqueia a passagem. Para atravessá-la, você precisa compreender a energia de ativação.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "O que representa a energia de ativação (Ea)?",

                alternativas: [
                    "A energia mínima necessária para que a reação ocorra",
                    "A massa total dos produtos",
                    "A temperatura final da reação"
                ],

                correta: 0,

                explicacao:
                    "A energia de ativação corresponde à barreira energética que precisa ser superada para que a reação aconteça."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "O que um catalisador faz com a energia de ativação?",

                alternativas: [
                    "Aumenta a Ea",
                    "Diminui a Ea por fornecer um caminho alternativo",
                    "Transforma a Ea em calor"
                ],

                correta: 1,

                explicacao:
                    "O catalisador oferece um caminho reacional alternativo com menor energia de ativação."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Ao adicionar um catalisador a uma reação, o que acontece com a variação de entalpia (ΔH) da reação?",

                alternativas: [
                    "ΔH sempre aumenta",
                    "ΔH sempre diminui",
                    "ΔH permanece a mesma"
                ],

                correta: 2,

                explicacao:
                    "O catalisador altera o caminho da reação e reduz a Ea, mas não altera a diferença de entalpia entre reagentes e produtos."
            }

        ],

        fragmento: "E"
    },


    /* =====================================================
       4 — COMPLEXO ATIVADO
       ===================================================== */

    {
        local: "Câmara do Complexo Ativado",

        narrativa:
            "No centro da montanha existe uma câmara instável. Ali, as partículas atingem uma configuração de alta energia: o complexo ativado.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Como podemos caracterizar o complexo ativado?",

                alternativas: [
                    "Como uma configuração de alta energia e instável",
                    "Como um produto final estável",
                    "Como um reagente que não participa da reação"
                ],

                correta: 0,

                explicacao:
                    "O complexo ativado é uma configuração transitória e de alta energia associada ao estado de transição."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Em um diagrama de energia, o complexo ativado está associado:",

                alternativas: [
                    "Ao ponto de menor energia",
                    "Ao topo da barreira de energia",
                    "Somente à região dos produtos"
                ],

                correta: 1,

                explicacao:
                    "O complexo ativado está associado ao estado de transição, próximo ao topo da barreira energética."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Qual afirmação descreve corretamente o complexo ativado?",

                alternativas: [
                    "É um intermediário estável que pode ser armazenado",
                    "É uma configuração transitória e muito instável",
                    "É sempre um produto isolável"
                ],

                correta: 1,

                explicacao:
                    "O complexo ativado existe durante um intervalo muito pequeno e apresenta elevada instabilidade."
            }

        ],

        fragmento: "Q"
    },


    /* =====================================================
       5 — ENDO E EXOTÉRMICA
       ===================================================== */

    {
        local: "Fornalha Energética",

        narrativa:
            "A fornalha possui dois caminhos: um libera calor e outro absorve energia. Você precisa reconhecer processos exotérmicos e endotérmicos.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Uma reação exotérmica é aquela que:",

                alternativas: [
                    "Libera calor para o ambiente",
                    "Absorve calor do ambiente",
                    "Não envolve energia"
                ],

                correta: 0,

                explicacao:
                    "Nas reações exotérmicas, energia é liberada para o ambiente, geralmente na forma de calor."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Em uma reação endotérmica, o sistema:",

                alternativas: [
                    "Libera calor para o ambiente",
                    "Absorve energia do ambiente",
                    "Não apresenta alteração energética"
                ],

                correta: 1,

                explicacao:
                    "Uma transformação endotérmica absorve energia do ambiente."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Em uma reação exotérmica, considerando apenas a variação de entalpia da reação, é correto afirmar que:",

                alternativas: [
                    "ΔH > 0",
                    "ΔH = 0",
                    "ΔH < 0"
                ],

                correta: 2,

                explicacao:
                    "Em processos exotérmicos, a entalpia dos produtos é menor que a dos reagentes, portanto ΔH é negativo."
            }

        ],

        fragmento: "X"
    },


    /* =====================================================
       6 — CATALISADORES
       ===================================================== */

    {
        local: "Santuário dos Catalisadores",

        narrativa:
            "No santuário estão os catalisadores, capazes de acelerar reações sem alterar o caminho energético final da transformação.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Qual é a principal função de um catalisador?",

                alternativas: [
                    "Aumentar a energia de ativação",
                    "Diminuir a energia de ativação por fornecer outro caminho reacional",
                    "Impedir a formação de produtos"
                ],

                correta: 1,

                explicacao:
                    "O catalisador fornece uma rota alternativa com menor energia de ativação."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Durante uma reação catalisada, o catalisador:",

                alternativas: [
                    "É necessariamente consumido totalmente",
                    "Participa do mecanismo e é regenerado ao final do ciclo catalítico",
                    "Transforma todos os reagentes em catalisadores"
                ],

                correta: 1,

                explicacao:
                    "O catalisador participa das etapas do mecanismo, mas não é consumido globalmente na reação."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Em um sistema que já está em equilíbrio, a adição de um catalisador:",

                alternativas: [
                    "Aumenta a quantidade final de produtos",
                    "Desloca o equilíbrio para os reagentes",
                    "Acelera a chegada ao equilíbrio, sem alterar sua composição final"
                ],

                correta: 2,

                explicacao:
                    "O catalisador acelera as reações direta e inversa, fazendo o equilíbrio ser atingido mais rapidamente, mas não altera sua composição final."
            }

        ],

        fragmento: "A"
    },


    /* =====================================================
       7 — EQUILÍBRIO QUÍMICO
       ===================================================== */

    {
        local: "Portão do Equilíbrio",

        narrativa:
            "O portão só permanece aberto quando as reações direta e inversa alcançam a mesma velocidade.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Em um equilíbrio químico dinâmico:",

                alternativas: [
                    "A reação para completamente",
                    "As velocidades das reações direta e inversa tornam-se iguais",
                    "As concentrações precisam ser iguais"
                ],

                correta: 1,

                explicacao:
                    "No equilíbrio dinâmico, as reações continuam ocorrendo, mas suas velocidades são iguais."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Quando um sistema atinge equilíbrio químico, as concentrações dos reagentes e produtos:",

                alternativas: [
                    "Necessariamente tornam-se iguais",
                    "Permanecem constantes ao longo do tempo, nas condições estabelecidas",
                    "Necessariamente tornam-se zero"
                ],

                correta: 1,

                explicacao:
                    "As concentrações ficam constantes macroscopicamente, mas não precisam ser iguais."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "O equilíbrio químico é chamado de dinâmico porque:",

                alternativas: [
                    "As reações direta e inversa continuam ocorrendo",
                    "A reação deixa de acontecer",
                    "Somente os produtos continuam reagindo"
                ],

                correta: 0,

                explicacao:
                    "Mesmo no equilíbrio, as transformações microscópicas continuam acontecendo nos dois sentidos."
            }

        ],

        fragmento: "E"
    },


    /* =====================================================
       8 — KC
       ===================================================== */

    {
        local: "Torre das Constantes",

        narrativa:
            "Na torre estão gravadas as expressões matemáticas que descrevem o equilíbrio químico. Aqui, você deverá dominar o Kc.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "A constante de equilíbrio Kc é calculada utilizando principalmente:",

                alternativas: [
                    "Concentrações das espécies no equilíbrio",
                    "Massas iniciais dos reagentes",
                    "Temperatura corporal"
                ],

                correta: 0,

                explicacao:
                    "Kc é determinado a partir das concentrações das espécies no estado de equilíbrio."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Para a reação aA + bB ⇌ cC + dD, a expressão de Kc é:",

                alternativas: [
                    "Kc = [A]ᵃ[B]ᵇ / [C]ᶜ[D]ᵈ",
                    "Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ",
                    "Kc = [A] + [B] + [C] + [D]"
                ],

                correta: 1,

                explicacao:
                    "Os produtos aparecem no numerador e os reagentes no denominador, com os coeficientes estequiométricos como expoentes."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Em uma expressão de Kc, substâncias no estado sólido puro ou líquido puro são:",

                alternativas: [
                    "Incluídas sempre com suas concentrações",
                    "Representadas com expoente zero",
                    "Não incluídas na expressão da constante"
                ],

                correta: 2,

                explicacao:
                    "A atividade de sólidos puros e líquidos puros é considerada constante e, por isso, eles não aparecem na expressão usual de Kc."
            }

        ],

        fragmento: "K"
    },


    /* =====================================================
       9 — KP
       ===================================================== */

    {
        local: "Cidade das Pressões",

        narrativa:
            "Na cidade, os gases controlam as entradas e saídas. A constante Kp descreve o equilíbrio utilizando pressões parciais.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "A constante Kp utiliza principalmente:",

                alternativas: [
                    "Pressões parciais das espécies gasosas",
                    "Massas dos sólidos",
                    "Volumes dos líquidos"
                ],

                correta: 0,

                explicacao:
                    "Kp é formulado utilizando as pressões parciais das espécies gasosas no equilíbrio."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Para N₂(g) + 3H₂(g) ⇌ 2NH₃(g), qual expressão representa Kp?",

                alternativas: [
                    "Kp = PNH₃² / (PN₂ · PH₂³)",
                    "Kp = PN₂ · PH₂³ / PNH₃²",
                    "Kp = PNH₃ / (PN₂ + PH₂)"
                ],

                correta: 0,

                explicacao:
                    "Os produtos ficam no numerador e os reagentes no denominador, com os coeficientes estequiométricos como expoentes."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Em uma expressão de Kp, quais espécies devem aparecer?",

                alternativas: [
                    "Todas as substâncias presentes, independentemente do estado físico",
                    "As espécies gasosas envolvidas no equilíbrio",
                    "Somente os sólidos"
                ],

                correta: 1,

                explicacao:
                    "Na formulação usual de Kp aparecem as espécies gasosas, utilizando suas pressões parciais."
            }

        ],

        fragmento: "P"
    },


    /* =====================================================
       10 — CONSTANTE DE VELOCIDADE
       ===================================================== */

    {
        local: "Laboratório da Velocidade",

        narrativa:
            "O laboratório guarda as leis de velocidade. Para avançar, você deverá interpretar a constante k e os expoentes das concentrações.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Em uma reação de primeira ordem em A, qual lei de velocidade é compatível com essa ordem?",

                alternativas: [
                    "v = k[A]",
                    "v = k[A]²",
                    "v = k/[A]"
                ],

                correta: 0,

                explicacao:
                    "Na primeira ordem em relação a A, a concentração aparece elevada ao expoente 1."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Se uma reação segue a lei v = k[A]², o que acontece com a velocidade quando [A] dobra?",

                alternativas: [
                    "A velocidade dobra",
                    "A velocidade quadruplica",
                    "A velocidade cai pela metade"
                ],

                correta: 1,

                explicacao:
                    "Como A está elevado ao quadrado, dobrar [A] aumenta a velocidade por um fator de 4."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Considere v = k[A][B]. Se apenas a concentração de A for duplicada, mantendo B constante, a velocidade:",

                alternativas: [
                    "Dobra",
                    "Quadruplica",
                    "Não muda"
                ],

                correta: 0,

                explicacao:
                    "A concentração de A aparece na primeira potência. Portanto, dobrar A dobra a velocidade."
            }

        ],

        fragmento: "V"
    },


    /* =====================================================
       11 — PRIMEIRA E SEGUNDA ORDEM
       ===================================================== */

    {
        local: "Arena das Ordens",

        narrativa:
            "Duas forças disputam a arena: a primeira e a segunda ordem. O comportamento da velocidade diante da concentração revelará quem controla cada reação.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Em uma reação de primeira ordem em relação a A, o expoente de [A] na lei de velocidade é:",

                alternativas: [
                    "1",
                    "2",
                    "3"
                ],

                correta: 0,

                explicacao:
                    "Primeira ordem significa que a concentração do reagente aparece elevada à primeira potência."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Em uma reação de segunda ordem em relação a A, dobrar [A] provoca:",

                alternativas: [
                    "Dobrar a velocidade",
                    "Quadruplicar a velocidade",
                    "Reduzir a velocidade pela metade"
                ],

                correta: 1,

                explicacao:
                    "Na segunda ordem, a velocidade é proporcional a [A]². Portanto, dobrar A quadruplica a velocidade."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Qual situação diferencia corretamente uma reação de primeira ordem de uma de segunda ordem em A?",

                alternativas: [
                    "Na 1ª ordem, dobrar [A] dobra v; na 2ª ordem, quadruplica v",
                    "Na 1ª ordem, dobrar [A] quadruplica v; na 2ª ordem, dobra v",
                    "Nas duas ordens, dobrar [A] produz o mesmo efeito"
                ],

                correta: 0,

                explicacao:
                    "O expoente da concentração determina o efeito da alteração da concentração sobre a velocidade."
            }

        ],

        fragmento: "O"
    },


    /* =====================================================
       12 — LE CHATELIER
       ===================================================== */

    {
        local: "Floresta de Le Chatelier",

        narrativa:
            "A floresta muda de direção sempre que o equilíbrio é perturbado. O princípio de Le Chatelier indica como o sistema responde.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Ao adicionar um reagente a um sistema em equilíbrio, o sistema tende a se deslocar:",

                alternativas: [
                    "No sentido de consumir parte do reagente adicionado",
                    "Sempre no sentido dos reagentes",
                    "Sem alteração"
                ],

                correta: 0,

                explicacao:
                    "O sistema tende a minimizar a perturbação consumindo parte do reagente adicionado."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Ao retirar um produto de um sistema em equilíbrio, o equilíbrio tende a se deslocar:",

                alternativas: [
                    "No sentido de formar mais produto",
                    "No sentido de consumir todos os reagentes",
                    "Sempre para o lado de maior massa"
                ],

                correta: 0,

                explicacao:
                    "A retirada de um produto favorece o sentido que produz novamente parte do produto removido."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Para N₂(g) + 3H₂(g) ⇌ 2NH₃(g), o aumento da pressão tende a favorecer:",

                alternativas: [
                    "O lado dos reagentes, com 4 mols gasosos",
                    "O lado dos produtos, com 2 mols gasosos",
                    "Nenhum dos lados"
                ],

                correta: 1,

                explicacao:
                    "O aumento da pressão favorece o lado com menor quantidade de mols gasosos."
            }

        ],

        fragmento: "L"
    },


    /* =====================================================
       13 — TEMPERATURA E EQUILÍBRIO
       ===================================================== */

    {
        local: "Pântano da Temperatura",

        narrativa:
            "O pântano reage ao calor. Aqui, a temperatura pode modificar a posição do equilíbrio e também o valor da constante K.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Em uma reação direta exotérmica, aumentar a temperatura tende a deslocar o equilíbrio para:",

                alternativas: [
                    "Os produtos",
                    "Os reagentes",
                    "Nenhum lado"
                ],

                correta: 1,

                explicacao:
                    "Se o sentido direto libera calor, aumentar a temperatura favorece o sentido inverso, que consome calor."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Em uma reação direta endotérmica, aumentar a temperatura tende a favorecer:",

                alternativas: [
                    "Os reagentes",
                    "Os produtos",
                    "Somente o catalisador"
                ],

                correta: 1,

                explicacao:
                    "O sentido endotérmico consome calor. Portanto, aumentar a temperatura favorece esse sentido."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Qual alteração pode modificar o valor da constante de equilíbrio K?",

                alternativas: [
                    "Mudança de temperatura",
                    "Mudança de concentração mantendo a temperatura constante",
                    "Adição de catalisador"
                ],

                correta: 0,

                explicacao:
                    "O valor de K depende da temperatura. Alterações de concentração e catalisadores não alteram K na mesma temperatura."
            }

        ],

        fragmento: "T"
    },


    /* =====================================================
       14 — PH E POH
       ===================================================== */

    {
        local: "Templo do pH",

        narrativa:
            "No templo, os íons H⁺ e OH⁻ guardam a passagem. O pH e o pOH revelam o caráter ácido ou básico das soluções.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Uma solução com pH = 3 é classificada como:",

                alternativas: [
                    "Ácida",
                    "Neutra",
                    "Básica"
                ],

                correta: 0,

                explicacao:
                    "Em condições usuais, valores de pH menores que 7 indicam meio ácido."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "A 25 °C, qual relação é válida para uma solução aquosa?",

                alternativas: [
                    "pH + pOH = 7",
                    "pH + pOH = 14",
                    "pH × pOH = 14"
                ],

                correta: 1,

                explicacao:
                    "A 25 °C, a relação entre pH e pOH é pH + pOH = 14."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Se [H⁺] = 1,0 × 10⁻⁴ mol/L, qual é o pH?",

                alternativas: [
                    "2",
                    "4",
                    "10"
                ],

                correta: 1,

                explicacao:
                    "pH = -log[H⁺]. Portanto, pH = -log(10⁻⁴) = 4."
            }

        ],

        fragmento: "H"
    },


    /* =====================================================
       15 — INTEGRAÇÃO
       ===================================================== */

    {
        local: "Grande Câmara do Equilíbrio",

        narrativa:
            "Você chegou à câmara final. A Forja de Amônia está parada. Temperatura, pressão, equilíbrio e catalisadores precisam ser compreendidos para restaurar seu funcionamento.",

        desafios: [

            {
                dificuldade: "Fácil",

                pergunta:
                    "Na síntese N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + calor, diminuir a temperatura favorece:",

                alternativas: [
                    "A formação de NH₃",
                    "A decomposição de NH₃",
                    "Nenhum sentido"
                ],

                correta: 0,

                explicacao:
                    "Como a reação direta é exotérmica, diminuir a temperatura favorece o sentido que libera calor, formando NH₃."
            },

            {
                dificuldade: "Médio",

                pergunta:
                    "Na mesma reação, aumentar a pressão tende a favorecer a formação de NH₃ porque:",

                alternativas: [
                    "O lado dos produtos possui menos mols gasosos",
                    "O lado dos produtos possui mais mols gasosos",
                    "A pressão não interfere em equilíbrios gasosos"
                ],

                correta: 0,

                explicacao:
                    "Há 4 mols gasosos nos reagentes e 2 mols nos produtos. O aumento da pressão favorece o lado com menor quantidade de gás."
            },

            {
                dificuldade: "Difícil",

                pergunta:
                    "Ao adicionar um catalisador à síntese de amônia em equilíbrio, qual afirmação está correta?",

                alternativas: [
                    "O equilíbrio final passa a ter necessariamente mais NH₃",
                    "O equilíbrio é atingido mais rapidamente, mas a composição final não é alterada",
                    "O valor de K aumenta obrigatoriamente"
                ],

                correta: 1,

                explicacao:
                    "O catalisador reduz a energia de ativação das etapas e acelera os dois sentidos da reação, sem alterar a composição final do equilíbrio."
            }

        ],

        fragmento: "F"
    }

];


/* =========================================================
   DESAFIO DE ÚLTIMA CHANCE
   ========================================================= */

const desafioRecuperacao = {

    pergunta:
        "A Forja está quase perdida! Para favorecer a formação de NH₃ em N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + calor, qual combinação é adequada?",

    alternativas: [

        "Aumentar a temperatura e diminuir a pressão",

        "Diminuir a temperatura e aumentar a pressão",

        "Aumentar a temperatura e adicionar catalisador"

    ],

    correta: 1
};


/* =========================================================
   INÍCIO DO JOGO
   ========================================================= */

botaoIniciar.addEventListener(
    "click",
    iniciarJogo
);


function iniciarJogo() {

    nivelAtual = 0;

    desafioAtual = 0;

    escolhaAtual = null;

    escolhaRecuperacao = null;

    estabilidade = 3;

    acertos = 0;

    tentativas = 0;

    selos = [];


    telaInicial.classList.remove("ativa");

    telaDerrota.classList.remove("ativa");

    telaPortal.classList.remove("ativa");

    telaFinal.classList.remove("ativa");

    telaUltimaChance.classList.remove("ativa");

    telaJogo.classList.add("ativa");


    atualizarVidas();

    atualizarSelos();

    carregarDesafio();
}


/* =========================================================
   CARREGAR DESAFIO
   ========================================================= */

function carregarDesafio() {

    cardDesafio.classList.remove(
        "virado",
        "acerto",
        "erro"
    );

    escolhaAtual = null;

    botaoConfirmar.disabled = true;

    botaoContinuar.textContent =
        "Continuar";


    const nivel =
        niveis[nivelAtual];

    const desafio =
        nivel.desafios[desafioAtual];


    localAtual.textContent =
        `${nivelAtual + 1}. ${nivel.local}`;


    textoNarrativa.textContent =
        nivel.narrativa;


    tituloNivel.textContent =
        `Desafio ${nivelAtual + 1}.${desafioAtual + 1}: ${nivel.local}`;


    pergunta.textContent =
        desafio.pergunta;


    indicadorDificuldade.textContent =
        desafio.dificuldade.toUpperCase();


    indicadorDificuldade.className =
        "dificuldade-badge dificuldade-" +
        desafio.dificuldade.toLowerCase();


    alternativas.innerHTML = "";


    const progresso =
        document.createElement("div");

    progresso.className =
        "progresso-desafios";

    progresso.textContent =
        `Etapa ${desafioAtual + 1} de 3 • ${desafio.dificuldade}`;

    alternativas.appendChild(progresso);


    desafio.alternativas.forEach(
        (texto, indice) => {

            const botao =
                document.createElement("button");

            botao.type = "button";

            botao.classList.add(
                "alternativa"
            );

            botao.textContent =
                `${String.fromCharCode(65 + indice)}. ${texto}`;


            botao.addEventListener(
                "click",
                () => {

                    selecionarAlternativa(
                        indice,
                        botao
                    );

                }
            );


            alternativas.appendChild(botao);

        }
    );


    moverJogador();

    atualizarMarcadores();

    entropia.classList.remove("ativa");
}


/* =========================================================
   SELECIONAR ALTERNATIVA
   ========================================================= */

function selecionarAlternativa(
    indice,
    botaoSelecionado
) {

    escolhaAtual = indice;


    document
        .querySelectorAll(
            "#alternativas .alternativa"
        )
        .forEach(
            botao =>
                botao.classList.remove(
                    "selecionada"
                )
        );


    botaoSelecionado.classList.add(
        "selecionada"
    );


    botaoConfirmar.disabled = false;
}


/* =========================================================
   CONFIRMAR RESPOSTA
   ========================================================= */

botaoConfirmar.addEventListener(
    "click",
    verificarResposta
);


function verificarResposta() {

    if (escolhaAtual === null) {
        return;
    }


    const desafio =
        niveis[nivelAtual]
            .desafios[desafioAtual];


    tentativas++;


    if (
        escolhaAtual ===
        desafio.correta
    ) {

        tratarAcerto(desafio);

    } else {

        tratarErro(desafio);

    }


    setTimeout(
        () => {

            cardDesafio.classList.add(
                "virado"
            );

        },
        450
    );
}


/* =========================================================
   ACERTO
   ========================================================= */

function tratarAcerto(desafio) {

    acertos++;


    cardDesafio.classList.add(
        "acerto"
    );


    resultadoTitulo.textContent =
        "⚗️ Reação estabilizada!";


    resultadoTitulo.className =
        "resultado-acerto";


    resultadoTexto.textContent =
        `${desafio.explicacao} Você avançou na reconstrução da Forja.`;


    fragmentoEncontrado.innerHTML =
        `<span class="selo-conquistado">
            🟢 Desafio ${desafio.dificuldade.toLowerCase()} superado!
        </span>`;


    criarEfeito(
        "reacao"
    );
}


/* =========================================================
   ERRO
   ========================================================= */

function tratarErro(desafio) {

    estabilidade =
        Math.max(
            0,
            estabilidade - 1
        );


    atualizarVidas();


    cardDesafio.classList.add(
        "erro"
    );


    entropia.classList.add(
        "ativa"
    );


    resultadoTitulo.textContent =
        "🟣 Entropia avançou!";


    resultadoTitulo.className =
        "resultado-erro";


    resultadoTexto.textContent =
        `${desafio.explicacao} Revise o conceito antes de continuar.`;


    fragmentoEncontrado.textContent =
        "🟣 Nenhum selo foi conquistado neste desafio.";


    criarEfeito(
        "explosao"
    );


    if (estabilidade === 0) {

        resultadoTexto.textContent +=
            " Sua estabilidade chegou a zero. A ciência ainda oferece uma última chance.";

        botaoContinuar.textContent =
            "Enfrentar última chance";
    }
}


/* =========================================================
   ATUALIZAR VIDAS
   ========================================================= */

function atualizarVidas() {

    vidasElemento.forEach(
        (vida, indice) => {

            vida.classList.toggle(
                "perdida",
                indice >= estabilidade
            );

        }
    );
}


/* =========================================================
   ATUALIZAR SELOS
   ========================================================= */

function atualizarSelos() {

    fragmentosElemento.textContent =
        selos.length
            ? selos.join(" ")
            : "?";
}


/* =========================================================
   MOVER JOGADOR
   ========================================================= */

function moverJogador() {

    const destino =
        posicoesMapa[nivelAtual];


    if (!destino) {
        return;
    }


    jogador.style.left =
        destino.left;


    jogador.style.top =
        destino.top;
}


/* =========================================================
   ATUALIZAR MARCADORES
   ========================================================= */

function atualizarMarcadores() {

    marcadores.forEach(
        (marcador, indice) => {

            marcador.classList.remove(
                "atual",
                "concluido"
            );


            if (
                indice <
                nivelAtual
            ) {

                marcador.classList.add(
                    "concluido"
                );

            }


            if (
                indice ===
                nivelAtual
            ) {

                marcador.classList.add(
                    "atual"
                );

            }

        }
    );
}


/* =========================================================
   EFEITOS VISUAIS
   ========================================================= */

function criarEfeito(tipo) {

    efeitoVisual.innerHTML = "";


    const efeito =
        document.createElement("div");


    efeito.classList.add(
        tipo
    );


    efeitoVisual.appendChild(
        efeito
    );


    setTimeout(
        () => {

            efeito.remove();

        },
        1000
    );
}


/* =========================================================
   BOTÃO CONTINUAR
   ========================================================= */

botaoContinuar.addEventListener(
    "click",
    function() {

        if (
            estabilidade === 0
        ) {

            abrirUltimaChance();

            return;
        }


        desafioAtual++;


        if (
            desafioAtual < 3
        ) {

            carregarDesafio();

            return;
        }


        /* =================================
           OS 3 DESAFIOS DA REGIÃO FORAM
           CONCLUÍDOS
           ================================= */

        selos.push(
            niveis[nivelAtual].fragmento
        );


        atualizarSelos();


        desafioAtual = 0;

        nivelAtual++;


        if (
            nivelAtual <
            niveis.length
        ) {

            carregarDesafio();

        } else {

            abrirTelaPortal();

        }

    }
);


/* =========================================================
   ÚLTIMA CHANCE
   ========================================================= */

function abrirUltimaChance() {

    telaJogo.classList.remove(
        "ativa"
    );

    telaUltimaChance.classList.add(
        "ativa"
    );


    escolhaRecuperacao = null;

    botaoRecuperacao.disabled =
        true;


    perguntaRecuperacao.textContent =
        desafioRecuperacao.pergunta;


    alternativasRecuperacao.innerHTML =
        "";


    desafioRecuperacao.alternativas.forEach(
        (texto, indice) => {

            const botao =
                document.createElement("button");


            botao.type = "button";


            botao.classList.add(
                "alternativa"
            );


            botao.textContent =
                `${String.fromCharCode(65 + indice)}. ${texto}`;


            botao.addEventListener(
                "click",
                () => {

                    escolhaRecuperacao =
                        indice;


                    document
                        .querySelectorAll(
                            "#alternativasRecuperacao .alternativa"
                        )
                        .forEach(
                            b =>
                                b.classList.remove(
                                    "selecionada"
                                )
                        );


                    botao.classList.add(
                        "selecionada"
                    );


                    botaoRecuperacao.disabled =
                        false;

                }
            );


            alternativasRecuperacao.appendChild(
                botao
            );

        }
    );
}


/* =========================================================
   VERIFICAR ÚLTIMA CHANCE
   ========================================================= */

botaoRecuperacao.addEventListener(
    "click",
    verificarRecuperacao
);


function verificarRecuperacao() {

    if (
        escolhaRecuperacao ===
        desafioRecuperacao.correta
    ) {

        estabilidade = 1;


        atualizarVidas();


        telaUltimaChance.classList.remove(
            "ativa"
        );


        telaJogo.classList.add(
            "ativa"
        );


        botaoContinuar.textContent =
            "Continuar";


        return;
    }


    telaUltimaChance.classList.remove(
        "ativa"
    );


    mostrarDerrota();
}


/* =========================================================
   DERROTA
   ========================================================= */

function mostrarDerrota() {

    telaDerrota.classList.add(
        "ativa"
    );


    falaEntropia.textContent =
        "Você chegou muito perto da Forja, mas a desordem venceu esta batalha. Reestude cinética, energia, equilíbrio, constantes e pH e tente novamente.";


    setTimeout(
        () => {

            telaDerrota.classList.remove(
                "ativa"
            );


            telaInicial.classList.add(
                "ativa"
            );

        },
        7000
    );
}


/* =========================================================
   ABRIR PORTAL
   ========================================================= */

function abrirTelaPortal() {

    telaJogo.classList.remove(
        "ativa"
    );


    telaPortal.classList.add(
        "ativa"
    );


    senhaReferencia.textContent =
        selos.join(" ");


    campoSenha.value =
        "";


    comparacaoSenha.innerHTML =
        "";


    mensagemPortal.textContent =
        "";
}


/* =========================================================
   VERIFICAR SENHA
   ========================================================= */

botaoAbrirPortal.addEventListener(
    "click",
    verificarSenha
);


function verificarSenha() {

    const senhaCorreta =
        selos
            .join("")
            .toUpperCase();


    const senhaDigitada =
        campoSenha
            .value
            .replace(/\s/g, "")
            .toUpperCase();


    comparacaoSenha.innerHTML =
        "";


    const tamanho =
        Math.max(
            senhaCorreta.length,
            senhaDigitada.length
        );


    for (
        let i = 0;
        i < tamanho;
        i++
    ) {

        const caractere =
            document.createElement(
                "span"
            );


        caractere.classList.add(
            "caractere"
        );


        caractere.textContent =
            senhaDigitada[i] || "_";


        if (
            senhaDigitada[i] ===
            senhaCorreta[i]
        ) {

            caractere.classList.add(
                "correto"
            );

        } else {

            caractere.classList.add(
                "incorreto"
            );

        }


        comparacaoSenha.appendChild(
            caractere
        );
    }


    if (
        senhaDigitada ===
        senhaCorreta &&
        senhaCorreta.length > 0
    ) {

        mensagemPortal.textContent =
            "🟢 Sequência reconhecida! A Grande Forja de Haber-Bosch foi reativada.";


        setTimeout(
            mostrarFinal,
            1500
        );

    } else {

        mensagemPortal.textContent =
            "Observe os caracteres: verde indica posição correta; roxo indica erro ou posição incorreta.";

    }
}


/* =========================================================
   TELA FINAL
   ========================================================= */

function mostrarFinal() {

    telaPortal.classList.remove(
        "ativa"
    );


    telaFinal.classList.add(
        "ativa"
    );


    const aproveitamento =
        Math.round(
            (acertos / 45) * 100
        );


    if (
        acertos >= 40
    ) {

        tituloFinal.textContent =
            "🏆 Mestre da Cinética e do Equilíbrio";


        textoFinal.textContent =
            "Você dominou os principais conceitos de rapidez das reações, teoria das colisões, energia de ativação, complexo ativado, catalisadores, equilíbrio químico, Kc, Kp, leis de velocidade, Le Chatelier e pH. A Forja de Amônia voltou a funcionar.";

    } else if (
        acertos >= 30
    ) {

        tituloFinal.textContent =
            "⚗️ Guardião da Forja";


        textoFinal.textContent =
            "Você reconstruiu os conhecimentos essenciais de cinética e equilíbrio necessários para reativar a Forja de Amônia.";

    } else {

        tituloFinal.textContent =
            "🧪 Aprendiz da Forja";


        textoFinal.textContent =
            "Você completou a jornada e reativou a Forja. Alguns conceitos de cinética e equilíbrio ainda podem ser fortalecidos.";
    }


    estatisticasFinais.innerHTML = `

        <p>
            <strong>Desafios corretos:</strong>
            ${acertos} de 45
        </p>

        <p>
            <strong>Aproveitamento:</strong>
            ${aproveitamento}%
        </p>

        <p>
            <strong>Selos conquistados:</strong>
            ${selos.length} de 15
        </p>

        <p>
            <strong>Estabilidade final:</strong>
            ${estabilidade} ⚛
        </p>

    `;
}


/* =========================================================
   REINICIAR
   ========================================================= */

botaoReiniciar.addEventListener(
    "click",
    () => {

        telaFinal.classList.remove(
            "ativa"
        );

        telaInicial.classList.add(
            "ativa"
        );

    }
);