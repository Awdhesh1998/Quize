import { api } from "../api";

export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        userInfo: build.query({
            query: () => 'info',
            providesTags:['User']
        }),
    }),
});

// Export hooks for the endpoint
export const { useUserInfoQuery } = userApi;
