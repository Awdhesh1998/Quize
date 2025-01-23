export interface IStudentResponse{
    id: number|string;
    name: string;
    unique_code: string;
    mother: string;
    father: string;
    email: string;
    phone: string;
    parents_phone: string;
    parents_email: string;
    address: string;
    city: string;
    district_code: string;
    state_code: string;
    country_code: string;
    pin_code: string;
    qualification: string;
    pic: null|string;
    user_id: number|string;
}