import React from 'react'

const Banner = () => {
  return (
    <>
                <section className="banner__area p-relative z-1">
        <div className="si__slider__four__area" style={{background: 'url(assets/imgs/slider/bg3.png)'}}>
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="si__slider__four__content text-center">
                    <h2 className data-wow-delay=".4s">Maldives Luxury</h2>
                    <p>
                    A Luxury Hotel Located in the Maldives, Prices From $195 /
                    Night
                    </p>
                </div>
                <div className="si__slider__four__box">
                    <div className="si__slider__four__main bg-border">
                    <div className="si__slider__four__icon">
                        <svg width={20} height={17} viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4C0 2.114 -5.96046e-08 1.172 0.586 0.586C1.172 -5.96046e-08 2.114 0 4 0H16C17.886 0 18.828 -5.96046e-08 19.414 0.586C20 1.172 20 2.114 20 4C20 4.471 20 4.707 19.854 4.854C19.707 5 19.47 5 19 5H1C0.529 5 0.293 5 0.146 4.854C-8.9407e-08 4.707 0 4.47 0 4ZM0 13C0 14.886 -5.96046e-08 15.828 0.586 16.414C1.172 17 2.114 17 4 17H16C17.886 17 18.828 17 19.414 16.414C20 15.828 20 14.886 20 13V8C20 7.529 20 7.293 19.854 7.146C19.707 7 19.47 7 19 7H1C0.529 7 0.293 7 0.146 7.146C-8.9407e-08 7.293 0 7.53 0 8V13Z" fill="black" />
                        </svg>
                    </div>
                    <div className="si__slider__four__text">
                        <input id="datepicker" name="date" type="text" placeholder="Cheek In" />
                    </div>
                    </div>
                    <div className="si__slider__four__main">
                    <div className="si__slider__four__icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 21V19.5C14.4849 19.5 15.4602 19.306 16.3701 18.9291C17.2801 18.5522 18.1069 17.9997 18.8033 17.3033C19.4997 16.6069 20.0522 15.7801 20.4291 14.8701C20.806 13.9602 21 12.9849 21 12H22.5C22.5 14.3869 21.5518 16.6761 19.864 18.364C18.1761 20.0518 15.8869 21 13.5 21Z" fill="black" />
                        <path d="M13.5 17.25V15.75C13.9925 15.75 14.4801 15.653 14.9351 15.4645C15.39 15.2761 15.8034 14.9999 16.1517 14.6517C16.4999 14.3034 16.7761 13.89 16.9645 13.4351C17.153 12.9801 17.25 12.4925 17.25 12H18.75C18.75 13.3924 18.1969 14.7277 17.2123 15.7123C16.2277 16.6969 14.8924 17.25 13.5 17.25Z" fill="black" />
                        <path d="M20.25 8.25H15.75V5.25C15.75 4.65326 15.513 4.08097 15.091 3.65901C14.669 3.23705 14.0967 3 13.5 3H9.00001C8.40327 3 7.83098 3.23705 7.40902 3.65901C6.98706 4.08097 6.75001 4.65326 6.75001 5.25V8.25H2.25001C2.14129 8.24877 2.03361 8.27119 1.93442 8.31571C1.83523 8.36022 1.7469 8.42578 1.67556 8.50782C1.60422 8.58986 1.55157 8.68643 1.52126 8.79084C1.49094 8.89526 1.48369 9.00501 1.50001 9.1125L2.91001 18.225C2.96425 18.5827 3.14593 18.9087 3.42158 19.143C3.69723 19.3773 4.04826 19.5041 4.41001 19.5H11.25V18H4.39501L3.12751 9.75H20.25V8.25ZM8.25001 5.25C8.25001 5.05109 8.32903 4.86032 8.46968 4.71967C8.61033 4.57902 8.8011 4.5 9.00001 4.5H13.5C13.6989 4.5 13.8897 4.57902 14.0303 4.71967C14.171 4.86032 14.25 5.05109 14.25 5.25V8.25H8.25001V5.25Z" fill="black" />
                        </svg>
                    </div>
                    <div className="si__slider__four__text">
                        <input id="datepicker1" name="date" type="text" placeholder="Cheek Out" />
                    </div>
                    </div>
                    <div className="si__slider__four__main">
                    <div className="si__slider__four__icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.25 1.5C15.2295 1.5 16.0635 2.12625 16.3725 3H17.625C18.3212 3 18.9889 3.27656 19.4812 3.76885C19.9734 4.26113 20.25 4.92881 20.25 5.625V19.875C20.25 20.5712 19.9734 21.2389 19.4812 21.7312C18.9889 22.2234 18.3212 22.5 17.625 22.5H6.375C5.67881 22.5 5.01113 22.2234 4.51884 21.7312C4.02656 21.2389 3.75 20.5712 3.75 19.875V5.625C3.75 4.92881 4.02656 4.26113 4.51884 3.76885C5.01113 3.27656 5.67881 3 6.375 3H7.6275C7.78266 2.56113 8.07012 2.18119 8.45026 1.91254C8.8304 1.64389 9.28451 1.49976 9.75 1.5H14.25ZM9.75 3C9.55109 3 9.36032 3.07902 9.21967 3.21967C9.07902 3.36032 9 3.55109 9 3.75C9 3.94891 9.07902 4.13968 9.21967 4.28033C9.36032 4.42098 9.55109 4.5 9.75 4.5H14.25C14.4489 4.5 14.6397 4.42098 14.7803 4.28033C14.921 4.13968 15 3.94891 15 3.75C15 3.55109 14.921 3.36032 14.7803 3.21967C14.6397 3.07902 14.4489 3 14.25 3H9.75ZM6.375 4.5C6.07663 4.5 5.79048 4.61853 5.5795 4.8295C5.36853 5.04048 5.25 5.32663 5.25 5.625V19.875C5.25 20.1734 5.36853 20.4595 5.5795 20.6705C5.79048 20.8815 6.07663 21 6.375 21H17.625C17.9234 21 18.2095 20.8815 18.4205 20.6705C18.6315 20.4595 18.75 20.1734 18.75 19.875V5.625C18.75 5.32663 18.6315 5.04048 18.4205 4.8295C18.2095 4.61853 17.9234 4.5 17.625 4.5H16.3725C16.2173 4.93887 15.9299 5.31881 15.5497 5.58746C15.1696 5.85611 14.7155 6.00024 14.25 6H9.75C9.28451 6.00024 8.8304 5.85611 8.45026 5.58746C8.07012 5.31881 7.78266 4.93887 7.6275 4.5H6.375ZM9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5ZM7.125 16.1925C7.125 15.6773 7.32966 15.1832 7.69395 14.8189C8.05823 14.4547 8.55232 14.25 9.0675 14.25H14.9325C15.4477 14.25 15.9418 14.4547 16.3061 14.8189C16.6703 15.1832 16.875 15.6773 16.875 16.1925C16.875 17.3595 16.2473 18.225 15.3225 18.7598C14.43 19.2758 13.2525 19.5 12 19.5C10.7475 19.5 9.57 19.2758 8.6775 18.7598C7.75275 18.225 7.125 17.3588 7.125 16.1925Z" fill="black" />
                        </svg>
                    </div>
                    <div className="si__slider__four__text">
                        <div className="room__cheek-box-item room__cheek-box-item-3 style-four">
                        <div className="room-seclect">
                            <form>
                            <select id="nice1" className="nice-2">
                                <option>Room</option>
                                <option>Room 1</option>
                                <option>Room 2</option>
                                <option>Room 3</option>
                            </select>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="si__slider__four__btn">
                    <a className="room__btn2 btn-four" href="room.html">Booking Now</a>
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

export default Banner