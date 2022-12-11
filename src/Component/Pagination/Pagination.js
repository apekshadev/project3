import { NavLink } from "react-router-dom";

const Pagination=({cardsPerPage, totalCards,paginate})=>{
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalCards/cardsPerPage); i++){
        pageNumbers.push(i);

    }
  const activeLinkStyle=({isActive})=>{
    return{
        fontWeight:isActive ?"bold":"normal",
        textDecoration:isActive ?"underline":"none",
    }

  }
    return(
        <div className="pagination">
            <ul>
                {pageNumbers.map(number=>
                    (<li key={number}> 
                    <NavLink onClick={() => paginate(number)} to={number} className='page-link' style={activeLinkStyle}>
                    {number}
                    </NavLink>
                    </li>)
                )}
            </ul>
        </div>
    )
}
export default Pagination;