/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Slider from "react-slick";
import approachSlider from '../images/approach_slider.png';
import caret from '../images/caret.png';

const Approach = () => {

 const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
          arrows: true,
            autoplay: true,
    autoplaySpeed: 5000
      }
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
          arrows: true,
            autoplay: true,
    autoplaySpeed: 5000
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
          arrows: true,
            autoplay: true,
    autoplaySpeed: 5000
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
        dots: false,
          arrows: true,
            autoplay: true,
    autoplaySpeed: 5000
      }
    }
  ]
};
    
    return (
      <>
          {/* Approach section starts here */}
      <section className="approach">
        <div>
            <ul>
                <li><a href="#">planet</a></li>
                <li><a href="#">people</a></li>
            </ul>
        </div>
        {/* Content starts */}
        <div className="content">
            <div className="top-content">
            <h3 className="wow animate__animated animate__fadeInUp">our approach</h3>
            <p>Sunil Lobo has always been a sports enthusiast. He shares some interesting tips on how you can continue to play your favorite sports regardless...</p>
            </div>

            <div className="bottom-content">
            <h4 className="wow animate__animated animate__fadeInUp">Always believed in giving back to the communities</h4>
            <p>Sunil Lobo has always been a sports enthusiast. He shares some interesting tips on how you can continue to play your favorite sports regardless...</p>
            </div>
        </div>
        {/* Content ends */}
        {/* Simple Image starts */}
        <div></div>
        {/* Simple Image ends */}
                {/* Slider starts  */}
                <Slider {...settings} className="approach_slider">
            {/* slide 1 */}
            <div className="approach_slide">
                <div className="img">
                    <img src={approachSlider} alt="" />
                </div>
                <div className="text">
                    <span>water stewardship</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde obcaecati quia. Aut fugiat assumenda ullam minima deleniti quibusdam quas.</p>
                    <a href="#">read more <img src={caret} alt="" /></a>
                </div>
            </div>

            {/* slide 2 */}
            <div className="approach_slide">
                <div className="img">
                    <img src={approachSlider} alt="" />
                </div>
                <div className="text">
                    <span>water stewardship</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde obcaecati quia. Aut fugiat assumenda ullam minima deleniti quibusdam quas.</p>
                    <a href="#">read more <img src={caret} alt="" /></a>
                </div>
            </div>
                    </Slider>
        {/* Slider ends */}
        {/* Slider dots starts */}
        <div></div>
        {/* Slider dots ends */}
            </section>
          {/* Approach section ends here */}
            </>

  )
}


export default Approach;
