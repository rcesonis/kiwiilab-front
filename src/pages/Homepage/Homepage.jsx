import React from "react";
import "./Homepage.scss";
import background from "../../assets/shaving-tools-on-black-and-white.png";
import { Button } from "react-bootstrap";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";

const Homepage = () => {
  return (
    <main>
      <section>
        <div className="container-fluid">
          <div className="row d-md-flex justify-content-md-center align-items-md-center">
            <div className="col-6 d-md-flex justify-content-md-center align-items-md-center heading-container">
              <div className="text-start">
                <h1 className="main-heading">
                  The best male
                  <br />
                  grooming products
                </h1>
                <p className="main-heading_small">
                  High quality men grooming products
                  <br />
                  made from natural ingridients
                </p>
                <Button className="button-red mt-2" href={`/products`}>
                  Explore our products
                </Button>
              </div>
            </div>
            <div className="col-6 heading-picture-container">
              <img src={background} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {}
            <div className="col-4"></div>
          </div>
        </div>
      </section>
      <FeaturedProduct />
    </main>
  );
};

export default Homepage;
