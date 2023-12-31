import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="app">
      <nav
        class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
        id="templatemo_nav_top"
      >
        <div class="container text-light">
          <div class="w-100 d-flex justify-content-between">
            <div>
              <i class="fa fa-envelope mx-2"></i>
              <a
                class="navbar-sm-brand text-light text-decoration-none"
                href="#"
              >
                shopWisely@company.com
              </a>
              <i class="fa fa-phone mx-2"></i>
              <a
                class="navbar-sm-brand text-light text-decoration-none"
                href="#"
              >
                097-213-5670
              </a>
            </div>
            <div>
              <a class="text-light" href="#" target="_blank" rel="sponsored">
                <i class="fab fa-facebook-f fa-sm fa-fw me-2"></i>
              </a>
              <a class="text-light" href="#" target="_blank">
                <i class="fab fa-instagram fa-sm fa-fw me-2"></i>
              </a>
              <a class="text-light" href="#" target="_blank">
                <i class="fab fa-twitter fa-sm fa-fw me-2"></i>
              </a>
              <a class="text-light" href="#" target="_blank">
                <i class="fab fa-linkedin fa-sm fa-fw"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">
          <a
            class="navbar-brand text-success logo h1 align-self-center"
            href="/"
          >
            ShopWisely
          </a>

          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div class="flex-fill">
              <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/products">
                    Product
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div class="navbar align-self-center d-flex">

              <a
                class="nav-icon d-none d-lg-inline"
                href="/search"
               
              >
                <i class="fa fa-fw fa-search text-dark mr-2"></i>
              </a>
              <a
                class="nav-icon position-relative text-decoration-none"
                href="/cart"
              >
                <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  7
                </span>
              </a>
              <a
                class="nav-icon position-relative text-decoration-none"
                href="/login"
              >
                <i class="fa fa-fw fa-user text-dark mr-3"></i>
                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  
  );
};

export default Header;

