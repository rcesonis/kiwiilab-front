import React from "react";
import "./Homepage.scss";
import background from "../../assets/hero-banner-picture.png";
import background1 from "../../assets/background1.png";
import story from "../../assets/story.png";

import insta1 from "../../assets/insta1.png";
import insta2 from "../../assets/insta2.png";
import insta3 from "../../assets/insta3.png";
import insta4 from "../../assets/insta4.png";

import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import VideoComponent from "../../components/VideoComponent/VideoComponent";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <main>
      <section>
        <div className="container-fluid hero-main-container padding-0">
          <div className="row g-0">
            <div className="col-sm-12 d-flex justify-content-center align-items-center col-md-6 hero-text-col padding-0">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-center">The best male grooming products</h1>
                <p className="text-center">
                  High quality men grooming products made from natural
                  ingridients
                </p>
                <button className="btn-red my-2">
                  <a href="/products">Explore our products</a>
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 hero-img-col padding-0">
              <img className="img-fluid" src={background} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-12 text-center">
              <h3 className="section-title">Featured products</h3>
            </div>
          </div>
          <div className="row">
            <FeaturedProduct />
          </div>
        </div>
      </section>
      <section className="second-hero">
        <div className="container-fluid padding-0">
          <div className="row g-0">
            <div className="col-sm-12 col-md-6 hero-img-col padding-0">
              <img className="img-fluid" src={background1} alt="" />
            </div>
            <div className="col-sm-12 d-flex justify-content-center align-items-center col-md-6 hero-text-col padding-0">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h1>Kiwiilab - products for the modern man</h1>
                <p>
                  Our high quality razors will create a totally different
                  shaving experience.
                </p>
                <button className="btn-red my-2">
                  <a href="/products">Explore our products</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoComponent />
      <section>
        <div className="container-fluid hero-main-container padding-0">
          <div className="row g-0">
            <div className="col-sm-12 d-flex justify-content-center align-items-center col-md-6 hero-text-col padding-0">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid" src={story} alt="" />
              </div>
            </div>
            <div className="col-sm-12 d-flex justify-content-center align-items-center col-md-6 hero-text-col padding-0">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-center">
                  Our story started as a wish to have a quality time for
                  ourselves
                </h1>
                <button className="btn-red my-2">
                  <a href="/products">Explore our products</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid padding-0">
          <div className="row py-5">
            <div className="col-sm-12 text-center">
              <h3 className="section-title">Share your moments with us</h3>
              <h3 className="red-text">#kiwiilab</h3>
            </div>
          </div>
          <div className="row pb-5 g-0">
            <div className="col-sm-12 col-md-3 p-3 d-flex justify-content-center align-items-center padding-0">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid" src={insta1} alt="" />
              </div>
            </div>
            <div className="col-sm-12 col-md-3 p-3 d-flex justify-content-center align-items-center padding-0">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid" src={insta2} alt="" />
              </div>
            </div>
            <div className="col-sm-12 col-md-3 p-3 d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid" src={insta4} alt="" />
              </div>
            </div>
            <div className="col-sm-12 col-md-3 p-3 d-flex justify-content-center align-items-center padding-0">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid" src={insta3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
