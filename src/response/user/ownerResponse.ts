export interface IOwnerResponse {
    id: number|string;
    name:string;
    phone: string;
    email: string;
    address: string;
    city: string;
    district_code: string;
    state_code: string;
    country_code: string;
    pin_code: string;
    pic: string| null;
    qualification: string;
    organization_id: string|number;
}