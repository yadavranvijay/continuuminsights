import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="fw-bolder">Blog</h1>
      </div>

      <div className="container py-5">
        <div className="latest-blog-wrapper">
          <div className="row">
            <div className="col-md-5">
              <div className="wrapper">
                <Link href="/blog/cati-survey">
                  <span className="mb-4 d-inline-block ExtraBold"> CATI</span>

                  <h2 className="ExtraBold">
                    {" "}
                    What is the CATI (Computer-Assisted Telephone Interviewing)
                    survey?{" "}
                  </h2>
                </Link>
                <div className="author d-flex align-items-center  mt-5">
                  <div className="img">
                    <img src="/images/blog/writer.jpg" alt="writer" />
                  </div>
                  <div className="author-details">
                    <h3 className="h5 Bold"> Ranvijay Yadav</h3>
                    <span className="me-4">Dec 15, 2023</span>{" "}
                    <span> 10 mins read</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <Link href="/blog/cati-survey">
                <div className="img-wrapper rounded-4 overflow-hidden">
                  <img src="/images/blog/blog1.jpg" alt="blog" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;


export function generateMetadata({}){
  return{ 
   
    title: 'Blog - Continuum Insights',
    description: 'Welcome to our blog, where knowledge meets experience. Discover in-depth articles, industry insights, and expert analyses on market research, online surveys, and more. Stay informed, inspired, and connected with the latest trends in the ever-evolving world of data and insights.',
    alternates: {
      canonical: '/blog',
      languages: {
        'en-US': '/en-US',
        
      },
    },
    openGraph: {
      type: 'website',
images: '/images/Continuum_Insight_Logo.png',
      url: 'https://www.continuuminsights.com/blog',
      title: 'Blog - Continuum Insights',
      description: 'Welcome to our blog, where knowledge meets experience. Discover in-depth articles, industry insights, and expert analyses on market research, online surveys, and more. Stay informed, inspired, and connected with the latest trends in the ever-evolving world of data and insights.',
    },  
 }
 }
