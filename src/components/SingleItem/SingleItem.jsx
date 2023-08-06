import './singleItem.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from '../../assets/singleItem-slider-img/wall-paint-1.jpg'
import img2 from '../../assets/singleItem-slider-img/wall-paint-2.jpg'
import img3 from '../../assets/singleItem-slider-img/wall-paint-3.jpg'
import img4 from '../../assets/singleItem-slider-img/wall-paint-4.jpg'
import img5 from '../../assets/singleItem-slider-img/wall-paint-5.jpg'
import img6 from '../../assets/singleItem-slider-img/wall-paint-6.jpg'
import img7 from '../../assets/singleItem-slider-img/wall-paint-7.jpg'


const SingleItem = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
        
    return (
        <div className='single__Slider'>
        
        <Slider {...settings}>
          <div className='img__size'>
           <img src={img1} alt="" />
          </div>
          <div className='img__size'>
          <img src={img2} alt="" />
          </div>
          <div className='img__size'>
          <img src={img3} alt="" />
          </div>
          <div className='img__size'>
          <img src={img4} alt="" />
          </div>
          <div className='img__size'>
          <img src={img5} alt="" />
          </div>
          <div className='img__size'>
          <img src={img6} alt="" />
          </div>
          <div className='img__size'>
          <img src={img7} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default SingleItem;