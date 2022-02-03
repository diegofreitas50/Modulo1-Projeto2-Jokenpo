const prompt = require('prompt-sync')();

let playagain = "nao";

//laço playagain
do{
    //definição das variáveis
    let placar = [0,0]; //player = placar[0]; PC = placar[1]
    const options = ['pedra', 'papel', 'tesoura'];
    console.clear();

    //introdução       
    console.log(`
    Jogo Jokenpô!

    Você deve escolher entre "pedra", "papel" e "tesoura" para jogar contra o computador(PC).
    
    Escolha o número de rodadas que deseja jogar e tente vencer à máquina.
    
    Regras: Pedra ganha da tesoura; Tesoura ganha do papel e papel ganha da pedra.

    `);

    prompt(`Prescione Enter para continuar.`);
    console.clear();

    //definiçao de nome e rodadas
    const nome = prompt (`Digite seu nome: `).toUpperCase().trim();
    console.log();
    while(true){
        var rounds = +prompt(`Digite o número de rodadas que gostaria de jogar: `).trim();
        if (isNaN(rounds) || rounds < 1){
            console.log(`Número Inválido.`);
        } else{
            break;
        }
    }
    console.clear();

    //laço rounds      
    for(let i = 0; i < rounds; i++){        
        //escolha e validação do player
        while (true){
            var player = prompt(`Round ${i+1}. Escolha "pedra", "papel" ou "tesoura": `).toLowerCase().trim();
            if(options.indexOf(player) == -1){
                console.log(`Resposta inválida!`);
            }else{
                break;
            }
        }
        console.log();  

        //buscando o indice do player no array e atribuindo o valor        
        let playerIndex = options.indexOf(player);
        player = options[playerIndex];

        //escolha do PC
        let robotIndex = Math.floor(Math.random()*options.length);
        let Robot = options[robotIndex];

        //calculo do resultado
        console.log(`Você escolheu "${player}", o PC escolheu "${Robot}".`);
        console.log();
        
        if(player == "pedra" && Robot == "papel" || player == "papel" && Robot == "tesoura" || player == "tesoura" && Robot == "pedra"){
            placar[1]++
            console.log(`O PC ganhou este round. O jogo está em ${placar[1]} a ${placar[0]} para o PC`);
        }else if(player == "pedra" && Robot == "tesoura" || player == "papel" && Robot == "pedra" || player == "tesoura" && Robot == "papel"){
            placar[0]++
            console.log(`Parabéns, você ganhou este round. O jogo está em ${placar[0]} a ${placar[1]} para você`);
        }else{
            console.log(`Vocês empataram. Ninguém pontuou neste round.`);
        }
        prompt(`Prescione Enter para continuar.`);
        console.log();        
        console.clear();
    }

    //exibindo o placar final
    console.log(`
    E o jogo termina em:

    ${nome}: ${placar[0]}

    PC: ${placar[1]}
    
    `); 

    //comparando placar para indicar o vencedor
    if(placar[0] > placar[1]){
        console.log(`Parabéns, você venceu por ${placar[0]} a ${placar[1]}.`);

    }else if(placar[0] < placar[1]){
        console.log(`O PC venceu por ${placar[1]} a ${placar[0]}.`);

    }else{
        console.log(`Vocês empataram com ${placar[1]} a ${placar[0]}.`);
    }
    console.log();

    //playagain
    while(true){
        playagain = prompt(`Deseja jogar novamente? Responda com "sim" ou "nao": `).toLowerCase().trim();
        
        if (playagain != "sim" && playagain != "nao"){
            console.log(`Resposta inválida.`);

        }else{
            break;
        }        
    }

}while (playagain == "sim");

console.clear();
console.log(`Obrigado, nos vemos em um próximo jogo!\n\n`);