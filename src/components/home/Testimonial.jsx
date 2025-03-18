import React from 'react'

const Testimonial = () => {
  return (
    <>
            <section className="si__testimonial__four__area pt-120 pb-120" style={{background: 'url(assets/imgs/testimonial/BG-four.png)', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="swiper card-testimonial">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                    <div className="si__testimonial__four__box">
                        <div className="si__testimonial__four__text text-center">
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod <br />
                            tempor incididunt ut labore et dolore magna aliqua.
                        </h6>
                        </div>
                        <div className="si__testimonial__four__content text-center">
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <h5>Abu Talha</h5>
                        <span>Web Developer</span>
                        </div>
                    </div>
                    </div>
                    <div className="swiper-slide">
                    <div className="si__testimonial__four__box">
                        <div className="si__testimonial__four__text text-center">
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod <br />
                            tempor incididunt ut labore et dolore magna aliqua.
                        </h6>
                        </div>
                        <div className="si__testimonial__four__content text-center">
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <a href="#"><i className="fa-solid fa-star" /></a>
                        <h5>Misba Rahman</h5>
                        <span>Designer </span>
                        </div>
                    </div>
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

export default Testimonial