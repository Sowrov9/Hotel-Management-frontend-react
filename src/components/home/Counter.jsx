import React from 'react'

const Counter = () => {
  return (
    <>
    <section className="si__counter__four__area pt-120 pb-120" style={{background: 'url(assets/imgs/counter/bg.jpg)'}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="si__counter__four__box">
          <div className="si__counter__four__box__inner">
            <div className="counter__box">
              <div className="si__icon">
                <img src="assets/imgs/counter/pc1.png" alt />
              </div>
              <div className="counter__item si__item">
                <h3 className="counter__item-title">
                  <span className="odometer" data-count={120}>0</span>%
                </h3>
                <p>Available Menus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="si__counter__four__box">
          <div className="si__counter__four__box__inner">
            <div className="counter__box">
              <div className="si__icon">
                <img src="assets/imgs/counter/pc2.png" alt />
              </div>
              <div className="counter__item si__item">
                <h3 className="counter__item-title">
                  <span className="odometer" data-count={98}>0</span>%
                </h3>
                <p>Positive Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="si__counter__four__box">
          <div className="si__counter__four__box__inner">
            <div className="counter__box">
              <div className="si__icon">
                <img src="assets/imgs/counter/pc3.png" alt />
              </div>
              <div className="counter__item si__item">
                <h3 className="counter__item-title">
                  <span className="odometer" data-count={39}>0</span>+
                </h3>
                <p>Professional Staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="si__counter__four__box">
          <div className="si__counter__four__box__inner">
            <div className="counter__box">
              <div className="si__icon">
                <img src="assets/imgs/counter/pc4.png" alt />
              </div>
              <div className="counter__item si__item">
                <h3 className="counter__item-title">
                  <span className="odometer" data-count={79}>0</span>+
                </h3>
                <p>Room Available</p>
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

export default Counter