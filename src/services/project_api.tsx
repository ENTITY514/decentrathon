import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

type GetStatType = {
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


type ProvidersType = {
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
    transactions: Array<transactionsType>
}
type providerTypeFull = {
    title: string
    operatorAddress: string
    fundingAddress: string
    sealAddress: string
    approvalAddress: string
    endpoint: string
    status: string
    deposit: number
    balance: number
}
type priceType = {
    readPrice: number
    storePrice: number
}
type kpiType = {
    latency: number
    uptime: number
}
type transactionsType = {
    hash: string
    block: string
    time: string
}

type getIsProviderType = {
    data: true
}


type getAccountType = {
    data: AccountType
}
type AccountType = {
    balance: number
    transactions: Array<transactionsDataType>
}
type transactionsDataType = {
    hash: string
    block: string
    time: string
}


type getBlocksType = {
    data: Array<BlocksType>
}
type BlocksType = {
    index: string
    time: string
    txCount: string
}



type getBlockType = {
    data: {
        index: string
        hash: string
        time: string
        proposer: string
        transactions: Array<getBlockTransactionsType>
        signatures: Array<{
            validator_address: string,
            timestamp: string
        }>
    }
}

type getBlockTransactionsType = {
    hash: string
    block: string
    time: string
}

type getTransactionsType = {
    data: Array<TransactionsType>
}
type TransactionsType = {
    hash: string
    block: string
    time: string
}



type getTransactionType = {
    data: {
        hash: string
        block: string
        time: string
        gas: GasType
        logs: any
    }
}
type GasType = {
    maxGas: string
    usedGas: string
}

type getValidatorsType = {
    data: Array<ValidatorType>
}
type ValidatorType = {
    address: string
    votingPower: string
}

const url = "https://bf81-178-89-138-208.ngrok-free.app/api"

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
        getServiceProvider: build.query<getServiceProvidersType, string>({
            query: (address) => ({
                url: `/getServiceProvider/${address}`
            })
        }),
        getIsProvider: build.query<{ data: boolean }, string>({
            query: (address) => ({
                url: `/isProvider/${address}`
            })
        }),
        getAccount: build.query<getAccountType, string>({
            query: (address) => ({
                url: `/getAccount/${address}`
            })
        }),
        getBlocks: build.query<getBlocksType, string>({
            query: () => ({
                url: `/getBlocks`
            })
        }),
        getBlock: build.query<getBlockType, string>({
            query: (block_index) => ({
                url: `/getBlock/${block_index}`
            })
        }),
        getTransactions: build.query<getTransactionsType, string>({
            query: () => ({
                url: `/getTransactions`
            })
        }),
        getTransaction: build.query<getTransactionType, string>({
            query: (hash) => ({
                url: `/getTransaction/${hash}`
            })
        }),
        getValidators: build.query<getValidatorsType, string>({
            query: () => ({
                url: "/getValidators"
            })
        }),
    })
})
