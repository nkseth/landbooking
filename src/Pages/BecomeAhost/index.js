import { ArrowRight, ArrowRightAltRounded } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Bannerbg from "../../assets/title-bg.jpg";
import hostbg from "../../assets/host.jpg";
import { useLocation } from "react-router";
import { useMemo } from "react";
const Becomeahost=()=>{
   
  return(
<div className="d-flex justify-content-center flex-column">
<section
        className="title-transparent page-title"
        style={{ backgroundImage: `url(${Bannerbg})` }}
      >
        <div className="container">
          <div className="title-content">
            <h1>Become a Host</h1>
            <div className="breadcrumbs ">
              <Link to="/">Home</Link>
              <ArrowRight />
              <span className="current">BECOME A HOST</span>
            </div>
          </div>
        </div>
      </section>
<div className="clearfix" />
<section>
  <div className="container  ">
    <div className="row  d-flex justify-content-center">
      <div className="col-md-8 col-md-offset-2 col-sm-12">
        <article className="blog-news detail-wrapper">
          <div className="full-blog">
            <figure className="img-holder">
              <a href="blog-detail.html"><img src={hostbg} className="img-responsive w-100" alt="News" /></a>
            </figure>
            {/* Blog Content */}
            <div className="full blog-content">
              <h3 className="bl-title">Do you want Host on Yardcan</h3>
              <div className="blog-text">
                <p>Do you have a yard, a parking space which you want to rent it out for extra income. you are on the right space.
                  Just post the photo and details and follow the registration details which will be basic. Once done lets move ahead and wait for the approval and you are good to go.
                  you will be getting bookings directly from your customers depending on the slots you have marked.</p>
              </div>
              <div className="text-center">
                <Link to="/signup?host=true" className="btn theme-btn" title="Submit Listing">Become Host</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
</div>)
}
export default Becomeahost

