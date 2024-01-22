type Props = {
    onClick: () => void
}

const Button = (props: Props) => {
    return <button type="button" onClick={props.onClick}>Go!</button>
}

export default Button