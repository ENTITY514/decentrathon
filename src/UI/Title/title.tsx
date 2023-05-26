import style from "./title.module.css"

enum ISizes {
    BIG,
    MEDIUM
}

interface ITitleProps {
    title: string
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