import { Link } from "react-router-dom";
const CategoryCard=({data, link})=>{
    return(
    <>
        <Link to={link} className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 category_card">
            <img src={data.img} alt="womenCategory"/>
            <div className="overlay">
                <h4>{data.name}</h4>
                <p>{data.description}</p>
            </div>
        </Link>
    </>);

}
export default CategoryCard;