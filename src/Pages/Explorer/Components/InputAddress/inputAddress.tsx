import React from 'react';
import { Wrapper } from '../../../../UI/Wrapper/wrapper';
import style from './inputAddress.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks/redux';
import { SidebarSlice } from '../../../../Store/reducers/SideBar';

export const InputAddress = () => {
    const nav = useNavigate()
    const inp_ref = React.useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.sidebarSlice)
    const actions = SidebarSlice.actions
    const handleChange = () => {
        if (inp_ref.current) {
            dispatch(actions.setExplorerQuery(inp_ref.current.value))
        }
    }
    const handleClick = () => {
        nav("/account?q=" + inp_ref.current?.value)
    }
    return (
        <form className={style.container}>
            <input type="text" value={state.explorer_query} ref={inp_ref} onChange={handleChange} placeholder='Address' className={style.input} />
            <button className={style.button} onClick={handleClick}>Go</button>
        </form>
    );
}