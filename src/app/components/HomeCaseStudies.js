
"use client"
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { FaRegFileLines } from "react-icons/fa6";

const  HomeCaseStudies =()=> {
  
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots:true,
        arrows: false,
        centerPadding: "21.5%",
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
    autoplaySpeed: 2500,
        responsive: [
          
          {
            breakpoint: 768,
            settings: {
              centerMode: false,
              centerPadding: "11.5%",
              slidesToShow: 1.1,
            }
          },
          
        ]
      };
    return (
      <div>
        
        <Slider {...settings}>
        <div className="swiper-slide">
        <div className="differentiator-item-wrapper">
          <div className="img">
            <img src="/images/home/digital-world.jpg" alt="case1" />
          </div>
          <div className="service-text-wrapper">
            <div className="service-text">
              <h3>Fostering AI Adoption in Alignment with Business Objectives</h3>
              <p>
                Our client sought to gain comprehensive insights into
               ...
              </p>
              <div className="button">
                <Link href="/case-studies/ai-adoption">
                  <FaRegFileLines />
                  <span className="ms-1">Read More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="differentiator-item-wrapper">
          <div className="img">
            <img src="/images/home/team-stratgy.jpg" alt="case2" />
          </div>
          <div className="service-text-wrapper">
            <div className="service-text">
              <h3>Navigating COVID-19: Transforming Workforce Strategies</h3>
              <p>
                Due to the COVID-19 pandemic, organizations across ...
              </p>
              <div className="button">
                <Link href="/case-studies/workforce-strategies">
                  <FaRegFileLines />
                  <span className="ms-1">Read More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="differentiator-item-wrapper">
          <div className="img">
            <img src="/images/case/case-3.jpg" alt="case3" />
          </div>
          <div className="service-text-wrapper">
            <div className="service-text">
              <h3>Cyber Security Trends: Exploring Strategies and Technologies</h3>
              <p>
                To gather feedback and assess the overall satisfaction
                 ...
              </p>
              <div className="button">
                <Link href="/case-studies/cyber-security">
                  <FaRegFileLines />
                  <span className="ms-1">Read More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="differentiator-item-wrapper">
          <div className="img">
            <img src="/images/case/case-8.jpg" alt="case4" />
          </div>
          <div className="service-text-wrapper">
            <div className="service-text">
              <h3>Unveiling E-commerce Trends and Payment Fraud Management Insights</h3>
              <p>
                To comprehend the substantial business impact of
                 ...
              </p>
              <div className="button">
                <Link href="/case-studies/e-commerce">
                  <FaRegFileLines />
                  <span className="ms-1">Read More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Slider>
      </div>
    );
  
}

export default HomeCaseStudies