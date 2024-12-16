export class AgencyRouter {

    @router.get('/')
    public static async getAgencies(query: any) {
        const agencies = await AgencyService.getAgencies(query);
        return agencies;
    }
}