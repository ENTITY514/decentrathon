import style from "./wrapper.module.css"

interface IStandartWrapperProps {
    children: string | JSX.Element | React.ReactNode
    margin?: string
    padding?: string
    width?: string
    height?: string
    borderRadius?: string
    backgroundColor?: string
    border?: string
}

export const Wrapper: React.FC<IStandartWrapperProps> = ({
    children,
    margin = "10px",
    padding = "5px",
    width = "auto",
    height = "auto",
    borderRadius = "12px",
    backgroundColor = "#1E2026",
    border = "2px solid #2E323A"
}) => {
    return (
        <div className={style.container} style={{ margin, padding, width, height, borderRadius, backgroundColor, border }}>
            {children}
        </div>
    )
}