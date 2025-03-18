import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section
          className="si__fotter__area style-fotter"
          style={{
            background: "url(assets/imgs/footer/bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="si__fotter__right">
                  <div className="si__fotter__logo">
                    <img src="assets/imgs/logo/logo-3.svg" alt />
                  </div>
                  <div className="si__fotter__icon">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://instagram.com/">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="https://www.pinterest.com/">
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                    <a href="https://vimeo.com/">
                      <i className="fa-brands fa-vimeo-v" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="si__fotter__content">
                  <h5>About Us</h5>
                  <p>
                    There are many variations of passages
                    <br />
                    of available, but the majority have of
                    <br />
                    suffered alteration in There are many
                    <br />
                    variations of passages.
                  </p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="si__fotter__content">
                  <h5>Useful Links</h5>
                  <div className="si__fotter__list">
                    <span>
                      <a href="#">About us</a>
                    </span>
                    <span>
                      <a href="#">Community Blog </a>
                    </span>
                    <span>
                      <a href="#">Destinations </a>
                    </span>
                    <span>
                      <a href="#">Meet the Guide</a>
                    </span>
                    <span>
                      <a href="#">Contact Now </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="si__fotter__listtwo">
                  <span>
                    <a href="#">Account</a>
                  </span>
                  <span>
                    <a href="#">Tour Listings </a>
                  </span>
                  <span>
                    <a href="#">Privacy Policy </a>
                  </span>
                  <span>
                    <a href="#">Help</a>
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="si__fotter__content">
                  <h5>Subscribe Now</h5>
                  <p>Subscribe Our Newsletter For Getting Quick Updates</p>
                </div>
                <div className="si__fotter__form">
                  <input type="email" placeholder="Your Email Address" />
                </div>
                <div className="si__fotter__btn">
                  <a className="room__btn2 fotter__btn" href="room.html">
                    Send Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-wrapper mt-50 dark">
            <div className="container">
              <div className="footer__bottom">
                <div className="footer__copyright footer__copyright-2">
                  <p className="copy">
                    © <a href="#">Yoursitename</a> 2024 | All Rights Reserved
                  </p>
                </div>
                <div className="footer__copyright-menu footer__copyright-menu-2">
                  <ul>
                    <li>
                      <a href="about-us.html">Trams &amp; Condition</a>
                    </li>
                    <li>
                      <a href="about-us.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="about-us.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
