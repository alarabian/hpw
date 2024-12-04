import React from "react";

const HotelMap = () => {
  return (
    <>
      <div className="hotelMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56070.87270435816!2d77.218510145775!3d28.556861471466533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38abca3560d%3A0xbd54bc439e45d16a!2sAbaris%20Softech%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1731414445888!5m2!1sen!2sin"
          width={"100%"}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="text">
          <h5>New Friends Colony, New Delhi, India</h5>
          <p>
            The neighborhood comprises of farm owners as well as cottage owners
            on the periphery of the golf course.
          </p>
          <p>
            The local villagers are very welcoming of visiting guests who can
            walk towards Aravali hills from the farm about 1.5 kms away through
            green fields.
          </p>
        </div>
      </div>
    </>
  );
};

export default HotelMap;
