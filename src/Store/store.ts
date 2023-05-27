import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/UserSlice";
import { ProvidersApi } from "../services/project_api";

const rootReducers = combineReducers({
    userSlice,
    [ProvidersApi.reducerPath]: ProvidersApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                immutableCheck: false,
                serializableCheck: false,
                thunk: true,
            }).concat(ProvidersApi.middleware)
        },
        devTools: process.env.NODE_ENV !== 'production'
    })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']