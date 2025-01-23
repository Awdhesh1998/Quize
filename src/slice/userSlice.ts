import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../service/user/user";
import { IOrganizationResponse } from "../response/user/organizationResponse";
import { IOwnerResponse } from "../response/user/ownerResponse";
import { IBranchResponse } from "../response/user/branchResponse";
import { IUserResponse } from "../response/user/userResponse";

// Define the initial state with appropriate types
const initialState = {
    user: null,
    branch: null,
    owner: null,
    organization: null,
} as {
    user: null | IUserResponse;
    branch: Array<IBranchResponse> | null;
    owner: null | IOwnerResponse;
    organization: null | IOrganizationResponse;
};

export const slice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.userInfo.matchFulfilled, (state, action) => {
                console.log("User Info Fulfilled:", action.payload);
                state.user = action.payload.data.user || null;
                state.organization = action.payload.data.organization || null;
                state.owner = action.payload.data.owner || null;
                state.branch = action.payload.data.branch || null;
            })
            .addMatcher(userApi.endpoints.userInfo.matchRejected, (state, action) => {
                console.error("User Info Rejected:", action.error);
                console.log(state);
            })
            .addMatcher(userApi.endpoints.userInfo.matchPending, () => {
                console.log("User Info Pending...");
            });
    },
});

export const userSelector = (state: { user: typeof initialState }) => state.user;

export default slice.reducer;
