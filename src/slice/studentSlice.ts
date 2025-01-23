import { createSlice } from "@reduxjs/toolkit";
import { IPageResponse } from "../response/page/PageResponse";
import { studentApi } from "../service/user/student";
import { IRegisterResponse } from "../response/student/RegisterResponse";

const initialState = {
    pageDetails: null,
    studentList: []
} as {
    pageDetails: IPageResponse | null;
    studentList: Array<IRegisterResponse>;
};

export const slice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(studentApi.endpoints.studentList.matchFulfilled, (state, action) => {
            let payloadData = action.payload.data;
            state.studentList = payloadData.data;
            state.pageDetails = { ...payloadData, data: undefined };
            return state;
        });
    },
});

export const studentListSelector = (state: { student: { studentList: Array<IRegisterResponse>, pageDetails: IPageResponse | null } }) => ({
    studentList: state.student.studentList,
    pageDetails: state.student.pageDetails,
});

export default slice.reducer;
