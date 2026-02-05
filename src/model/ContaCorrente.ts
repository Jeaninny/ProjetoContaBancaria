import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    // Atributos específicos de Conta Corrente

    private _limite: number;

    // Método super serve para chamar a super classe
    // Depois que chama, adicionamos o atributo limite
    // e vira conta corrente.

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

    //Método Sacar sobrescrito
    public sacar(valor: number): boolean {

        if (valor <= 0) {
            console.log(colors.fg.red, "O valor deve ser positivo! ", colors.reset);
            return false;
        }

        if (valor > this.saldo + this._limite) {
            console.log(colors.fg.red, "Saldo Insuficiente! ", colors.reset);
            return false;
        }
        this.saldo -= valor;
        return true;
    }

    //Método Visualizar sobrescrito
    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da conta: R$ ${this._limite.toFixed(2)}`);
    }

}