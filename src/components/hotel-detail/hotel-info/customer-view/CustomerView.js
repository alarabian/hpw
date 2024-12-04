import Image from "next/image";
import React from "react";
const reviews = [
  {
    id: 1,
    name: "Chinmay",
    yearsOnhpw: 3,
    rating: 5,
    date: "October 2024",
    review: "Nice place. A quiet place to hang out with friends or family.",
  },
  {
    id: 2,
    name: "Shubham",
    yearsOnhpw: 3,
    rating: 5,
    date: "August 2024",
    review:
      "I celebrated my birthday here and it was a really pleasant experience. The property is beautiful and the caretakers were polite and helpful. I would definitely recommend this property to other people.",
  },
  {
    id: 3,
    name: "Mahesh",
    yearsOnhpw: 5,
    rating: 5,
    date: "August 2024",
    review: "Awesome property. Highly recommended.",
  },
  {
    id: 4,
    name: "Nitesh",
    yearsOnhpw: 6,
    rating: 5,
    date: "August 2024",
    review:
      "Great place for a staycation. I'm so glad I found this hidden gem. Will definitely plan to go again in a month or two.",
  },
  {
    id: 5,
    name: "Gourav",
    yearsOnhpw: 0.25,
    rating: 5,
    date: "July 2024",
    review:
      "This is a gem! Cozy, spotless rooms and delightful homemade breakfasts make it a perfect retreat. The hosts' warm hospitality and helpful local tips added a personal touch. Beautiful surroundings and comfortable amenities ensured a relaxing stay. Highly recommend for a charming, homey getaway!",
  },
  {
    id: 6,
    name: "Vaishakh",
    yearsOnhpw: 5,
    rating: 5,
    date: "July 2024",
    review: "Amazing stay.",
  },
];

const CustomerView = () => {
  return (
    <>
      <div className="customerView">
        <div className="row">
          {reviews.map((item) => {
            return (
              <div className="col-lg-6" key={item.id}>
                <div className="customerCard">
                  <div className="info">
                    <div className="pic">
                      <Image
                        src="/assets/images/hotel/pic.webp"
                        alt="Image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="name">
                      <h5>{item.name}</h5>
                      <p>{item.yearsOnhpw} years on HPW</p>
                      <strong>{item.date}</strong>
                    </div>
                  </div>
                  <p>{item.review}</p>
                </div>
              </div>
            );
          })}
          <div className="col-lg-12">
            <div className="loadMore">
              <button className="showAll">Show all 23 reviews</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerView;
