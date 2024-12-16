class Company {
    company_id: number; // Primary Key
    parent_company_id: number | null; // Nullable for companies without a parent
    company_name: string;

    constructor(company_id: number, parent_company_id: number | null, company_name: string) {
        this.company_id = company_id;
        this.parent_company_id = parent_company_id;
        this.company_name = company_name;
    }
}
