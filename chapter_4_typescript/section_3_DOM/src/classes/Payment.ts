import {HasFormatter} from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
    constructor (
        readonly receipient: string,
        readonly details: string,
        private amount: number
    ) {}

    format() {
        return `${this.receipient} is owed $${this.amount} for ${this.details}`;
    }
}