const Rating=({rating})=>{
    return(<>   {
        rating.map((item)=>{return(<>
            <div className="stars-outer">
                  <div
                    className="stars-inner"
                    style={{ width: item.rateInPercentage }}
                  ></div>
            </div>
            <span className="number-rating">({item.brand})</span>
        </>)})
    } </>)
}
export default Rating;