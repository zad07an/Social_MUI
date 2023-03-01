import React, { useEffect, useState } from 'react'
import {FiArrowUp} from 'react-icons/fi';
import './ScrollToTop.css'

export default function ScrollToTop() {

  const [show, setShow] = useState(false);

  const handleScroll = () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 600 ? setShow(true) : setShow(false);
    })

    return () => window.removeEventListener('scroll', () => {
      window.scrollY > 600 ? setShow(true) : setShow(false);
    })
  }, [])

  return (
    <>
    {
      show ? (
      <div className='scroll_to_top_ui' onClick={handleScroll}>
        <FiArrowUp/>
      </div>
      ) : null
    }
    </>
  )
}
