const prompt = require('prompt-sync')();
//definição das variáveis necessárias
// se player ganhar => placar[0]++
// se robot ganhar => placar[1]++
let placar = [0,0];
let rounds = 0;
let player = -1;
const options = ['pedra', 'papel', 'tesoura'];
let playagain = "nao";
//playagain
do{
    //introdução e escolha do numero de rodadas  
    console.clear();  
    console.log(`
    Jogo Jokenpô!

    Você deve escolher entre "pedra", "papel" e "tesoura" para jogar contra o computador(PC).
    
    Escolha o número de rodadas que deseja jogar e tente vencer à máquina.
    
    Regras: Pedra ganha da tesoura; Tesoura ganha do papel e papel ganha da pedra.

    `);
    prompt(`Prescione Enter para continuar.`);
    console.clear();
    const nome = prompt (`Digite seu nome: `).toUpperCase().trim();
    console.log();
    while(true){
        rounds = +prompt(`Digite o número de rodadas que gostaria de jogar: `).trim();
        if (isNaN(rounds) || rounds < 1){
            console.log(`Número Inválido.`);
        } else{
            break;
        }
    }
    console.clear();
    //laço para as rodadas       
    for(let i = 0; i < rounds; i++){        
        //escolha e validação do player
        while (true){
            console.log(`------------------------------------------------------------`);
            player = prompt(`Round ${i+1}. Escolha "pedra", "papel" ou "tesoura": `).toLowerCase().trim();
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
        let robot = Math.floor(Math.random()*options.length);
        let respRobot = options[robot];

        //calculo do resultado
        console.log(`Você escolheu "${player}", o PC escolheu "${respRobot}".`);
        console.log();
        
        if(player == "pedra" && respRobot == "papel" || player == "papel" && respRobot == "tesoura" || player == "tesoura" && respRobot == "pedra"){
            placar[1]++
            console.log(`O PC ganhou este round. O jogo está em ${placar[1]} a ${placar[0]} para o PC`);
        }else if(player == "pedra" && respRobot == "tesoura" || player == "papel" && respRobot == "pedra" || player == "tesoura" && respRobot == "papel"){
            placar[0]++
            console.log(`Parabéns, você ganhou este round. O jogo está em ${placar[0]} a ${placar[1]} para você`);
        }else{
            console.log(`Vocês empataram. Ninguém pontuou neste round.`);
        }
        console.log();
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