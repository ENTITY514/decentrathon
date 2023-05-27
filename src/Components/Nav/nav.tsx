import { Link } from 'react-router-dom';
import style from './nav.module.css';
import { ImageUI } from '../../UI/Image/image';
import { HomeIcon, SearchIcon, StatisticsIcon } from './icons';
import { useState } from 'react';

export const Nav = () => {
    const [link, setLink] = useState<number>()
    return (
        <div className={style.container}>
            <div className={style.container1}>
                <ImageUI url={'images/main.png'} height='200px' />
                <div className={(link !== 1) ? style.link_box : style.link_boxActive}>
                    <HomeIcon color={link} />
                    <Link onClick={() => setLink(1)} className={(link !== 1) ? style.link : style.linkActive} to={""}>Dashboard</Link>
                </div>
                <div className={(link !== 2) ? style.link_box : style.link_boxActive}>
                    <SearchIcon color={link} />
                    <Link onClick={() => setLink(2)} className={(link !== 2) ? style.link : style.linkActive} to={"explorer"}>Explorer</Link>
                </div>
                <div className={(link !== 3) ? style.link_box : style.link_boxActive}>
                    <StatisticsIcon color={link} />
                    <Link onClick={() => setLink(3)} className={(link !== 3) ? style.link : style.linkActive} to={"statistics"}>Statistics</Link>
                </div>

                <div className={(link !== 4) ? style.link_box : style.link_boxActive}>
                    <StatisticsIcon color={link} />
                    <Link onClick={() => setLink(4)} className={(link !== 4) ? style.link : style.linkActive} to={"blocks"}>Blocks</Link>
                </div>
            </div>
        </div>
    );
}