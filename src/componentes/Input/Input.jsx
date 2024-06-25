import './Input.css';

function Input(props) {
    return(
        <>
            <label> {props.text}</label><input type={props.type} name={props.name} id={props.id} class={props.class} placeholder={props.placeholder}/>
        </>
    )
}

export default Input;