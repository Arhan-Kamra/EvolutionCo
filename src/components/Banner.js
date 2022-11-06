/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Banner = () => {
    return (
    <>
          {/* Banner section starts here */}
    <section className="banner ">
        {/* Content starts */}
        <div className="content">
        <div className="breadcrumbs_container">
        {/* Breadcrumbs starts */}
            <div className="breadcrumbs">
                <span><a href="./index.html">home</a></span>
                <span>-</span>
                <span>sustainability</span>
            </div>
        {/* Breadcrumbs ends */}
        </div>
        {/* Text content starts */}
        <div className="text-content">
            <h3 className="text-center wow animate__animated animate__fadeInUp">Lorem ipsum sit dolor amet</h3>
            <h2 className="text-center wow animate__animated animate__fadeInUp">Earth a better place than we inherited</h2>
        </div>
        {/* Text content ends */}
        </div>
        {/* Content ends */}
    </section >
          {/* Banner section ends here */}
        </>

  )
}


export default Banner;
    