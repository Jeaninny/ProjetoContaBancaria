import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

    // Atributos específicos de Conta Poupança

    private _aniversario: number;

    // Método Construtor
    constructor(numero: number,
        agencia: number,
        titular: string,
        tipo: number,
        saldo: number,
        aniversario: number) {

        super(numero, agencia, titular, tipo, saldo);
        this._aniversario = aniversario;

    }

    //Métodos Getters e Setters específicos da classe Conta Corrente

    public get aniversario(): number {
        return this._aniversario;
    }

    public set aniversario(value: number) {
        this._aniversario = value;
    }

    //Sobrescrevendo métodos

    //Método Visualizar sobrescrito
    public visualizar(): void {
        super.visualizar();
        console.log(`Aniversário da Conta: ${this._aniversario} de cada mês`);
    }
}