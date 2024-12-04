import Link from 'next/link'
import React from 'react'

const FinalPrice = () => {
  return (
    <>
      <div className="finalPrice">
        <h5>₹23,332</h5>
        <Link href={"/flight-book"} className='loadMoreButton bg-success'>Continue</Link>
      </div>
    </>
  )
}

export default FinalPrice