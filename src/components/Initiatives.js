/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import initiative from '../images/initiative.png';

const Initiatives = () => {
  return (
      <>
          {/* Initiatives section starts here */}
    <section className="initiatives_container container-fluid ">
        {/* Container starts */}
        <div className="container">
            {/* Row starts */}
            <div className="row">
                {/* Content starts */}
                <div className="col-12 content">
                <h3 className="wow animate__animated animate__fadeInUp">Highlights of Key Initiatives</h3>
                <p className="wow animate__animated animate__fadeInUp">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ea optio repudiandae vitae, atque enim. Voluptas sed, laboriosam nemo sunt, dignissimos architecto, sequi consequuntur pariatur libero assumenda hic ipsa magnam.</p>
                {/* Initiatives starts */}
            <div className="initiatives">
                <div className="initiative">
                    <img src={initiative} alt="" className="wow animate__animated animate__fadeInUp" />
                    <span className="wow animate__animated animate__fadeInUp">Lorem ipsum</span>
                </div>
                <div className="initiative">
                    <img src={initiative} alt="" className="wow animate__animated animate__fadeInUp" />
                    <span className="wow animate__animated animate__fadeInUp">Lorem ipsum</span>
                </div>
                <div className="initiative">
                    <img src={initiative} alt="" className="wow animate__animated animate__fadeInUp" />
                    <span className="wow animate__animated animate__fadeInUp">Lorem ipsum</span>
                </div>
                <div className="initiative">
                    <img src={initiative} alt="" className="wow animate__animated animate__fadeInUp" />
                    <span className="wow animate__animated animate__fadeInUp">Lorem ipsum</span>
                </div>
                <div className="initiative">
                    <img src={initiative} alt="" className="wow animate__animated animate__fadeInUp" />
                    <span className="wow animate__animated animate__fadeInUp">Lorem ipsum</span>
                </div>
        </div>
                {/* Initiatives ends */}
        </div>
                {/* Content ends */}
        </div>
            {/* Row ends */}
        </div>
        {/* Container ends */}
    </section>
    {/* Initiatives section ends here */}

    </>
  )
}


export default Initiatives;
