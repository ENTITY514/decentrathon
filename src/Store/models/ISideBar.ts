export enum WINDOWS {
    DASHBOARD,
    EXPLORER,
    BLOCKS,
    TRANSACTIONS,
    STATISTICS
}

export interface ISidebar {
    active_window: WINDOWS
}