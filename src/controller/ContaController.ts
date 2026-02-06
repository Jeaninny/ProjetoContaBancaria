import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { Colors } from "../util/Colors";


export class ContaController implements ContaRepository {

    // Atributos
    private listaContas = new Array<Conta>();
    public numero: number = 0;

    // Métodos do CRUD

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.visualizar();
        } else {
            console.log(Colors.fg.red, "\nConta não encontrada!", Colors.reset);
        }
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }

    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(Colors.fg.green, `\nA Conta número ${conta.numero} foi cadastrada com sucesso!`, Colors.reset);
    }
    atualizar(conta: Conta): void {

        const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(Colors.fg.green,
                `\nA Conta número ${conta.numero} foi atualizada com sucesso!`, Colors.reset);
        } else {
            console.log(Colors.fg.red,
                `\nConta não Encontrada! `, Colors.reset);
        }

    }
    deletar(numero: number): void {

        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(Colors.fg.green,
                `\nA Conta número ${numero} foi deletada com sucesso!`, Colors.reset);
        } else {
            console.log(Colors.fg.red,
                `\nConta não Encontrada! `, Colors.reset);
        }
    }


    // Métodos Bancários
    sacar(numero: number, valor: number): void {

    }
    depositar(numero: number, valor: number): void {

    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {

    }

    // Métodos Auxiliares
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
}