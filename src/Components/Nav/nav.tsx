import { Link } from 'react-router-dom';
import style from './nav.module.css';
import { ImageUI } from '../../UI/Image/image';
import { HomeIcon, SearchIcon } from './icons';

export const Nav = () => {
    return (
        <div className={style.container}>
            <ImageUI url={'images/main.png'} height='200px' />
            <div className={style.link_box}>
                <HomeIcon />
                <Link className={style.link} to={""}>Dashboard</Link>
            </div>
            <div className={style.link_box}>
                <SearchIcon />
                <Link className={style.link} to={"explorer"}>Explorer</Link>
            </div>
        </div>
    );
}