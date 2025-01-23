import { api } from "../api";

export const studentApi=  api.injectEndpoints({
    endpoints:(build)=>({
        studentList: build.query({
            query: (params) => ({
                url: 'student',
                method: 'GET',
                params, // Pass the params directly in the request
              }),
        })
    }),
});

export const {useStudentListQuery} =studentApi;