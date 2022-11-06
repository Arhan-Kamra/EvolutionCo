/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import caret from '../images/caret.png';

const Community = () => {
    return (
    <>
          {/* Footer section starts here */}
    <section className="community ">
        {/* Container starts */}
        <div className="container">
            {/* Row starts */}
            <div className="row">
        <h3 className="col-12 wow animate__animated animate__fadeInUp">HCCB in the Community</h3>


        {/* Events section starts */}
        <div className="programs_container col-12 offset-sm-1 col-sm-5 offset-md-1 col-md-5 offset-md-2 col-lg-4">
            <div className="programs occasion">
                <h4 className="wow animate__animated animate__fadeInUp">programs</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit quis, quo libero porro debitis adipisci blanditiis doloribus recusandae ratione.</p>
                <a href="#" className="wow animate__animated animate__fadeInUp">view more <img src={caret} alt="" /></a>
            </div>
            </div>
        {/* Events section starts */}

        {/* Events section starts */}
            <div className="events_container col-12 col-sm-5  col-md-5 col-lg-4">
            <div className="events occasion">
                <h4 className="wow animate__animated animate__fadeInUp">events</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit quis, quo libero porro debitis adipisci blanditiis doloribus recusandae ratione.</p>
                <a href="#" className="wow animate__animated animate__fadeInUp">view more <img src={caret} alt=""/></a>
            </div>
            </div>
        {/* Events section ends */}


        </div>
        {/* Row ends */}
        </div>
        {/* Container ends */}
            </section>
          {/* Footer section ends here */}
            </>
  )
}

export default Community;
