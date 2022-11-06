/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Slider from "react-slick";
import initiative from '../images/initiative.png';

const Legislative = () => {
     const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          arrows: true,
            autoplay: true,
    autoplaySpeed: 1200
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
          arrows: true,
            autoplay: true,
    autoplaySpeed: 1200
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
    autoplaySpeed: 1200
      }
    }
  ]
};
    
    
    
  return (
      <>
          {/* Legislative section starts here */}
    <section className="legislative_container">
        {/* Container starts */}
        <div className="container">
            {/* Row starts */}
            <div className="row">
                <div className="col-12 content">
        <h3 className="wow animate__animated animate__fadeInUp">Our Four Prolonged CSR Legislative</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore ad quod quo architecto consequatur tempora odit repudiandae doloremque facilis.</p>
        <h4 className="wow animate__animated animate__fadeInUp">CSR Policies</h4>

                          {/* Legislative slider starts */}
            <Slider {...settings} className="legislative_slider">
            <div className="legislative">
                    <img src={initiative} alt="" />
                    <span>Lorem ipsum</span>
                </div>

                <div className="legislative">
                    <img src={initiative} alt="" />
                    <span>Lorem ipsum</span>
                </div>

                <div className="legislative">
                    <img src={initiative} alt="" />
                    <span>Lorem ipsum</span>
                </div>

                <div className="legislative">
                    <img src={initiative} alt="" />
                    <span>Lorem ipsum</span>
                </div>

                <div className="legislative">
                    <img src={initiative} alt="" />
                    <span>Lorem ipsum</span>
                </div>

                <div className="legislative">
                    <img src={initiative} alt="" />
                    <span>Lorem ipsum</span>
                </div>

                <div className="legislative">
                    <img src={initiative} alt="" />
                    <span>Lorem ipsum</span>
                </div>

                <div className="legislative">
                    <img src={initiative} alt="" />
                    <span>Lorem ipsum</span>
                </div>
                </Slider>
        {/* Legislative slider ends */}
        </div>
        </div>
        {/* Row ends */}
        </div>
        {/* Container ends */}
    </section>
    {/* Legislative section ends here */}

    </>
  )
}


export default Legislative;
