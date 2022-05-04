import React from "react";
import "./Homepage.scss";
import background from "../../assets/hero-banner-picture.png";
// import background1 from "../../assets/background1.png";
// import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
// import VideoComponent from "../../components/VideoComponent/VideoComponent";

const Homepage = () => {
  return (
    <section>
      <div className="container-fluid hero-main-container padding-0">
        <div className="row g-0">
          <div className="col-sm-12 d-flex justify-content-center align-items-center col-md-6 hero-text-col padding-0">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1 className="text-center">The best male grooming products</h1>
              <p className="text-center">
                High quality men grooming products made from natural ingridients
              </p>
              <button className="btn-red my-2">Explore our products</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 hero-img-col padding-0">
            <img className="img-fluid" src={background} alt="" />
          </div>
        </div>
      </div>
    </section>
    // <main>
    //   <section>
    //     <div className="container-fluid">
    //       <div className="row d-md-flex justify-content-md-center align-items-md-center">
    //         <div className="col-6 d-md-flex justify-content-md-center align-items-md-center heading-container">
    //           <div className="text-start">
    //             <h1 className="main-heading">
    //               The best male
    //               <br />
    //               grooming products
    //             </h1>
    //             <p className="main-heading_small">
    //               High quality men grooming products
    //               <br />
    //               made from natural ingridients
    //             </p>
    //             <Button className="button-red mt-2" href={`/products`}>
    //               Explore our products
    //             </Button>
    //           </div>
    //         </div>
    //         <div className="col-6 heading-picture-container">
    //           <img src={background} />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section>
    //     <div className="container">
    //       <div className="row">
    //         {}
    //         <div className="col-4"></div>
    //       </div>
    //     </div>
    //   </section>
    //   <FeaturedProduct />
    //   <section>
    //     <div className="container-fluid pt-5">
    //       <div className="row g-0">
    //         <div className="col-6">
    //           <img src={background1} />
    //         </div>
    //         <div className="col-6">
    //           <div className="description-container d-flex align-items-md-center justify-content-md-center">
    //             <div className="text-container">
    //               <h1 className="main-heading_second">
    //                 Kiwiilab - products for the modern man
    //               </h1>
    //               <p className="main-heading_small mt-3">
    //                 Our high quality razors will create a totally different
    //                 shaving experience.
    //               </p>
    //               <Button className="button-red  mt-3" href={`/products`}>
    //                 Explore our products
    //               </Button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <VideoComponent />
    // </main>
  );
};

export default Homepage;
