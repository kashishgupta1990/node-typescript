import { TransactionHelper } from "../helper/transection.helper";

export class TransactionService { 

    public static async saveTransaction({
        paymentId,
        agencyId,
        companyId,
        amount,
        date
    }: {
        paymentId: string;
        agencyId: string;
        companyId: string;
        amount: number;
        date: Date;
        }) {
    
        // Insert record into Transections table

        // Push this transaction to the queue
    }


    public static async processTransaction({
        transactionId,
        agencyId,
        companyId,
        amount,
        date
    }: {
        transactionId: string;
        agencyId: string;
        companyId: string;
        amount: number;
        date: Date;
        }) { 
        
        // Inside transaction according to DB
        const agency = await this.getAgency(agencyId);

        const company = await this.getCompany(companyId);

        const totalSpent = TransactionHelper.computeTotalSpent({
            existingTotal: agency.totalSpent,
            transactionAmount: amount
        });

        const updatedAgency = await this.updateAgency(agencyId, {
            totalSpent: totalSpent
        });

        const updatedCompany = await this.updateCompany(companyId, {
            totalSpent: totalSpent
        });
        // End transaction according to DB
    }
}
