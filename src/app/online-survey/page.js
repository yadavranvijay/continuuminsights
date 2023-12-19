


import React from 'react'
import Banner from '../components/Banner'
import FooterPunchline from '../components/FooterPunchline'
import '../styles/slick.css'
import '../styles/slick-theme.css'
import SimpleSlider from '../components/Slider'
import CATIServices from '../components/CATIServices'
import OnlineServices from '../components/OnlineServices'
import OnlineSlider from '../components/OnlineSlider'
import CATIVideo from '../components/SevicesVideo'


const CATI = () => {
  const bannerData = {
    Name: 'ONLINE SURVEY',
    image: '/images/service/online-banner1.jpg',
    heading: 'Online Surveys with Continuum Insights',
    para:
      ' At Continuum Insights, our online survey solutions empower you to gather valuable insights with ease. Craft, distribute, and analyze surveys effortlessly, gaining meaningful data for informed decision-making.',
  };
  return (
    <div  className="page-content">
  <Banner 
 {...bannerData}
  />
  <div className="py-5 " id="panel">
      <div className="costum-container">
        <div className="row">
          <div className="col-md-10">
            <div className="wrapper">
              <h2 className="Bold mb-4">Panel</h2>
              <p>
                Continuum’s diverse and result oriented group of panelists,
                will deliver the highest quality panel aligned to your
                expectations. Our team of panels are driven to support all
                researchers in getting faster and better results in the form
                of data collection.
              </p>

              <p>
                Keeping the highest level of quality is the utmost priority
                and hence our samples are collected from smart and
                distinguished individuals who are ready to share their
                insights, thoughts, expertise and opinions.
              </p>
              <p>
                Our network of participants are qualified on the basis of
                multiple filters and are pre-validated to ensure highest
                quality.
              </p>
              <p>
                Our in-house tools ensure that we recruit a range of diverse
                individuals and dig deep into each profile.
              </p>
              <p>
                Our profiles cover people from different walks of life
                including people from niche groups like patient-specific or
                specialty product users to wide-ranging, major media market
                segments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
<OnlineServices />


<CATIVideo path="/images/service/Onlinesurvey.m4v" Name="Online Survey" />



  <section className="differentiator pt-3 pb-5 " id="Case-studies">
  <div className="costum-container">
    <div className="p-relative">
      <div className="heading">
        <h2 className="mb-4 ExtraBold fs-1 text-center">Case Studies</h2>
      </div>
      <OnlineSlider />
    </div>
  </div>
</section>
  <FooterPunchline  data="Your Gateway to Comprehensive Online Surveys and Market
  Research."/>


    </div>
  )
}

export default CATI
export function generateMetadata({}){
  return{ 
   title : "Empower Your Insights with Continuum Insights | Online Surveys Tailored for Success",
   description:"Welcome to Continuum Insights' Online Survey Services — where data meets impact. Harness the power of our customized online surveys to gain deep insights into your target audience, market trends, and business performance. Elevate your decision-making with our advanced survey solutions designed to deliver meaningful results.",
   alternates: {
    canonical: '/online-survey',
    languages: {
      'en-US': '/en-US',
      
    },
  },
  openGraph: {
    type: 'website',
images: '/images/Continuum_Insight_Logo.png',
    url: 'https://www.continuuminsights.com/online-survey/',
    title : "Empower Your Insights with Continuum Insights | Online Surveys Tailored for Success",
    description:"Welcome to Continuum Insights' Online Survey Services — where data meets impact. Harness the power of our customized online surveys to gain deep insights into your target audience, market trends, and business performance. Elevate your decision-making with our advanced survey solutions designed to deliver meaningful results.",
  },  

 }
 }