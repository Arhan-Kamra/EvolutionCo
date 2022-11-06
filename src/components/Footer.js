/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

import caretWhite from '../images/caret-white.png';
import facebook from '../images/social-icons/Facebook.png';
import instagram from '../images/social-icons/instagram.png';
import pinterest from '../images/social-icons/pinterest.png';
import youtube from '../images/social-icons/youtube.png';

const Footer = () => {

    const [clickQuery, queryClicked] = useState(false);

    return (
        <>
            {/* Footer section starts here */}
            <footer className="">
                {/* Top footer section starts */}
                <div className="top_footer">
                    {/* Row starts */}
                    <div className="row">
                        <div className="col-md-6 left_section">
                            <h3>say hello</h3>
                            <div className="address_container">

                                <div className="address">
                                    <span className="title wow animate__animated animate__fadeInUp">headquarters</span>
                                    <h4>hindustan coca-cola beverages private limited</h4>
                                    <span className="text">brigade magnum, tower a, 5th floor, amruthahalli, kodigehalli post, bangalore - 560092</span>
                                </div>

                                <div className="address">
                                    <span className="title wow animate__animated animate__fadeInUp">registered office</span>
                                    <h4>hindustan coca-cola beverages private limited</h4>
                                    <span className="text">b-91, mayapuri industrial area phase - 1, new delhi - 110064</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 right_section">
                            <div className="form-container">
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    queryClicked(!clickQuery);
                                }}>Type of Query <img src={caretWhite} alt="" /></a>
                                <div className="form_parent">
                                    <form method="GET" style={{ transform: clickQuery ? "translateY(-392px)" : "translateY(0)" }}>
                                        <input type="text" placeholder="Name" />
                                        <input type="number" placeholder="Number" />
                                        <textarea name="" id="" cols="30" rows="1" placeholder="Message"></textarea>
                                        <button type="submit">submit <img src={caretWhite} alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Row ends */}
                </div>
                {/* Top footer section ends */}

                {/* Container starts */}
                <div className="container">
                    {/* Row starts */}
                    <div className="row">
                        {/* Bottom footer section starts */}
                        <div className="bottom_footer">
                            {/* First list starts */}
                            <ul className="first_list wow animate__animated animate__fadeInUp">
                                <li><a href="#">home</a></li>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">operations</a></li>
                                <li><a href="#">work with us</a></li>
                                <li><a href="#">sustainability</a></li>
                                <li><a href="#">media centre</a></li>
                                <li><a href="#">blog</a></li>
                            </ul>
                            {/* First list ends */}

                            {/* Second list starts */}
                            <ul className="second_list wow animate__animated animate__fadeInUp">
                                <li><a href="#"><img src={facebook} alt="" /></a></li>
                                <li><a href="#"><img src={instagram} alt="" /></a></li>
                                <li><a href="#"><img src={youtube} alt="" /></a></li>
                                <li><a href="#"><img src={pinterest} alt="" /></a></li>
                            </ul>
                            {/* Second list ends */}

                            {/* Third list starts */}
                            <ul className="third_list wow animate__animated animate__fadeInUp">
                                <li><a href="#">terms &amp; conditions</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">disclaimer</a></li>
                                <li><a href="#">sitemap</a></li>
                                <li><a href="#">blog</a></li>
                            </ul>
                            {/* Third list ends */}

                            <p className="first_p">&copy; 2018-2019 Hindustan Coca-Cola Beverages Pvt. Ltd. All Rights Reserved</p>

                            <p className="second_p">Coca-Cola, Coke, Dynamic Ribbon, Contour Bottle, Sprite, Limca, Thums Up, Maaza, Fanta and Minute Maid are registered trademarks of The Coca-Cola Company</p>

                            <p className="third_p wow animate__animated animate__fadeInUp">Designed and Developed by <a href="#">EvolutionCo</a></p>


                        </div>
                        {/* Bottom footer section ends */}
                    </div>
                    {/* Row ends */}
                </div>
                {/* Container ends */}
            </footer>
            {/* Footer section ends here */}
        </>
    )
}


export default Footer;
