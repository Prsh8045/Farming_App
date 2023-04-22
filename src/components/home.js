import React from "react";
import img1 from "../images/img5.jpg";
import img2 from "../images/img3.jpg";
import img3 from "../images/img2.jpg";
import img from "../images/Fertilizer Spreader.jpg";
import { GrUserExpert } from 'react-icons/gr';
import { FaRegHandshake } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';
import { GrStatusGood } from 'react-icons/gr';
import { RiHandCoinLine } from 'react-icons/ri';
import "./nav.css";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner  ">
          <div className="carousel-item active pic ">
            <img src={img2} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption">
            <h1 className="fs-3">"Farming is not just a job, it's a way of life."</h1>
              <p  className="fs-4">- Anonymous -</p>
            </div>
          </div>

          <div className="carousel-item pic">
            <img src={img3} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption">
            <h1 className="fs-3">"Agriculture is the backbone of the Indian economy."</h1>
            <p className="fs-4">- Narayana Murthy -</p>
            </div>
          </div>

          <div className="carousel-item pic">
            <img src={img1} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption">
              <h1 className="fs-3">"Farming is a profession of hope, patience, and hard work." </h1>
              <p className="fs-4 ">- Anand Mahindra -</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <h1 className="text-center pt-5"> About us</h1>
        <div className="row my-5">
          <div className="col-lg-6 text-center">
            <h1 className="mt-5"> our Farms</h1>
            <p className="mt-5 fs-5">
              We provide Agricultural and farming services provide information,
              consulting, equipment, and supplies to the agricultural industry.
              Examples include government agricultural extensions, crop brokers
              and shippers, meat packers, produce distributors and wholesalers,
              and veterinarians.
            </p>
          </div>
          <div className="col-lg-6 text-end">
            <img className="img-fluid" src={img} alt="" />
          </div>
        </div>
      </div>
      {/* accordian  */}
      <div className="container my-5">
        <h1 className="text-center ">Why choose us ?</h1>
        <hr className="w-25 m-auto mb-5" />
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               <GrUserExpert className="me-3"/> Expertise 
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The service provider has specialized knowledge, skills, and
                experience that can provide valuable insights and solutions for
                the business
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <GrStatusGood className="me-3"/> Quality
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The service provider is known for providing high-quality
                services that meet or exceed the business's expectations .
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
               <RiHandCoinLine className="me-3"/> Cost-effectiveness
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The service provider offers competitive pricing and can help the
                business save money while still delivering quality services.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
               <FaRegHandshake className="me-3"/> Trustworthiness 
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The service provider is reliable, honest, and transparent in its
                dealings with the business, which fosters a trusting
                relationship.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <RiCustomerService2Line className="me-3"/>Customer service
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The service provider is responsive and provides excellent
                customer service, ensuring that the business's needs are always
                met
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
