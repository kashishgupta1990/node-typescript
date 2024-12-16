class Transaction {
    transaction_id: number; // Primary Key
    agency_id: number; // Foreign Key referencing Agency
    company_id: number; // Foreign Key referencing Company
    transacted_on: Date; // Date of transaction
    amount: number; // Transaction amount

    constructor(transaction_id: number, agency_id: number, company_id: number, transacted_on: Date, amount: number) {
        this.transaction_id = transaction_id;
        this.agency_id = agency_id;
        this.company_id = company_id;
        this.transacted_on = transacted_on;
        this.amount = amount;
    }
}
