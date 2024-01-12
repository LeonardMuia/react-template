import Layout from "@/src/layout/Layout";
import {
  partnerSliderOne,
  sliderActive3Item,
  sliderActive5Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";

const Popular = () => {
  return (
    <section className="service-section-two black-bg pt-100 pb-100">
    <div className="container">
    <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*=== Section Title ===*/}
              <div className="section-title text-center text-white mb-45 wow fadeInDown">
                <span className="sub-title">Popular Services</span>
                <h2>Amazing Adventure Camping Services for Enjoyed</h2>
              </div>
            </div>
          </div>
      <Slider
        {...sliderActive3Item}
        className="slider-active-3-item wow fadeInUp"
      >
        {/*=== Single Service Item ===*/}
        <div className="single-service-item-four">
          <div className="img-holder">
            <img
              src="assets/images/service/service-7.jpg"
              alt="Service Image"
            />
          </div>
          <div className="content">
            <a href="#" className="icon-btn">
              <i className="fas fa-heart" />
            </a>
            <h3 className="title">Classic Tents</h3>
            <p>
              Sit amet consecteturauris natoque name pellentue augue mattis
              faucibus
            </p>
            <div className="meta">
              <span className="icon">
                <i className="flaticon-blanket" />
              </span>
              <span className="icon">
                <i className="flaticon-cat" />
              </span>
              <span className="icon">
                <i className="flaticon-tent" />
              </span>
              <span className="icon">
                <i className="flaticon-fire" />
              </span>
            </div>
            <div className="action-btn">
              <Link legacyBehavior href="/tour-details">
                <a className="main-btn primary-btn">
                  Read More
                  <i className="far fa-paper-plane" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/*=== Single Service Item ===*/}
        <div className="single-service-item-four">
          <div className="img-holder">
            <img
              src="assets/images/service/service-8.jpg"
              alt="Service Image"
            />
          </div>
          <div className="content">
            <a href="#" className="icon-btn">
              <i className="fas fa-heart" />
            </a>
            <h3 className="title">Glamping Cabin</h3>
            <p>
              Sit amet consecteturauris natoque name pellentue augue mattis
              faucibus
            </p>
            <div className="meta">
              <span className="icon">
                <i className="flaticon-blanket" />
              </span>
              <span className="icon">
                <i className="flaticon-cat" />
              </span>
              <span className="icon">
                <i className="flaticon-tent" />
              </span>
              <span className="icon">
                <i className="flaticon-fire" />
              </span>
            </div>
            <div className="action-btn">
              <Link legacyBehavior href="/tour-details">
                <a className="main-btn primary-btn">
                  Read More
                  <i className="far fa-paper-plane" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/*=== Single Service Item ===*/}
        <div className="single-service-item-four">
          <div className="img-holder">
            <img
              src="assets/images/service/service-9.jpg"
              alt="Service Image"
            />
          </div>
          <div className="content">
            <a href="#" className="icon-btn">
              <i className="fas fa-heart" />
            </a>
            <h3 className="title">RV Luxury Tent</h3>
            <p>
              Sit amet consecteturauris natoque name pellentue augue mattis
              faucibus
            </p>
            <div className="meta">
              <span className="icon">
                <i className="flaticon-blanket" />
              </span>
              <span className="icon">
                <i className="flaticon-cat" />
              </span>
              <span className="icon">
                <i className="flaticon-tent" />
              </span>
              <span className="icon">
                <i className="flaticon-fire" />
              </span>
            </div>
            <div className="action-btn">
              <Link legacyBehavior href="/tour-details">
                <a className="main-btn primary-btn">
                  Read More
                  <i className="far fa-paper-plane" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
      {/*=== Text Box ===*/}
      <div className="big-text pt-100 wow fadeInDown">
        <img src="assets/images/bg/adventure.png" alt="Adventure" />
      </div>
    </div>
  </section>
  )
}

export default Popular;