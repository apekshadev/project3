const Button=({text, onClick,className, img, arialabel,text1,type})=>{
    return (<>
                <button type= {type} aria-label={arialabel} className={className} onClick={onClick}>
                {img ?<img src={img} alt=" "/>:null  }
                <span className="btn_fulltext">{text}</span><span className="btn_mobiletext" >{text1}</span>
                </button>
             </>);
             }
    export default Button;