import style from "./text.module.css"

export enum TextStyle {
    WHITE = "#FFFFFF",
    GREEN = "#00BA34",
    GREY = "rgba(255, 255, 255, 0.39)"
}

interface ITextProps {
    children: string | JSX.Element | React.ReactNode
    color: TextStyle
    fontSize?: string
    cursor?: string
    onClick?: () => void
}

export const Text: React.FC<ITextProps> = ({
    children,
    color = TextStyle.WHITE,
    fontSize = "16px",
    cursor,
    onClick
}) => {
    return (
        <div className={style.container} style={{ color, fontSize, cursor }} onClick={onClick}>
            {children}
        </div>
    )
}