export class CustomFileSystemService { 


    public static async seedData() {
        const agencies = await this.readFile('agencies.json');
        const companies = await this.readFile('companies.json');
        const transactions = await this.readFile('transactions.json');


    }

    private static async readFile(filePath: string): Promise<any> {
        const file = await fs.readFile(filePath, 'utf8');
        return JSON.parse(file);
    }

}
