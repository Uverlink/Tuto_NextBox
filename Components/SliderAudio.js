import React, { useState, useEffect, useRef } from "react";
// import Data from '../Data/Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Styles from "../styles/SliderAudio.module.css";
// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import { musics } from "../Data/Data";
import AudioPlayer from "./AudioPlayer";
import Vinyle from "./Vinyle";

export default function App() {
  const fetchAllMusics = async () => {
    const res = await fetch("api/music");
    const AllMusics = await res.json();

    SetAllMusic(AllMusics);
  };

  useEffect(() => {
    fetchAllMusics();
    
  }, []);


  const [allMusic, SetAllMusic] = useState([]);
  const [oneMusic, SetOneMusic] = useState({});

  const selectMusic = (e) => {
    const index = Number(e.currentTarget.dataset.id);
    SetOneMusic(allMusic[index]);
  };



  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={Styles.swiper}
        slidesPerView={2}
        loop={true}
      >
        {allMusic.map((item, index) => (
          <SwiperSlide key={index} className={Styles.swiperSlide}>
            <Image className={Styles.img} src={item.img} alt={item.title} layout="fill" />
            <div className={Styles.title}>
              <h2 className={Styles.h3} data-id={item.id}  onClick={selectMusic }>
                {item.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AudioPlayer props={oneMusic}  />
      <Vinyle />
    </>
  );
}

// {allMusic.map((music) => (
//     <SwiperSlide key={music.id}>
//       <Image
//           // src="http://placeimg.com/640/640/any"
//       //   src={music.img}
//         alt={music.title}
//         layout="fill"
//       />
//       <div className="title">
//         <h2 className="h3" data-id={music.id}>
//           {music.title}
//         </h2>
//       </div>
//     </SwiperSlide>
//   ))}
