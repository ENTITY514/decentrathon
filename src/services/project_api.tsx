import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

type GetStatType = {   //статистика
    activeProviders: number
    averageLatency: number
}
type ProvidersType = {  //провайдеры
    address: string
    title: string
}
type getServiceProvidersType = {
    provider: providerType
    price: priceType
    kpi: kpiType
}
type providerType = {   //провайдер
    title: string
    operatorAddress: string
    fundingAddress: string
    sealAddress: string
    approvalAddress: string
    endpoint: string
    status: string
    deposit: string
}
type priceType = {
    readPrice: string
    storePrice: string
}
type kpiType = {
    latency: number
    uptime: number
}

const url = "https://3dc8-95-141-140-176.ngrok-free.app/api/"

export const ProvidersApi = createApi({
    reducerPath: "ProvidersApi",
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        getStat: build.query<GetStatType, string>({
            queryFn: async (arg) => {
                try {
                    const response = await fetch(url + "getStat");
                    return { data: await response.json() };
                }
                catch (e: any) {
                    return { error: e.message }
                }
            }
        }),
        getServiceProviders: build.query<ProvidersType, string>({
            queryFn: async (arg) => {
                try {
                    const response = await fetch(url + "getServiceProviders");
                    return { data: await response.json() };
                }
                catch (e: any) {
                    return { error: e.message }
                }
            }
        }),
        getServiceProvider: build.query<getServiceProvidersType, string>({
            queryFn: async (address: string) => {
                try {
                    const response = await fetch(url + `getServiceProvider/${address}`);
                    return { data: await response.json() };
                }
                catch (e: any) {
                    return { error: e.message }
                }
            }
        })
    })
})