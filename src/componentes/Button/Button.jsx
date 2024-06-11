import './button.css';

function Button(props) {
    return(
        <>
            <button onClick={props.onClick} type= {props.type} class={props.class}>{props.text} </button>
        </>
    )
}
export default Button;