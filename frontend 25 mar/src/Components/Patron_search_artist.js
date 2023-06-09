import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "./Patron.css";
export class Patron_search_artist extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar bg-light fixed-top"
          style={{ backgroundColor: "white" }}
        >
          <div className="container-fluid">
            <div className="left-components">
              <Navbar className="nav_artist" />
              <a className="navbar-brand " href="/">
                <span className="text-danger text">
                  {" "}
                  <strong>ekala</strong>
                </span>
                kaar
              </a>
            </div>
            <div className="right-component">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search artist"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-danger btn-search"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div
          className="modal fade filter-popup"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered filter-popup-dialog">
            <div className="modal-content">
              <form action="#" id="filter-form">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    <div className="row filter-popup-header-text">
                      <div className="col filter-text">FILTERS</div>
                      <div
                        type="reset"
                        className="col-1 clear-text text-danger"
                        onclick="clearForm()"
                      >
                        CLEAR ALL
                      </div>
                    </div>
                  </h1>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <div className="row justify-content-start">
                      <div
                        className="col-2"
                        id="patron-view-artist-filter-LocationInputLabel"
                      >
                        <label
                          for="exampleFormControlInput1"
                          className="form-label patron-view-artist-filter-InputHeader"
                        >
                          Location
                        </label>
                      </div>
                      <div
                        className="col-4 patron-view-artist-filter-inputbox"
                        id="patron-view-artist-filter-inputBoxLocation"
                      >
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Mumbai, India</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row ">
                      <div
                        className="col-2"
                        id="patron-view-artist-filter-ArtInputLabelSelect"
                      >
                        <label
                          for="exampleFormControlInput1"
                          className="form-label patron-view-artist-filter-InputHeader"
                        >
                          Art
                        </label>
                      </div>
                      <div
                        className="col"
                        id="patron-view-artist-filter-inputBoxArt"
                      >
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio1"
                          >
                            Dance
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio2"
                          >
                            Music
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio2"
                          >
                            Singing
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <select
                          className="form-select see-more-text"
                          aria-label="Default select example"
                        >
                          <option selected className="text-danger">
                            See more
                          </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div
                        className="col-2"
                        id="patron-view-artist-filter-LanguageInputLabelSelect"
                      >
                        <label
                          for="exampleFormControlInput1"
                          className="form-label patron-view-artist-filter-InputHeader"
                        >
                          Language
                        </label>
                      </div>
                      <div
                        className="col"
                        id="patron-view-artist-filter-inputBoxLanguage"
                      >
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio1"
                          >
                            English
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio2"
                          >
                            Hindi
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio2"
                          >
                            Kannada
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <select
                          className="form-select see-more-text"
                          aria-label="Default select example"
                        >
                          <option selected>See more</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label patron-view-artist-filter-InputHeader"
                        >
                          Requirements
                        </label>
                      </div>
                    </div>
                    <div className="row justify-content-start">
                      <div
                        className="col-2"
                        id="patron-view-artist-filter-ExperienceInputLabelSelect"
                      >
                        <label
                          for="exampleFormControlInput1"
                          className="form-label patron-view-artist-filter-InputHeader"
                        >
                          {" "}
                          Experience
                        </label>
                      </div>
                      <div
                        className="col-4 patron-view-artist-filter-inputbox"
                        id="patron-view-artist-filter-inputBoxExperience"
                      >
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>1 yr, above</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row justify-content-start">
                      <div
                        className="col-2"
                        id="patron-view-artist-filter-AgeInputLabelSelect"
                      >
                        <label
                          for="exampleFormControlInput1"
                          className="form-label patron-view-artist-filter-InputHeader"
                        >
                          Age
                        </label>
                      </div>
                      <div
                        className="col-4 patron-view-artist-filter-inputbox"
                        id="patron-view-artist-filter-inputBoxAge"
                      >
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>35 years</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-danger">
                    Apply Filters
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <nav className="navbar bg-light fixed-top" style={{backgroundColor: "white"}}>
        <div className="container-fluid">
            <a className="navbar-brand " href="index.html" style={{marginLeft: "70px"}} >
                <span className="text-danger text"> <strong>ekala</strong></span>kaar
            </a>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search artist" aria-label="Search"/>
                <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>

        </div>
    </nav> */}
        <div className="patron-search-artist">
          <div className="patron-search-artist-header container">
            <div className="row">
              <div className="col">
                <span
                  className="filter"
                  id="filter-button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Filter
                  <img src="assets/images/filter.png" />
                </span>
                <div className="search-data-text text-center">
                  579 search result for
                  <strong className="search-data-text-category">
                    'Dancer'
                  </strong>
                </div>
              </div>
              {/* <div className="artist-searchbg"> */}
              <div className="inner-lay" style={{ "text-align": "center" }}>
                <div className="container">
                  <div className="row session-title mb-4">
                    <div className="card-deck mt-5">
                      <div className="row">
                        <div className=" col-lg-3 col-md-6  sidegap1">
                          <div className=" recard1 card my-2  ">
                            <img
                              className="card-img-top"
                              src="assets/images/profilee2.jpg"
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h5 className="card-title headingdark">
                                Arun Thapar
                              </h5>
                            </div>
                            <h4>Dancer</h4>
                            <div className="col-auto artist-details">
                              <Link to="/View_artist">
                                View details
                                <img
                                  src="assets/images/rightArrow.png"
                                  style={{ width: "10px", height: "11px" }}
                                />
                              </Link>
                              <div class="rate ms-4">
                                <input
                                  type="radio"
                                  id="star5"
                                  name="rate"
                                  value="5"
                                />
                                <label for="star5" title="text">
                                  5 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star4"
                                  name="rate"
                                  value="4"
                                />
                                <label for="star4" title="text">
                                  4 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star3"
                                  name="rate"
                                  value="3"
                                />
                                <label for="star3" title="text">
                                  3 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star2"
                                  name="rate"
                                  value="2"
                                />
                                <label for="star2" title="text">
                                  2 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star1"
                                  name="rate"
                                  value="1"
                                />
                                <label for="star1" title="text">
                                  1 star
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" col-lg-3 col-md-6 sidegap">
                          <div className="  recard2 card  my-2  ">
                            <img
                              className="card-img-top"
                              src="assets/images/profilee3.jpg"
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h5 className="card-title  headingdark">
                                Rohan Singh
                              </h5>
                            </div>
                            <h4>Dancer</h4>
                            <div className="col-auto artist-details">
                              <Link to="/View_artist">
                                View details
                                <img
                                  src="assets/images/rightArrow.png"
                                  style={{ width: "10px", height: "11px" }}
                                />
                              </Link>
                              <div class="rate ms-4">
                                <input
                                  type="radio"
                                  id="star5"
                                  name="rate"
                                  value="5"
                                />
                                <label for="star5" title="text">
                                  5 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star4"
                                  name="rate"
                                  value="4"
                                />
                                <label for="star4" title="text">
                                  4 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star3"
                                  name="rate"
                                  value="3"
                                />
                                <label for="star3" title="text">
                                  3 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star2"
                                  name="rate"
                                  value="2"
                                />
                                <label for="star2" title="text">
                                  2 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star1"
                                  name="rate"
                                  value="1"
                                />
                                <label for="star1" title="text">
                                  1 star
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" col-lg-3 col-md-6">
                          <div className=" recard3 card my-2 ">
                            <img
                              className="card-img-top"
                              src="assets/images/profilee4.jpg"
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h5 className="card-title headingdark ">
                                Kartik Jha
                              </h5>
                            </div>
                            <h4>Dancer</h4>

                            <div className="col-auto artist-details">
                              <Link to="/View_artist">
                                View details
                                <img
                                  src="assets/images/rightArrow.png"
                                  style={{ width: "10px", height: "11px" }}
                                />
                              </Link>
                              <div class="rate ms-4">
                                <input
                                  type="radio"
                                  id="star5"
                                  name="rate"
                                  value="5"
                                />
                                <label for="star5" title="text">
                                  5 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star4"
                                  name="rate"
                                  value="4"
                                />
                                <label for="star4" title="text">
                                  4 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star3"
                                  name="rate"
                                  value="3"
                                />
                                <label for="star3" title="text">
                                  3 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star2"
                                  name="rate"
                                  value="2"
                                />
                                <label for="star2" title="text">
                                  2 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star1"
                                  name="rate"
                                  value="1"
                                />
                                <label for="star1" title="text">
                                  1 star
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="patron-search-artist-body container">
          <div className="card artist-card">
            <div className="card-body">
              <div className="row patron-search-artist-body-header">
                <div className="col artist-name">Name</div>
                <div className="w-100"></div>
                <div className="col artist-category">Dancer</div>
              </div>
              <div className="row patron-search-artist-body-footer">
                <div className="col-auto me-auto artist-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill text-danger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  Location
                </div>
                <div className="col-auto artist-details">
                  <Link to="/View_artist">
                    View details
                    <img
                      src="assets/images/rightArrow.png"
                      style={{ width: " 10px", height: "11px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card artist-card">
            <div className="card-body">
              <div className="row patron-search-artist-body-header">
                <div className="col artist-name">Name</div>
                <div className="w-100"></div>
                <div className="col artist-category">Dancer</div>
              </div>
              <div className="row patron-search-artist-body-footer">
                <div className="col-auto me-auto artist-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill text-danger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  Location
                </div>
                <div className="col-auto artist-details">
                  <Link to="/View_artist">
                    View details
                    <img
                      src="assets/images/rightArrow.png"
                      style={{ width: "10px", height: "11px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card artist-card">
            <div className="card-body">
              <div className="row patron-search-artist-body-header">
                <div className="col artist-name">Name</div>
                <div className="w-100"></div>
                <div className="col artist-category">Dancer</div>
              </div>
              <div className="row patron-search-artist-body-footer">
                <div className="col-auto me-auto artist-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill text-danger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  Location
                </div>
                <div className="col-auto artist-details">
                  <Link to="/View_artist">
                    View details
                    <img
                      src="assets/images/rightArrow.png"
                      style={{ width: "10px", height: "11px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default Patron_search_artist;
