class Agency {
    agency_id: number; // Primary Key
    parent_agency_id: number | null; // Nullable for agencies without a parent
    agency_name: string;

    constructor(agency_id: number, parent_agency_id: number | null, agency_name: string) {
        this.agency_id = agency_id;
        this.parent_agency_id = parent_agency_id;
        this.agency_name = agency_name;
    }
}
