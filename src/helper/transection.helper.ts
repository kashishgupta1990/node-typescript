export class TransactionHelper {


    public static computeTotalSpent({
        existingTotal,
        transactionAmount
    }: {
        existingTotal: number;
        transactionAmount: number;
    }) {

        return existingTotal + transactionAmount;
    }

}