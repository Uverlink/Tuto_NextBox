import React from "react";
import Image from "next/image";
import Styles from '../styles/SliderAudio.module.css'

export default function Vinyle() {
  return (
    <>
      <div>
        <div className={Styles.test}>
          <div>
            <Image src="/assets/Images/vinyle.png" alt="vinyle" width={200} height={200}></Image>
            <div>
              <Image src="" alt="" layout="fill"></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
