import rl from "readline-sync";
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta"; // Import da classe Conta

function main() {

    let opcao: number;

    // Instanciar Objetos da Classe Conta
    const c1 = new Conta(1, 1234, "Sofia", 1, 100000.00);
    
    c1.visualizar();

    //Testes do Método Sacar
    console.log("Sacar 100,00: ", c1.sacar(100.00));
    console.log("Sacar 200000,00: ", c1.sacar(200000.00));
    console.log("Sacar 0.00: ", c1.sacar(0.00));

    //Testes do Método Depositar
    console.log("Depositar -10.00: ");
    c1.depositar(-10.00);

    console.log("Depositar 500.00: ");
    c1.depositar(500.00);

    c1.visualizar();


    // Criação do Menu
    while (true) {
        console.log(colors.fg.magenta,
            "\n**********************************************");
        console.log("\n             BANCO DO BRAZIL COM Z            ");
        console.log("\n**********************************************");
        console.log("\n           1 - Criar Conta                    ");
        console.log("           2 - Listar todas as Contas           ");
        console.log("           3 - Buscar Conta por Numero          ");
        console.log("           4 - Atualizar Dados da Conta         ");
        console.log("           5 - Apagar Conta                     ");
        console.log("           6 - Sacar                            ");
        console.log("           7 - Depositar                        ");
        console.log("           8 - Transferir valores entre Contas  ");
        console.log("           9 - Sair                             ");
        console.log("\n**********************************************",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = rl.questionInt("");

        if (opcao === 9) {
            sobreProjeto();
            process.exit(9);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "Criar Conta",
                    colors.reset);
                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong,
                    "Listar todas as Contas",
                    colors.reset);
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "Buscar Conta por Numero",
                    colors.reset);
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "Atualizar Dados da Conta",
                    colors.reset);
                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "Apagar Conta",
                    colors.reset);
                keyPress();
                break;

            case 6:
                console.log(colors.fg.whitestrong,
                    "Saque",
                    colors.reset);
                keyPress();
                break;

            case 7:
                console.log(colors.fg.whitestrong,
                    "Depósito",
                    colors.reset);
                keyPress();
                break;

            case 8:
                (colors.fg.whitestrong,
                    "Transferir valores entre Contas",
                    colors.reset);
                keyPress();
                break;

            default:
                (colors.fg.whitestrong,
                    "Operação inválida! Tente novamente.",
                    colors.reset);
                keyPress();
                break;
        }
    }
}

main();

export function sobreProjeto(): void {
    console.log(colors.fg.greenstrong,
        "\nBanco do Brazil com Z - O seu Futuro começa aqui! ",
        colors.reset, "");
    console.log("\n**************************************************");
    console.log(colors.fg.blue, "Projeto desenvolvido por Jeaninny Teixeira");
    console.log(" jeaninny.teixeira@gmail.com");
    console.log(" github.com/Jeaninny", colors.reset, "");
    console.log("**************************************************");
}

function keyPress(): void {
    console.log(colors.fg.yellow, "Pressione enter para continuar...", colors.reset);
    rl.prompt();
}