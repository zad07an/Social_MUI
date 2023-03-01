import React, { useEffect, useRef, useState } from 'react'
import { carousel_data } from '../../data/CarouselData'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'
import './Carousel.css'

export default function Carousel() {

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const prevSlide = () => {
    setIndex((prevIndex) => prevIndex < 1 ? carousel_data.length - 1 : prevIndex - 1)
  }

  const nextSlide = () => {
    setIndex((prevIndex) => prevIndex === carousel_data.length - 1 ? 0 : prevIndex + 1)
  }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => prevIndex === carousel_data.length - 1 ? 0 : prevIndex + 1)
    }, 4000);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='carousel_container'>
      <div className="carousel_slide" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {
          carousel_data.map((slide, idx) => {
            return (
              <div key={idx} className='slide' style={{background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${slide.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
            )
          })
        }
      </div>
      <div className="carousel_dots">
        {
          carousel_data.map((_, idx) => {
            return (
              <div key={idx} className={`dot ${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx)}}></div>
            )
          })
        }
      </div>
      <div className="prev_slide" onClick={prevSlide}>
        <BiLeftArrow/>
      </div>
      <div className="next_slide" onClick={nextSlide}>
        <BiRightArrow/>
      </div>
    </div>
  )
}
