import { useNavigate } from 'react-router-dom'
import style from './back.module.css'

type BackType = {
    url: string
}
export const Back: React.FC<BackType> = ({ url }) => {
    const Navigate = () => {
        window.history.back();
    }
    return (
        <div className={style.back} onClick={Navigate}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.8952 30.0833C21.4329 30.0833 20.9737 29.8823 20.6602 29.4928L13.0159 19.9928C12.544 19.4053 12.5504 18.5662 13.0333 17.9867L20.95 8.48668C21.5089 7.81535 22.508 7.7251 23.1809 8.28401C23.8522 8.84293 23.9425 9.84202 23.382 10.5133L16.2965 19.0174L23.1286 27.5073C23.6765 28.1881 23.5688 29.1856 22.8864 29.7334C22.595 29.9693 22.2435 30.0833 21.8952 30.0833Z" />
                <mask id="mask0_99_13390" maskUnits="userSpaceOnUse" x="12" y="7" width="12" height="24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.8952 30.0833C21.4329 30.0833 20.9737 29.8823 20.6602 29.4928L13.0159 19.9928C12.544 19.4053 12.5504 18.5662 13.0333 17.9867L20.95 8.48668C21.5089 7.81535 22.508 7.7251 23.1809 8.28401C23.8522 8.84293 23.9425 9.84202 23.382 10.5133L16.2965 19.0174L23.1286 27.5073C23.6765 28.1881 23.5688 29.1856 22.8864 29.7334C22.595 29.9693 22.2435 30.0833 21.8952 30.0833Z" />
                </mask>
                <g mask="url(#mask0_99_13390)">
                    <rect width="38" height="38" />
                </g>
            </svg>

        </div>
    );
}