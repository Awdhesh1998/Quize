import { ILoginRequest } from "../../request/auth/LoginRequest";
import { api } from "../api";

export const authApi = api.injectEndpoints({
    endpoints:(build)=>({
        login: build.mutation<any,any>({
            query:(credentials: ILoginRequest) =>({
                url:'login',
                method: 'POST',
                body: credentials
            })
        })

    })
})

export const {useLoginMutation} = authApi;