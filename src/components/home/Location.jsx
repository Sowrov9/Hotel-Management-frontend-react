import React from 'react'

const Location = () => {
  return (
    <>
        <section className="si__location__area pt-100 pb-120" style={{background: 'url(assets/imgs/location/bg.png)'}}>
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="si__section__title tilte-color pb-60 text-center">
                <h5>Popular Locations</h5>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="si__location__box">
                <div className="si__location__thumb">
                    <img src="assets/imgs/location/pic1.png" alt />
                </div>
                <div className="si__location__text">
                    <h6>Asia</h6>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="si__location__box">
                <div className="si__location__thumb">
                    <img src="assets/imgs/location/pic2.png" alt />
                </div>
                <div className="si__location__text">
                    <h6>America</h6>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="si__location__box">
                <div className="si__location__thumb">
                    <img src="assets/imgs/location/pic3.png" alt />
                </div>
                <div className="si__location__text">
                    <h6>Europe</h6>
                </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="si__location__right">
                <h6><a href="#">View All Location</a></h6>
                </div>
            </div>
            </div>
        </div>
        </section>

    
    </>
  )
}

export default Location