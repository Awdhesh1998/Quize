import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../service/auth/auth";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false
} as { user: null; token: string | null; isAuthenticated: boolean }

export const slice = createSlice({
    name: "auth",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
            console.log(action)
            console.log(state)
        }).addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
            console.log('rejected', action)
            console.log(state)
        }).addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
            console.log('pending', action)
            console.log(state)
        });
    }
});

export default slice.reducer