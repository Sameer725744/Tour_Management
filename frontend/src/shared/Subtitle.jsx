import React from 'react'
import '../styles/home.css'

const Subtitle = ({subtitle}) => {
  return (
    <h3 className='section_subtitle' style={{backgroundColor:'orange', border:'2px solid orange',borderRadius:'15px', padding:'5px'}}>{subtitle}</h3>
  )
}

export default Subtitle
