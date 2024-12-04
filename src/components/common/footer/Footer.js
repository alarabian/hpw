import Image from "next/image";
import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import Link from "next/link";
const footerData = {
  inspireData: [
    { id: 1, location: "Canmore", rentalType: "Flat rentals" },
    { id: 2, location: "Benalmádena", rentalType: "House rentals" },
    { id: 3, location: "Marbella", rentalType: "House rentals" },
    { id: 4, location: "Mijas", rentalType: "House rentals" },
    { id: 5, location: "Prescott", rentalType: "Pet-friendly rentals" },
    { id: 6, location: "Scottsdale", rentalType: "Apartment rentals" },
    { id: 7, location: "Tucson", rentalType: "Rentals with pools" },
    { id: 8, location: "Jasper", rentalType: "Cabin rentals" },
    { id: 9, location: "Mountain View", rentalType: "Pet-friendly rentals" },
    { id: 10, location: "Devonport", rentalType: "Cottage rentals" },
    { id: 11, location: "Mallacoota", rentalType: "Pet-friendly rentals" },
    { id: 12, location: "Ibiza", rentalType: "Holiday rentals" },
    { id: 13, location: "Anaheim", rentalType: "Beach house rentals" },
    { id: 14, location: "Monterey", rentalType: "Cottage rentals" },
    { id: 15, location: "Paso Robles", rentalType: "Cottage rentals" },
    { id: 16, location: "Santa Barbara", rentalType: "Pet-friendly rentals" },
    { id: 17, location: "Sonoma", rentalType: "House rentals" },
  ],
  widgetData: [
    {
      id: 1,
      title: "Support",
      list: [
        "Help Centre",
        "AirCover",
        "Anti-discrimination",
        "Disability support",
        "Cancellation options",
        "Report neighbourhood concern",
      ],
    },
    {
      id: 1,
      title: "Hosting",
      list: [
        "hpw your home",
        "AirCover for Hosts",
        "Hosting resources",
        "Community forum",
        "Hosting responsibly",
        "Join a free Hosting class",
        "Find a co‑host",
      ],
    },
    {
      id: 3,
      title: "Holiday Planet Holiday",
      list: [
        "Newsroom",
        "New features",
        "Careers",
        "Investors",
        "hpw.org emergency stays",
      ],
    },
  ],
  copyRight: [
    { id: 1, item: "© 2024 Holiday Planet World Tour and Travels, Inc." },
    { id: 2, item: "Privacy" },
    { id: 3, item: "Terms" },
    { id: 4, item: "Sitemap" },
    { id: 5, item: "Company details" },
  ],
};

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="footerList">
            <h3>Inspiration for future getaways</h3>
            <ul>
              {footerData.inspireData.map((item) => {
                return (
                  <li key={item.id}>
                    <h6>{item.location}</h6>
                    <span>{item.rentalType}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="row">
            {footerData.widgetData.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                  <div className="widget">
                    <h5>{item.title}</h5>
                    <ul>
                      {item.list.map((item, i) => {
                        return <li key={i}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="copyRight">
            <div className="list">
              <ul>
                {footerData.copyRight.map((item) => {
                  return <li key={item.id}>{item.item}</li>;
                })}
              </ul>
            </div>
            <div className="social">
              <ul>
                <li>
                  <TbWorld /> <Link href="/">English(IN)</Link>
                </li>
                <li>
                  <MdCurrencyRupee /> <Link href="/">INR</Link>
                </li>
              </ul>
              <div className="socialIcon">
                <Link href="/">
                  <FaFacebook />
                </Link>
                <Link href="/">
                  <FaSquareTwitter />
                </Link>
                <Link href="/">
                  <FaInstagramSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
