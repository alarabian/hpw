import React from 'react'
import HotelGallery from './hotel-gallery/HotelGallery'
import HotelInfo from './hotel-info/HotelInfo'

const HotelDetail = () => {
  return (
    <>
      <section className='hotelDetailSec sectionSpace'>
        <div className="container">
          <HotelGallery />
          <HotelInfo />
        </div>
      </section>
    </>
  )
}

export default HotelDetail