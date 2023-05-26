import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const url = "https://api.iex.cloud"


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