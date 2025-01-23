import { IBranchResponse } from "../user/branchResponse";
import { IStudentResponse } from "./StudentResponse";

export interface IRegisterResponse{
    id: number| string;
    unique_code: string;
    reg_no: string;
    organization_code: string;
    branch_code: string;
    status: number|string;
    is_verified: string|null;
    batch_code: string|null;
    branch: IBranchResponse|null;
    student: IStudentResponse|null;
    updated_at: string;
}