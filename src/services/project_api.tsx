import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const url = "https://af15-95-141-140-176.ngrok-free.app"


export const ProvidersApi = createApi({
    reducerPath: "ProvidersApi",
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        fetch: build.query<string, number>({
            query: () => ({
                url: `/`
            })
        })
    })
})