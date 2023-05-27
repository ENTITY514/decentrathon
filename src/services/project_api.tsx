import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

type GetStatType = {   //статистика
    data: {
        activeProviders: number
        averageLatency: number
        latestBlock: number
        averageBlockTime: string
        transactionsCount: string
        activeProvidersGraph: Array<activeProvidersGraphType>
        transactionsCountGraph: Array<transactionsCountGraphType>
        accountsCount: number
    }
}
type transactionsCountGraphType = {
    date: number
    transactionsCount: number
}
type activeProvidersGraphType = {
    date: number
    providersCount: number
}

type ProvidersType = {  //провайдеры
    data: Array<ProvidersTypeInfo>

}
type ProvidersTypeInfo = {
    address: string
    title: string
}

type getServiceProvidersType = {
    data: getServiceProviders
}
type getServiceProviders = {
    provider: providerTypeFull
    price: priceType
    kpi: kpiType
    transactions: dataType
}
type providerTypeFull = {
    title: string
    operatorAddress: string
    fundingAddress: string
    sealAddress: string
    approvalAddress: string
    endpoint: string
    status: string
    deposit: string
    balance: number
}
type priceType = {
    readPrice: string
    storePrice: string
}
type kpiType = {
    latency: number
    uptime: number
}
type dataType = {
    data: Array<transactionsType>
}
type transactionsType = {
    hash: string
    block: string
    time: string
}
const url = "https://97dc-95-141-140-176.ngrok-free.app/api/"

export const ProvidersApi = createApi({
    reducerPath: "ProvidersApi",
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        getStat: build.query<GetStatType, string>({
            query: () => ({
                url: `/getStat`
            })
        }),
        getServiceProviders: build.query<ProvidersType, string | number>({
            query: () => ({
                url: `/getServiceProviders`
            })
        }),
        getServiceProvider: build.query<ProvidersType, string>({
            query: (address) => ({
                url: `getServiceProvider/${address}`
            })
        }),
    })
})