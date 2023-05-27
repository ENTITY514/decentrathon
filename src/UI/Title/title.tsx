import style from "./title.module.css"

export enum ISizes {
    BIG,
    MEDIUM
}

interface ITitleProps {
    title: string | number
    color?: string
    size?: ISizes
}

export const Title: React.FC<ITitleProps> = ({ title, color, size = ISizes.BIG }) => {
    if (size === ISizes.BIG) {
        return (
            <div className={style.big}>
                {title}
            </div>
        )
    }
    else {
        return (
            <div className={style.medium}>
                {title}
            </div>
        )
    }
}