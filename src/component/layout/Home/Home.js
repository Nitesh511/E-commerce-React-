import React from "react";
import "./Home.css";

//Using Botstrap in my project

const Home = () => {
  return (
    <div className="app">
      <div
        class="modal fade bg-white"
        id="templatemo_search"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            class="modal-content modal-body border-0 p-0"
          >
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                class="input-group-text bg-success text-light"
              >
                <i class="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        id="template-mo-jassa-hero-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#template-mo-jassa-hero-carousel"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li
            data-bs-target="#template-mo-jassa-hero-carousel"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#template-mo-jassa-hero-carousel"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    style={{ height: "80vh" }}
                    class="img-fluid"
                    src="https://static.toiimg.com/thumb/resizemode-4,msid-91767010,width-1200,height-900/91767010.jpg"
                    alt=""
                  />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left align-self-center">
                    <h1 class="h1 text-success">
                      <b>Shop</b>Wisely
                    </h1>
                    <h3 class="h2">Headphones</h3>
                    <p>
                      Headphones let a single user listen to an audio source
                      privately, in contrast to a loudspeaker, which emits sound
                      into the open air for anyone nearby to hear. Headphones
                      are also known as earspeakers, earphones or, colloquially,
                      cans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    style={{ height: "80vh" }}
                    class="img-fluid"
                    src="https://ae01.alicdn.com/kf/H8e6b90e4832a4fe5941cd840181641dcW.jpg"
                    alt=""
                  />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1">ShopWisely</h1>
                    <h3 class="h2">Mobile Phone</h3>
                    <p>
                      Xiaomi Redmi Note 8 Pro is powered by the Mediatek Helio
                      G90T, Octa-core (2x Cortex-A76 + 6x Cortex-A55) processor.
                      The smartphone comes with a 6.53 inches IPS LCD and 1080 x
                      2340 pixels resolution. The screen of the device is
                      protected by Corning Gorilla Glass 5.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    style={{ height: "80vh" }}
                    class="img-fluid"
                    src="https://cdn1.smartprix.com/rx-iXMi3TNHD-w1200-h1200/XMi3TNHD.jpg"
                    alt=""
                  />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1">ShopWisely</h1>
                    <h3 class="h2">Laptops </h3>
                    <p>
                      DELL Inspiron 15 7000 Core i7 8th Gen - (8 GB/1 TB HDD/256
                      GB SSD/Windows 10 Home/4 GB Graphics) 7570 Laptop (15.6
                      inch, Platinum SIlver, 2 kg, With MS Office)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-jassa-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i class="fas fa-chevron-left"></i>
        </a>
        <a
          class="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-jassa-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>

      <section class="container py-5">
        <div class="row text-center pt-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Categories of The Month</h1>
            <p>
              Flowwing are the categories of the months and here are some of
              them.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="/products">
              <img
                src="https://static-01.daraz.com.np/p/313cce818010fbee889448616843dbac.jpg"
                class="rounded-circle img-fluid border"
              />
            </a>
            <h5 class="text-center mt-3 mb-3">Mobile Phones</h5>
            <p class="text-center">
              <a class="btn btn-success">Go Shop</a>
            </p>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="/products">
              <img
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MKU83_VW_PF+watch-40-alum-spacegray-cell-se_VW_PF_WF_CO_GEO_MY?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171035000,1630712959000"
                class="rounded-circle img-fluid border"
              />
            </a>
            <h2 class="h5 text-center mt-3 mb-3">Watches</h2>
            <p class="text-center">
              <a class="btn btn-success">Go Shop</a>
            </p>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="/products">  
              <img
                src="https://m.media-amazon.com/images/I/61SNhlAhprL._SL1500_.jpg"
                class="rounded-circle img-fluid border"
              />
            </a>
            <h2 class="h5 text-center mt-3 mb-3">Laptops</h2>
            <p class="text-center">
              <a class="btn btn-success">Go Shop</a>
            </p>
          </div>
        </div>
      </section>

      <section class="bg-light">
        <div class="container py-5">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Featured Product</h1>
              <p>
                Some of the best Seling Products of our website are as follow:
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$240.00</li>
                  </ul>
                  <a href="#" class="h2 text-decoration-none text-dark">
                    Laptops
                  </a>
                  <p class="card-text">
                    Dell is the most Seling laptops now because they provide
                    laptops in low range of price
                  </p>
                  <p class="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="#">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_02.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$480.00</li>
                  </ul>
                  <a href="#" class="h2 text-decoration-none text-dark">
                    IWatch
                  </a>
                  <p class="card-text">
                    Apple Watch is a wearable smartwatch that allows users to
                    accomplish a variety of tasks, including making phone calls,
                    sending text messages and reading email
                  </p>
                  <p class="text-muted">Reviews (48)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="#">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_03.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$360.00</li>
                  </ul>
                  <a href="#" class="h2 text-decoration-none text-dark">
                    Camera
                  </a>
                  <p class="card-text">
                    A camera is an optical instrument that captures a visual
                    image. At a basic level, cameras consist of sealed boxes
                    (the camera body), with a small hole (the aperture) that
                    allows light through to capture an image on a
                    light-sensitive surface (usually a digital sensor or
                    photographic film).
                  </p>
                  <p class="text-muted">Reviews (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
