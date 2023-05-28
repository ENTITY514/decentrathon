import { Link, useLocation } from 'react-router-dom';
import style from './nav.module.css';
import { ImageUI } from '../../UI/Image/image';
import { BlocksIcon, HomeIcon, SearchIcon, StatisticsIcon, TransactionsIcon, ValidatorsIcon } from './icons';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/redux';
import { SidebarSlice } from '../../Store/reducers/SideBar';
import { WINDOWS } from '../../Store/models/ISideBar';

export const Nav = () => {
    const state = useAppSelector(state => state.sidebarSlice)
    const dispatch = useAppDispatch()
    const actions = SidebarSlice.actions

    const location = useLocation()
    let pathname = location.pathname
    pathname = (pathname.replace('/', ''))
    switch (pathname) {
        case "":
            dispatch(actions.setActiveWindow(WINDOWS.DASHBOARD))
            break;
        case "explorer":
            dispatch(actions.setActiveWindow(WINDOWS.EXPLORER))
            break;
        case "blocks":
            dispatch(actions.setActiveWindow(WINDOWS.BLOCKS))
            break;
        case "transactions":
            dispatch(actions.setActiveWindow(WINDOWS.TRANSACTIONS))
            break;
        case "statistics":
            dispatch(actions.setActiveWindow(WINDOWS.STATISTICS))
            break;
        case "validators":
            dispatch(actions.setActiveWindow(WINDOWS.VALIDATORS))
            break;

        default:
            break;
    }

    return (
        <div className={style.container}>
            <div className={style.container1}>
                <ImageUI url={'images/main.png'} height='200px' />
                <div className={(state.active_window !== WINDOWS.DASHBOARD) ? style.link_box : style.link_boxActive}>
                    <HomeIcon color={state.active_window} />
                    <Link
                        onClick={() => dispatch(actions.setActiveWindow(WINDOWS.DASHBOARD))}
                        className={(state.active_window !== WINDOWS.DASHBOARD) ? style.link : style.linkActive}
                        to={""}>
                        Dashboard
                    </Link>
                </div>
                <div className={(state.active_window !== WINDOWS.EXPLORER) ? style.link_box : style.link_boxActive}>
                    <SearchIcon color={state.active_window} />
                    <Link
                        onClick={() => dispatch(actions.setActiveWindow(WINDOWS.EXPLORER))}
                        className={(state.active_window !== WINDOWS.EXPLORER) ? style.link : style.linkActive}
                        to={"explorer"}>
                        Explorer
                    </Link>
                </div>
                <div className={(state.active_window !== WINDOWS.BLOCKS) ? style.link_box : style.link_boxActive}>
                    <BlocksIcon color={state.active_window} />
                    <Link
                        onClick={() => dispatch(actions.setActiveWindow(WINDOWS.BLOCKS))}
                        className={(state.active_window !== WINDOWS.BLOCKS) ? style.link : style.linkActive}
                        to={"blocks"}>
                        Blocks
                    </Link>
                </div>

                <div className={(state.active_window !== WINDOWS.TRANSACTIONS) ? style.link_box : style.link_boxActive}>
                    <TransactionsIcon color={state.active_window} />
                    <Link
                        onClick={() => dispatch(actions.setActiveWindow(WINDOWS.TRANSACTIONS))}
                        className={(state.active_window !== WINDOWS.TRANSACTIONS) ? style.link : style.linkActive}
                        to={"transactions"}>
                        Transactions
                    </Link>
                </div>

                <div className={(state.active_window !== WINDOWS.VALIDATORS) ? style.link_box : style.link_boxActive}>
                    <ValidatorsIcon color={state.active_window} />
                    <Link
                        onClick={() => dispatch(actions.setActiveWindow(WINDOWS.VALIDATORS))}
                        className={(state.active_window !== WINDOWS.VALIDATORS) ? style.link : style.linkActive}
                        to={"validators"}>
                        Validators
                    </Link>
                </div>

                <div className={(state.active_window !== WINDOWS.STATISTICS) ? style.link_box : style.link_boxActive}>
                    <StatisticsIcon color={state.active_window} />
                    <Link
                        onClick={() => dispatch(actions.setActiveWindow(WINDOWS.STATISTICS))}
                        className={(state.active_window !== WINDOWS.STATISTICS) ? style.link : style.linkActive}
                        to={"statistics"}>
                        Statistics
                    </Link>
                </div>
            </div>
        </div>
    );
}