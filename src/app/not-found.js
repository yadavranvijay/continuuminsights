import Link from "next/link"


const NotFound = () => {
  return (
    <div className="page-content">
    <section className=" thankyou-wrapper">
      <div className="thankyou">
        <h3>Oops! Page not found.</h3>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <Link className="btn" href="/"> Home</Link>
      </div>
    </section>
  </div>
  )
}

export default NotFound
