import { Colors } from "../util/Colors";
import { formatarMoeda } from "../util/Currency";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    // Atributos específicos de Conta Corrente

    private _limite: number;

    // Construtor com a chamada para a Super Classe

    constructor(numero: number,
        agencia: number,
        titular: string,
        tipo: number,
        saldo: number,
        limite: number) {
        super(numero, agencia, titular, tipo, saldo);
        this._limite = limite;
    }

    //Métodos Getters e Setters específicos da classe Conta Corrente

    public get limite(): number {
        return this._limite;
    }

    public set limite(value: number) {
        this._limite = value;
    }

    //Sobrescrevendo métodos

    //Método sacar() sobrescrito
    public sacar(valor: number): boolean {
        if (valor <= 0) {
            console.log(Colors.fg.red, "O valor deve ser positivo! ", Colors.reset);
            return false;
        }

        if (valor > this.saldo + this._limite) {
            console.log(Colors.fg.red, "Saldo Insuficiente! ", Colors.reset);
            return false;
        }
        this.saldo -= valor;
        return true;
    }

    //Método visualizar() sobrescrito
    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da conta: R$ ${formatarMoeda(this._limite)}`);
    }
}