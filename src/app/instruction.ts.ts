import { TransactionType } from './TransactionType';

export class Instruction {
    id: number;
    secacc: number;
    id_client: number;
    id_transaction: number;
    instrument: string;
    quantity: number;
    price : number;
    Id_currency: number;
    Isin: string;
    tradeDate: Date;
    settlementDate: Date;
    transactionType: TransactionType;
    active: boolean;
}