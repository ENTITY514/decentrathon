import style from "./loader.module.css"

export const Loader: React.FC = () => {
    return (
        <div className={style.container}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto", background: "transparent", display: "block", shapeRendering: "auto" }} width="197px" height="197px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#00ba34" strokeWidth="6" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.4492753623188404s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle></svg>
        </div>
    );
}