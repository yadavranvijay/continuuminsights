import Link from "next/link"

const Header = () => {
  return (
    <div><header>
    <div className="header">
      <nav className="flex-centet-between">
        <div className="nav-left d-flex align-items-center justify-content-start">
          <div className="small-logo">
            <Link href="/"><img src="/images/Continuum_Insight_Logo.png" alt="small logo" /></Link>
          </div>
          <div className="menu">
            <ul className="main-ul">
              <li>
                <Link href="/">What We Do </Link> 
                <span className="switch-toggle"><i className="fa-solid fa-angle-right"></i></span>
                <div className="drop">
                  <div className="drop-content-wrapper">
                    <ul className="main-page-link-wrapper">
                      <li>
                        <Link href="/online-survey">Online Survey <i className="fa-solid fa-angle-right"></i>
                        </Link>
                        <span className="plus-icon"><i className="fa-solid fa-plus"></i></span>
                        <div className="sub-drop-item">
                          <ul>
                            <li>
                              <Link href="online-survey">Online Survey</Link>
                            </li>
                            <li>
                              <Link href="online-survey#panel">Panel</Link>
                            </li>
                            <li>
                              <Link href="online-survey#Online-services">Online Services</Link>
                            </li>
                            <li>
                              <Link href="online-survey#Case-studies">Case Studies</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="/CATI">CATI <i className="fa-solid fa-angle-right"></i></Link>
                        <span className="plus-icon"><i className="fa-solid fa-plus"></i></span>
                        <div className="sub-drop-item">
                          <ul>
                            <li>
                              <Link href="CATI">CATI</Link>
                            </li>
                          
                            <li>
                              <Link href="cati#Cati-services">CATI Services</Link>
                            </li>
                            <li>
                              <Link href="cati#Case-studies">Case Studies</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="/phone-to-web">Phone To Web <i className="fa-solid fa-angle-right"></i></Link>
                        <span className="plus-icon"><i className="fa-solid fa-plus"></i></span>
                        <div className="sub-drop-item">
                          <ul>
                            <li><Link href="phone-to-web">Phone To Web</Link></li>
                            <li><Link href="phone-to-web#phone-services">Phone To Web Services</Link></li>
                            <li>
                              <Link href="phone-to-web#Case-studies">Case Studies</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="/survey-programming">Survey Programming
                          <i className="fa-solid fa-angle-right"></i></Link>
                        <span className="plus-icon"><i className="fa-solid fa-plus"></i></span>
                        <div className="sub-drop-item">
                          <ul>
                            <li>
                              <Link href="survey-programming">Survey Programming & Hosting</Link>
                            </li>
                            <li>
                              <Link href="survey-programming#survey-programming-Services">Survey Programming Services</Link>
                            </li>
                          
                            
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
  
              <li>
                <Link href="#">Who we are</Link><span className="switch-toggle"><i className="fa-solid fa-angle-right"></i></span>
                <div className="drop">
                  <div className="drop-content-wrapper">
                    <ul className="main-page-link-wrapper">
                      <li>
                        <Link href="about-us">About Us </Link>
                        <span className="plus-icon"><i className="fa-solid fa-plus"></i></span>
                        <div className="sub-drop-item">
                          <h3 className="h4">
                            We’re the world's biggest Survey network.
                          </h3>
                          <p className="pb-4">
                            Continuum Insights is a global research platform that
                            offers an extensive range of high-end data solutions
                            to companies. We focus on meeting all your clients’
                            expectations by providing them with technology-driven
                            data solutions.
                          </p>
                          <Link href="about-us" className="btn">Learn More</Link>
                        </div>
                      </li>
                      <li>
                        <Link href="gallery">Image Gallery <i className="fa-solid fa-angle-right"></i></Link>
                        <span className="plus-icon"><i className="fa-solid fa-plus"></i></span>
                        <div className="sub-drop-item">
                          <ul>
                            <li><Link href="gallery">Social work</Link></li>
                            <li><Link href="gallery">Scholarship</Link></li>
                            <li><Link href="gallery">Fun at Continuum Insights</Link></li>
                          </ul>
                        </div>
                      </li>
                      <li><Link href="career">Careers </Link></li>
                      <li><Link href="certification">Certification </Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link href="#">Coverage </Link><span className="switch-toggle"><i className="fa-solid fa-angle-right"></i></span>
                <div className="drop">
                  <div className="drop-content-wrapper">
                    <ul className="main-page-link-wrapper">
                      <li>
                        <Link href="coverage">Coverage</Link>
                        <span className="plus-icon"><i className="fa-solid fa-plus"></i></span>
                        <div className="sub-drop-item">
                          <h3 className="h4">
                            Access millions of respondents all over the globe.
                          </h3>
                          <p className="pb-4">
                            Quality responses begin and end with verified,
                            double-opted in members that choose to engage in
                            online studies. Quest leverages many types of sample
                            sources when recruiting respondents
                          </p>
                          <Link href="markets" className="btn">Learn More</Link>
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </li>
              <li><Link href="contact-us">Contact</Link></li>
            </ul>
          </div>
        </div>
        <ul className="mb-0 me-4">
          <li><Link className="panel-link" href="http://www.websamp.com/">Panel</Link></li>
        </ul>
  
        <div className="bar">
          <i id="menue" className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </div>
  </header>
 </div>
  )
}

export default Header