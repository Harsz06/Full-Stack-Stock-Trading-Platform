import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-4" id="supportWrapper">
        <h4 className="mt-3">Support Portal</h4>
        <a href="" className="mt-3">
          Track Tickets
        </a>
      </div>
      <div className="row  p-4" id="HeroContent">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
            className="mb-4"
          />{" "}
          <br />
          <a href="" className="mx-4">
            Track account opening
          </a>
          <a href="" className="mx-4">
            Track segment activation
          </a>
          <a href="" className="mx-4">
            Intraday margins
          </a>{" "}
          <br></br>
          <a href="" className="mx-4">
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol>
            <li>
              <a href="">Surveillance measure on scrips - March 2025</a>
            </li>
            <li className="mt-3 ">
              <a href="">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
