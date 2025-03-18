import React from 'react'

const Facility = () => {
  return (
    <>
            <section className="si__facilities__area pt-120 pb-120" style={{background: 'url(assets/imgs/facilities/bg.jpg)', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div className="container">
        <div className="row">
        <div className="col-lg-12">
            <div className="si__section__title pb-50 text-center">
            <h5>Our Facilities</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="si__facilities__box text-center">
            <div className="si__facilities__icon">
                <img src="assets/imgs/facilities/1.png" alt />
            </div>
            <div className="si__facilities__text">
                <h6>City View</h6>
                <p>
                Cras eu lorem a finibus velit nec <br />
                felis mollis suscipit
                </p>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="si__facilities__box text-center">
            <div className="si__facilities__icon">
                <div className="si__facilities__icon__inner">
                <img src="assets/imgs/facilities/2.png" alt />
                </div>
            </div>
            <div className="si__facilities__text">
                <h6>Swimming Pool</h6>
                <p>
                Cras eu lorem a finibus velit nec <br />
                felis mollis suscipit
                </p>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="si__facilities__box text-center">
            <div className="si__facilities__icon">
                <div className="si__facilities__icon__inner">
                <img src="assets/imgs/facilities/3.png" alt />
                </div>
            </div>
            <div className="si__facilities__text">
                <h6>South Facing</h6>
                <p>
                Cras eu lorem a finibus velit nec <br />
                felis mollis suscipit
                </p>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="si__facilities__box text-center">
            <div className="si__facilities__icon">
                <div className="si__facilities__icon__inner">
                <img src="assets/imgs/facilities/4.png" alt />
                </div>
            </div>
            <div className="si__facilities__text">
                <h6>Subway Nearby</h6>
                <p>
                Cras eu lorem a finibus velit nec <br />
                felis mollis suscipit
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

    </>
  )
}

export default Facility