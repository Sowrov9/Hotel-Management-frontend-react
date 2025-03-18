import React from 'react'

const Price = () => {
  return (
   <>
        <section className="si__prices__area pt-120 pb-120" style={{background: 'url(assets/imgs/prices/bg.png)'}}>
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="si__section__title tilte-color pb-50 text-center">
                <h4>Our Room Prices</h4>
                <h5>The Best Prices</h5>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="si__prices__box">
                <div className="si__prices__text">
                    <h5>Single Room</h5>
                    <h6>$ <span>55</span>/ Night</h6>
                    <p>
                    Proin lacinia vehicula ametLorem ipsum dolor <br />
                    sit ametMorbi lacinia sagittis acuconsectetur <br />
                    adipiscing eli
                    </p>
                    <a href="#"> More Info</a>
                </div>
                <div className="si__prices__shape">
                    <img src="assets/imgs/prices/badge1.png" alt />
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="si__prices__box">
                <div className="si__prices__text">
                    <h5>Small Suit</h5>
                    <h6>$ <span>65</span>/ Night</h6>
                    <p>
                    Proin lacinia vehicula ametLorem ipsum dolor <br />
                    sit ametMorbi lacinia sagittis acuconsectetur <br />
                    adipiscing eli
                    </p>
                    <a href="#"> More Info</a>
                </div>
                <div className="si__prices__shape">
                    <img src="assets/imgs/prices/badge1.png" alt />
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="si__prices__box">
                <div className="si__prices__text">
                    <h5>Double Bet</h5>
                    <h6>$ <span>69</span>/ Night</h6>
                    <p>
                    Proin lacinia vehicula ametLorem ipsum dolor <br />
                    sit ametMorbi lacinia sagittis acuconsectetur <br />
                    adipiscing eli
                    </p>
                    <a href="#"> More Info</a>
                </div>
                <div className="si__prices__shape">
                    <img src="assets/imgs/prices/badge1.png" alt />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

   
   </>
  )
}

export default Price