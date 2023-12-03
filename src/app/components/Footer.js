import Link from "next/link"

const Footer = () => {
  return (
    <div>
    



<footer>


<div className="container footer-contaner py-5">
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="footer-logo">
        <img src="images/Continuum_Insight_Logo.png" alt="footer logo" />
      </div>
      <div>
        <p className="my-4">The top Online Survey Company in USA says that Opportunity and
          growth are two pillars that lead a company to its pinnacle of success.</p>
      </div>
      <div className="socal">
        <Link href="https://www.linkedin.com/company/continuum-insights/" target="_blank" rel="noopener"><i
            className="fab fa-linkedin"></i></Link>
        <Link href="https://www.facebook.com/continuuminsights" target="_blank" rel="noopener"><i className="fa-brands fa-square-facebook"></i></Link>
            <Link href="https://www.instagram.com/continuuminsight/" target="_blank" rel="noopener"><i className="fa-brands fa-square-instagram"></i></Link>
        <Link href="https://mobile.twitter.com/surveyplatform" target="_blank" rel="noopener"><i className="fa-brands fa-square-x-twitter"></i></Link>
      </div>
      
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6">
      <h4>Contact Info</h4>
      <ul className="ps-0">
        <li>
          <span className="icon-box">
            <img className="icon-img" src="/images/icons/location.png" alt="location" />
          </span>
          <span>
            <p> 5th Floor, 501, JMD Megapolis IT Park, Sohna Road,
              Sector 48, Gurugram, Gurugram, Haryana, 122018</p>
          </span>
        </li>
        <li>
          <span className="icon-box">
            <img className="icon-img" src="/images/icons/phone.png" alt="phone" />
          </span><Link href="tel:+911244221101"> +91 124 422 1101</Link>
        </li>
        <li>
          <span className="icon-box">
            <img className="icon-img" src="/images/icons/envelope.png" alt="envelope" />
          </span><Link href="mailto:rfq@continuuminsights.com" target="_blank" rel="noopener">rfq@continuuminsights.com</Link>
        </li>
      </ul>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6">
      <h4>Services</h4>
      <ul className="ps-0">
        <li><Link href="cati.html">CATI</Link></li>
        <li><Link href="online-survey.html">ONLINE SURVEY</Link></li>
       
        <li><Link href="survey-programming.html#data-processing">DATA PROCESSING & ANALYSIS</Link></li>
        <li><Link href="survey-programming.html">SURVEY PROGRAMMING & HOSTING</Link></li>
      </ul>
      
    </div>
    
    <div className="col-lg-3 col-md-4 col-sm-6">
      <h4>Our Panel App</h4>
      <div className="app-link-wrapper">
        <Link href="#">
        <img src="/images/ios.webp" alt="" />
      </Link>
      <Link className="pt-3 d-inline-block" href="https://play.google.com/store/apps/datasafety?id=com.websamp.app">
        <img src="/images/android.webp" alt="app" />
      </Link>
      </div>
    </div>
  </div>
</div>
<div className="copyright py-2">
<div className="container  ">
  <div className="row ">
    <div className="col">
      <p className="mb-0 text-center">Copyright © 2023 Continuum Insights</p>
    </div>

  </div>
</div>
</div>
</footer>
    </div>
  )
}

export default Footer