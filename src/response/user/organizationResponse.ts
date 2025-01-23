import { IBranchResponse } from "./branchResponse";
import { IUserResponse } from "./userResponse";

export interface IOrganizationResponse {
    id: number|string;
    name:string;
    organization_code:string;
    subtitle:string|null;
    nameplate: string|null;
    logo:string|null;
    phone: string;
    email: string;
    is_verified: string| null;
    user_id: string|number;
    user: null| IUserResponse;
    branch: null| Array<IBranchResponse>;
}