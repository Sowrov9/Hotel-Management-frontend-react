import axios from "axios";
import React, { useEffect, useState } from "react";

  const Rooms = () => {
//     const [rooms,setRooms]=useState([]);
//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/api/rooms')
//         .then(response => response.json())
//         .then(data => setRooms(data))
//         .catch(err => console.error(err));
       
//       }, []);
  const [rooms,setRooms]=useState([])
  useEffect(()=>{
    axios.get('http://localhost/Laravel_IDB/Hotel_Management/public/api/rooms')
    .then((res)=>{
      // console.log(res.data.rooms)
      setRooms(res.data.rooms)
    })
    .catch((err)=>{
      console.log(err);
      
    })
  },[])
  return (
    <>
      <div className="row mb-minus-30">
        {
            // rooms.map((room) => <h2>Asss</h2>)
        }
        
          {rooms?.map((room,i)=>{
            {room.title}
          })}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="room__item mb-30">
            <div className="room__thumb">
              <img
                src="assets/imgs/inner-page-img/room-1.png"
                alt="img not found"
              />
            </div>
            <div className="room__content">
              <div className="room__content-box mb-20">
                <h3>Junior Suite</h3>
                <div className="room__content-box-star">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-thin fa-star" />
                </div>
              </div>
              <h3 className="room__dolar">
                $50.00/<span>Night</span>
              </h3>
              <div className="room__cat mt-30">
                <div className="room__cat-item">
                  <svg
                    width={28}
                    height={17}
                    viewBox="0 0 28 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 15.1654V9.33203C3.5 8.9867 3.59956 8.61881 3.79867 8.22836C3.99778 7.83792 4.28711 7.5447 4.66667 7.3487V4.66536C4.66667 4.00736 4.89106 3.45398 5.33983 3.0052C5.78861 2.55642 6.342 2.33203 7 2.33203H12.25C12.6521 2.33203 12.9955 2.41486 13.2802 2.58053C13.5648 2.7462 13.8048 2.97448 14 3.26536C14.196 2.9737 14.4359 2.74542 14.7198 2.58053C15.0037 2.41564 15.3471 2.33281 15.75 2.33203H21C21.658 2.33203 22.2114 2.55642 22.6602 3.0052C23.1089 3.45398 23.3333 4.00736 23.3333 4.66536V7.3487C23.7129 7.5447 24.0022 7.83792 24.2013 8.22836C24.4004 8.61881 24.5 8.9867 24.5 9.33203V15.1654H23.3333V12.832H4.66667V15.1654H3.5ZM14.5833 6.9987H22.1667V4.66536C22.1667 4.33481 22.0547 4.05792 21.8307 3.8347C21.6067 3.61148 21.3298 3.49948 21 3.4987H15.75C15.4194 3.4987 15.1426 3.6107 14.9193 3.8347C14.6961 4.0587 14.5841 4.33559 14.5833 4.66536V6.9987ZM5.83333 6.9987H13.4167V4.66536C13.4167 4.33481 13.3047 4.05792 13.0807 3.8347C12.8567 3.61148 12.5798 3.49948 12.25 3.4987H7C6.66944 3.4987 6.39256 3.6107 6.16933 3.8347C5.94611 4.0587 5.83411 4.33559 5.83333 4.66536V6.9987ZM4.66667 11.6654H23.3333V9.33203C23.3333 9.00148 23.2213 8.72459 22.9973 8.50136C22.7733 8.27814 22.4964 8.16614 22.1667 8.16536H5.83333C5.50278 8.16536 5.22589 8.27736 5.00267 8.50136C4.77944 8.72536 4.66744 9.00225 4.66667 9.33203V11.6654Z"
                      fill="#0E1730"
                    />
                  </svg>
                  <span>3 Bed</span>
                </div>
                <div className="room__cat-item">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 13.083C3 13.006 3 12.967 3.002 12.935C3.01775 12.6927 3.12111 12.4645 3.29279 12.2928C3.46446 12.1211 3.69273 12.0178 3.935 12.002C3.968 12 4.005 12 4.083 12H19.917C19.994 12 20.032 12 20.065 12.002C20.3073 12.0178 20.5355 12.1211 20.7072 12.2928C20.8789 12.4645 20.9822 12.6927 20.998 12.935C21 12.967 21 13.005 21 13.083C21 13.478 21 13.676 20.986 13.898C20.777 17.185 17.983 20.087 14.706 20.418C14.485 20.441 14.356 20.446 14.098 20.456C13.399 20.4836 12.6995 20.4982 12 20.5C11.35 20.5 10.636 20.483 9.902 20.456C9.644 20.446 9.515 20.441 9.295 20.419C6.017 20.087 3.223 17.185 3.015 13.898C3 13.676 3 13.478 3 13.083Z"
                      stroke="#0E1730"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 20L5 22M18 20L19 22M2 12H22"
                      stroke="#0E1730"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.25 13C2.25 13.1989 2.32902 13.3897 2.46967 13.5303C2.61032 13.671 2.80109 13.75 3 13.75C3.19891 13.75 3.38968 13.671 3.53033 13.5303C3.67098 13.3897 3.75 13.1989 3.75 13H2.25ZM6.346 8.742L5.648 9.017C5.68492 9.11034 5.7402 9.19532 5.81057 9.2669C5.88094 9.33848 5.96496 9.39521 6.05765 9.43373C6.15035 9.47224 6.24983 9.49176 6.3502 9.49112C6.45058 9.49048 6.5498 9.46969 6.642 9.43L6.346 8.742ZM12.306 6.175L12.603 6.865C12.782 6.78791 12.9239 6.64417 12.9988 6.46423C13.0736 6.2843 13.0755 6.08229 13.004 5.901L12.306 6.175ZM3.75 13V4.385H2.25V13H3.75ZM5.385 2.75C6.054 2.75 6.655 3.157 6.903 3.778L8.296 3.22C8.0634 2.63832 7.66187 2.14067 7.14318 1.78935C6.6245 1.43804 6.01246 1.25018 5.386 1.25L5.385 2.75ZM3.75 4.385C3.75 3.482 4.482 2.75 5.385 2.75L5.386 1.25C4.55455 1.25 3.75615 1.58029 3.16822 2.16822C2.58029 2.75615 2.25 3.55355 2.25 4.385H3.75ZM6.903 3.778L7.283 4.726L8.675 4.169L8.296 3.22L6.903 3.778ZM7.043 8.467C6.79145 7.82588 6.79646 7.11252 7.057 6.475L5.667 5.91C5.26127 6.90461 5.2551 8.01725 5.648 9.017L7.043 8.467ZM12.01 5.487L6.049 8.053L6.642 9.43L12.602 6.864L12.01 5.487ZM10.282 5.068C10.904 5.334 11.367 5.837 11.609 6.45L13.004 5.901C12.8133 5.40923 12.5265 4.95937 12.1605 4.57959C11.7944 4.19981 11.3564 3.89672 10.872 3.688L10.282 5.068ZM7.057 6.475C7.29156 5.88441 7.737 5.40291 8.307 5.122L7.651 3.774C6.74832 4.21621 6.0415 4.97719 5.667 5.91L7.057 6.475ZM8.307 5.122C8.61284 4.97104 8.94775 4.88813 9.28869 4.87898C9.62963 4.86983 9.96851 4.93366 10.282 5.068L10.872 3.688C10.3607 3.46936 9.80813 3.36477 9.25221 3.37944C8.69629 3.39411 8.15009 3.5287 7.651 3.774L8.307 5.122Z"
                      fill="#0E1730"
                    />
                  </svg>
                  <span>1 Bath</span>
                </div>
                <div className="room__cat-item">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 13V21M8 13V21M16 13V21M12 13V21M20 13V21M2 21H22M2 13H22M18 10V3.6C18 3.44087 17.9368 3.28826 17.8243 3.17574C17.7117 3.06321 17.5591 3 17.4 3H6.6C6.44087 3 6.28826 3.06321 6.17574 3.17574C6.06321 3.28826 6 3.44087 6 3.6V10"
                      stroke="#0E1730"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2 Balcony</span>
                </div>
              </div>
              <a className="room__btn" href="contact.html">
                View More <i className="fa-regular fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
