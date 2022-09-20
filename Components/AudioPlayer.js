import React, { useEffect, useRef } from 'react'
import Styles from '../styles/SliderAudio.module.css'

export default function AudioPlayer({props}) {



  const ref = useRef()

  console.log(ref);

  useEffect(() => {
        ref.current.play(props.src);
  }, [props.src])

  return (
    <>
        <audio className={Styles.audioBar} src ={`assets/music/${props.src}`} ref={ref} controls></audio>
        <p className={Styles.pTitle}>{props.title}.mp3</p>
    </>
  )
}
