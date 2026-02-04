import readlinesync from "readline-sync";
import { colors } from './src/util/Colors';

function main() {

    let opcao: number;

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


        opcao = readlinesync.questionInt("Entre com a opção desejada: ");

        if (opcao === 9) {
            sobreProjeto();
            process.exit(9);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "Criar Conta",
                    colors.reset);
                break;

            case 2:
                console.log(colors.fg.whitestrong,
                    "Listar todas as Contas",
                    colors.reset);
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "Buscar Conta por Numero",
                    colors.reset);
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "Atualizar Dados da Conta",
                    colors.reset);
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "Apagar Conta",
                    colors.reset);
                break;

            case 6:
                console.log(colors.fg.whitestrong,
                    "Saque",
                    colors.reset);
                break;

            case 7:
                console.log(colors.fg.whitestrong,
                    "Depósito",
                    colors.reset);
                break;

            case 8:
                (colors.fg.whitestrong,
                    "Transferir valores entre Contas",
                    colors.reset);
                break;

            default:
                (colors.fg.whitestrong,
                    "Operação inválida! Tente novamente.",
                    colors.reset)
                break;
        }
    }
}

main();

function sobreProjeto(): void {
    console.log(colors.fg.greenstrong,
        "\nBanco do Brazil com Z - O seu Futuro começa aqui! ",
        colors.reset, "");
    console.log("\n**************************************************");
    console.log(colors.fg.blue, "Projeto desenvolvido por Jeaninny Teixeira");
    console.log(" jeaninny.teixeira@gmail.com");
    console.log(" github.com/Jeaninny", colors.reset, "");
    console.log("**************************************************");
}