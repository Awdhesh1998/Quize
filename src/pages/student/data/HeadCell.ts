import { IStudentList } from "./IStudentList";

export interface HeadCell {
    disablePadding?: boolean;
    id: keyof IStudentList;
    label: string;
    numeric?: boolean;
}
