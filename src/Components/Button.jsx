export const Button = (props) => {

    return (
        <div>
            <button onClick={props.click} onMouseOver={props.hover} style={{ background: `${props.bg}`, padding: `${props.pad}`, color: `${props.color}` }}>{props.text} </button>
        </div>
    )
}