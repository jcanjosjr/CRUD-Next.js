interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props) {
    const cor = props.cor ?? 'green'

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r to-${cor}-400 from-${cor}-400
            text-white px-3 py-2 rounded-md
            ${props.className} 
        `}>
            {props.children}
        </button>
    )
}