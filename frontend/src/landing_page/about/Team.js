import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3  mt-5 border-top">
        <h1 className=" text-center mt-5">People</h1>
      </div>

      <div
        className="row p-5  text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Harsh.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Harsh Guleria</h4>
          <h6>Founder, Full-Stack Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Harsh Guleria is a MERN Stack Developer (NodeJS, ExpressJS, ReactJS,
            MongoDB) and an Aspiring Software Engineer. He is passionate about
            building scalable and efficient applications to solve real-world
            problems.
          </p>

          <p>
            He has built a full-stack stock trading platform, leveraging his
            expertise in backend and frontend technologies to create a seamless
            trading experience.
          </p>

          <p>
            Coding and problem-solving fuel his curiosity, and he constantly
            strives to enhance his skills.
          </p>

          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/guleria-harsh"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/Harsz06"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
