import React from "react";

const Products = () => {
  return (
    <main class="page catalog-page">
      <section class="clean-block clean-catalog dark">
        <div class="container">
          <div class="block-heading">
            <h2 class="text-info">Catalog Page</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div class="content">
            <div class="row">
              <div class="col-md-3">
                <div class="d-none d-md-block">
                  <div class="filters">
                    <div class="filter-item">
                      <h3>Categories</h3>
                      <div class="form-check">
                        <input
                          id="formCheck-1"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="formCheck-1">
                          Phones
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="formCheck-2"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="formCheck-2">
                          Laptops
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="formCheck-3"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="formCheck-3">
                          PC
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="formCheck-4"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="formCheck-4">
                          Tablets
                        </label>
                      </div>
                    </div>
                    <div class="filter-item">
                      <h3>Brands</h3>
                      <div class="form-check">
                        <input
                          id="formCheck-5"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="formCheck-5">
                          Samsung
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="formCheck-6"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="formCheck-6">
                          Apple
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="formCheck-7"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="formCheck-7">
                          HTC
                        </label>
                      </div>
                    </div>
                    <div class="filter-item">
                      <h3>OS</h3>
                      <div class="form-check">
                        <input
                          id="formCheck-8"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="formCheck-8">
                          Android
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="formCheck-9"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="formCheck-9">
                          iOS
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-md-none">
                  <a
                    class="btn btn-link d-md-none filter-collapse"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="filters"
                    href="#filters"
                    role="button"
                  >
                    Filters<i class="icon-arrow-down filter-caret"></i>
                  </a>
                  <div id="filters" class="collapse">
                    <div class="filters">
                      <div class="filter-item">
                        <h3>Categories</h3>
                        <div class="form-check">
                          <input
                            id="formCheck-1"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label" for="formCheck-1">
                            Phones
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="formCheck-2"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label" for="formCheck-2">
                            Laptops
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="formCheck-3"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label" for="formCheck-3">
                            PC
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="formCheck-4"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label" for="formCheck-4">
                            Tablets
                          </label>
                        </div>
                      </div>
                      <div class="filter-item">
                        <h3>Brands</h3>
                        <div class="form-check">
                          <input
                            id="formCheck-5"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label" for="formCheck-5">
                            Samsung
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="formCheck-6"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label" for="formCheck-6">
                            Apple
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="formCheck-7"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label" for="formCheck-7">
                            HTC
                          </label>
                        </div>
                      </div>
                      <div class="filter-item">
                        <h3>OS</h3>
                        <div class="form-check">
                          <input
                            id="formCheck-8"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label" for="formCheck-8">
                            Android
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="formCheck-9"
                            class="form-check-input"
                            type="checkbox"
                          />
                          <label class="form-check-label" for="formCheck-9">
                            iOS
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <div class="products">
                  <div class="row g-0">
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="clean-product-item">
                        <div class="image">
                          <a href="#">
                            <img
                              class="img-fluid d-block mx-auto"
                              src="tech/image2.jpg"
                            />
                          </a>
                        </div>
                        <div class="product-name">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </div>
                        <div class="about">
                          <div class="rating">
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star-half-empty.svg" />
                            <img src="star-empty.svg" />
                          </div>
                          <div class="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="clean-product-item">
                        <div class="image">
                          <a href="#">
                            <img
                              class="img-fluid d-block mx-auto"
                              src="tech/image2.jpg"
                            />
                          </a>
                        </div>
                        <div class="product-name">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </div>
                        <div class="about">
                          <div class="rating">
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star-half-empty.svg" />
                            <img src="star-empty.svg" />
                          </div>
                          <div class="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="clean-product-item">
                        <div class="image">
                          <a href="#">
                            <img
                              class="img-fluid d-block mx-auto"
                              src="tech/image2.jpg"
                            />
                          </a>
                        </div>
                        <div class="product-name">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </div>
                        <div class="about">
                          <div class="rating">
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star-half-empty.svg" />
                            <img src="star-empty.svg" />
                          </div>
                          <div class="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="clean-product-item">
                        <div class="image">
                          <a href="#">
                            <img
                              class="img-fluid d-block mx-auto"
                              src="tech/image2.jpg"
                            />
                          </a>
                        </div>
                        <div class="product-name">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </div>
                        <div class="about">
                          <div class="rating">
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star-half-empty.svg" />
                            <img src="star-empty.svg" />
                          </div>
                          <div class="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="clean-product-item">
                        <div class="image">
                          <a href="#">
                            <img
                              class="img-fluid d-block mx-auto"
                              src="tech/image2.jpg"
                            />
                          </a>
                        </div>
                        <div class="product-name">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </div>
                        <div class="about">
                          <div class="rating">
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star-half-empty.svg" />
                            <img src="star-empty.svg" />
                          </div>
                          <div class="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="clean-product-item">
                        <div class="image">
                          <a href="#">
                            <img
                              class="img-fluid d-block mx-auto"
                              src="tech/image2.jpg"
                            />
                          </a>
                        </div>
                        <div class="product-name">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </div>
                        <div class="about">
                          <div class="rating">
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star-half-empty.svg" />
                            <img src="star-empty.svg" />
                          </div>
                          <div class="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="clean-product-item">
                        <div class="image">
                          <a href="#">
                            <img
                              class="img-fluid d-block mx-auto"
                              src="tech/image2.jpg"
                            />
                          </a>
                        </div>
                        <div class="product-name">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </div>
                        <div class="about">
                          <div class="rating">
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star-half-empty.svg" />
                            <img src="star-empty.svg" />
                          </div>
                          <div class="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="clean-product-item">
                        <div class="image">
                          <a href="#">
                            <img
                              class="img-fluid d-block mx-auto"
                              src="tech/image2.jpg"
                            />
                          </a>
                        </div>
                        <div class="product-name">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </div>
                        <div class="about">
                          <div class="rating">
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star-half-empty.svg" />
                            <img src="star-empty.svg" />
                          </div>
                          <div class="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="clean-product-item">
                        <div class="image">
                          <a href="#">
                            <img
                              class="img-fluid d-block mx-auto"
                              src="tech/image2.jpg"
                            />
                          </a>
                          <a href="#"></a>
                        </div>
                        <div class="product-name">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </div>
                        <div class="about">
                          <div class="rating">
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star.svg" />
                            <img src="star-half-empty.svg" />
                            <img src="star-empty.svg" />
                          </div>
                          <div class="price">
                            <h3>$100</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav>
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <a class="page-link" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
