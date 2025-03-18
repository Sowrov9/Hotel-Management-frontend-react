import React from 'react'

const About = () => {
  return (
   <>
            <section className="si__about__four__area pt-120 pb-120" style={{background: 'url(assets/imgs/about/bg.jpg)'}}>
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="si__section__title pb-50 text-center">
                <h4>The Beach About</h4>
                <h5>When Luxury Meets Beach</h5>
                <p>
                    Contemporary designs, elegant interiors, and perfect location!
                    Triumph Luxury Hotel is ideal for families, couples <br />
                    alike. With its prime location in one of New Cairo.
                </p>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="si__about__four__thumb image-anime">
                <img src="assets/imgs/about/pic11.png" alt />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="si__about__four__thumbtwo image-anime">
                <img src="assets/imgs/about/pic22.png" alt />
                </div>
            </div>
            <div className="col-lg-3">
                <div className="si__about__four__main">
                <div className="si__about__four__box">
                    <div className="si__about__four__icon">
                    <a href="#"><i className="fa-sharp fa-solid fa-location-dot" /></a>
                    </div>
                    <div className="si__about__four__text">
                    <h6>Address</h6>
                    <p>
                        746 Blue Spring Ave <br />
                        Dhaka. Bangladesh
                    </p>
                    </div>
                </div>
                <div className="si__about__four__box si-border">
                    <div className="si__about__four__icon">
                    <a href="#"><i className="fa-sharp fa-solid fa-phone" /></a>
                    </div>
                    <div className="si__about__four__text">
                    <h6>reservations</h6>
                    <p>(880-1848-3909-24)</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

   </>
  )
}

export default About