const InputBox=({type,label,value,aria, onChange,name,id,size})=>{
    return(   <label htmlFor="input_name">{label}<br />
                <input type={type} value={value} name={name} id={id} aria-describedby={aria} onChange={onChange} size={size} required/>
            </label>)
}
export default InputBox;