import { Input } from './src/util/Input';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { Colors } from './src/util/Colors';
import { ContaController } from './src/controller/ContaController';


// Criar Objeto Global da Classe ContaController
const contas = new ContaController();

// Criar um array contendo os tipos de conta
const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

function main() {
    let opcao: number;

    //Chamada da criação de contas teste
    criarContasTeste();

    // Criação do Menu
    while (true) {
        console.log(Colors.fg.magenta,
            "**********************************************");
        console.log("             BANCO DO BRAZIL COM Z            ");
        console.log("**********************************************");
        console.log("\n           1 - Criar Conta                    ");
        console.log("           2 - Listar todas as Contas           ");
        console.log("           3 - Buscar Conta por Numero          ");
        console.log("           4 - Atualizar Dados da Conta         ");
        console.log("           5 - Apagar Conta                     ");
        console.log("           6 - Sacar                            ");
        console.log("           7 - Depositar                        ");
        console.log("           8 - Transferir valores entre Contas  ");
        console.log("           0 - Sair                             ");
        console.log("\n**********************************************",
            Colors.reset);

        console.log("Entre com a opção desejada: ")
        opcao = Input.questionInt("");

        if (opcao === 0) {
            sobreProjeto();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.whitestrong,
                    "Criar Conta",
                    Colors.reset);
                criarConta();
                keyPress();
                break;

            case 2:
                console.log(Colors.fg.whitestrong,
                    "Listar todas as Contas",
                    Colors.reset);
                contas.listarTodas();
                keyPress();
                break;

            case 3:
                console.log(Colors.fg.whitestrong,
                    "Buscar Conta por Numero",
                    Colors.reset);
                buscarContaPorNumero();
                keyPress();
                break;

            case 4:
                console.log(Colors.fg.whitestrong,
                    "Atualizar Dados da Conta",
                    Colors.reset);
                atualizarConta();
                keyPress();
                break;

            case 5:
                console.log(Colors.fg.whitestrong,
                    "Apagar Conta",
                    Colors.reset);
                deletarContaPorNumero();
                keyPress();
                break;

            case 6:
                console.log(Colors.fg.whitestrong,
                    "Saque",
                    Colors.reset);
                keyPress();
                break;

            case 7:
                console.log(Colors.fg.whitestrong,
                    "Depósito",
                    Colors.reset);
                keyPress();
                break;

            case 8:
                (Colors.fg.whitestrong,
                    "Transferir valores entre Contas",
                    Colors.reset);
                keyPress();
                break;

            default:
                (Colors.fg.whitestrong,
                    "Operação inválida! Tente novamente.",
                    Colors.reset);
                keyPress();
                break;
        }
    }
}

main();

// Função para cadastrar dados e chamar a Controladora

// Opção 1: Criar uma nova Conta

function criarConta() {
    console.log("Digite o número da agência: ");
    const agencia = Input.questionInt("");

    console.log("Digite o nome do titular: ");
    const titular = Input.question("");

    console.log("Selecione o tipo da conta: ");
    const tipo = Input.keyInSelect(tipoContas, "", { cancel: false }) + 1;

    console.log("Digite o saldo da conta: ");
    const saldo = Input.questionFloat("");

    switch (tipo) {
        case 1: //Conta Corrente
            console.log("Digite o Limite da Conta: ");
            const limite = Input.questionFloat("");
            contas.cadastrar(new ContaCorrente(
                contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
            break;

        case 2: //Conta Poupança
            console.log("Digite o dia do aniversário da Conta");
            const aniversario = Input.questionInt("");
            contas.cadastrar(new ContaPoupanca(
                contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));
            break;
    }
}

// Opção 2: Veja Case 2 do Menu

// Opção 3: Procurar uma Conta pelo Número

function buscarContaPorNumero(): void {
    console.log("Digite o número da Conta");
    const numero = Input.questionInt("");
    contas.procurarPorNumero(numero);
}


// Opção 4: Atualizar os Dados de uma Conta

function atualizarConta(): void {
    console.log("Digite o número da Conta");
    const numero = Input.questionInt("");

    const conta = contas.buscarNoArray(numero);

    if (conta !== null) {

        // Guarda os valores atuais da conta 
        let agencia: number = conta.agencia;
        let titular: string = conta.titular;
        const tipo: number = conta.tipo;
        let saldo: number = conta.saldo;

        // Atualização da Agência
        console.log(`\nAgência Atual: ${agencia}`);
        console.log("Digite o número da nova Agência \n (Pressione ENTER para manter o valor atual.");
        let entrada = Input.question("");

        agencia = entrada.trim() === "" ? agencia : parseInt(entrada); //o trim tira os espaços em branco

        // Atualização do Titular
        console.log(`\nNome Atual do titular: ${titular}`);
        console.log("Digite o novo nome do titular.");
        entrada = Input.question("");

        titular = entrada.trim() === "" ? titular : entrada;

        // Atualização do Saldo
        console.log(`\nSaldo Atual: ${saldo}`);
        console.log("Digite o novo valor do saldo \n (Pressione ENTER para manter o valor atual");
        entrada = Input.question("");

        saldo = entrada.trim() === "" ? saldo : parseFloat(entrada.replace(",", "."));

        // Atualização dentro do Tipo

        switch (tipo) {
            case 1: { //Conta Corrente
                let limite: number = (conta as ContaCorrente).limite;

                // Atualização do limite
                console.log(`\nLimite Atual: ${limite}`);
                console.log("Digite o novo valor do limite \n (Pressione ENTER para manter o valor atual");
                entrada = Input.question("");

                limite = entrada.trim() === "" ? limite : parseFloat(entrada.replace(",", "."));

                contas.atualizar(new ContaCorrente(
                    numero, agencia, titular, tipo, saldo, limite));
                break;

            } case 2: { //Conta Poupança
                let aniversario: number = (conta as ContaPoupanca).aniversario;

                //Atualização do aniversário
                console.log(`\nAniversário Atual: ${aniversario}`);
                console.log("Digite o novo dia de aniversário \n (Pressione ENTER para manter o valor atual.");
                let entrada = Input.question("");

                aniversario = entrada.trim() === "" ? aniversario : parseInt(entrada);

                contas.atualizar(new ContaPoupanca(
                    numero, agencia, titular, tipo, saldo, aniversario));
                break;
            }
        }

    } else {
        console.log(Colors.fg.red, `A Conta número ${numero} não existe!`, Colors.reset);
    }
}

// Opção 5: Deletar uma Conta pelo Número

function deletarContaPorNumero(): void {
    console.log("Digite o número da Conta");
    const numero = Input.questionInt("");
    console.log(`Deseja prosseguir com a exclusão da conta ${numero} (Sim/Não)? `);
    let confirmacao = Input.question("").toUpperCase();
    if (confirmacao === "SIM") {
        contas.deletar(numero);
    } else {
        console.log("A conta não será excluída!");
    }
}


// Função com os dados da pessoa desenvolvedora
export function sobreProjeto(): void {
    console.log(Colors.fg.greenstrong,
        "\nBanco do Brazil com Z - O seu Futuro começa aqui! ",
        Colors.reset, "");
    console.log("\n**************************************************");
    console.log(Colors.fg.blue, "Projeto desenvolvido por Jeaninny Teixeira");
    console.log(" jeaninny.teixeira@gmail.com");
    console.log(" github.com/Jeaninny", Colors.reset, "");
    console.log("**************************************************");
}


// Função de pausa entre as opções do menu
function keyPress(): void {
    console.log(Colors.fg.yellow, "Pressione enter para continuar...", Colors.reset);
    Input.prompt();
}


// Contas para testes
function criarContasTeste(): void {

    // Instâncias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'João da Silva', 1, 1000.00, 100.00));

    // Instâncias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));

}