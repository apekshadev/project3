
import Slider from "react-slick";
const Carousel=({image, title})=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return(

    <Slider {...settings}>
              <div>
                   <figure> 
                        <img src={image} alt={title}/>  
                    </figure> 
              </div>
              <div>
                   <figure> 
                        <img src={image} alt={title}/>  
                    </figure> 
              </div>
              <div>
                   <figure> 
                        <img src={image} alt={title}/>  
                    </figure> 
              </div>
              <div>
                   <figure> 
                        <img src={image} alt={title}/>  
                    </figure> 
              </div>
              <div>
                   <figure> 
                        <img src={image} alt={title}/>  
                    </figure> 
              </div>
    
     
    </Slider>

  );
}
export default Carousel;