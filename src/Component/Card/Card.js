import { useNavigate } from 'react-router-dom';
const Card=({title,price,img,id})=>{
    let navigate =useNavigate();
    //Change page
    const handler=()=>{
        let path=`/products/${id}`;
        navigate(path);
    }

    let productTitle= title.split(' ').slice(0,3).join(' ');

    return( 
    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 card" onClick={handler}>
                    <figure className="img">
                     <img src={img} alt="Card image cap" />
                    </figure>
                <div className="product-details">
                     <strong className="product-title">{productTitle}</strong>
                     <p className="product-price">${price}</p>
                     <img className="fav_icon" src={require('../../Images/heart.svg').default} alt='mySvgImage' />
                </div>
            </div>)
}
export default Card;

