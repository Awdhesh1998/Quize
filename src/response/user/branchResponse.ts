export interface IBranchResponse {
    id: number|string;
    name:string;
    branch_code:string;
    address:string;
    city:string;
    district_code:string;
    state_code:string;
    country_code:string;
    pin_code:string;
    is_main:string|boolean;
    organization_id: number|string;
}