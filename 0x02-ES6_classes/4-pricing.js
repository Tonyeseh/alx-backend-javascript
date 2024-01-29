import Currency from "./3-currency";


export default class Pricing {
    constructor (amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    get amount() { return this._amount; }
    set amount(value) { 
        if (typeof value !== "number") {
            throw new Error("amount must a number");
        }
        this._amount = value; }

    get currency() { return this._currency;}
    set currency(value) { 
        if (value.constructor.name !== "Currency") {
            throw new Error("currency must a Currency Object")
        }
        this._currency = value; }

    displayFullPrice () {
        return `${this._amount} ${this._currency.displayFullCurrency}`
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}