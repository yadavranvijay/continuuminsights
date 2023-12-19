


import React from 'react'
import Banner from '../components/Banner'
import FooterPunchline from '../components/FooterPunchline'
import '../styles/slick.css'
import '../styles/slick-theme.css'
import PhoneServices from '../components/PhoneServices'
import PhoneSlider from '../components/PhoneSlider'
import CATIVideo from '../components/SevicesVideo'


const PhoneToWeb = () => {
  const bannerData = {
    Name: 'PHONE TO WEB',
    image: '/images/service/phone-to-web-banner1.jpg',
    heading: 'Elevate Your Research with Phone to Web',
    para:'Seamlessly transition phone survey data into insightful online reports with Continuum Insights. Phone to Web service enables you to digitize your research, making it accessible and actionable.',
      
  };
  return (
    <div  className="page-content">
  <Banner 
 {...bannerData}
  />
  <div className="py-5">
  <div className="costum-container">
    <div className="row">
      <div className="col-md-10">
        <div className="wrapper">
          <h2 className="Bold mb-4">What is Phone To Web ?</h2>
          <p>
            Phone to Web typically refers to a method of data collection or interaction where information is
            initially collected or transmitted through a phone call (typically a Computer-Assisted Telephone
            Interview, or CATI) and then transferred or connected to web-based platforms or databases for further
            analysis, storage, or reporting.

          </p>

          <p>
            This approach is often used in market research or survey administration.
          </p>
          <p>
            For example, in a market research context, respondents may be contacted via telephone (CATI) to
            participate in a survey.
          </p>
          <p>
            The responses they provide during the phone interview are then entered into a web-based system for data
            analysis and reporting.
          </p>
          <p>

            This combination of phone-based data collection and web-based data management allows for efficient data
            handling and analysis while still leveraging the personal interaction of a phone interview.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<PhoneServices />


<CATIVideo path="/images/service/Phonetoweb.m4v" Name="Phone To Web"/>


  <section className="differentiator pt-3 pb-5 " id="Case-studies">
  <div className="costum-container">
    <div className="p-relative">
      <div className="heading">
        <h2 className="mb-4 ExtraBold fs-1 text-center">Case Studies</h2>
      </div>
    <PhoneSlider />
    </div>
  </div>
</section>
  <FooterPunchline  data=" From Calls to Clicks: Bridging Surveys for Streamlined Insights."/>


    </div>
  )
}

export default PhoneToWeb

export function generateMetadata({}){
  return{ 
   title : "Phone To Web | Empower Your Connectivity with P2W Services at Continuum Insights",
   description:"Discover the seamless integration of phone to web services with Continuum Insights. Our P2W services redefine connectivity, providing a bridge between your mobile experience and the expansive world of the web.",
   alternates: {
    canonical: '/phone-to-web',
    languages: {
      'en-US': '/en-US',
      
    },
  },
   openGraph: {
     type: 'website',
images: '/images/Continuum_Insight_Logo.png',
     url: 'https://www.continuuminsights.com/phone-to-web/',
     title : "Phone To Web | Empower Your Connectivity with P2W Services at Continuum Insights",
     description:"Discover the seamless integration of phone to web services with Continuum Insights. Our P2W services redefine connectivity, providing a bridge between your mobile experience and the expansive world of the web.",
   },  
   
 }
 }